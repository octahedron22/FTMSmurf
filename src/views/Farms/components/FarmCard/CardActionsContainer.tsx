import React, { useMemo, useState, useCallback } from 'react'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import { provider } from 'web3-core'
import { getContract } from 'utils/erc20'
import { Button, Flex, Text } from '@pancakeswap-libs/uikit'
import { Farm } from 'state/types'
import { useFarmFromPid, useFarmFromSymbol, useFarmUser } from 'state/hooks'
import useI18n from 'hooks/useI18n'
import UnlockButton from 'components/UnlockButton'
import { useApprove } from 'hooks/useApprove'
import { getBalanceNumber } from 'utils/formatBalance'
import Balance from 'components/Balance'
import StakeAction from './StakeAction'
import HarvestAction from './HarvestAction'

import { usePriceCakeBusd } from '../../../../state/hooks'


const Action = styled.div`
  padding-top: 16px;
`
const Label = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 14px;
`

export interface FarmWithStakedValue extends Farm {
  apy?: BigNumber
}

interface FarmCardActionsProps {
  farm: FarmWithStakedValue
  ethereum?: provider
  account?: string
  lpPrice?: number
}

const CardActions: React.FC<FarmCardActionsProps> = ({ farm, ethereum, account, lpPrice }) => {
  const TranslateString = useI18n()
  const [requestedApproval, setRequestedApproval] = useState(false)
  const { pid, lpAddresses, tokenAddresses, isTokenOnly, depositFeeBP } = useFarmFromPid(farm.pid)
  const { allowance, tokenBalance, stakedBalance, earnings } = useFarmUser(pid)
  const cackePrice = usePriceCakeBusd();
  const usdValue = earnings.times(cackePrice)
  const lpAddress = lpAddresses[process.env.REACT_APP_CHAIN_ID]
  const tokenAddress = tokenAddresses[process.env.REACT_APP_CHAIN_ID];
  const lpName = farm.lpSymbol.toUpperCase()
  const isApproved = account && allowance && allowance.isGreaterThan(0)

  const lpContract = useMemo(() => {
    if(isTokenOnly){
      return getContract(ethereum as provider, tokenAddress);
    }
    return getContract(ethereum as provider, lpAddress);
  }, [ethereum, lpAddress, tokenAddress, isTokenOnly])

  const { onApprove } = useApprove(lpContract)

  const handleApprove = useCallback(async () => {
    try {
      setRequestedApproval(true)
      await onApprove()
      setRequestedApproval(false)
    } catch (e) {
      console.error(e)
    }
  }, [onApprove])

  const renderApprovalOrStakeButton = () => {
    return isApproved ? (
      <StakeAction stakedBalance={stakedBalance} tokenBalance={tokenBalance} tokenName={lpName} pid={pid} depositFeeBP={depositFeeBP} lpPrice={lpPrice}/>
    ) : (
      <Button mt="8px" fullWidth disabled={requestedApproval} onClick={handleApprove}>
        {TranslateString(999, 'Approve Contract')}
      </Button>
    )
  }



  return (
    <Action>
      <Flex>
        <Text bold textTransform="uppercase" color="secondary" fontSize="12px" pr="3px">
          {/* TODO: Is there a way to get a dynamic value here from useFarmFromSymbol? */}
          CLEVER
        </Text>

        <Text bold textTransform="uppercase" color="textSubtle" fontSize="12px">
          {TranslateString(999, 'Earned')}
        </Text>

      </Flex>    
      <HarvestAction earnings={earnings} pid={pid} /> 
      <Flex>    
        
          <Text  color="#1e95f7" fontSize="12px">
             ~ $ {getBalanceNumber(usdValue).toFixed(5)}
          </Text>        
        
      </Flex>
      <br />
      <Flex>

      

        <Text bold textTransform="uppercase" color="secondary" fontSize="12px" pr="3px">
          {lpName}
        </Text>

        <Text bold textTransform="uppercase" color="textSubtle" fontSize="12px">
          {TranslateString(999, 'Staked')}
        </Text>

      </Flex>
      {!account ? <UnlockButton mt="8px" fullWidth /> : renderApprovalOrStakeButton()}
    </Action>

  )
}

export default CardActions
