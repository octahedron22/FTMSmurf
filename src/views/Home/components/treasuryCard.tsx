import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useTreasuryBalance } from 'hooks/useTokenBalance'
import { getCakeAddress } from 'utils/addressHelpers'
import { usePriceCakeBusd } from 'state/hooks'
import CardValue from './CardValue'


const StyleedJungleWalletBallanceCard = styled(Card)`
  background-image: url('/images/egg/treasury.png');
  align-items: center;
  display: flex;
  flex: 1;
  border: 1px solid rgba(15, 150, 242, 0.34);
`

  const JungleWalletBallance = () => {
    const TranslateString = useI18n()
    const cakeBalance = useTreasuryBalance(getCakeAddress())
    const jungleAmount = cakeBalance.div(1000000000000000000)
    const cakePrice = usePriceCakeBusd()
    const jungleValue = jungleAmount.times(cakePrice)

   
  return (
    <StyleedJungleWalletBallanceCard>
      <CardBody>
        <Heading color="#fcea1c" size="lg" mb="24px">
          {TranslateString(999, 'The JungleSwap Treasury')}
        </Heading>
        <>
         <Text color="textSubtle">{TranslateString(999, 'Amount & Value of collected Jungle in Treasury:')}</Text>
      
          <CardValue value={jungleAmount.toNumber()} prefix="Jungle " decimals={0}/>
      
          <CardValue value={jungleValue.toNumber()} prefix="$ " decimals={0}/>

        </>

      </CardBody>
    </StyleedJungleWalletBallanceCard>
  )
}

export default JungleWalletBallance
