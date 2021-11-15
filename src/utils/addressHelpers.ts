import addresses from 'config/constants/contracts'
import { Address } from 'config/constants/types'

const chainId = process.env.REACT_APP_CHAIN_ID

export const getAddress = (address: Address): string => {
  const mainNetChainId = 250
  return address[chainId] ? address[chainId] : address[mainNetChainId]
}

export const getCakeAddress = () => {
  return addresses.cake[chainId]
}
export const getJunglegAddress = () => {
  return addresses.jungleg[chainId]
}

export const getKongAddress = () => {
  return addresses.kong[chainId]
}

export const getCobraAddress = () => {
  return addresses.cobra[chainId]
}

export const getAxeAddress = () => {
  return addresses.axe[chainId]
}

export const getGoldAddress = () => {
  return addresses.gold[chainId]
}


export const getBusdAddress = () => {
  return addresses.busd[chainId]
}

export const getMasterChefAddress = () => {
  return addresses.masterChef[chainId]
}

export const getMasterChefCobraAddress = () => {
  return addresses.masterChefCobra[chainId]
}

export const getMulticallAddress = () => {
  return addresses.mulltiCall[chainId]
}
export const getWbnbAddress = () => {
  return addresses.wbnb[chainId]
}
export const getLotteryAddress = () => {
  return addresses.lottery[chainId]
}
export const getLotteryTicketAddress = () => {
  return addresses.lotteryNFT[chainId]
}

export const getxBlzdAddress = () => {
  return addresses.xblzd[chainId]
}

export const getPresaleAddress = () => {
  return addresses.presale[chainId]
}

export const getSaleAddress = () => {
  return addresses.sale[chainId]
}

export const getChangeAddress = () => {
  return addresses.change[chainId]
}