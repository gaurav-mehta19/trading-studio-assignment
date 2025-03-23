import { atom } from 'recoil';

interface ScannerConfig {
    exchange: string;
    instrumentType: string;
    priceGrowth: number;
    minPrice: number;
    marketCapRank: number;
    avgDailyValue: number;
  }

export const scannerState = atom<ScannerConfig>({
    key: 'scannerState',
    default:{
        exchange: 'NSE',
        instrumentType: 'EQUITY',
        priceGrowth: 0,
        minPrice: 99,
        marketCapRank: 10,
        avgDailyValue: 300000000
    }
  
})