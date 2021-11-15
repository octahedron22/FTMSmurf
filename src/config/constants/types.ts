export type IfoStatus = 'coming_soon' | 'live' | 'finished'

export interface Ifo {
  id: string
  isActive: boolean
  address: string
  name: string
  subTitle?: string
  description?: string
  launchDate: string
  launchTime: string
  saleAmount: string
  raiseAmount: string
  cakeToBurn: string
  projectSiteUrl: string
  currency: string
  currencyAddress: string
  tokenDecimals: number
  releaseBlockNumber: number
}

export enum QuoteToken {
  'BNB' = 'BNB',
  'BTCB' = 'BTCB',
  'CAKE' = 'CAKE',
  'ETH' = 'ETH',
  'RBT' = 'RBT',
  'TSB' = 'TSB',
  'HALVAR' = 'HALVAR',
  'SMANRBTLP' = 'SMANRBTLP',
  'JUNGLE' = 'JUNGLE',
  'JUNGLEGOLD' = 'JUNGLEGOLD',
  'SYRUP' = 'SYRUP',
  'BUSD' = 'BUSD',
  'USDT' = 'USDT',
  'USDC' = 'USDC',
  'TWT' = 'TWT',
  'UST' = 'UST',
  'DAI' = 'DAI',
  'KONG' = 'KONG',
  'AXE' = 'AXE',
  'fUSDT' = 'fUSDT',
  'FTM' = 'FTM',
  'CLEVER' = 'CLEVER',
 
}

export enum PoolCategory {
  'COMMUNITY' = 'Community',
  'CORE' = 'Core',
  'BINANCE' = 'Binance', // Pools using native BNB behave differently than pools using a token
}

export interface Address {
  97?: string
  56: string
  250: string
}
 
export interface FarmConfig {
  pid: number
  lpSymbol: string
  lpAddresses: Address
  tokenSymbol: string
  tokenAddresses: Address
  quoteTokenSymbol: QuoteToken
  quoteTokenAdresses: Address
  multiplier?: string
  isTokenOnly?: boolean
  isCommunity?: boolean
  risk: number
  dual?: {
    rewardPerBlock: number
    earnLabel: string
    endBlock: number
  }
}

export interface PoolConfig {
  sousId: number
  image?: string
  tokenName: string
  tokenLabel: string
  tokenAddress: string
  stakingTokenName: QuoteToken
  stakingLimit?: number
  stakingTokenAddress?: string
  stakingTokenDecimals?: number
  contractAddress: Address
  poolCategory: PoolCategory
  projectLink: string
  tokenPerBlock: string
  minStake: string
  sortOrder?: number
  harvest?: boolean
  isFinished?: boolean
  isBush?: boolean
  bushVersion?: number
  tokenDecimals: number
  depositFee?: number
}

export type Nft = {
  name: string
  description: string
  originalImage: string
  previewImage: string
  blurImage: string
  sortOrder: number
  bunnyId: number
}
