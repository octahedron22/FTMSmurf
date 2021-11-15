import { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { provider } from 'web3-core'
import cakeABI from 'config/abi/cake.json'
import { getContract } from 'utils/web3'
import { getTokenBalance } from 'utils/erc20'
import { getCakeAddress, getCobraAddress, getBusdAddress, getKongAddress } from 'utils/addressHelpers'
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

export const useTreasuryBalance = (tokenAddress: string) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const { slowRefresh } = useRefresh()

  useEffect(() => {
    const fetchBalance = async () => {
      const cakeContract = getContract(cakeABI, getCakeAddress())
      const bal = await cakeContract.methods.balanceOf('0x45472B519de9Ac90A09BF51d9E161B8C6476361D').call()
      setBalance(new BigNumber(bal))
    }

    fetchBalance()
  }, [tokenAddress, slowRefresh])

  return balance
}

export const useCobraContractBalance = (tokenAddress: string) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const { slowRefresh } = useRefresh()

  useEffect(() => {
    const fetchBalance = async () => {
      const cakeContract = getContract(cakeABI, getCobraAddress())
      const bal = await cakeContract.methods.balanceOf('0xBB7672E9Dac09326C327f9408c64A2051C34Cba3').call()
      setBalance(new BigNumber(bal))
    }

    fetchBalance()
  }, [tokenAddress, slowRefresh])

  return balance
}

export const useBusdKongLpContractBalance = (tokenAddress: string) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const { slowRefresh } = useRefresh()

  useEffect(() => {
    const fetchBalance = async () => {
      const cakeContract = getContract(cakeABI, getBusdAddress())
      const bal = await cakeContract.methods.balanceOf('0x992f3400621B4f6c1e21a456c3330eC5F32b5DF9').call()
      setBalance(new BigNumber(bal))
    }

    fetchBalance()
  }, [tokenAddress, slowRefresh])

  return balance
}

export const useKongBusdLpContractBalance = (tokenAddress: string) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const { slowRefresh } = useRefresh()

  useEffect(() => {
    const fetchBalance = async () => {
      const cakeContract = getContract(cakeABI, getKongAddress())
      const bal = await cakeContract.methods.balanceOf('0x992f3400621B4f6c1e21a456c3330eC5F32b5DF9').call()
      setBalance(new BigNumber(bal))
    }

    fetchBalance()
  }, [tokenAddress, slowRefresh])

  return balance
}

export const useBusdCobraLpContractBalance = (tokenAddress: string) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const { slowRefresh } = useRefresh()

  useEffect(() => {
    const fetchBalance = async () => {
      const cakeContract = getContract(cakeABI, getBusdAddress())
      const bal = await cakeContract.methods.balanceOf('0x0dd5d3BDFcaD72Ebb4a04EaBF7Bb3B8228EA1E73').call()
      setBalance(new BigNumber(bal))
    }

    fetchBalance()
  }, [tokenAddress, slowRefresh])

  return balance
}

export const useCobraBusdLpContractBalance = (tokenAddress: string) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const { slowRefresh } = useRefresh()

  useEffect(() => {
    const fetchBalance = async () => {
      const cakeContract = getContract(cakeABI, getCobraAddress())
      const bal = await cakeContract.methods.balanceOf('0x0dd5d3BDFcaD72Ebb4a04EaBF7Bb3B8228EA1E73').call()
      setBalance(new BigNumber(bal))
    }

    fetchBalance()
  }, [tokenAddress, slowRefresh])

  return balance
}

export default useTokenBalance


