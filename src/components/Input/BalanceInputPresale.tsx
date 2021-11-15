import React from 'react'
import styled from 'styled-components'
import { Button } from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useI18n from 'hooks/useI18n'
import BUSDWalletBalance from "views/XBLZD/components/BUSDWalletBalance"
import Input, { InputProps } from './Input'

const StyledSpacer = styled.div`
  width: ${(props) => props.theme.spacing[3]}px;
`
const StyledTokenAdornmentWrapper = styled.div`
  align-items: center;
  display: flex;
`
const StyledMaxText = styled.div`
  align-items: center;
  color: ${(props) => props.theme.colors.primary};
  display: flex;
  font-size: 14px;
  font-weight: 700;
  height: 44px;
  justify-content: flex-end;
`
const StyledTokenSymbol = styled.span`
  color: ${(props) => props.theme.colors.primary};
  font-weight: 700;
`
const Label = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 14px;
`
const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`
interface Props extends InputProps {
  max: number | string
  cryptoSymbol: string
  onSelectMax?: () => void 
}

const BalanceInputPresale : React.FC <Props> = ({ max, cryptoSymbol, onChange, onSelectMax, value   }) => {
  const TranslateString = useI18n()
  const { account } = useWallet();
if (account)
  { 
    return (    
    <div>       

      <Input
        endAdornment={
          <StyledTokenAdornmentWrapper>
            <StyledTokenSymbol>{cryptoSymbol}</StyledTokenSymbol>
            <StyledSpacer />
            <div>
              <Button size="sm" onClick={onSelectMax}>
                {TranslateString(452, 'Max')}
              </Button>
            </div>
          </StyledTokenAdornmentWrapper>
        }
        onChange={onChange}
        placeholder="0"
        value={value}
      />
    </div>
    
  )

      }
 return (  <BUSDWalletBalance />)
}

export default BalanceInputPresale
