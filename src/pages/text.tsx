import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="border rounded-lg p-4 shadow-md bg-white mb-4">
    {children}
  </div>
);

const Button = ({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) => (
  <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={onClick}>
    {children}
  </button>
);

const Skeleton = ({ className }: { className: string }) => (
  <div className={`bg-gray-300 animate-pulse ${className}`} />
);

const SimulationResults = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    setTimeout(() => {
      setData({
        roi: "12.5%",
        profit: "$5,250",
        winLossRatio: "60/40",
        trades: [
          { date: "2024-01-01", instrument: "AAPL", profit: "$500" },
          { date: "2024-01-10", instrument: "TSLA", profit: "$750" },
          { date: "2024-02-15", instrument: "MSFT", profit: "$1,000" },
        ],
        performanceGraph: [
          { date: "Jan", value: 10000 },
          { date: "Feb", value: 11000 },
          { date: "Mar", value: 11500 },
          { date: "Apr", value: 12000 },
        ],
      });
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Simulation Results</h1>
      {loading ? (
        <Skeleton className="h-40 w-full" />
      ) : (
        <>
          <Card>
            <p><strong>ROI:</strong> {data.roi}</p>
            <p><strong>Total Profit:</strong> {data.profit}</p>
            <p><strong>Win/Loss Ratio:</strong> {data.winLossRatio}</p>
          </Card>

          <h2 className="text-lg font-semibold mt-4 mb-2">Performance Graph</h2>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data.performanceGraph}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>

          <h2 className="text-lg font-semibold mt-4 mb-2">Executed Trades</h2>
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">Date</th>
                <th className="border p-2">Instrument</th>
                <th className="border p-2">Profit</th>
              </tr>
            </thead>
            <tbody>
              {data.trades.map((trade: any, index: number) => (
                <tr key={index} className="border">
                  <td className="border p-2">{trade.date}</td>
                  <td className="border p-2">{trade.instrument}</td>
                  <td className="border p-2">{trade.profit}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <Button>Rerun Simulation</Button>
        </>
      )}
    </div>
  );
};

export default SimulationResults;
