import { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { Contract } from 'web3-eth-contract'
import { useCake, useLottery, useXBlzd, useBUSD, usePresale, useSale, useChange, useAxe } from './useContract'
import { getAllowance } from '../utils/erc20'


// Retrieve Gold to Rajah change contract allowance for Gold
export const useAxeAllowance = () => {
  const [allowance, setAllowance] = useState(new BigNumber(0))
  const { account }: { account: string } = useWallet()
  const presaleContract = useChange()
  const busdContract = useAxe()

  useEffect(() => {
    const fetchAllowance = async () => {
      const res = await getAllowance(busdContract, presaleContract, account)
      setAllowance(new BigNumber(res))
    }

    if (account && busdContract) {
      fetchAllowance()
    }
    const refreshInterval = setInterval(fetchAllowance, 10000)
    return () => clearInterval(refreshInterval)
  }, [account, presaleContract, busdContract])

  return allowance
}

// Retrieve Gold to Rajah change contract allowance for Gold
export const useGoldAllowance = () => {
  const [allowance, setAllowance] = useState(new BigNumber(0))
  const { account }: { account: string } = useWallet()
  const presaleContract = useChange()
  const busdContract = useAxe()

  useEffect(() => {
    const fetchAllowance = async () => {
      const res = await getAllowance(busdContract, presaleContract, account)
      setAllowance(new BigNumber(res))
    }

    if (account && busdContract) {
      fetchAllowance()
    }
    const refreshInterval = setInterval(fetchAllowance, 10000)
    return () => clearInterval(refreshInterval)
  }, [account, presaleContract, busdContract])

  return allowance
}

// Retrieve lottery allowance
export const useLotteryAllowance = () => {
  const [allowance, setAllowance] = useState(new BigNumber(0))
  const { account }: { account: string } = useWallet()
  const lotteryContract = useLottery()
  const cakeContract = useCake()

  useEffect(() => {
    const fetchAllowance = async () => {
      const res = await getAllowance(cakeContract, lotteryContract, account)
      setAllowance(new BigNumber(res))
    }

    if (account && cakeContract && cakeContract) {
      fetchAllowance()
    }
    const refreshInterval = setInterval(fetchAllowance, 10000)
    return () => clearInterval(refreshInterval)
  }, [account, cakeContract, lotteryContract])

  return allowance
}

// Retrieve IFO allowance
export const useIfoAllowance = (tokenContract: Contract, spenderAddress: string, dependency?: any) => {
  const { account }: { account: string } = useWallet()
  const [allowance, setAllowance] = useState(null)

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await tokenContract.methods.allowance(account, spenderAddress).call()
        setAllowance(new BigNumber(res))
      } catch (e) {
        setAllowance(null)
      }
    }
    fetch()
  }, [account, spenderAddress, tokenContract, dependency])

  return allowance
}

// Retrieve xBlzd allowance for Jungle
export const useXBlzdAllowance = () => {
  const [allowance, setAllowance] = useState(new BigNumber(0))
  const { account }: { account: string } = useWallet()
  const xBlzdContract = useXBlzd()
  const cakeContract = useCake()

  useEffect(() => {
    const fetchAllowance = async () => {
      const res = await getAllowance(cakeContract, xBlzdContract, account)
      setAllowance(new BigNumber(res))
    }

    if (account && cakeContract) {
      fetchAllowance()
    }
    const refreshInterval = setInterval(fetchAllowance, 10000)
    return () => clearInterval(refreshInterval)
  }, [account, xBlzdContract, cakeContract])

  return allowance
}

// Retrieve xBlzd allowance for BUSD
export const useBusdAllowance = () => {
  const [allowance, setAllowance] = useState(new BigNumber(0))
  const { account }: { account: string } = useWallet()
  const xBlzdContract = useXBlzd()
  const busdContract = useBUSD()

  useEffect(() => {
    const fetchAllowance = async () => {
      const res = await getAllowance(busdContract, xBlzdContract, account)
      setAllowance(new BigNumber(res))
    }

    if (account && busdContract) {
      fetchAllowance()
    }
    const refreshInterval = setInterval(fetchAllowance, 10000)
    return () => clearInterval(refreshInterval)
  }, [account, xBlzdContract, busdContract])

  return allowance
}

// Retrieve Presale allowance for BUSD
export const useBusdPresaleAllowance = () => {
  const [allowance, setAllowance] = useState(new BigNumber(0))
  const { account }: { account: string } = useWallet()
  const presaleContract = usePresale()
  const busdContract = useBUSD()

  useEffect(() => {
    const fetchAllowance = async () => {
      const res = await getAllowance(busdContract, presaleContract, account)
      setAllowance(new BigNumber(res))
    }

    if (account && busdContract) {
      fetchAllowance()
    }
    const refreshInterval = setInterval(fetchAllowance, 10000)
    return () => clearInterval(refreshInterval)
  }, [account, presaleContract, busdContract])

  return allowance
}

// Retrieve Sale allowance for BUSD
export const useBusdSaleAllowance = () => {
  const [allowance, setAllowance] = useState(new BigNumber(0))
  const { account }: { account: string } = useWallet()
  const saleContract = useSale()
  const busdContract = useBUSD()

  useEffect(() => {
    const fetchAllowance = async () => {
      const res = await getAllowance(busdContract, saleContract, account)
      setAllowance(new BigNumber(res))
    }

    if (account && busdContract) {
      fetchAllowance()
    }
    const refreshInterval = setInterval(fetchAllowance, 10000)
    return () => clearInterval(refreshInterval)
  }, [account, saleContract, busdContract])

  return allowance
}