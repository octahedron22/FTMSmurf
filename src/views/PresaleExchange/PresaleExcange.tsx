import React from 'react'
import Page from 'components/layout/Page'
import styled from 'styled-components'
import { Heading, Text, BaseLayout, Button, Flex } from '@pancakeswap-libs/uikit'
import ChangeCard from './components/ChangeCard'
import ChangeCard1 from './components/ChangeCard1'
import ChangeCardAS from './components/ChangeCardAS'
import BuyWithBNBCard from './components/BuyWithBNBCard'

import Timer from './components/Timer'

const Hero = styled.div`
  align-items: center;
  background-image: url('/images/egg/presale.png');
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 194px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/egg/3.png'), url('/images/egg/presale.png'), url('/images/egg/3b.png'); 
    background-position: left center, center, right center;
    height: 194px;
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`
const Label = styled.div`
  color: #ff5c33;
  font-size: 14px;
`

const JungleSwap: React.FC = () => {
  return (
  <Page>



<Hero />

{/* <a target="blank" href='https://bscscan.com/block/countdown/11685000'> 
      <Text fontSize="12px" color="#4fd6b2"> {'> click for BSC countdown 11685000 >'} </Text>
</a> */}

<Text fontSize="32px" bold  color="#1867f2" > Claiming Starts: </Text> 
      
      <Timer /> 


<Flex>

      <Text fontSize="28px" bold  color="#f77511" > {(' Remaining preCLEVER (8 per FTM!) \xa0 \xa0 \xa0 \xa0 ')}  </Text>
      <Text fontSize="28px" bold  color="#bf11a2" > {(' Listing: 6 per FTM! ')} </Text> 
</Flex>
<br/>

<div>

  <Cards> 
  <BuyWithBNBCard />
  <ChangeCardAS />
 
  
  
      
      {/*
    CobraPresaleCard />
        <InfoCardCobra />
      <ExchangeBusdGoldCard />
      <InfoCard />
    <InfoCardKong />

      <ExchangeBLZDCard />
      */}
      
  </Cards>
</div>

</Page>
  )
}

export default JungleSwap
