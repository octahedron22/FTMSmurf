import BigNumber from 'bignumber.js'
import { FarmConfig, PoolConfig } from 'config/constants/types'
 
export interface Farm extends FarmConfig {
  tokenAmount?: BigNumber
  lpTotalInQuoteToken?: BigNumber
  tokenPriceVsQuote?: BigNumber
  poolWeight?: number
  depositFeeBP?: number
  tokenPerBlock?: number
  changeMultiplier?: number
  changeDivider?: number
  changeTokenPerBNB?: number
  pool93Start?: number
  reward93perBlock?: number
  reward93perDay?: number
  pool93End?: number
  

    userData?: {
    allowance: BigNumber
    tokenBalance: BigNumber
    stakedBalance: BigNumber
    earnings: BigNumber
  }
  lpTotalSupply?: BigNumber
  lpTokenBalanceMC?: BigNumber
}

export interface Pool extends PoolConfig {
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
  data: Farm[]
}

export interface PoolsState {
  data: Pool[]
}

// Global state

export interface State {
  farms: FarmsState
  pools: PoolsState
}
