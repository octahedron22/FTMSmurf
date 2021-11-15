import { Pool}  from 'state/types'
import { PoolConfig, QuoteToken, PoolCategory } from './types'


const pools: Pool[] = [

  {
    sousId: 94,
    tokenName: 'FTM-CLEVER-LP',
    tokenLabel: 'CLEVER-FTM-CLEVER',
    tokenAddress: '0x6a738109438a22bE0536C01459587b68356C67b9',
    stakingTokenName: QuoteToken.CLEVER,
    stakingTokenAddress: '0x465BC6D1AB26EFA74EE75B1E565e896615B39E79',
    contractAddress: {
      97: '',
      56: '',
      250: '0x2b3932E35AC086878325c689eE7517aac12cE865',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://smurf.money/',
    
    harvest: true,
    tokenPerBlock: '0.001736111111',
    minStake: '100',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
    isBush: true,
    bushVersion: 1,
  },

  {
    sousId: 93,
    tokenName: 'wFTM',
    tokenLabel: 'CLEVER-wFTM',
    tokenAddress: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
    stakingTokenName: QuoteToken.CLEVER,
    stakingTokenAddress: '0x465BC6D1AB26EFA74EE75B1E565e896615B39E79',
    contractAddress: {
      97: '',
      56: '',
      250: '0x5771CD928B77C5C7c013b1c7F390E3a64ADBEaDD',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://smurf.money/',
    
    harvest: true,
    tokenPerBlock: '0.001736111111',
    minStake: '0',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
    isBush: true,
    bushVersion: 1,
  },



  // {
  //   sousId: 92,
  //   tokenName: 'COBRA',
  //   tokenLabel: 'COBRA-Gold',
  //   tokenAddress: '0xf558822714E0D68AcA0D46c99aB5893aBA064dC3',
  //   stakingTokenName: QuoteToken.JUNGLEGOLD,
  //   stakingTokenAddress: '0x2D7aDd5Ad50405f86A6F39e893f3d85960ec73Ca',
  //   contractAddress: {
  //     97: '',
  //     56: '0x5A2642724c7A0fE9068968aFf56c5163c4253cFf',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   projectLink: 'https://jungleswap.cash',
    
  //   harvest: true,
  //   tokenPerBlock: '0.000520833333333333',
  //   sortOrder: 999,
  //   isFinished: false,
  //   tokenDecimals: 18,
  //   isBush: true,
  //   bushVersion: 1,
  // },


  // {
  //   sousId: 90,
  //   tokenName: 'KONG (not Acitve)',
  //   tokenLabel: 'KONG-Jungle',
  //   tokenAddress: '0xAc9178feD286e0e4F21D50d40f6C77503C96C19c',
  //   stakingTokenName: QuoteToken.JUNGLE,
  //   stakingTokenAddress: '0x5afFcD905fBDc00Cbee9c8D78BBbD256b0344d3b',
  //   contractAddress: {
  //     97: '',
  //     56: '0x3666E64fE1F1FdEcD5894C17538325B57aDf4b85',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   projectLink: 'https://jungleswap.cash',
  //   harvest: true,
  //   tokenPerBlock: '0.0003472222222',
  //   sortOrder: 999,
  //   isFinished: false,
  //   tokenDecimals: 18,
  //   isBush: true,
  //   bushVersion: 1,
  // },

  // {
  //   sousId: 91,
  //   tokenName: 'KONG (not Acitve)',
  //   tokenLabel: 'KONG-Gold',
  //   tokenAddress: '0xAc9178feD286e0e4F21D50d40f6C77503C96C19c',
  //   stakingTokenName: QuoteToken.JUNGLEGOLD,
  //   stakingTokenAddress: '0x2D7aDd5Ad50405f86A6F39e893f3d85960ec73Ca',
  //   contractAddress: {
  //     97: '',
  //     56: '0xc01Af20C687085d486f5510A8c2667E37c4baDF8',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   projectLink: 'https://jungleswap.cash',
  //   harvest: true,
  //   tokenPerBlock: '0.0004166666667',
  //   sortOrder: 999,
  //   isFinished: false,
  //   tokenDecimals: 18,
  //   isBush: true,
  //   bushVersion: 1,
  // },

]

export default pools
