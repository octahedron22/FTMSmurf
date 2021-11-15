import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Button, Text } from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import UnlockButton from 'components/UnlockButton'
import { useXBlzdApprove } from 'hooks/useApprove'
import useTokenBalance from 'hooks/useTokenBalance'
import { getCakeAddress } from 'utils/addressHelpers'
import { useXBlzdAllowance } from 'hooks/useAllowance'
import useExchangeXBlzd from 'hooks/useExchangeXBlzd'
import BlzdWalletBalance from './BlzdWalletBalance'
import JunglegWalletBalance from './JunglegWalletBalance'
import JguserWalletBalance from './JguserWalletBalance'


const StyledFarmStakingCard = styled(Card)`
align-items: center;
display: flex;
flex: 1;
border: 1px solid rgba(15, 150, 242, 0.5);`

const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`

const RowBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const Divider = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.colors.textSubtle};
  margin: 16px 0;
`

const CardImage = styled.img`
  margin-right: 8px;
`

const Label = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 14px;
`

const Actions = styled.div`
  margin-top: 24px;
`

const ExchangeBLZDCard = () => {
  const { account } = useWallet()
  const blzdBalance = useTokenBalance(getCakeAddress())
  const [requestedApproval, setRequestedApproval] = useState(false)
  const allowance = useXBlzdAllowance()
  const onApprove = useXBlzdApprove()
  const isApproved = account && allowance && allowance.isGreaterThan(0)
  const { onExchange } = useExchangeXBlzd()

  const handleApprove = useCallback(async () => {
    try {
      setRequestedApproval(true)
      await onApprove()
      setRequestedApproval(false)
    } catch (e) {
      console.error(e)
    }
  }, [onApprove])

  const renderApprovalOrExchangeButton = () => {
    return isApproved ? (
      <Button
        style={{ width: '100%' }}
        mt="8px"
        disabled={blzdBalance.isLessThanOrEqualTo(0)}
        onClick={async () => {
          await onExchange(blzdBalance.toString())
        }}
      >
        Exchange
      </Button>
    ) : (
      <Button style={{ width: '100%' }} mt="8px" disabled={requestedApproval} onClick={handleApprove}>
        Approve
      </Button>
    )
  }



  return (
    <StyledFarmStakingCard>
      <CardBody>
        <Heading size="lg" mb="24px">
          Exchange JUNGLE to JungleGold
        </Heading>
        <Heading size="l" mb="24px">
        ⚠️Jungle to JungleGold is currently NOT active!⚠️
        </Heading>

        <RowBetween>
          <CardImage
            src="https://jungleswap.cash/images/egg/2.png"
            alt="jungle logo"
            width={64}
            height={64}
          />

          <Block>
            <Label>JUNGLE in Wallet to spend:</Label>
            <BlzdWalletBalance />
          </Block>

        </RowBetween>
        <Divider />
        <RowBetween>

          <CardImage
            src="https://jungleswap.cash/images/egg/4.png"
            alt="junglegold logo"
            width={84}
            height={84}
          />

          <Block>
            <Label>JungleGold to recive:</Label>
            <JunglegWalletBalance />
          </Block>

        </RowBetween>

        <Actions>{account ? renderApprovalOrExchangeButton() : <UnlockButton fullWidth />}</Actions>

        <Divider />

        <Block>
            <Label>JungleGold in your Wallet:</Label>
            <JguserWalletBalance />
        </Block>

      </CardBody>
    </StyledFarmStakingCard>
  )
}

export default ExchangeBLZDCard
