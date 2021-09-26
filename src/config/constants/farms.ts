import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'xSOLID',
    lpAddresses: {
      97: '0x16C0e0936E1B38Ff1F9b8a1e75d8ba29aDf87d30', // KNIGHT
      56: '0x16C0e0936E1B38Ff1F9b8a1e75d8ba29aDf87d30', // KNIGHT
    },
    tokenSymbol: 'HONOR',
    tokenAddresses: {
      97: '0x16C0e0936E1B38Ff1F9b8a1e75d8ba29aDf87d30', // KNIGHT
      56: '0x16C0e0936E1B38Ff1F9b8a1e75d8ba29aDf87d30', // KNIGHT
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    lpVersion: 1
  },
  {
    pid: 10,
    lpSymbol: 'SOLID',
    lpAddresses: {
      97: '0x8e53470B95d52A3D83637BF9E42891b17E785Ba4', // KNIGHT-BNB V2 LP
      56: '0x8e53470B95d52A3D83637BF9E42891b17E785Ba4', // KNIGHT-BNB V2 LP
    },
    tokenSymbol: 'KNIGHT',
    tokenAddresses: {
      97: '0x16C0e0936E1B38Ff1F9b8a1e75d8ba29aDf87d30', // KNIGHT
      56: '0x16C0e0936E1B38Ff1F9b8a1e75d8ba29aDf87d30', // KNIGHT
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    lpVersion: 2
  },
  {
    pid: 11,
    lpSymbol: 'xSOLID-WETH LP',
    lpAddresses: {
      97: '0x7789d441D4a32084A4484023424dc5F916dEde3f', // KNIGHT-BUSD V2 LP
      56: '0x7789d441D4a32084A4484023424dc5F916dEde3f', // KNIGHT-BUSD V2 LP
    },
    tokenSymbol: 'KNIGHT',
    tokenAddresses: {
      97: '0x16C0e0936E1B38Ff1F9b8a1e75d8ba29aDf87d30', // KNIGHT
      56: '0x16C0e0936E1B38Ff1F9b8a1e75d8ba29aDf87d30', // KNIGHT
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    lpVersion: 2
  },
  {
    pid: 12,
    lpSymbol: 'xSOLID-SUSHI LP',
    lpAddresses: {
      97: '0xd54ED4F02B3Ce38267AF6f39599dDaAc87435BbA', // TABLE-BNB V2 LP
      56: '0xd54ED4F02B3Ce38267AF6f39599dDaAc87435BbA', // TABLE-BNB V2 LP
    },
    tokenSymbol: 'TABLE',
    tokenAddresses: {
      97: '0xf5a2f7418035ce76967f515f39d65719bb0453b6', // TABLE
      56: '0xf5a2f7418035ce76967f515f39d65719bb0453b6', // TABLE
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    lpVersion: 2
  },
  {
    pid: 4,
    lpSymbol: 'BUSD-BNB V1 LP',
    lpAddresses: {
      97: '0x1b96b92314c44b159149f7e0303511fb2fc4774f', // BUSD-BNB LP
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f', // BUSD-BNB LP
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '0xe9e7cea3dedca5984780bafc599bd69add087d56', // BUSD
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56', // BUSD
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    lpVersion: 1
  },
]

export default farms
