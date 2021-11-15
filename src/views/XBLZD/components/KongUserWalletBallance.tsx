import React from 'react'
import { Text } from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useTokenBalance from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getKongAddress } from 'utils/addressHelpers'
import { getBalanceNumber } from 'utils/formatBalance'
import CardValue from './CardValue'

const KongUserWalletBallance = () => {
  const TranslateString = useI18n()
  const cakeBalance = useTokenBalance(getKongAddress())
  const { account } = useWallet()

  if (!account) {
    return (
      <Text color="textDisabled" style={{ lineHeight: '36px' }}>
        {TranslateString(298, 'Locked')}
      </Text>
    )
  }

  return <CardValue value={getBalanceNumber(cakeBalance)} fontSize="36px" />
}

export default KongUserWalletBallance


