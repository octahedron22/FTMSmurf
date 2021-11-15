import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Button, Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useTotalValue } from '../../../state/hooks'


const StyledTotalValueLockedCard = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
  border: 1px solid rgba(15, 150, 242, 0.34);
`

const InfoCard = () => {
  const TranslateString = useI18n()
  const totalValue = useTotalValue()
 

  return (
    <StyledTotalValueLockedCard>
      <CardBody>
        <Heading size="lg" mb="10px">
          {TranslateString(999, 'INFO / Features')}
        </Heading>  
        

        <Text fontSize="16px" color="bfbf00">{TranslateString(999, '📜Contracts:')}</Text>
        
        <Text fontSize="14px" color="bfbf00">{TranslateString(999, 'JungleSwap:')}</Text>
        <a href='https://bscscan.com/address/0x5afFcD905fBDc00Cbee9c8D78BBbD256b0344d3b#code'> <Text fontSize="12px">{TranslateString(999, '0x5afFcD905fBDc00Cbee9c8D78BBbD256b0344d3b')}</Text> </a>
        <Text fontSize="14px" color="bfbf00">{TranslateString(999, 'MasterChef:')}</Text>
        <a href='https://bscscan.com/address/0x899EDbD67009C997265AB2A0d7b2965725ffaf4e#code'> <Text fontSize="12px">{TranslateString(999, '0x899EDbD67009C997265AB2A0d7b2965725ffaf4e')}</Text> </a>
        <Text fontSize="14px" color="bfbf00">{TranslateString(999, 'TimeLock:')}</Text>
        <a href='https://bscscan.com/address/0x40dC9B3613B62C2A065A9b8E64E7ebb3Fc94C500#code'> <Text fontSize="12px">{TranslateString(999, '0x40dC9B3613B62C2A065A9b8E64E7ebb3Fc94C500')}</Text> </a>
        <br/> 
        <Text fontSize="14px" color="bfbf00">{TranslateString(999, 'JungleKong:')}</Text>
        <a href='https://bscscan.com/address/0xAc9178feD286e0e4F21D50d40f6C77503C96C19c#code'> <Text fontSize="12px">{TranslateString(999, '0xAc9178feD286e0e4F21D50d40f6C77503C96C19c')}</Text> </a>


        <br/> 
        <Text fontSize="16px" color="bfbf00">{TranslateString(999, 'ℹ️ System:')}</Text>
        
        <Text fontSize="14px" color="bfbf00">{TranslateString(999, 'LIMITED SUPPLY max ~170000')}</Text>
        <Text fontSize="14px" color="bfbf00">{TranslateString(999, '5% emission reduction every 6h, down to 0')}</Text>
        <Text fontSize="14px" color="bfbf00">{TranslateString(999, '5% Transfertax')}</Text>      
        <Text fontSize="14px" color="bfbf00">{TranslateString(999, '90% AUTOBURN from TransferTax')}</Text>
        <Text fontSize="14px" color="bfbf00">{TranslateString(999, 'ANTI Whale, max transfer 2.5% of supply')}</Text>
         
        <br/> 
        <Text fontSize="16px" color="bfbf00">{TranslateString(999, '🔒SAFETY:')}</Text>   
             
        <a href='https://rugdoc.io/project/JungleSwap/'> <Text fontSize="14px">{TranslateString(999, '⛨RugDoc "LOW RISK" Check⛨ view >')}</Text> </a>
        <Text fontSize="14px" color="bfbf00">{TranslateString(999, 'Deposit fee capped at 4%, no withdrw fee!')}</Text>
        <Text fontSize="14px" color="bfbf00">{TranslateString(999, 'MasterChef under Timelock!')}</Text>
        <Text fontSize="14px" color="bfbf00">{TranslateString(999, 'Well known Team!')}</Text>
                    
        <> 
        
        {/*        
          <Text fontSize="16px" color="bfbf00">{TranslateString(999, 'JungleSwap Token:')}</Text>
          <Text fontSize="12px">{TranslateString(999, '- 5% Transfer Tax (with 80% AUTOBURN)')}</Text>
          <Text fontSize="12px">{TranslateString(999, '- ANTI WHALE, max 2.5% Transfer of Supply possible! ')}</Text>
          <Text fontSize="12px">{TranslateString(999, '- MasterChef Excluded from ANTI WHALE')}</Text>
          <Text fontSize="12px">{TranslateString(999, '- Token Ownership transferred to Mascterschef!')}</Text>
          <Text fontSize="12px">{TranslateString(999, '- Bot K.O. system! (2.Liq addings + Injection)')}</Text>
          <a href='https://bscscan.com/address/0x5afFcD905fBDc00Cbee9c8D78BBbD256b0344d3b#code'> <Text fontSize="12px">{TranslateString(999, '- BSCscan Verified: 0x56562C77E4f18d05Bd93A7Ca32937312a1387725 >>')}</Text> </a>
          
          <br/>
          <Text fontSize="16px" color="bfbf00">{TranslateString(999, 'MasteChef:')}</Text>      
          <a href='https://rugdoc.io/project/JungleSwap/'> <Text fontSize="12px">{TranslateString(999, '- RugDoc checked! "LOW RISK" >> view >>')}</Text> </a>        
          <Text fontSize="12px">{TranslateString(999, '- NO Migrator Code, NO withdraw Fee!')}</Text>
          <Text fontSize="12px">{TranslateString(999, '- Deposit Fee hard capped at max 4%!')}</Text>
          <Text fontSize="12px">{TranslateString(999, '- Locked Team Liquidity!')}</Text>
          <a href='https://bscscan.com/address/0xaF2cF6dbfc8217dE157EE8d1b6Ae86653A4d3F21#code'> <Text fontSize="12px">{TranslateString(999, '- BSCscan Verified: 0xaEB912256F50B23BA865AAF865434F7eCe7618bc >>')}</Text> </a>
           
          <br/>
          <Text fontSize="16px" color="bfbf00">{TranslateString(999, 'Timelock:')}</Text>      
          <Text fontSize="12px">{TranslateString(999, '- MasterChef ownership transferred!')}</Text>
          <Text fontSize="12px">{TranslateString(999, '- 12h Timelock')}</Text>
          <a href='https://bscscan.com/address/0x7DBaE7B3DEb56479dD2430EeBb30B9A1602E7c1D#code'> <Text fontSize="12px">{TranslateString(999, '- BSCscan Verified: 0x7DBaE7B3DEb56479dD2430EeBb30B9A1602E7c1D >>')}</Text> </a>

          <br/>
          <Text fontSize="16px" color="bfbf00">{TranslateString(999, 'Join the TEAM')}</Text>
          <a href='https://t.me/JungleSwapTG'> <Text fontSize="12px">{TranslateString(999, '- Go to Telegram! >>>')}</Text> </a>
        */}
            
          <br/>
          <Button 
              as="a"
              variant="tertiary"
              href="https://yieldfarming.gitbook.io/jungleswap/"
              target="_blank" >
              {TranslateString(0, 'Read more in JUNGLE Gitbook')}
            </Button>

                   
          


        </>
      </CardBody>
    </StyledTotalValueLockedCard>
  )
}

export default InfoCard
