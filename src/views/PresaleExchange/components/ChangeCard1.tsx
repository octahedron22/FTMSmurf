import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import Web3 from 'web3'
import { getTokenBalance } from 'utils/erc20'
import { Heading, Card, CardBody, Button, Text } from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import UnlockButton from 'components/UnlockButton'
import BalanceInputPresale from 'components/Input/BalanceInputPresale'
import { useGoldApprove } from 'hooks/useApprove'
import  useTokenBalance  from 'hooks/useTokenBalance'
import  { useCakeChangeContractBalance } from 'hooks/useCakeChangeContractBalance'
import { getGoldAddress } from 'utils/addressHelpers' 
import { useGoldAllowance } from 'hooks/useAllowance'
import useChange from 'hooks/useChange'
import { getFullDisplayBalance, getBalanceNumber } from 'utils/formatBalance'
import BigNumber from 'bignumber.js'
import { PreWikiFromWikiAmount} from './KongFromBusdBalance'
import CakeWalletBallance from './CakeWalletBallance'


const StyledFarmStakingCard = styled(Card)`
align-items: center;
justify-content: center;
display: flex;
flex: 1;
border: 1px solid rgba(100, 150, 250, 0.5);` 


const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`

const RowBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const Divider = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.colors.textSubtle};
  margin: 16px 0;
`

const CardImage = styled.img`
  margin-right: 8px;
`

const Label = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 14px;
`

const Actions = styled.div`
  margin-top: 24px;
