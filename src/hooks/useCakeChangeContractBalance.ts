import { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { provider } from 'web3-core'
import cakeABI from 'config/abi/cake.json'
import { getContract } from 'utils/web3'
import { getTokenBalance } from 'utils/erc20'
import { getCakeAddress } from 'utils/addressHelpers'
import useRefresh from './useRefresh'

const useTokenBalance = (tokenAddress: string) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const { account, ethereum }: { account: string; ethereum: provider } = useWallet()
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    const fetchBalance = async () => {
      const res = await getTokenBalance(ethereum, tokenAddress, account)
      setBalance(new BigNumber(res))
    }

    if (account && ethereum) {
      fetchBalance()
    }
  }, [account, ethereum, tokenAddress, fastRefresh])

  return balance
}

export const useTotalSupply = () => {
  const { slowRefresh } = useRefresh()
  const [totalSupply, setTotalSupply] = useState<BigNumber>()

  useEffect(() => {
    async function fetchTotalSupply() {
      const cakeContract = getContract(cakeABI, getCakeAddress())
      const supply = await cakeContract.methods.totalSupply().call()
      setTotalSupply(new BigNumber(supply))
    }

    fetchTotalSupply()
  }, [slowRefresh])

  return totalSupply
}

export const useBurnedBalance = (tokenAddress: string) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const { slowRefresh } = useRefresh()

  useEffect(() => {
    const fetchBalance = async () => {
      const cakeContract = getContract(cakeABI, getCakeAddress())
      const bal = await cakeContract.methods.balanceOf('0x000000000000000000000000000000000000dEaD').call()
      setBalance(new BigNumber(bal))
    }

    fetchBalance()
  }, [tokenAddress, slowRefresh])

  return balance
}


export const useCakeChangeContractBalance = (tokenAddress: string) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const { slowRefresh } = useRefresh()

  useEffect(() => {
    const fetchBalance = async () => {
      const cakeContract = getContract(cakeABI, '0x78Aaec841335aF79197564546b851Eb57ab57211')
      const bal = await cakeContract.methods.balanceOf('0x3129432c750a4300cf20A4dAb763fE198e9ef553').call()
      setBalance(new BigNumber(bal))
    }

    fetchBalance()
  }, [tokenAddress, slowRefresh])

  return balance
}

export const useAxeChangeContractBalance = (tokenAddress: string) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const { slowRefresh } = useRefresh()

  useEffect(() => {
    const fetchBalance = async () => {
      const cakeContract = getContract(cakeABI, '0x465BC6D1AB26EFA74EE75B1E565e896615B39E79')
      const bal = await cakeContract.methods.balanceOf('0x3129432c750a4300cf20A4dAb763fE198e9ef553').call()
      setBalance(new BigNumber(bal))
    }

    fetchBalance()
  }, [tokenAddress, slowRefresh])

  return balance
}

export const useFTMFTMContractBalance = (tokenAddress: string) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const { slowRefresh } = useRefresh()

  useEffect(() => {
    const fetchBalance = async () => {
      const cakeContract = getContract(cakeABI, '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83')
      const bal = await cakeContract.methods.balanceOf('0x5771CD928B77C5C7c013b1c7F390E3a64ADBEaDD').call()
      setBalance(new BigNumber(bal))
    }

    fetchBalance()
  }, [tokenAddress, slowRefresh])

  return balance
}

export const useCleverFTMContractBalance = (tokenAddress: string) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const { slowRefresh } = useRefresh()

  useEffect(() => {
    const fetchBalance = async () => {
      const cakeContract = getContract(cakeABI, '0x465BC6D1AB26EFA74EE75B1E565e896615B39E79')
      const bal = await cakeContract.methods.balanceOf('0x5771CD928B77C5C7c013b1c7F390E3a64ADBEaDD').call()
      setBalance(new BigNumber(bal))
    }

    fetchBalance()
  }, [tokenAddress, slowRefresh])

  return balance
}




export default useTokenBalance
