
import { useRecoilState } from "recoil";
import { scannerState } from "../store/atoms/scanner";


export const ScannerStep = () => {
  const [scannerConfig, setScannerConfig] = useRecoilState(scannerState)

  return (
<div className="space-y-6">
  <div className="grid grid-cols-2 gap-6">
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Exchange</label>
      <select
        aria-label="Exchange"
        value={scannerConfig.exchange}
        onChange={(e) => setScannerConfig({...scannerConfig, exchange: e.target.value})}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="NSE">NSE</option>
        <option value="BSE">BSE</option>
        <option value="NYSE">NYSE</option>
        <option value="NASDAQ">NASDAQ</option>
      </select>
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Instrument Type</label>
      <select
        aria-label="Type"
        value={scannerConfig.instrumentType}
        onChange={(e) => setScannerConfig({...scannerConfig, instrumentType: e.target.value})}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="EQUITY">Equity</option>
        <option value="FUTURES">Futures</option>
        <option value="OPTIONS">Options</option>
      </select>
    </div>
  </div>

  <div className="space-y-4">
    <h3 className="text-sm font-medium text-gray-700">Price Criteria</h3>
    <div className="grid grid-cols-2 gap-6">
      <div>
        <label className="block text-sm text-gray-500 mb-1">Minimum Price Growth (300 days)</label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <input
            type="number"
            value={scannerConfig.priceGrowth}
            onChange={(e) => setScannerConfig({...scannerConfig, priceGrowth: Number(e.target.value)})}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="0"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm">%</span>
          </div>
        </div>
      </div>
      <div>
        <label className="block text-sm text-gray-500 mb-1">Minimum Price</label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm">₹</span>
          </div>
          <input
            type="number"
            value={scannerConfig.minPrice}
            onChange={(e) => setScannerConfig({...scannerConfig, minPrice: Number(e.target.value)})}
            className="w-full pl-7 pr-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="99"
          />
        </div>
      </div>
    </div>
  </div>

  <div className="space-y-4">
    <h3 className="text-sm font-medium text-gray-700">Market Cap & Volume</h3>
    <div className="grid grid-cols-2 gap-6">
      <div>
        <label className="block text-sm text-gray-500 mb-1">Market Cap Rank (Top %)</label>
        <input
          type="number"
            value={scannerConfig.marketCapRank}
            onChange={(e) => setScannerConfig({...scannerConfig, marketCapRank: Number(e.target.value)})}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          placeholder="10"
        />
      </div>
      <div>
        <label className="block text-sm text-gray-500 mb-1">Min. Avg Daily Value (90 days)</label>
        <input
          type="number"
            value={scannerConfig.avgDailyValue}
            onChange={(e) => setScannerConfig({...scannerConfig, avgDailyValue: Number(e.target.value)})}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          placeholder="300000000"
        />
      </div>
    </div>
  </div>
</div>
  )
}