`

interface Props {
  currency: string
  contract: any
  currencyAddress: string
  onDismiss?: () => void
}

const ChangeCard = () => {
  
  const [value, setValue] = useState('')
  const [state, setState] = useState({
    tokenAmount: new BigNumber(0)
  })
  const { account } = useWallet()
  let tokenCount = new BigNumber(0);
  const busdBalance = useTokenBalance('0xf3AFd731c5684C867a1d00ad7b6b9F9F3556231E')
  const totalBalance = getFullDisplayBalance(useTokenBalance(getGoldAddress()))
  const [requestedApproval, setRequestedApproval] = useState(false)
  const allowance = useGoldAllowance()
  const onApprove = useGoldApprove()
  const isApproved = account && allowance && allowance.isGreaterThan(0)
  const { onExchange } = useChange()
  const TokenToRecive = getBalanceNumber((state.tokenAmount).times(100000000000000000000000000000000000000)).toFixed(2)
  const rajahBalance = useCakeChangeContractBalance('0x0841f5b9781FDEABea7a9ec8E4884FF05C439A3B')
  const rajahBalanceFrom = rajahBalance.div(1000000000000000000)
  const netBalance = getBalanceNumber(useTokenBalance('0xf3AFd731c5684C867a1d00ad7b6b9F9F3556231E'))
  const axeBalance = getBalanceNumber(useTokenBalance('0x0841f5b9781FDEABea7a9ec8E4884FF05C439A3B'))
  const shiBalance = getBalanceNumber(useTokenBalance('0xe850B1aa4B3c705A6adb13EdCf8c628E30A59Af6'))


  const handleApprove = useCallback(async () => {
    try {
      setRequestedApproval(true)
      await onApprove()
      setRequestedApproval(false)
    } catch (e) {
      console.error(e)
    }
  }, [onApprove])

  const renderApprovalOrExchangeButton = () => {
    return isApproved ? (
      <Button
        style={{ width: '100%' }}
        mt="8px"
        disabled={busdBalance.isLessThanOrEqualTo(0)}
        onClick={async () => {
          const busdwei = Web3.utils.toWei(value.toString(), 'ether');
          await onExchange(busdwei.toString())
        }}
      >
        Sell your NET
      </Button>
    ) : (
      <Button style={{ width: '100%' }} mt="8px" disabled={requestedApproval} onClick={handleApprove}>
        Approve NET to sell
      </Button>
    )
  }

  const addWatchToken = useCallback(async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const provider = window.ethereum
    if (provider) {
      try {
        const wasAdded = await provider.request({
          method: 'wallet_watchAsset',
          params: {
            type: 'ERC20',
            options: {
              address: '0xe850B1aa4B3c705A6adb13EdCf8c628E30A59Af6',
              symbol: 'SHIELD',
              decimals: '18',
              image:
                'https://centaurus.network/images/egg/shieldmm.png',
              },
            },
          })
  
          if (wasAdded) {
            console.log('Token was added')
          }
        } catch (error) {
          // TODO: find a way to handle when the user rejects transaction or it fails
        }
      }
    }, [])



  return (
    <StyledFarmStakingCard>
      <CardBody>

      <Heading size="lg" mb="10px" color="#fff982" style={{ textAlign: 'center' }} >
       Get ?? SHIELD for 1 NET !
        </Heading>

        <Heading size="lg" mb="10px" color="#fff982" style={{ textAlign: 'center' }} >
       -- SOON --
        </Heading>

        <Divider />

        <RowBetween>

        <CardImage
            src="images/egg/netmm.png"
            alt="net logo"
            width={64}
            height={64}
        />

        <Block>
        <Text fontSize="17px" color="pirmary" >  {'NET: \xa0 '} </Text>   
        </Block>

        <BalanceInputPresale      
        cryptoSymbol = ""
        max = {totalBalance}
        
        value = {value || ''}
        onChange = {(e) => { 
          // to validate BUSD amount 
           const inputNumber = e.currentTarget.value.replace(/[^0-9.]+/g,""); 
            const amount = new BigNumber(inputNumber) ;
            if (!amount.isNaN() && amount.gt(0))
            {
                tokenCount = PreWikiFromWikiAmount(inputNumber);
              setState({tokenAmount: tokenCount });
            }
              else 
              {
                tokenCount =new BigNumber(0) ;
                setState({tokenAmount: tokenCount });
              }
             
              setValue(inputNumber);  
            }         
        }        
       
        onSelectMax={() => { 
         setValue(totalBalance.toString());          
          const amount = new BigNumber(totalBalance) ;
          if (!amount.isNaN() && amount.gt(0))
          {
              tokenCount = PreWikiFromWikiAmount(totalBalance);
            
            setState({tokenAmount: tokenCount });
          }
            else 
            {
              tokenCount =new BigNumber(0) ;
              setState({tokenAmount: tokenCount });
            }           
          }
        }
      />
      </RowBetween>

     
      <Divider /> 
      <Text fontSize="17px" color="#33f72d" > {'>> \xa0'} {rajahBalanceFrom.toFixed(2)} {'\xa0 SHILED left to buy <<'} </Text>

      <RowBetween>

      <CardImage
        src="images/egg/shield.png"
        alt="shield logo"
        width={130}
        height={130}
      />

      <Block>
      <Label>SHIELD to receive:</Label>
      <Text bold fontSize="36px" style={{ lineHeight: '36px' }}>
          {TokenToRecive}
      </Text>
      </Block> 
    
      </RowBetween>

      <RowBetween>
      <Label>SHIELD to Metamask</Label>
      <Button onClick={addWatchToken} >
            +{' \xa0 '}
            <img
              style={{ marginLeft: 0 }}
              width={30}
              src="https://jungleswap.cash/images/egg/metamask.png"
              alt="metamask logo"
            />
      </Button>

      </RowBetween>

     <Actions>{account ? renderApprovalOrExchangeButton() : <UnlockButton fullWidth />}</Actions>
  
      <Divider />

      <Block>
      

      <Label>In your Wallet:</Label>
      <Text fontSize="20px">{shiBalance.toFixed(0)} SHIELD </Text>
      <Text fontSize="15px">{axeBalance.toFixed(0)} AXE </Text>
      <Text fontSize="15px">{netBalance.toFixed(0)} NET </Text>
      </Block>

    </CardBody>
  </StyledFarmStakingCard>
  )
}

export default ChangeCard
