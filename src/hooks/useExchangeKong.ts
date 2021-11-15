import { useCallback } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { useDispatch } from 'react-redux'
import { fetchFarmUserDataAsync } from 'state/actions'
import { exchangeKong } from 'utils/callHelpers'
import { usePresale } from './useContract'

const useExchangeKong = () => {
  const dispatch = useDispatch()
  const { account } = useWallet()
  const presaleContract = usePresale()

  const handleExchange = useCallback(
    async (amount: string) => {
      const txHash = await exchangeKong(presaleContract, amount, account)
      dispatch(fetchFarmUserDataAsync(account))
      console.info(txHash)
    },
    [account, dispatch, presaleContract],
  )

  return { onExchange: handleExchange }
}
export default useExchangeKong