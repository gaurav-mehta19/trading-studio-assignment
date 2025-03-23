import { AlertTriangle } from "lucide-react";
import { sellState } from "../store/atoms/sell";
import { useRecoilState } from "recoil";



export const SellStep = () => {

  const [sellConfig, setSellConfig] = useRecoilState(sellState);


  return (

  <div className="space-y-6">
    <div className="bg-red-50 border border-red-100 rounded-lg p-4">
      <h3 className="text-sm font-medium text-red-800 mb-2">Sell Trigger Rules</h3>
      <p className="text-sm text-red-600">Define conditions that will trigger the closing of positions.</p>
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Trailing Stop Loss (%)
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          type="number"
          value={sellConfig.trailingStopLoss}
          onChange={(e) => setSellConfig({...sellConfig, trailingStopLoss: Number(e.target.value)})}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          placeholder="10"
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <span className="text-gray-500 sm:text-sm">%</span>
        </div>
      </div>
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Minimum Holding Period (Days)
      </label>
      <input
        type="number"
        value={sellConfig.minHoldingDays}
        onChange={(e) => setSellConfig({...sellConfig, minHoldingDays: Number(e.target.value)})}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        placeholder="5"
      />
    </div>

    <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4">
      <div className="flex items-start">
        <AlertTriangle className="h-5 w-5 text-yellow-400 mt-0.5 mr-3" />
        <div>
          <h4 className="text-sm font-medium text-yellow-800">Important Note</h4>
          <p className="mt-1 text-sm text-yellow-600">
            Positions will not be exited before the minimum holding period, regardless of other conditions.
          </p>
        </div>
      </div>
    </div>
  </div>
  )
};