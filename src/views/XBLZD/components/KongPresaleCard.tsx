import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Button, Text } from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import UnlockButton from 'components/UnlockButton'
import { useBusdPresaleApprove } from 'hooks/useApprove'
import useTokenBalance from 'hooks/useTokenBalance'
import { getBusdAddress } from 'utils/addressHelpers'
import { useBusdPresaleAllowance } from 'hooks/useAllowance'
import useExchangeKong from 'hooks/useExchangeKong'
import BUSDWalletBalance from './BUSDWalletBalance'
import KongFromBusdBalance from './KongFromBusdBalance'
import KongUserWalletBallance from './KongUserWalletBallance'


const StyledFarmStakingCard = styled(Card)`
align-items: center;
display: flex;
flex: 1;
border: 1px solid rgba(255, 204, 18, 0.5);`


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

const KongPresaleCard = () => {
  const { account } = useWallet()
  const busdBalance = useTokenBalance(getBusdAddress())
  const [requestedApproval, setRequestedApproval] = useState(false)
  const allowance = useBusdPresaleAllowance()
  const onApprove = useBusdPresaleApprove()
  const isApproved = account && allowance && allowance.isGreaterThan(0)
  const { onExchange } = useExchangeKong()

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
        disabled={busdBalance.isLessThanOrEqualTo(0)}
        onClick={async () => {
          await onExchange(busdBalance.toString())
        }}
      >
        BUY KONG
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
          JungleKong (KONG) Presale
        </Heading>
        <Heading size="l" mb="24px">
        🎈KONG PRESALE is FINISHED🎈
        </Heading>



        <RowBetween>
          <CardImage
            src="https://jungleswap.cash/images/farms/busd.png"
            alt="jungle logo"
            width={64}
            height={64}
          />

          <Block>
            <Label>BUSD in Wallet to spend:</Label>
            <BUSDWalletBalance />
          </Block>

        </RowBetween>
        <Divider />
        <RowBetween>

          <CardImage
            src="https://jungleswap.cash/images/tokens/kong.png"
            alt="kong logo"
            width={84}
            height={84}
          />

          <Block>
            <Label>JungleKong (KONG) to recive:</Label>
            <KongFromBusdBalance />
          </Block>

        </RowBetween>

{/*
        <Actions>{account ? renderApprovalOrExchangeButton() : <UnlockButton fullWidth />}</Actions>
*/}
        <Divider />

        <Block>
            <Label>JungleKong (KONG) in your Wallet:</Label>
            <KongUserWalletBallance />
        </Block>

      </CardBody>
    </StyledFarmStakingCard>
  )
}

export default KongPresaleCard
