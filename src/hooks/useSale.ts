import { useCallback } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { useDispatch } from 'react-redux'
import { fetchFarmUserDataAsync } from 'state/actions'
import { exchangeSale } from 'utils/callHelpers'
import { useSale } from './useContract'

const useExchangeSale = () => {
  const dispatch = useDispatch()
  const { account } = useWallet()
  const presaleContract = useSale()

  const handleExchange = useCallback(
    async (amount: string) => {
      const txHash = await exchangeSale(presaleContract, amount, account)
      dispatch(fetchFarmUserDataAsync(account))
      console.info(txHash)
    },
    [account, dispatch, presaleContract],
  )

  return { onExchange: handleExchange }
}
export default useExchangeSale