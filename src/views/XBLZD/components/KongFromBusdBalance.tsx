import React from 'react'
import { Text } from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useTokenBalance from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getBusdAddress } from 'utils/addressHelpers'
import { getBalanceNumber } from 'utils/formatBalance'
import BigNumber from 'bignumber.js'
import CardValue from './CardValue'



const KongFromBusdBalance = () => {
  const TranslateString = useI18n()
  const busdBalance = useTokenBalance(getBusdAddress())
  const jungelGBalance = busdBalance.div(6.5)
  const { account } = useWallet()

  if (!account) {
    return (
      <Text color="textDisabled" style={{ lineHeight: '36px' }}>
        {TranslateString(298, 'Locked')}
      </Text>
    )
  }

  return <CardValue value={getBalanceNumber(jungelGBalance)} fontSize="36px" />
}

export default KongFromBusdBalance




export const KongFromBusdAmount =  (Amount: string)  => {
  const input = new BigNumber(Amount);
  
  if (!input.isNaN())
  {
        const busdBalance = new BigNumber(getBalanceNumber(new BigNumber(Amount))); // useTokenBalance(getBusdAddress())
        if (!busdBalance.eq(0))
        {
          const jungelGBalance = busdBalance.times(10).div(60);
        
          return jungelGBalance;
        }
  }
    return new  BigNumber('0');

}

export const CobraFromBusdAmount =  (Amount: string)  => {
  const input = new BigNumber(Amount);
  
  if (!input.isNaN())
  {
        const busdBalance = new BigNumber(getBalanceNumber(new BigNumber(Amount))); // useTokenBalance(getBusdAddress())
        if (!busdBalance.eq(0))
        {
          const jungelGBalance = busdBalance.div(5);
         
          return jungelGBalance;
        }
  }
    return new  BigNumber('0');

}


