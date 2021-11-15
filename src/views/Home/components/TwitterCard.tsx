import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import styled from 'styled-components'
import { Timeline } from 'react-twitter-widgets'

import useI18n from 'hooks/useI18n'


const StyledTwitterCard = styled(Card)`
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

const TwitterCard = () => {
  const TranslateString = useI18n()

  return (
    <StyledTwitterCard>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(10003, 'Announcements')}
        </Heading>
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'SmurfMoneyBSC'
          }}
          options={{
            height: '350',
            chrome: "noheader, nofooter",
            width: "400"
          }}
        />
      </CardBody>
    </StyledTwitterCard>
  )
}

export default TwitterCard
