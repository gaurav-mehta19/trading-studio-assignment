import { simulationState } from "../store/atoms/simulation";
import { useRecoilState } from "recoil";


export const  SimulationStep = () => {

  const [simulationConfig, setSimulationConfig] = useRecoilState(simulationState);  

  return (

  <div className="space-y-6">
    <div className="grid grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Initial Margin
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm">₹</span>
          </div>
          <input
            type="number"
            value={simulationConfig.startMargin}
            onChange={(e) => setSimulationConfig({...simulationConfig, startMargin: Number(e.target.value)})}
            className="w-full pl-7 pr-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="100000"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Maximum Positions
        </label>
        <input
          type="number"
          value={simulationConfig.maxPositions}
          onChange={(e) => setSimulationConfig({...simulationConfig, maxPositions: Number(e.target.value)})}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          placeholder="20"
        />
      </div>
    </div>

    <div className="grid grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
        <input
          type="date"
          title="Start Date"
          value={simulationConfig.startDate}
          onChange={(e) => setSimulationConfig({...simulationConfig, startDate: e.target.value})}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
        <input
          type="date"
          title="End Date"
          value={simulationConfig.endDate}
          onChange={(e) => setSimulationConfig({...simulationConfig, endDate: e.target.value})}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Order Sorting Type
      </label>
      <select
        aria-label="Order Sorting Type"
        value={simulationConfig.sortingType}
        onChange={(e) => setSimulationConfig({...simulationConfig, sortingType: e.target.value})}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="300-days-top-gainer-first">300 Days Top Gainer First</option>
        <option value="market-cap-desc">Market Cap (High to Low)</option>
        <option value="volume-desc">Volume (High to Low)</option>
      </select>
    </div>

    <div className="bg-gray-50 rounded-lg p-4">
      <h3 className="text-sm font-medium text-gray-900 mb-2">Additional Settings</h3>
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">Max Positions per Instrument</span>
          <span className="font-medium text-gray-900">1</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">Position Sizing</span>
          <span className="font-medium text-gray-900">Equal Weight</span>
        </div>
      </div>
    </div>
  </div>
  )
};
