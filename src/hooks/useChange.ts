import { useCallback } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { useDispatch } from 'react-redux'
import { fetchFarmUserDataAsync } from 'state/actions'
import { exchangeSale } from 'utils/callHelpers'
import { useChange } from './useContract'

const useChangeFunktion = () => {
  const dispatch = useDispatch()
  const { account } = useWallet()
  const presaleContract = useChange()

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
export default useChangeFunktion