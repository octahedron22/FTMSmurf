import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout, Button } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from './components/FarmStakingCard'
import CakeStats from './components/CakeStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import TwitterCard from './components/TwitterCard'
import InfoCard from './components/InfoCard'
import JungleWalletBallance from './components/treasuryCard'


const Hero = styled.div`
  align-items: center;
  background-image: url('/images/egg/3.png');
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/egg/3.png'), url('/images/egg/3b.png');
    background-position: left center, right center;
    height: 165px;
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

const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <Hero>
        <Heading as="h1" size="xl" mb="12px" color="secondary">
          {TranslateString(0, 'Clever Smurf.Money')}
        </Heading> 


            <br/>
        <Button 
              as="a"
              variant="secondary"
              href="https://spookyswap.finance/swap?outputCurrency=0x465BC6D1AB26EFA74EE75B1E565e896615B39E79"
              target="_blank" >
              {TranslateString(0, '> BUY CLEVER NOW >')}
        </Button>

        <Text>{TranslateString(0, 'Longterm sustainable advanced Technology')}</Text>
        <Text fontSize="22" > Yieldfarming on FTM Network </Text>

      </Hero>

      <div>
        <Cards>
          <FarmStakingCard />         
          <TwitterCard/>
          <CakeStats />          
          <TotalValueLockedCard />

        {/*           
          <InfoCard/>          
          <JungleWalletBallance /> */}

        </Cards>
      </div>
    </Page>
  )
}

export default Home
