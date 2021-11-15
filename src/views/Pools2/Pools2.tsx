import React, { useState } from 'react'
import { Route, useRouteMatch } from 'react-router-dom'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import { useWeb3React } from '@web3-react/core'
import { Heading, HelpIcon, Link, Text } from '@pancakeswap-libs/uikit'
import { BLOCKS_PER_YEAR } from 'config'
import orderBy from 'lodash/orderBy'
import partition from 'lodash/partition'
import useI18n from 'hooks/useI18n'
import useBlock from 'hooks/useBlock'
import { getBalanceNumber } from 'utils/formatBalance'
import { useFarms, usePriceBnbBusd, usePools, usePriceEthBnb } from 'state/hooks'
import { QuoteToken, PoolCategory } from 'config/constants/types'
import FlexLayout from 'components/layout/Flex'
import PoolCard2 from '../Pools/components/PoolCard2'
import PoolTabButtons from './PoolTabButtons'
import Divider from '../Pools/components/Divider'
import Page from '../../components/layout/Page'
import Coming from '../Pools/components/Coming'

const Pools2: React.FC = () => {
  const { path } = useRouteMatch()
  const TranslateString = useI18n()
  const { account } = useWeb3React()
  const farms = useFarms()
  const pools = usePools(account)
  const bnbPriceUSD = usePriceBnbBusd()
  const ethPriceBnb = usePriceEthBnb()
  const block = useBlock()
  const [stackedOnly, setStackedOnly] = useState(false)

  const priceToBnb = (tokenName: string, tokenPrice: BigNumber, quoteToken: QuoteToken): BigNumber => {
    const tokenPriceBN = new BigNumber(tokenPrice)
    if (tokenName === 'BNB') {
      return new BigNumber(1)
    }
    if (tokenPrice && quoteToken === QuoteToken.BUSD) {
      return tokenPriceBN.div(bnbPriceUSD)
    }
    return tokenPriceBN
  }

  const poolsWithApy = pools.map((pool) => {
    const isBnbPool = pool.poolCategory === PoolCategory.BINANCE
    const rewardTokenFarm = farms.find((f) => f.tokenSymbol === pool.tokenName)
    const stakingTokenFarm = farms.find((s) => s.tokenSymbol === pool.stakingTokenName)

    const tempMultiplier = stakingTokenFarm?.quoteTokenSymbol === 'ETH' ? ethPriceBnb : 1

    const stakingTokenPriceInBNB = isBnbPool
      ? new BigNumber(1)
      : new BigNumber(stakingTokenFarm?.tokenPriceVsQuote).times(tempMultiplier)
    const rewardTokenPriceInBNB = priceToBnb(
      pool.tokenName,
      rewardTokenFarm?.tokenPriceVsQuote,
      rewardTokenFarm?.quoteTokenSymbol,
    )

    const totalRewardPricePerYear = new BigNumber(1).times(pool.tokenPerBlock).times(BLOCKS_PER_YEAR)
    const totalStakingTokenInPool = stakingTokenPriceInBNB.times(getBalanceNumber(pool.totalStaked))
    let apy = totalRewardPricePerYear.div(totalStakingTokenInPool).times(100)


    if (pool.tokenName === 'WBNB') {
      console.log(bnbPriceUSD.toJSON())
      apy = apy.multipliedBy(bnbPriceUSD.toJSON())
    }

    return {
      ...pool,
      isFinished: pool.sousId === 0 ? false : pool.isFinished || block > pool.endBlock,
      apy,
    }
  })

  const [finishedPools, openPools] = partition(poolsWithApy, (pool) => pool.isFinished)
  const stackedOnlyPools = openPools.filter(
    (pool) => pool.userData && new BigNumber(pool.userData.stakedBalance).isGreaterThan(0),
  )

  const Header = styled.div`
    padding: 32px 0px;
    background: ${({ theme }) => theme.colors.gradients.bubblegum};

    padding-left: 16px;
    padding-right: 16px;

    margin-bottom: 20px;

    ${({ theme }) => theme.mediaQueries.sm} {
      padding-left: 24px;
      padding-right: 24px;
    }
  `

  const AddressLink = styled(Link)`
    display: inline-block;
    font-weight: 400;
    font-size: 12px;
    white-space: nowrap;

    ${({ theme }) => theme.mediaQueries.sm} {
      font-size: 16px;
      width: auto;
    }
  `

  return (
    <>
      <Header>
        <Heading as="h1" size="xl" color="secondary" mb="24px">
          {TranslateString(999, 'Bourbon Bar')}
        </Heading>
        <Heading size="md" color="text">
          <ul>
            <li>{TranslateString(486, 'You can unstake at any time.')}</li>
            <li>{TranslateString(406, 'Rewards are calculated per block.')}</li>
          </ul>
        </Heading>
      </Header>
      <PoolTabButtons stackedOnly={stackedOnly} setStackedOnly={setStackedOnly} />
      <Divider />
      <FlexLayout>
        <Route exact path={`${path}`}>
          <>
            {stackedOnly
              ? orderBy(stackedOnlyPools, ['sortOrder']).map((pool) => <PoolCard2 key={pool.sousId} pool={pool} />)
              : orderBy(openPools, ['sortOrder']).map((pool) => <PoolCard2 key={pool.sousId} pool={pool} />)}
            
          </>
        </Route>
        <Route path={`${path}/history`}>
          {orderBy(finishedPools, ['sortOrder']).map((pool) => (
            <PoolCard2 key={pool.sousId} pool={pool} />
          ))}
        </Route>
      </FlexLayout>
    </>
  )
}

export default Pools2
