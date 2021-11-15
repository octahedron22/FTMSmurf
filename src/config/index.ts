import BigNumber from 'bignumber.js/bignumber'

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

export const CAKE_PER_BLOCK = new BigNumber(0.015)
export const BLOCKS_PER_YEAR = new BigNumber(35039965) // for FTM
// export const BLOCKS_PER_YEAR = new BigNumber(10512000) for BSC
export const BSC_BLOCK_TIME = 1

export const CAKE_POOL_PID = 1
