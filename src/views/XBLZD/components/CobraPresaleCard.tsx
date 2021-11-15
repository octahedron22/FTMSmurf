import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import Web3 from 'web3'

import { Heading, Card, CardBody, Button, Text ,Input, Alert} from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import UnlockButton from 'components/UnlockButton'
import BalanceInputPresale from 'components/Input/BalanceInputPresale'
import { useBusdSaleApprove } from 'hooks/useApprove'
import useTokenBalance from 'hooks/useTokenBalance'
import { getBusdAddress } from 'utils/addressHelpers' 
import { useBusdSaleAllowance } from 'hooks/useAllowance'
import useExchangeSale from 'hooks/useSale'
import { getFullDisplayBalance, getBalanceNumber } from 'utils/formatBalance'
import BigNumber from 'bignumber.js'
import { AlignRight } from 'react-feather'
import { KongFromBusdAmount} from './KongFromBusdBalance'
import CobraUserWalletBallance from './CobraUserWalletBallance'





const StyledFarmStakingCard = styled(Card)`
align-items: center;
display: flex;
flex: 1;
border: 1px solid rgba(255, 204, 18, 0.5);` 


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

const KongPresaleCard = () => {
  
  const [value, setValue] = useState('')
  const [state, setState] = useState({
    tokenAmount: new BigNumber(0)
  })
  const { account } = useWallet()
  let tokenCount = new BigNumber(0);
  const busdBalance = useTokenBalance(getBusdAddress())
  const totalBalance = getFullDisplayBalance(useTokenBalance(getBusdAddress()))
  const [requestedApproval, setRequestedApproval] = useState(false)
  const allowance = useBusdSaleAllowance()
  const onApprove = useBusdSaleApprove()
  const isApproved = account && allowance && allowance.isGreaterThan(0)
  const { onExchange } = useExchangeSale()
  const TokenToRecive = getBalanceNumber((state.tokenAmount).times(1000000000000000000000000000000000000)).toFixed(3)
 

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
        BUY COBRA
      </Button>
    ) : (
      <Button style={{ width: '100%' }} mt="8px" disabled={requestedApproval} onClick={handleApprove}>
        Approve
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
              address: '0xf558822714E0D68AcA0D46c99aB5893aBA064dC3',
              symbol: 'COBRA',
              decimals: '18',
              image:
                'https://jungleswap.cash/images/tokens/cobra.png',
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

        <Heading size="lg" mb="24px">
        🐍 COBRA Presale is has ENDED 🎈🎈
        </Heading>
{/*
        <Heading size="md" mb="24px">
        Get COBRA in ration 6 : 1  ( NO TAX! )
        </Heading>

        <Heading size="md" mb="24px">
        ⏰Presale ends soon, LAST CHANCE!⏰
        </Heading>
 */}     
        <RowBetween>


        <CardImage
            src="https://jungleswap.cash/images/farms/busd.png"
            alt="busd logo"
            width={64}
            height={64}
        />

        <Block>
        <Label> BUSD to spend:  </Label>    
        </Block>

        <BalanceInputPresale      
        cryptoSymbol = "BUSD"
        max = {totalBalance}
        
        value = {value || ''}
        onChange = {(e) => { 
          // to validate BUSD amount 
           const inputNumber = e.currentTarget.value.replace(/[^0-9.]+/g,""); 
            const amount =new BigNumber(inputNumber) ;
            if (!amount.isNaN() && amount.gt(0))
            {
                tokenCount = KongFromBusdAmount(inputNumber);
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
          const amount =new BigNumber(totalBalance) ;
          if (!amount.isNaN() && amount.gt(0))
          {
              tokenCount = KongFromBusdAmount(totalBalance);
            
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
 
      <RowBetween>

      <CardImage
        src="https://jungleswap.cash/images/tokens/cobra.png"
        alt="COBRA logo"
        width={160}
        height={160}
      />

<Button onClick={addWatchToken} >
            +{' '}
            <img
              style={{ marginLeft: 0 }}
              width={30}
              src="/images/egg/metamask.png"
              alt="metamask logo"
            />
          </Button>


      <Block>
      <Label>COBRA to recive:</Label>
      <Text bold fontSize="36px" style={{ lineHeight: '36px' }}>
          {TokenToRecive}
      </Text>
      </Block>
         
        
      </RowBetween>

      {/* <Actions>{account ? renderApprovalOrExchangeButton() : <UnlockButton fullWidth />}</Actions> */}

      <Divider />

      <Block>
      <Label>Cobra in your Wallet:</Label>
      <CobraUserWalletBallance />
      </Block>

    </CardBody>
  </StyledFarmStakingCard>
  )
}

export default KongPresaleCard
