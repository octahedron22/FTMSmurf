import { useCallback } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { useDispatch } from 'react-redux'
import { fetchFarmUserDataAsync } from 'state/actions'
import { exchangeBuyWFTM } from 'utils/callHelpers'
import { useChange } from './useContract'

const useBuyWFTM = () => {
  const dispatch = useDispatch()
  const { account } = useWallet()
  const presaleContract = useChange()

  const handleExchange = useCallback(
    async (amount: string) => {
      const txHash = await exchangeBuyWFTM(presaleContract, amount, account)
      dispatch(fetchFarmUserDataAsync(account))
      console.info(txHash)
    },
    [account, dispatch, presaleContract],
  )

  return { onExchange: handleExchange }
}
export default useBuyWFTM