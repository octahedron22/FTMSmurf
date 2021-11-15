import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Button, Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useTotalValue } from '../../../state/hooks'


const StyledTotalValueLockedCard = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
  border: 1px solid rgba(15, 150, 242, 0.5);
`

const InfoCard = () => {
  const TranslateString = useI18n()
  const totalValue = useTotalValue()
 

  return (
    <StyledTotalValueLockedCard>
      <CardBody>
        <Heading size="lg" mb="10px">
          {TranslateString(999, 'Info JungleGold Exchange')}
        </Heading>  
        
        <Text fontSize="16px" color="#0b8a1e">{TranslateString(999, 'Contracts:')}</Text>
        <br/> 

        <Text fontSize="14px" color="bfbf00">{TranslateString(999, 'Jungle Exchange Contract:')}</Text>
        <a href='https://bscscan.com/address/0xd1E11f3c74c4b2b007D38ece988968fd2b79c4fa'> <Text fontSize="12px">{TranslateString(999, '0xd1E11f3c74c4b2b007D38ece988968fd2b79c4fa')}</Text> </a><br/> 
        <Text fontSize="14px" color="bfbf00">{TranslateString(999, 'JungleGold Token:')}</Text>
        <a href='https://bscscan.com/address/0x2D7aDd5Ad50405f86A6F39e893f3d85960ec73Ca'> <Text fontSize="12px">{TranslateString(999, '0x2D7aDd5Ad50405f86A6F39e893f3d85960ec73Ca')}</Text> </a>

      
        <br/> 
        <Text fontSize="16px" color="#0b8a1e">{TranslateString(999, 'Function of Exchange:')}</Text>
        <br/> 
        <Text fontSize="14px" color="bfbf00">{TranslateString(999, 'Swaps different Token to JungleGold')}</Text>
        <Text fontSize="14px" color="bfbf00">{TranslateString(999, '⚠️Your Token stay in the contract!⚠️')}</Text>
        <Text fontSize="14px" color="bfbf00">{TranslateString(999, '⚠️You can NOT withdraw them anymore!⚠️')}</Text>
        <Text fontSize="12px" color="bfbf00">{TranslateString(999, 'Collected Tokens will be used for Jungle BuyBack and other Systems!')}</Text>


        <br/> 
        <Text fontSize="16px" color="#0b8a1e">{TranslateString(999, 'Usage of JungleGold:')}</Text>
        <br/> 
        <Text fontSize="15px" color="#d4bc0d">{TranslateString(999, 'Weekly Lottery:')}</Text>  
        <Text fontSize="14px" color="bfbf00">{TranslateString(999,  'Every Sunday we check all JungleGold Wallet Balances!')}</Text>    
        <Text fontSize="14px" color="bfbf00">{TranslateString(999,  '50 BUSD goes to 1 random of Top 10 holders!')}</Text>
        <Text fontSize="14px" color="bfbf00">{TranslateString(999,  '3x25$ goes to 3 random of top 11-50 holders!')}</Text>
        <Text fontSize="12px" color="bfbf00">{TranslateString(999,  '(Prices sent DIRECTLY to Winners wallets)')}</Text>
        <Text fontSize="12px" color="bfbf00">{TranslateString(999,  '(Other Lotteries in planing)')}</Text>

        <br/> 
        <Text fontSize="15px" color="#d4bc0d">{TranslateString(999, 'Earn new tokens:')}</Text> 
        <Text fontSize="14px" color="bfbf00">{TranslateString(999,  'Stake JungleGold to earn new Token')}</Text>
        <Text fontSize="14px" color="bfbf00">{TranslateString(999,  'Earn KONG with JungleGold NOW, other tokens soon... ')}</Text>
         

                    
        <> 
        
            
          <br/>
          <Button 
              as="a"
              variant="primary"
              href="https://bscscan.com/token/0x2d7add5ad50405f86a6f39e893f3d85960ec73ca#balances"
              target="_blank" >
              {TranslateString(0, 'Check JungleGold Wallet Balances')}
          </Button>

                   
          


        </>
      </CardBody>
    </StyledTotalValueLockedCard>
  )
}

export default InfoCard
