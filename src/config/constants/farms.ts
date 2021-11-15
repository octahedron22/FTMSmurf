import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [



{
  pid: 22,
  risk: 5,
  lpSymbol: 'CLEVER-FTM',
  lpAddresses: {
    97: '',
    56: '',  // 
    250: '0x6a738109438a22bE0536C01459587b68356C67b9',
  },
  tokenSymbol: 'CLEVER',
  tokenAddresses: {
    97: '',     
    56: '',
    250: '0x465BC6D1AB26EFA74EE75B1E565e896615B39E79',
  },
  quoteTokenSymbol: QuoteToken.FTM,
  quoteTokenAdresses: contracts.ftm,
},

{
  pid: 23,
  risk: 5,
  lpSymbol: 'CLEVER-USDC',
  lpAddresses: {
    97: '',
    56: '',  // 
    250: '0x0643c70a5Ee3b49568df239827645Dd6cE6536F3',
  },
  tokenSymbol: 'CLEVER',
  tokenAddresses: {
    97: '',     
    56: '',
    250: '0x465BC6D1AB26EFA74EE75B1E565e896615B39E79',
  },
  quoteTokenSymbol: QuoteToken.USDC,
  quoteTokenAdresses: contracts.usdc,
},

{
  pid: 27,
  risk: 5,
  lpSymbol: 'UNDEAD-FTM',
  lpAddresses: {
    97: '',
    56: '',  // 
    250: '0x4f24AAddAC1B93E5419CaF992EEeE57CFcc09644',
  },
  tokenSymbol: 'UNDEAD',
  tokenAddresses: {
    97: '',     
    56: '',
    250: '0x89dD4d82F4aF70df521A76A4f0997b5Dc571917E',
  },
  quoteTokenSymbol: QuoteToken.FTM,
  quoteTokenAdresses: contracts.ftm,
},

{
  pid: 25,
  risk: 5,
  lpSymbol: 'TREAT-FTM',
  lpAddresses: {
    97: '',
    56: '',  // 
    250: '0x4f24AAddAC1B93E5419CaF992EEeE57CFcc09644',
  },
  tokenSymbol: 'TREAT',
  tokenAddresses: {
    97: '',     
    56: '',
    250: '0x484f2ff94a7790759d56fb1efbace8075aba5e06',
  },
  quoteTokenSymbol: QuoteToken.FTM,
  quoteTokenAdresses: contracts.ftm,
},

{
pid: 24,
risk: 5,
isTokenOnly: true,
lpSymbol: 'CLEVER',
lpAddresses: {
  97: '',
  56: '',  
  250: '0x0643c70a5Ee3b49568df239827645Dd6cE6536F3',
},
tokenSymbol: 'CLEVER',
tokenAddresses: {
  97: '',     
  56: '',
  250: '0x465BC6D1AB26EFA74EE75B1E565e896615B39E79',
},
quoteTokenSymbol: QuoteToken.USDC,
quoteTokenAdresses: contracts.usdc,
},

{
  pid: 28,
  risk: 5,
  isTokenOnly: true,
  lpSymbol: 'UNDEAD',
  lpAddresses: {
    97: '',
    56: '',  // 
    250: '0x4f24AAddAC1B93E5419CaF992EEeE57CFcc09644',
  },
  tokenSymbol: 'UNDEAD',
  tokenAddresses: {
    97: '',     
    56: '',
    250: '0x89dD4d82F4aF70df521A76A4f0997b5Dc571917E',
  },
  quoteTokenSymbol: QuoteToken.FTM,
  quoteTokenAdresses: contracts.ftm,
},

{
  pid: 26,
  risk: 5,
  isTokenOnly: true,
  lpSymbol: 'TREAT',
  lpAddresses: {
    97: '',
    56: '',  // 
    250: '0x4f24AAddAC1B93E5419CaF992EEeE57CFcc09644',
  },
  tokenSymbol: 'TREAT',
  tokenAddresses: {
    97: '',     
    56: '',
    250: '0x484f2ff94a7790759d56fb1efbace8075aba5e06',
  },
  quoteTokenSymbol: QuoteToken.FTM,
  quoteTokenAdresses: contracts.ftm,
},







{
  pid: 0,
  risk: 5,
  lpSymbol: 'FTM-USDC',
  lpAddresses: {
    97: '',
    56: '',  // 
    250: '0x2b4C76d0dc16BE1C31D4C1DC53bF9B45987Fc75c',
  },
  tokenSymbol: 'FTM',
  tokenAddresses: {
    97: '',     
    56: '',
    250: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
  },
  quoteTokenSymbol: QuoteToken.USDC,
  quoteTokenAdresses: contracts.usdc,
},



{
  pid: 1,
  risk: 5,
  lpSymbol: 'ETH-FTM',
  lpAddresses: {
    97: '',
    56: '',  // 
    250: '0xf0702249F4D3A25cD3DED7859a165693685Ab577',
  },
  tokenSymbol: 'ETH',
  tokenAddresses: {
    97: '',     
    56: '',
    250: '0x74b23882a30290451A17c44f4F05243b6b58C76d',
  },
  quoteTokenSymbol: QuoteToken.FTM,
  quoteTokenAdresses: contracts.ftm,
},

{
  pid: 2,
  risk: 5,
  lpSymbol: 'FTM-BTC',
  lpAddresses: {
    97: '',
    56: '',  // 
    250: '0xfdb9ab8b9513ad9e419cf19530fee49d412c3ee3',
  },
  tokenSymbol: 'BTC',
  tokenAddresses: {
    97: '',     
    56: '',
    250: '0x321162Cd933E2Be498Cd2267a90534A804051b11',
  },
  quoteTokenSymbol: QuoteToken.FTM,
  quoteTokenAdresses: contracts.ftm,
},

{
  pid: 3,
  risk: 5,
  lpSymbol: 'FTM-BOO',
  lpAddresses: {
    97: '',
    56: '',  // 
    250: '0xec7178f4c41f346b2721907f5cf7628e388a7a58',
  },
  tokenSymbol: 'BOO',
  tokenAddresses: {
    97: '',     
    56: '',
    250: '0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE',
  },
  quoteTokenSymbol: QuoteToken.FTM,
  quoteTokenAdresses: contracts.ftm,
},

{
  pid: 4,
  risk: 5,
  lpSymbol: 'FTM-TOMB',
  lpAddresses: {
    97: '',
    56: '',  // 
    250: '0x2a651563c9d3af67ae0388a5c8f89b867038089e',
  },
  tokenSymbol: 'TOMB',
  tokenAddresses: {
    97: '',     
    56: '',
    250: '0x6c021ae822bea943b2e66552bde1d2696a53fbb7',
  },
  quoteTokenSymbol: QuoteToken.FTM,
  quoteTokenAdresses: contracts.ftm,
},


{
  pid: 5,
  risk: 5,
  lpSymbol: 'FTM-SUSHI',
  lpAddresses: {
    97: '',
    56: '',  // 
    250: '0xf84E313B36E86315af7a06ff26C8b20e9EB443C3',
  },
  tokenSymbol: 'SUSHI',
  tokenAddresses: {
    97: '',     
    56: '',
    250: '0xae75A438b2E0cB8Bb01Ec1E1e376De11D44477CC',
  },
  quoteTokenSymbol: QuoteToken.FTM,
  quoteTokenAdresses: contracts.ftm,
},

{
  pid: 6,
  risk: 5,
  lpSymbol: 'FTM-CRV',
  lpAddresses: {
    97: '',
    56: '',  // 
    250: '0xB471Ac6eF617e952b84C6a9fF5de65A9da96C93B',
  },
  tokenSymbol: 'CRV',
  tokenAddresses: {
    97: '',     
    56: '',
    250: '0x1E4F97b9f9F913c46F1632781732927B9019C68b',
  },
  quoteTokenSymbol: QuoteToken.FTM,
  quoteTokenAdresses: contracts.ftm,
},

{
  pid: 7,
  risk: 5,
  lpSymbol: 'FTM-DAI',
  lpAddresses: {
    97: '',
    56: '',  // 
    250: '0xe120ffBDA0d14f3Bb6d6053E90E63c572A66a428',
  },
  tokenSymbol: 'DAI',
  tokenAddresses: {
    97: '',     
    56: '',
    250: '0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E',
  },
  quoteTokenSymbol: QuoteToken.FTM,
  quoteTokenAdresses: contracts.ftm,
},

{
  pid: 8,
  risk: 5,
  lpSymbol: 'FTM-GEIST',
  lpAddresses: {
    97: '',
    56: '',  // 
    250: '0x668ae94d0870230ac007a01b471d02b2c94ddcb9',
  },
  tokenSymbol: 'GEIST',
  tokenAddresses: {
    97: '',     
    56: '',
    250: '0xd8321aa83fb0a4ecd6348d4577431310a6e0814d',
  },
  quoteTokenSymbol: QuoteToken.FTM,
  quoteTokenAdresses: contracts.ftm,
},


{
  pid: 9,
  risk: 5,
  lpSymbol: 'DAI-USDC',
  lpAddresses: {
    97: '',
    56: '',  // 
    250: '0x484237bc35cA671302d19694c66d617142FBC235',
  },
  tokenSymbol: 'DAI',
  tokenAddresses: {
    97: '',     
    56: '',
    250: '0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E',
  },
  quoteTokenSymbol: QuoteToken.USDC,
  quoteTokenAdresses: contracts.usdc,
},

{
  pid: 10,
  risk: 5,
  lpSymbol: 'fUSDT-USDC',
  lpAddresses: {
    97: '',
    56: '',  // 
    250: '0xFdef392aDc84607135C24ca45DE5452d77aa10DE',
  },
  tokenSymbol: 'USDC',
  tokenAddresses: {
    97: '',     
    56: '',
    250: '0x04068DA6C83AFCFA0e13ba15A6696662335D5B75',
  },
  quoteTokenSymbol: QuoteToken.fUSDT,
  quoteTokenAdresses: contracts.fusdt,
},


{
  pid: 11,
  risk: 5,
  isTokenOnly: true,
  lpSymbol: 'WFTM',
  lpAddresses: {
    97: '',
    56: '',  // 
    250: '0x2b4C76d0dc16BE1C31D4C1DC53bF9B45987Fc75c',
  },
  tokenSymbol: 'FTM',
  tokenAddresses: {
    97: '',     
    56: '',
    250: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
  },
  quoteTokenSymbol: QuoteToken.USDC,
  quoteTokenAdresses: contracts.usdc,
},


{
  pid: 12,
  risk: 5,
  isTokenOnly: true,
  lpSymbol: 'BOO',
  lpAddresses: {
    97: '',
    56: '',  // 
    250: '0xec7178f4c41f346b2721907f5cf7628e388a7a58',
  },
  tokenSymbol: 'BOO',
  tokenAddresses: {
    97: '',     
    56: '',
    250: '0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE',
  },
  quoteTokenSymbol: QuoteToken.FTM,
  quoteTokenAdresses: contracts.ftm,
},

{
  pid: 13,
  risk: 5,
  isTokenOnly: true,
  lpSymbol: 'SPIRIT',
  lpAddresses: {
    97: '',
    56: '',  // 
    250: '0x30748322b6e34545dbe0788c421886aeb5297789',
  },
  tokenSymbol: 'SPIRIT',
  tokenAddresses: {
    97: '',     
    56: '',
    250: '0x5cc61a78f164885776aa610fb0fe1257df78e59b',
  },
  quoteTokenSymbol: QuoteToken.FTM,
  quoteTokenAdresses: contracts.ftm,
},


{
  pid: 14,
  risk: 5,
  isTokenOnly: true,
  lpSymbol: 'USDC',
  lpAddresses: {
    97: '',
    56: '',  // 
    250: '0x2b4C76d0dc16BE1C31D4C1DC53bF9B45987Fc75c',
  },
  tokenSymbol: 'USDC',
  tokenAddresses: {
    97: '',     
    56: '',
    250: '0x04068DA6C83AFCFA0e13ba15A6696662335D5B75',
  },
  quoteTokenSymbol: QuoteToken.USDC,
  quoteTokenAdresses: contracts.usdc,
},


{
  pid: 15,
  risk: 5,
  isTokenOnly: true,
  lpSymbol: 'DAI',
  lpAddresses: {
    97: '',
    56: '',  // 
    250: '0x484237bc35cA671302d19694c66d617142FBC235',
  },
  tokenSymbol: 'DAI',
  tokenAddresses: {
    97: '',     
    56: '',
    250: '0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E',
  },
  quoteTokenSymbol: QuoteToken.USDC,
  quoteTokenAdresses: contracts.usdc,
},

{
  pid: 16,
  risk: 5,
  isTokenOnly: true,
  lpSymbol: 'fUSDT',
  lpAddresses: {
    97: '',
    56: '',  // 
    250: '0xFdef392aDc84607135C24ca45DE5452d77aa10DE',
  },
  tokenSymbol: 'fUSDT',
  tokenAddresses: {
    97: '',     
    56: '',
    250: '0x049d68029688eAbF473097a2fC38ef61633A3C7A',
  },
  quoteTokenSymbol: QuoteToken.USDC,
  quoteTokenAdresses: contracts.usdc,
},

{
  pid: 17,
  risk: 5,
  isTokenOnly: true,
  lpSymbol: 'BTC',
  lpAddresses: {
    97: '',
    56: '',  // 
    250: '0xfdb9ab8b9513ad9e419cf19530fee49d412c3ee3',
  },
  tokenSymbol: 'BTC',
  tokenAddresses: {
    97: '',     
    56: '',
    250: '0x321162Cd933E2Be498Cd2267a90534A804051b11',
  },
  quoteTokenSymbol: QuoteToken.FTM,
  quoteTokenAdresses: contracts.ftm,
},



{
  pid: 18,
  risk: 5,
  isTokenOnly: true,
  lpSymbol: 'ETH',
  lpAddresses: {
    97: '',
    56: '',  // 
    250: '0xf0702249F4D3A25cD3DED7859a165693685Ab577',
  },
  tokenSymbol: 'ETH',
  tokenAddresses: {
    97: '',     
    56: '',
    250: '0x74b23882a30290451A17c44f4F05243b6b58C76d',
  },
  quoteTokenSymbol: QuoteToken.FTM,
  quoteTokenAdresses: contracts.ftm,
},



{
  pid: 19,
  risk: 5,
  isTokenOnly: true,
  lpSymbol: 'BNB',
  lpAddresses: {
    97: '',
    56: '',  // 
    250: '0x956de13ea0fa5b577e4097be837bf4ac80005820',
  },
  tokenSymbol: 'BNB',
  tokenAddresses: {
    97: '',     
    56: '',
    250: '0xD67de0e0a0Fd7b15dC8348Bb9BE742F3c5850454',
  },
  quoteTokenSymbol: QuoteToken.FTM,
  quoteTokenAdresses: contracts.ftm,
},

{
  pid: 20,
  risk: 5,
  isTokenOnly: true,
  lpSymbol: 'TOMB',
  lpAddresses: {
    97: '',
    56: '',  // 
    250: '0x2a651563c9d3af67ae0388a5c8f89b867038089e',
  },
  tokenSymbol: 'TOMB',
  tokenAddresses: {
    97: '',     
    56: '',
    250: '0x6c021ae822bea943b2e66552bde1d2696a53fbb7',
  },
  quoteTokenSymbol: QuoteToken.FTM,
  quoteTokenAdresses: contracts.ftm,
},


{
  pid: 21,
  risk: 5,
  isTokenOnly: true,
  lpSymbol: 'GEIST',
  lpAddresses: {
    97: '',
    56: '',  // 
    250: '0x668ae94d0870230ac007a01b471d02b2c94ddcb9',
  },
  tokenSymbol: 'GEIST',
  tokenAddresses: {
    97: '',     
    56: '',
    250: '0xd8321aa83fb0a4ecd6348d4577431310a6e0814d',
  },
  quoteTokenSymbol: QuoteToken.FTM,
  quoteTokenAdresses: contracts.ftm,
},

]

export default farms