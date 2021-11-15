import BigNumber from 'bignumber.js'
import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { Button, IconButton, useModal, AddIcon, Image, Text } from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import UnlockButton from 'components/UnlockButton'
import Label from 'components/Label'
import { useERC20 } from 'hooks/useContract'
import { useSousApprove } from 'hooks/useApprove'
import useI18n from 'hooks/useI18n'
import { useSousStake } from 'hooks/useStake'
import { useSousUnstake } from 'hooks/useUnstake'
import useBlock from 'hooks/useBlock'

import { getBalanceNumber } from 'utils/formatBalance'
import  { useCakeChangeContractBalance, useCleverFTMContractBalance, useFTMFTMContractBalance } from 'hooks/useCakeChangeContractBalance'

import { useSousHarvest } from 'hooks/useHarvest'
import Balance from 'components/Balance'
import { QuoteToken, PoolCategory } from 'config/constants/types'
import { Pool } from 'state/types'
import { usePools, usePoolFromPid, useFarms, usePriceBnbBusd, usePriceCakeBusd } from 'state/hooks'
import DepositModal from './DepositModal'
import WithdrawModal from './WithdrawModal'
import CompoundModal from './CompoundModal'
import CardTitle from './CardTitle'
import Card from './Card'
import OldSyrupTitle from './OldSyrupTitle'
import HarvestButton from './HarvestButton'
import CardFooter from './CardFooter'


interface PoolWithApy extends Pool {
  apy: BigNumber
}

interface HarvestProps {
  pool: PoolWithApy

}

