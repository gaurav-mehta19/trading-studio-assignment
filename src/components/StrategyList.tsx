import { useState } from "react";

interface Strategy {
  id: number;
  name: string;
  status: "Draft" | "In Progress" | "Completed";
  scannerRules: string;
  buyRules: string;
  sellRules: string;
  simulationRules: string;
}

const strategies: Strategy[] = [
  {
    id: 1,
    name: "Momentum Strategy",
    status: "Completed",
    scannerRules: "NSE EQUITY, 300-day price growth > 0%",
    buyRules: "Price >= last 30-day close & moving avg",
    sellRules: "10% trailing stoploss, hold at least 5 days",
    simulationRules: "100K margin, max 20 positions, 300-day top gainers",
  },
  {
    id: 2,
    name: "Value Investing",
    status: "Draft",
    scannerRules: "Top 10% market cap, 90-day avg volume > 300M",
    buyRules: "P/E ratio < 15, Dividend yield > 2%",
    sellRules: "Price drop > 15% or 1-year hold",
    simulationRules: "500K margin, max 10 positions, fundamental ranking",
  },
];

export default function StrategyList() {
  const [selectedStrategy, setSelectedStrategy] = useState<Strategy | null>(null);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Trading Strategies</h1>
      <ul className="space-y-2">
        {strategies.map((strategy) => (
          <li
            key={strategy.id}
            className="border p-4 rounded cursor-pointer hover:bg-gray-100"
            onClick={() => setSelectedStrategy(strategy)}
          >
            <div className="font-semibold">{strategy.name}</div>
            <div className="text-sm text-gray-600">Status: {strategy.status}</div>
          </li>
        ))}
      </ul>

      {selectedStrategy && (
        <div className="mt-6 p-4 border rounded bg-white shadow">
          <h2 className="text-xl font-bold">{selectedStrategy.name}</h2>
          <p><strong>Status:</strong> {selectedStrategy.status}</p>
          <p><strong>Scanner Rules:</strong> {selectedStrategy.scannerRules}</p>
          <p><strong>Buy Rules:</strong> {selectedStrategy.buyRules}</p>
          <p><strong>Sell Rules:</strong> {selectedStrategy.sellRules}</p>
          <p><strong>Simulation Rules:</strong> {selectedStrategy.simulationRules}</p>
        </div>
      )}
    </div>
  );
}
