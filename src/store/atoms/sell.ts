import { atom } from 'recoil';


interface SellConfig {
    trailingStopLoss: number;
    minHoldingDays: number;
}

export const sellState = atom<SellConfig>({
    key: 'sellConfig',
    default: {
        trailingStopLoss: 10,
        minHoldingDays: 5
    }
})