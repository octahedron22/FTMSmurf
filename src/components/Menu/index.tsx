import React, { useContext } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { allLanguages } from 'config/localisation/languageCodes'
import { LanguageContext } from 'contexts/Localisation/languageContext'
import useTheme from 'hooks/useTheme'
import { usePriceCakeBusd } from 'state/hooks'
import { getBusdAddress, getKongAddress, getCobraAddress  } from 'utils/addressHelpers' 
import { useBusdKongLpContractBalance, useKongBusdLpContractBalance, useBusdCobraLpContractBalance, useCobraBusdLpContractBalance }  from 'hooks/useTokenBalance'

// import { usePriceCobraBusd, usePriceKongBusd } from 'srcCobra\state\hooks.ts'
import { Menu as UikitMenu } from '@pancakeswap-libs/uikit'
import config from './config'

const Menu = (props) => {
  const { account, connect, reset } = useWallet()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()

  const junglePriceUsd = usePriceCakeBusd()

  const BusdKongLpBalance = useBusdKongLpContractBalance(getBusdAddress())
  const kongLpBalance = useKongBusdLpContractBalance(getKongAddress())
  const UsdPerKong = BusdKongLpBalance.div(kongLpBalance)

  const BusdCobraLpBalance = useBusdCobraLpContractBalance(getBusdAddress())
  const cobraLpBalance = useCobraBusdLpContractBalance(getKongAddress())
  const UsdPerCobra = BusdCobraLpBalance.div(cobraLpBalance)
  
  // const cobraPriceUsd = usePriceCobraBusd()
  // const kongPriceUsd = usePriceKongBusd()

  return (
    <UikitMenu
      account={account}
      login={connect}
      logout={reset}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={selectedLanguage && selectedLanguage.code}
      langs={allLanguages}
      setLang={setSelectedLanguage}      
      junglePriceUsd={junglePriceUsd.toNumber()}
      kongPriceUsd={UsdPerKong.toNumber()}
      cobraPriceUsd={UsdPerCobra.toNumber()}
      links={config}
      priceLink="https://dex.guru/token/0x465BC6D1AB26EFA74EE75B1E565e896615B39E79-fantom"
      {...props}
    />
  )
}

export default Menu
