import React from 'react'
import {Image, Card, CardBody, Heading, Text, Button } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useFarms, usePriceCakeBusd } from '../../../state/hooks'

const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const CakeStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getCakeAddress())
  const farms = useFarms();
  const eggPrice = usePriceCakeBusd();
  const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0);
  const maxTrans = totalSupply ? totalSupply.div(200) : new BigNumber(0);
  const cakeSupply = getBalanceNumber(circSupply);
  const marketCap = eggPrice.times(circSupply);

  let tokenPerBlock = 0;
  if(farms && farms[0] && farms[0].tokenPerBlock){
    tokenPerBlock = new BigNumber(farms[0].tokenPerBlock).div(new BigNumber(10).pow(18)).toNumber();
  }

  return (
    <StyledCakeStats>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(0, 'CLEVER Stats')}
        </Heading>
        <Row>
          <Text fontSize="16px">{TranslateString(10005, 'Market Cap')}</Text>
          <CardValue fontSize="16px" value={getBalanceNumber(marketCap)} decimals={0} prefix="$ " color="textSubtle" />
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(536, 'Total Minted')}</Text>
          {totalSupply && <CardValue fontSize="14px" value={getBalanceNumber(totalSupply)} decimals={0} color="textSubtle" />}
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(538, 'Total Burned')}</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(burnedBalance)} decimals={0} color="textSubtle" />
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(10004, 'Circulating Supply')}</Text>
          {cakeSupply && <CardValue fontSize="14px" value={cakeSupply} decimals={0} color="textSubtle" />}
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(0, 'New CLEVER/block')}</Text>
          <Text bold fontSize="14px" color="textSubtle">{tokenPerBlock}</Text>
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(0, 'Max CLEVER/TX')}</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(maxTrans)} decimals={0}  color="#ff4040" />
        </Row>

        <Button 
              as="a"
              variant="primary"
              fullWidth
              href="https://spookyswap.finance/swap?outputCurrency=0x465BC6D1AB26EFA74EE75B1E565e896615B39E79"
              target="_blank" >
              {TranslateString(0, 'BUY CLEVER >')}
        </Button>
        <br/>
        <br/>
        
      <a target="blank" href='https://rugdoc.io/project/smurf-money-fantom/'> <Image src="/images/rugdoc1.png" width={340} height={113} alt="rudgroc review" /> </a>
        

      </CardBody>
    </StyledCakeStats>
  )
}

export default CakeStats
