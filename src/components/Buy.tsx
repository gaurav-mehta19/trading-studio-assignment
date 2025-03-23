import { buyState } from "../store/atoms/buy";
import { useRecoilState } from "recoil";



export const BuyStep = () => {
  const [buyConfig, setBuyConfig] = useRecoilState(buyState);


  return (
  <div className="space-y-6">
    <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
      <h3 className="text-sm font-medium text-blue-800 mb-2">Buy Trigger Rules</h3>
      <p className="text-sm text-blue-600">Define conditions that must be met for a buy order to be placed.</p>
    </div>

    <div className="space-y-4">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={buyConfig.lastPriceVsClose}
          onChange={(e) => setBuyConfig({...buyConfig, lastPriceVsClose: e.target.checked})}
          title="Last price is greater than or equal to last 30 day close"
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label className="ml-2 block text-sm text-gray-700">
          Last price is greater than or equal to last 30 day close
        </label>
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={buyConfig.lastPriceVsMA}
          onChange={(e) => setBuyConfig({...buyConfig, lastPriceVsMA: e.target.checked})}
          title="Last price is greater than or equal to moving average"
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label className="ml-2 block text-sm text-gray-700">
          Last price is greater than or equal to moving average
        </label>
      </div>
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Moving Average Period (Days)
      </label>
      <input
        type="number"
        value={buyConfig.movingAverageDays}
        onChange={(e) => setBuyConfig({...buyConfig, movingAverageDays: Number(e.target.value)})}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        placeholder="30"
      />
    </div>
  </div>
  )
};
