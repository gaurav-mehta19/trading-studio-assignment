import { atom } from 'recoil';


export const strategyNameAtom = atom<string>({
    key: 'strategyName',
    default: ''
})