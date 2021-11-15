import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import Web3 from 'web3'
import { getTokenBalance } from 'utils/erc20'
import { Heading, Card, CardBody, Button, Text, Flex } from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import UnlockButton from 'components/UnlockButton'
import BalanceInputPresale from 'components/Input/BalanceInputPresale'
import { useAxeApprove } from 'hooks/useApprove'
import useTokenBalance, {}  from 'hooks/useTokenBalance'
import  { useCakeChangeContractBalance, useAxeChangeContractBalance } from 'hooks/useCakeChangeContractBalance'

import { getAxeAddress } from 'utils/addressHelpers' 
import { useAxeAllowance } from 'hooks/useAllowance'
import useChange from 'hooks/useChange'
import { getFullDisplayBalance, getBalanceNumber } from 'utils/formatBalance'
import BigNumber from 'bignumber.js'

import changeABI from 'config/abi/change.json'
import multicall from 'utils/multicall'

import { PreWikiFromWikiAmount} from './KongFromBusdBalance'
import CakeWalletBallance from './CakeWalletBallance'
import { useFarms } from '../../../state/hooks'


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
  const busdBalance = useTokenBalance('0x78Aaec841335aF79197564546b851Eb57ab57211')
  const totalBalance = getFullDisplayBalance(useTokenBalance(getAxeAddress()))
  const [requestedApproval, setRequestedApproval] = useState(false)
  const allowance = useAxeAllowance()
  const onApprove = useAxeApprove()
  const isApproved = account && allowance && allowance.isGreaterThan(0)
  const { onExchange } = useChange()
 
  const rajahBalance = useCakeChangeContractBalance('0x78Aaec841335aF79197564546b851Eb57ab57211')
  const rajahBalanceFrom = rajahBalance.div(1000000000000000000)
  const shieldBalance = useAxeChangeContractBalance('0x465BC6D1AB26EFA74EE75B1E565e896615B39E79')
  const shieldBalanceFrom = shieldBalance.div(1000000000000000000)

  const farms = useFarms();

  const multiplier1 = new BigNumber(farms[0].changeMultiplier).toNumber();
  const divider1 = new BigNumber(farms[0].changeDivider).toNumber();
  const factor = getBalanceNumber(new BigNumber('1').times(1000000000000000000).times(multiplier1).div(divider1)).toFixed(1)

  const TokenToReceive1 = getBalanceNumber((state.tokenAmount).times(10000000000000000000000000000000000000).times(multiplier1).div(divider1)).toFixed(3)


  const netBalance = getBalanceNumber(useTokenBalance('0xf3AFd731c5684C867a1d00ad7b6b9F9F3556231E'))
  const axeBalance = getBalanceNumber(useTokenBalance('0x78Aaec841335aF79197564546b851Eb57ab57211'))
  const shiBalance = getBalanceNumber(useTokenBalance('0x465BC6D1AB26EFA74EE75B1E565e896615B39E79'))

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
        Claim Your CLEVER
      </Button>
    ) : (
      <Button style={{ width: '100%' }} mt="8px" disabled={requestedApproval} onClick={handleApprove}>
        Approve preSale-Clever for Claim
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
              address: '0x465BC6D1AB26EFA74EE75B1E565e896615B39E79',
              symbol: 'CLEVER',
              decimals: '18',
              image:
                'https://smurf.money/images/egg/2.png',
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

      <Heading size="lg" mb="10px" color="#035efc" style={{ textAlign: 'center' }} >
       Claim CLEVER with pre-Clever
        </Heading>



        <Text fontSize="20px" mb="10px" color="pirmary" style={{ textAlign: 'center' }} >
       Rate is 1 to 1
        </Text>

        <Text fontSize="24px" mb="10px" color="#337af5" style={{ textAlign: 'center' }} >
  Available when Timer showes 0
        </Text>

        <Divider />

        <RowBetween>

        <CardImage
            src="images/egg/2.png"
            alt="clever logo"
            width={64}
            height={64}
        />

        <Block>
        <Text fontSize="17px" color="pirmary" >  {'preSale-Clever: \xa0 '} </Text>   
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
      <Flex>
      <Text fontSize="17px" color="pirmary" > {'>> \xa0'} </Text>
      <Text fontSize="17px" bold color="#337af5" > {shieldBalanceFrom.toFixed(2)} CLEVER </Text>
      <Text fontSize="17px" color="pirmary" >  {'\xa0 left to Claim <<'} </Text>
      </Flex>

      <RowBetween>

      <CardImage
        src="images/egg/2.png"
        alt="clever logo"
        width={130}
        height={130}
      />

      <Block>
      <Label>You will receive:</Label>

      {/* <Text bold fontSize="36px" style={{ lineHeight: '36px' }}>
          {TokenToReceive}
      </Text>

      <Text bold fontSize="36px" style={{ lineHeight: '36px' }}>
          {multiplier}
      </Text>

      <Text bold fontSize="36px" style={{ lineHeight: '36px' }}>
          {divider}
      </Text> */}

      <Text bold fontSize="36px" style={{ lineHeight: '36px' }}>
          {TokenToReceive1}
      </Text>
      <Text bold fontSize="26px" style={{ lineHeight: '36px' }}>
          CLEVER
      </Text>


      </Block> 
    
      </RowBetween>

      <RowBetween>
      <Label>CLEVER to Metamask</Label>
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
      <Text fontSize="15px">{axeBalance.toFixed(2)} pre-Clever </Text>
      <Text fontSize="20px">{shiBalance.toFixed(2)} CLEVER </Text>
      
   
      </Block>

    </CardBody>
  </StyledFarmStakingCard>
  )
}

export default ChangeCard
