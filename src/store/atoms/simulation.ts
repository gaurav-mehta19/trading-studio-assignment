import { atom } from 'recoil';


interface SimulationConfig {
    startMargin: number;
    startDate: string;
    endDate: string;
    maxPositions: number;
    maxPositionsPerInstrument: number;
    sortingType: string;
  }

export const simulationState = atom<SimulationConfig>({
    key: 'simulationConfig',
    default: {
        startMargin: 100000,
        startDate: '2000-01-01',
        endDate: '2025-03-20',
        maxPositions: 20,
        maxPositionsPerInstrument: 1,
        sortingType: '300-days-top-gainer-first'
    }
})