import BigNumber from 'bignumber.js'
import { useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useRefresh from 'hooks/useRefresh'
import { fetchFarmsPublicDataAsync, fetchPoolsUserDataAsync } from './actions'
import { fetchFarmsPublicDataAsyncPRICE, fetchFarmUserDataAsyncPRICE } from './actionsPRICE'
import { State, Farm, Pool } from './types'
import { StatePRICE, FarmPRICE, PoolPRICE } from './typesPRICE'
import { QuoteToken } from '../config/constants/types'

const ZERO = new BigNumber(0)

export const useFetchPublicData = () => {
  const dispatch = useDispatch()
  const { slowRefresh } = useRefresh()
  useEffect(() => {
    dispatch(fetchFarmsPublicDataAsync())
  }, [dispatch, slowRefresh])
}

export const useFetchPublicDataPRICE = () => {
  const dispatch = useDispatch()
  const { slowRefresh } = useRefresh()
  useEffect(() => {
    dispatch(fetchFarmsPublicDataAsyncPRICE())
  }, [dispatch, slowRefresh])
}

// Farms

export const useFarms = (): Farm[] => {
  const farms = useSelector((state: State) => state.farms.data)
  return farms
}

export const useFarmsPRICE = (): FarmPRICE[] => {
  const farms = useSelector((state: StatePRICE) => state.farms.data)
  return farms
}

export const useFarmFromPid = (pid): Farm => {
  const farm = useSelector((state: State) => state.farms.data.find((f) => f.pid === pid))
  return farm
}

export const useFarmFromPidPRICE = (pid): FarmPRICE => {
  const farm = useSelector((state: StatePRICE) => state.farms.data.find((f) => f.pid === pid))
  return farm
}

export const useFarmFromSymbol = (lpSymbol: string): Farm => {
  const farm = useSelector((state: State) => state.farms.data.find((f) => f.lpSymbol === lpSymbol))
  return farm
}

export const useFarmUser = (pid) => {
  const farm = useFarmFromPid(pid)

  return {
    allowance: farm.userData ? new BigNumber(farm.userData.allowance) : new BigNumber(0),
    tokenBalance: farm.userData ? new BigNumber(farm.userData.tokenBalance) : new BigNumber(0),
    stakedBalance: farm.userData ? new BigNumber(farm.userData.stakedBalance) : new BigNumber(0),
    earnings: farm.userData ? new BigNumber(farm.userData.earnings) : new BigNumber(0),
  }
}


// Pools

export const usePools = (account): Pool[] => {
  const { fastRefresh } = useRefresh()
  const dispatch = useDispatch()
  useEffect(() => {
    if (account) {
      dispatch(fetchPoolsUserDataAsync(account))
    }
  }, [account, dispatch, fastRefresh])

  const pools = useSelector((state: State) => state.pools.data)
  return pools
}

export const usePoolFromPid = (sousId): Pool => {
  const pool = useSelector((state: State) => state.pools.data.find((p) => p.sousId === sousId))
  return pool
}

// Prices

export const usePriceBnbBusd = (): BigNumber => {
  const pid = 0 // BUSD-BNB LP
  const farm = useFarmFromPid(pid)
  return farm.tokenPriceVsQuote ? new BigNumber(farm.tokenPriceVsQuote) : ZERO
}

export const usePriceCakeBusdfalse = (): BigNumber => {
   const pid = 23 // TOKEN-BUSD LP
   const farm = useFarmFromPid(pid);
   return farm.tokenPriceVsQuote ? new BigNumber(farm.tokenPriceVsQuote) : ZERO;
 }

 export const usePriceCakeBusd = (): BigNumber => {
  const pid = 22 // TOKEN-BUSD LP
  const bnbPriceUSD = usePriceBnbBusd()
  const farm = useFarmFromPid(pid);
  return farm.tokenPriceVsQuote ? new BigNumber(farm.tokenPriceVsQuote).times(bnbPriceUSD) : ZERO;
}



export const usePriceEthBusd = (): BigNumber => {
  const pid = 1 // ETH-BNB LP
  const bnbPriceUSD = usePriceBnbBusd()
  const farm = useFarmFromPid(pid)
  return farm.tokenPriceVsQuote ? bnbPriceUSD.times(farm.tokenPriceVsQuote) : ZERO
}

export const usePriceEthBnb = (): BigNumber => {
  const priceBnbBusd = usePriceBnbBusd()
  const priceEthBusd = usePriceEthBusd()
  return priceEthBusd.div(priceBnbBusd)
}

export const useTotalValue = (): BigNumber => {
  const farms = useFarms();
  const bnbPrice = usePriceBnbBusd();
  const cakePrice = usePriceCakeBusd();
  let value = new BigNumber(0);
  for (let i = 0; i < farms.length; i++) {
    const farm = farms[i]
    if (farm.lpTotalInQuoteToken) {
      let val;
      if (farm.quoteTokenSymbol === QuoteToken.BNB) {
        val = (bnbPrice.times(farm.lpTotalInQuoteToken));
      }else if (farm.quoteTokenSymbol === QuoteToken.CAKE) {
        val = (cakePrice.times(farm.lpTotalInQuoteToken));
      }else{
        val = (farm.lpTotalInQuoteToken);
      }
      value = value.plus(val);
    }
  }
  return value;
}