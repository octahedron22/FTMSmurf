import React from 'react'
import Page from 'components/layout/Page'
import styled from 'styled-components'
import { Heading, Text, BaseLayout, Button } from '@pancakeswap-libs/uikit'
import ExchangeBLZDCard from './components/ExchangeBLZDCard'
import ExchangeBusdGoldCard from './components/ExchangeBusdGoldCard'
import KongPresaleCard from './components/KongPresaleCard'
import InfoCard from './components/InfoCard'
import InfoCardKong from './components/InfoCardKong'
import InfoCardCobra from './components/InfoCardCobra'
import CobraPresaleCard from './components/CobraPresaleCard'

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

const JungleSwap: React.FC = () => {
  return (
  <Page>

<div>
  <Cards>
      <CobraPresaleCard />
      <InfoCardCobra />

      <ExchangeBusdGoldCard />
      <InfoCard />

      <KongPresaleCard />
      <InfoCardKong />
      
      {/*
      <ExchangeBLZDCard />
      */}
      
  </Cards>
</div>

</Page>
  )
}

export default JungleSwap
