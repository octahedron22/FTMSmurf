import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },

  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://spookyswap.finance/swap?outputCurrency=0x465BC6D1AB26EFA74EE75B1E565e896615B39E79',
      },
      {
        label: 'Liquidity',
        href: 'https://spookyswap.finance/add/0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83/0x465BC6D1AB26EFA74EE75B1E565e896615B39E79',
      },

    ],
  },

  {
    label: 'Presale',
    icon: 'TradeIcon',
    href: '/presale',
  },

  {
    label: 'Smurf Games soon...',
    icon: 'TicketIcon',
    href: '/',
  },

  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },

  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },

  {
    label: 'LP + FTM earning!',
    icon: 'HandshakeIcon',
    href: '/staking',
  },

  {
    label: 'Chart + Info',
    icon: 'InfoIcon',
    items: [

      {
        label: 'Clever Price kek.tools',
        href: 'https://kek.tools/t/0x465BC6D1AB26EFA74EE75B1E565e896615B39E79?pair=0x6a738109438a22be0536c01459587b68356c67b9',
      },

     
      {
        label: 'Clever Price dex.guru',
        href: 'https://dex.guru/token/0x465BC6D1AB26EFA74EE75B1E565e896615B39E79-fantom',
      },

      {
        label: 'Clever FTMScan',
        href: 'https://ftmscan.com/token/0x465BC6D1AB26EFA74EE75B1E565e896615B39E79',
      },

      {
        label: 'PreClever FTMScan',
        href: 'https://ftmscan.com/token/0x78Aaec841335aF79197564546b851Eb57ab57211',
      },

      {
        label: 'CleverPresale FTMScan',
        href: 'https://ftmscan.com/token/0x3129432c750a4300cf20A4dAb763fE198e9ef553',
      },

      {
        label: 'Clever MasterChef FTMScan',
        href: 'https://ftmscan.com/token/0x772dEC3e4A9B18e3B2636a70e11e4e0a90F19575',
      },

      
      

   
    ],
  },
 

  {
    label: 'vFat (check for APR!)',
    icon: 'IfoIcon',
    href: 'https://vfat.tools/fantom/smurf/',  
  
  },
  {
    label: 'GitBook',
    icon: 'MoreIcon',
    href: 'https://yieldfarming.gitbook.io/clever-smurf-ftm/',  
  
  },

    {
      label: 'Farming Countdown',
      icon: 'MoreIcon',
      href: 'https://ftmscan.com/block/countdown/21565000',
    },

    {
      label: 'RugDoc review ✔️',
      icon:  'AuditIcon',
      href: 'https://rugdoc.io/project/smurf-money-fantom/',      
    },
    {
      label: 'JaGo review ✔️',
      icon:  'AuditIcon',
      href: 'https://jagosafer.io/smurf-money',      
    },
 
 
 

  
]

export default config