const PoolCard: React.FC<HarvestProps> = ({ pool }) => {
  const {
    sousId,
    image,
    tokenName,
    tokenLabel,
    stakingTokenName,
    stakingTokenAddress,
    projectLink,
    harvest,
    minStake,
    apy,
    tokenDecimals,
    poolCategory,
    totalStaked,
    startBlock,
    endBlock,
    isFinished,
    userData,
    stakingLimit,
  } = pool
  
  // Pools using native BNB behave differently than pools using a token
  const isBnbPool = poolCategory === PoolCategory.BINANCE
  const TranslateString = useI18n()
  const stakingTokenContract = useERC20(stakingTokenAddress)
  const { account } = useWallet()
  const block = useBlock()
  const farms = useFarms()
  const { onApprove } = useSousApprove(stakingTokenContract, sousId)
  const { onStake } = useSousStake(sousId, isBnbPool)
  const { onUnstake } = useSousUnstake(sousId)
  const { onReward } = useSousHarvest(sousId, isBnbPool)

  const [requestedApproval, setRequestedApproval] = useState(false)
  const [pendingTx, setPendingTx] = useState(false)

  const allowance = new BigNumber(userData?.allowance || 0)
  const stakingTokenBalance = new BigNumber(userData?.stakingTokenBalance || 0)
  const stakedBalance = new BigNumber(userData?.stakedBalance || 0)
  const earnings = new BigNumber(userData?.pendingReward || 0)

  const startblocktest = new BigNumber(farms[0].pool93Start).toNumber();
  const endBlockTest = new BigNumber(farms[0].pool93End).toNumber();
  const rewardperBlock = new BigNumber(farms[0].reward93perBlock).div(1000000000000000000).toNumber().toFixed(8);
  const rewardperDay = new BigNumber(farms[0].reward93perDay).div(1000000000000000000).toNumber().toFixed(3);

  const blocksUntilStart = Math.max(startblocktest - block, 0)
  const startInH = new BigNumber(blocksUntilStart).div(4000).toNumber().toFixed(3);

  const blocksRemaining = Math.max(endBlockTest - block, 0)
  const isOldSyrup = stakingTokenName === QuoteToken.SYRUP
  const accountHasStakedBalance = stakedBalance?.toNumber() > 0
  const needsApproval = !accountHasStakedBalance && !allowance.toNumber() && !isBnbPool
  const isCardActive = isFinished && accountHasStakedBalance


  const TotalStake = useCleverFTMContractBalance('0x465BC6D1AB26EFA74EE75B1E565e896615B39E79')
  const FTMBalance = useFTMFTMContractBalance('0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83')
  
  const FtmPrice = usePriceBnbBusd().toNumber()
  const CleverPrice = usePriceCakeBusd().toNumber()
  

  const apr1 = (((CleverPrice/FtmPrice))*10000).toFixed(2)
  const apr2 = (new BigNumber(apr1)).toNumber()/(new BigNumber(TotalStake)).div(250000000000000000000).toNumber()
  const apr = apr2.toFixed(2)

  const convertedLimit = new BigNumber(stakingLimit).multipliedBy(new BigNumber(10).pow(tokenDecimals))
  const [onPresentDeposit] = useModal(
    <DepositModal
      max={stakingLimit && stakingTokenBalance.isGreaterThan(convertedLimit) ? convertedLimit : stakingTokenBalance}
      onConfirm={onStake}
      tokenName={stakingLimit ? `${stakingTokenName} (${stakingLimit} max)` : stakingTokenName}
    />,
  )

  const [onPresentCompound] = useModal(
    <CompoundModal earnings={earnings} onConfirm={onStake} tokenName={stakingTokenName} />,
  )

  const [onPresentWithdraw] = useModal(
    <WithdrawModal max={stakedBalance} onConfirm={onUnstake} tokenName={stakingTokenName} />,
  )

  const handleApprove = useCallback(async () => {
    try {
      setRequestedApproval(true)
      const txHash = await onApprove()
      // user rejected tx or didn't go thru
      if (!txHash) {
        setRequestedApproval(false)
      }
    } catch (e) {
      console.error(e)
    }
  }, [onApprove, setRequestedApproval])

  return (
    <Card isActive={isCardActive} isFinished={isFinished && sousId !== 0}>
      {isFinished && sousId !== 0 && <PoolFinishedSash />}
      <div style={{ padding: '24px' }}>
        <CardTitle isFinished={isFinished && sousId !== 0}>
          {isOldSyrup && '[OLD]'} {tokenLabel} {TranslateString(348, 'Pool')}
        </CardTitle>
        <div style={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
          <div style={{ flex: 1 }}>
            <Image src={`/images/tokens/${image || tokenLabel}.png`} width={64} height={64} alt={tokenLabel} />
          </div>
          {account && harvest && !isOldSyrup && (
            <HarvestButton
              disabled={!earnings.toNumber() || pendingTx}
              text={pendingTx ? 'Collecting' : 'Harvest'}
              onClick={async () => {
                setPendingTx(true)
                await onReward()
                setPendingTx(false)
              }}
            />
          )}
        </div>
        {!isOldSyrup ? (
          <BalanceAndCompound>
            <Balance value={getBalanceNumber(earnings, tokenDecimals)} isDisabled={isFinished} />
            {sousId === 0 && account && harvest && (
              <HarvestButton
                disabled={!earnings.toNumber() || pendingTx}
                text={pendingTx ? TranslateString(999, 'Compounding') : TranslateString(999, 'Compound')}
                onClick={onPresentCompound}
              />
            )}
          </BalanceAndCompound>
        ) : (
          <OldSyrupTitle hasBalance={accountHasStakedBalance} />
        )}
        <Label isFinished={isFinished && sousId !== 0} text={TranslateString(330, `${tokenName} earned`)} />
        <StyledCardActions>
          {!account && <UnlockButton />}
          {account &&
            (needsApproval && !isOldSyrup ? (
              <div style={{ flex: 1 }}>
                <Button disabled={isFinished || requestedApproval} onClick={handleApprove} fullWidth>
                  {`Approve ${stakingTokenName}`}
                </Button>
              </div>
            ) : (
              <>
                <Button
                  disabled={stakedBalance.eq(new BigNumber(0)) || pendingTx}
                  onClick={
                    isOldSyrup
                      ? async () => {
                          setPendingTx(true)
                          await onUnstake('0')
                          setPendingTx(false)
                        }
                      : onPresentWithdraw
                  }
                >
                  {`Unstake ${stakingTokenName}`}
                </Button>
                <StyledActionSpacer />
                {!isOldSyrup && (
                  <IconButton disabled={isFinished && sousId !== 0} onClick={onPresentDeposit}>
                    <AddIcon color="background" />
                  </IconButton>
                )}
              </>
            ))}
        </StyledCardActions>

        <StyledDetails>
          <div style={{ flex: 1 }}><Text fontSize="12px" color="#fc0377"> Min Stake: </Text></div>

            <Text fontSize="14px" color="#fc0377"> {minStake} CLEVER </Text>
      
        </StyledDetails>



        
{/* 
        <StyledDetails>
          <div style={{ flex: 1 }}>
            {TranslateString(999, 'APR')}:
          </div>
          {}
        </StyledDetails>  */}
<br/>
        <StyledDetails>
          <div style={{ flex: 1 }}>
            <span role="img" aria-label={stakingTokenName}>
            ☄️ {' '}
            </span>
            {TranslateString(384, 'Your Stake')}:
          </div>
          <Balance fontSize="14px" isDisabled={isFinished} value={getBalanceNumber(stakedBalance)} />
        </StyledDetails>

        {/* <StyledDetails>
          <div style={{ flex: 1 }}>
            {TranslateString(999, 'Total Stake')}:
          </div>
          <Balance fontSize="14px" isDisabled={isFinished} value={getBalanceNumber(totalStaked)} />
        </StyledDetails>  */}


{/* 
        <StyledDetails>
          <div style={{ flex: 1 }}>
            <span role="img" aria-label={stakingTokenName}>
            ☄️ {' '}
            </span>
            {TranslateString(999, 'Remaining FTM')}:
          </div>
          <Balance fontSize="14px" isDisabled={isFinished} value={getBalanceNumber(FTMBalance)} />
        </StyledDetails> */}


        
        {/* <StyledDetails>
          <div style={{ flex: 1 }}>
            {TranslateString(999, 'Rewards per Block')}:
          </div>
          {rewardperBlock}
        </StyledDetails> 

        <StyledDetails>
          <div style={{ flex: 1 }}>
            {TranslateString(999, 'Rewards per Day')}:
          </div>
          {rewardperDay} 
        </StyledDetails>  */}
        

        {/* <StyledDetails>
          <div style={{ flex: 1 }}>
            {TranslateString(999, 'Blocks until Start:')}:
          </div>
          {blocksUntilStart} 
        </StyledDetails>
        
      
        <StyledDetails>
          <div style={{ flex: 1 }}>
            {TranslateString(999, 'Hours until Start:')}:
          </div>
          {startInH} 
        </StyledDetails>  */}

      </div>
      <CardFooter
        projectLink={projectLink}
        totalStaked={totalStaked}
        blocksRemaining={blocksRemaining}
        isFinished={isFinished}
        blocksUntilStart={blocksUntilStart}
        poolCategory={poolCategory}
      />
    </Card>
  )
}

const PoolFinishedSash = styled.div`
  background-image: url('/images/pool-finished-sash.svg');
  background-position: top right;
  background-repeat: not-repeat;
  height: 135px;
  position: absolute;
  right: -24px;
  top: -24px;
  width: 135px;
`

const StyledCardActions = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px 0;
  width: 100%;
  box-sizing: border-box;
`

const BalanceAndCompound = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`

const StyledActionSpacer = styled.div`
  height: ${(props) => props.theme.spacing[4]}px;
  width: ${(props) => props.theme.spacing[4]}px;
`

const StyledDetails = styled.div`
  display: flex;
  font-size: 14px;
`

export default PoolCard
