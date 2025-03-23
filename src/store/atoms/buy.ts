import { atom } from 'recoil';

interface BuyConfig {
    lastPriceVsClose: boolean;
    lastPriceVsMA: boolean;
    movingAverageDays: number;
  }

export const buyState = atom<BuyConfig>({
    key: 'buyConfig',
    default:{
        lastPriceVsClose: true,
        lastPriceVsMA: true,
        movingAverageDays: 30
    }
})