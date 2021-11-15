import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Button, Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { getBalanceNumber } from 'utils/formatBalance'
import { useCobraContractBalance } from 'hooks/useTokenBalance'
import { getCobraAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'


const StyledTotalValueLockedCard = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
  border: 1px solid rgba(255, 204, 18, 0.5);
`

const InfoCard = () => {
  const TranslateString = useI18n()
  const cakeBalance = useCobraContractBalance(getCobraAddress())
  const cobraAmount = cakeBalance.div(1000000000000000000)
  const leftPercent = cobraAmount.div(2222).times(100)
 

  return (
    <StyledTotalValueLockedCard>
      <CardBody>
        <Heading size="lg" mb="10px" color="#fff982">
          {TranslateString(999, '🐍 Info COBRA Presale 🐍')}
        </Heading>  
                <Text fontSize="14px" color="bfbf00">{TranslateString(999, 'JungleCobra (COBRA):')}</Text>
        <a href='https://bscscan.com/address/0xf558822714E0D68AcA0D46c99aB5893aBA064dC3'> <Text fontSize="12px">{TranslateString(999, '0xf558822714E0D68AcA0D46c99aB5893aBA064dC3')}</Text> </a>
  
        <br/> 
        <Text fontSize="16px" color="#ffcc12">{TranslateString(999, '⏲️ Presale Countdown ⏲️')}</Text>
        <Text fontSize="14px" color="bfbf00">{TranslateString(999, '🟢 1 COBRA 5.0$ - UTC Aug 06 22:00 ')}</Text>
        <Text fontSize="14px" color="bfbf00">{TranslateString(999, '🟡 1 COBRA 5.5$ - UTC Aug 07 22:00 ')}</Text>
        <Text fontSize="14px" color="bfbf00">{TranslateString(999, '🟠 1 COBRA 6.0$ - UTC Aug 08 22:00 ')}</Text>
        <Text fontSize="16px" color="#ffcc12">{TranslateString(999, '🚀 Listing 1 Cobra 8$ - UTC Aug 08 22:30 🚀')}</Text>
        <Text fontSize="16px" color="#fff200">{TranslateString(999, '🚜 Farming Start - UTC Aug 09 14:00 🌾')}</Text>

        <br/> 
        <Text fontSize="16px" color="#ffcc12">{TranslateString(999, 'Function of Presale:')}</Text>

        <Text fontSize="14px" color="bfbf00">{TranslateString(999, 'Exchanges BUSD into JungleCobra (COBRA)')}</Text>
        <Text fontSize="14px" color="bfbf00">{TranslateString(999, '⭐NO TAX to BUY COBRA!⭐')}</Text>
        <Text fontSize="14px" color="bfbf00">{TranslateString(999, '⚠️Your BUSD remain in the contract!⚠️')}</Text>
        <Text fontSize="14px" color="bfbf00">{TranslateString(999, '⚠️You can NOT withdraw them anymore!⚠️')}</Text>
        <br/> 
        <Text fontSize="11px" color="bfbf00">{TranslateString(999, 'Collected BUSD will be used 96.5% for COBRA liquidity')}</Text>
        <Text fontSize="11px" color="bfbf00">{TranslateString(999, '2% will be used for JUNGLE BuyBack')}</Text>
        <Text fontSize="11px" color="bfbf00">{TranslateString(999, '1% will be used for KONG BuyBack')}</Text>
        <Text fontSize="11px" color="bfbf00">{TranslateString(999, '0.5% will be used for the Team')}</Text>


        <br/> 
        <Text fontSize="16px" color="#ffcc12">{TranslateString(999, 'JungleCobra (COBRA) is the NEXT JungleSwap layers native Token!')}</Text>
        <br/> 
   {/*
        <Text color="#fff982">{TranslateString(999, 'Available COBRA for Presale in Contract:')}</Text>


        <Text bold fontSize="36px"  color="#fce303" style={{ lineHeight: '36px' }}>
         --- {cobraAmount.toNumber().toFixed(2)}  COBRA
        </Text>

        <Text bold fontSize="36px"  color="#fc7f03" style={{ lineHeight: '30px' }}>
         --- {leftPercent.toNumber().toFixed(3)}  %
        </Text>

        <br/>
          <Button 
              as="a"
              variant="secondary"
              href="https://bscscan.com/address/0xBB7672E9Dac09326C327f9408c64A2051C34Cba3"
              target="_blank" >
              {TranslateString(0, 'View Cobra Presale Contract >')}
          </Button>
   */}

      </CardBody>
    </StyledTotalValueLockedCard>
  )
}

export default InfoCard
