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
import useBuyWFTM from 'hooks/useBuyWFTM'
import { getFullDisplayBalance, getBalanceNumber } from 'utils/formatBalance'
import BigNumber from 'bignumber.js'
import { result } from 'lodash'
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
  const busdBalance = useTokenBalance('0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83')
  const totalBalance = getFullDisplayBalance(useTokenBalance('0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83'))
  const [requestedApproval, setRequestedApproval] = useState(false)
  const allowance = useAxeAllowance()
  const onApprove = useAxeApprove()
  const isApproved = true
  const { onExchange } = useBuyWFTM()
 
  const rajahBalance = useCakeChangeContractBalance('0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83')
  const rajahBalanceFrom = rajahBalance.div(1000000000000000000)
  const shieldBalance = useCakeChangeContractBalance('0x78Aaec841335aF79197564546b851Eb57ab57211')
  const shieldBalanceFrom = shieldBalance.div(1000000000000000000)
  const soldToken = new BigNumber(128676).minus(shieldBalanceFrom)

  const farms = useFarms();

  const multiplier1 = new BigNumber(farms[0].changeMultiplier).toNumber();
  const divider1 = new BigNumber(farms[0].changeDivider).toNumber();
  const tokenForEth1 = new BigNumber(farms[0].changeTokenPerBNB).toNumber();
  const factor = getBalanceNumber(new BigNumber('1').times(1000000000000000000).times(multiplier1).div(divider1)).toFixed(1)
  const tokenForEth = getBalanceNumber(new BigNumber('1').times(1000000000000000000).times(tokenForEth1)).toFixed(0)
  

  const TokenToReceive1 = getBalanceNumber((state.tokenAmount).times(10000000000000000000000000000000000000).times(tokenForEth1)).toFixed(3)


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
        // disabled={busdBalance.isLessThanOrEqualTo(0)}
        onClick={async () => {
          const busdwei = Web3.utils.toWei(value.toString(), 'ether');
          await onExchange(busdwei.toString())
        }}
      >
        Buy pre-Clever
      </Button>
    ) : (
      <Button style={{ width: '100%' }} mt="8px" disabled={requestedApproval} onClick={handleApprove}>
        Approve FTM
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
       Buy pre-Clever with FTM
        </Heading>

        <Heading size="lg" mb="10px" color="#035efc" style={{ textAlign: 'center' }} >
      Presale is over!
        </Heading>


   {/* <Flex style={{ textAlign: 'center' }}>
        <Text fontSize="20px" mb="10px" color="pirmary" style={{ textAlign: 'center' }} >
       {('Rate is: \xa0')}
        </Text>
        <Text fontSize="20px"  bold mb="10px" color="#155bd6" style={{ textAlign: 'center' }} >
       1 FTM
        </Text>
        <Text fontSize="20px" mb="10px" color="pirmary" style={{ textAlign: 'center' }} >
        {(' \xa0 to \xa0')}
        </Text>
        <Text fontSize="20px" bold mb="10px" color="#155bd6" style={{ textAlign: 'center' }} >
      {tokenForEth} pre-Clever
        </Text>

   </ Flex> */}



        <Divider />

        <RowBetween>

        <CardImage
            src="images/farms/ftm.png"
            alt="ftm logo"
            width={64}
            height={64}
        />

        <Block>
        <Text fontSize="17px" color="pirmary" >  {'FTM to spend: \xa0 '} </Text>   
        </Block>

        <BalanceInputPresale      
        cryptoSymbol = ""
        max = {totalBalance}
        
        value = {value || ''}
        onChange = {(e) => { 
          // to validate BUSD amount 
           const inputNumber = e.currentTarget.value.replace(/,/g,"."); 
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

      />
      </RowBetween>

     
      <Divider /> 
      <Flex>
      <Text fontSize="17px" color="pirmary" > {'>> \xa0'} </Text>
      <Text fontSize="17px" bold color="#337af5" > {shieldBalanceFrom.toFixed(2)} pre-Clever </Text>
      <Text fontSize="17px" color="pirmary" >  {'\xa0 left to Buy <<'} </Text>
      </Flex>
      <Text fontSize="15px" bold color="pirmary" > {'>> \xa0'} {soldToken.toFixed(2)} {'\xa0 sold <<'}</Text>

      <RowBetween>

      <CardImage
        src="images/egg/2.png"
        alt="clever logo"
        width={130}
        height={130}
      />

      <Block>
      <Label>You will receive:</Label>

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

     {/* <Actions>{account ? renderApprovalOrExchangeButton() : <UnlockButton fullWidth />}</Actions>
   */}
      <Divider />

      <Block>
      

      <Label>In your Wallet:</Label>

      <Text fontSize="15px">{axeBalance.toFixed(2)} pre-Clever </Text>
   
      
   
      </Block>

    </CardBody>
  </StyledFarmStakingCard>
  )
}

export default ChangeCard
