import contracts from './contracts'
import { FarmConfigPRICE, QuoteToken } from './typesPRICE'

const farmsPRICE: FarmConfigPRICE[] = [

 
  {
    pid: 5,
    risk: 5,
    lpSymbol: 'FTM-USDC',
    lpAddresses: {
      97: '',
      56: '0x2b4C76d0dc16BE1C31D4C1DC53bF9B45987Fc75c',  // KONG-BUSD
      250: '',
    },
    tokenSymbol: 'FTM',
    tokenAddresses: {
      97: '',     
      56: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
      250: '',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  {
    pid: 6,
    risk: 5,
    lpSymbol: 'FTM-ETH',
    lpAddresses: {
      97: '',
      56: '0xf0702249F4D3A25cD3DED7859a165693685Ab577',  // COBRA-BUSD
      250: '',
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',     
      56: '0x74b23882a30290451A17c44f4F05243b6b58C76d',
      250: '',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

]

export default farmsPRICE