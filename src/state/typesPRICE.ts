import BigNumber from 'bignumber.js'
import { FarmConfigPRICE, PoolConfigPRICE } from 'config/constants/typesPRICE'
 
export interface FarmPRICE extends FarmConfigPRICE {
  tokenAmount?: BigNumber
  lpTotalInQuoteToken?: BigNumber
  tokenPriceVsQuote?: BigNumber
  poolWeight?: number
  depositFeeBP?: number
  tokenPerBlock?: number
    userData?: {
    allowance: BigNumber
    tokenBalance: BigNumber
    stakedBalance: BigNumber
    earnings: BigNumber
  }
}

export interface PoolPRICE extends PoolConfigPRICE {
  totalStaked?: BigNumber
  startBlock?: number
  endBlock?: number
  userData?: {
    allowance: BigNumber
    stakingTokenBalance: BigNumber
    stakedBalance: BigNumber
    pendingReward: BigNumber
  }
}

// Slices states

export interface FarmsState {
  data: FarmPRICE[]
}

export interface PoolsState {
  data: PoolPRICE[]
}

// Global state

export interface StatePRICE {
  farms: FarmsState
  pools: PoolsState
}
