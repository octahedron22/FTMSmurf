import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Button, Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useTotalValue } from '../../../state/hooks'


const StyledTotalValueLockedCard = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
  border: 1px solid rgba(255, 204, 18, 0.5);
`

const InfoCard = () => {
  const TranslateString = useI18n()
  const totalValue = useTotalValue()
 

  return (
    <StyledTotalValueLockedCard>
      <CardBody>
        <Heading size="lg" mb="10px">
          {TranslateString(999, 'Info Kong Presale')}
        </Heading>  
        

        <Text fontSize="16px" color="#ffcc12">{TranslateString(999, 'Contracts:')}</Text>
        <br/> 
        <Text fontSize="14px" color="bfbf00">{TranslateString(999, 'JungleKong (KONG):')}</Text>
        <a href='https://bscscan.com/address/0xAc9178feD286e0e4F21D50d40f6C77503C96C19c'> <Text fontSize="12px">{TranslateString(999, '0xAc9178feD286e0e4F21D50d40f6C77503C96C19c')}</Text> </a>
        <br/> 
        <Text fontSize="14px" color="bfbf00">{TranslateString(999, 'Presale Contract:')}</Text>
        <a href='https://bscscan.com/address/0x771256e261FbC9A9D059033f8B849bF5a327c9A2'> <Text fontSize="12px">{TranslateString(999, '0x771256e261FbC9A9D059033f8B849bF5a327c9A2')}</Text> </a>
      
        <br/> 
        <Text fontSize="16px" color="#ffcc12">{TranslateString(999, 'Function of Presale:')}</Text>
        <br/> 
        <Text fontSize="14px" color="bfbf00">{TranslateString(999, 'Swaps BUSD to JungleKong (KONG)')}</Text>
        <Text fontSize="14px" color="bfbf00">{TranslateString(999, '⚠️Your BUSD stay in the contract!⚠️')}</Text>
        <Text fontSize="14px" color="bfbf00">{TranslateString(999, '⚠️ALL BUSD in your Wallet will be used!⚠️')}</Text>
        <Text fontSize="14px" color="bfbf00">{TranslateString(999, '⚠️You can NOT withdraw them anymore!⚠️')}</Text>
        <br/> 
        <Text fontSize="12px" color="bfbf00">{TranslateString(999, 'Collected BUSD will be used 95.6% for KONG liquidity')}</Text>
        <Text fontSize="12px" color="bfbf00">{TranslateString(999, '2.3% will be used for JUNGLE BuyBack')}</Text>
        <Text fontSize="12px" color="bfbf00">{TranslateString(999, '2.3% will be used for the Team')}</Text>


        <br/> 
        <Text fontSize="16px" color="#ffcc12">{TranslateString(999, 'Usage an Info about JungleKong (KONG):')}</Text>
        <br/> 

        <Text fontSize="14px" color="bfbf00">{TranslateString(999, 'A total of 1695 KONG is preminted')}</Text>    
        <Text fontSize="14px" color="bfbf00">{TranslateString(999, '60 Kong can be earned with Jungle')}</Text>
        <Text fontSize="14px" color="bfbf00">{TranslateString(999, '60 Kong can be earned with JungleGold')}</Text>
        <Text fontSize="14px" color="bfbf00">{TranslateString(999, '880 Kong are sold in Preale')}</Text>
        <Text fontSize="14px" color="bfbf00">{TranslateString(999, '695 Kong are used for Liquidity')}</Text>
   
        <br/>
          <Button 
              as="a"
              variant="primary"
              href="https://bscscan.com/address/0x771256e261FbC9A9D059033f8B849bF5a327c9A2"
              target="_blank" >
              {TranslateString(0, '!!See if there are KONG left!!')}
          </Button>


      </CardBody>
    </StyledTotalValueLockedCard>
  )
}

export default InfoCard
