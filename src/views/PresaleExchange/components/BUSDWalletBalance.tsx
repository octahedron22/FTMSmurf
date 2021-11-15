import React from 'react'
import { Text } from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useTokenBalance from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getBusdAddress, getCakeAddress } from 'utils/addressHelpers'
import { getBalanceNumber } from 'utils/formatBalance'
import CardValue from './CardValue'
import useRefresh from './useRefresh'


const BUSDWalletBalance = () => {
  const TranslateString = useI18n()
  const busdBalance = useTokenBalance(getBusdAddress())
  const { account } = useWallet()

  if (!account) {
    return (
      <Text color="textDisabled" style={{ lineHeight: '36px' }}>
        {TranslateString(298, 'Locked')}
      </Text>
    )
  }

  return <CardValue value={getBalanceNumber(busdBalance)} fontSize="36px" />
}



export default BUSDWalletBalance


