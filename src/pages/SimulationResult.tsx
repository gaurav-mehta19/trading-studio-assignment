import { useState, useEffect } from 'react';
import { LineChart, Activity, TrendingUp, DollarSign, Calendar } from 'lucide-react';
import { MetricCard } from '../components/MetricCard';
import { AppBar } from '../components/AppBar';

const simulationResults = {
    summary: {
        totalReturn: 287.5,
        annualizedReturn: 24.3,
        sharpeRatio: 1.8,
        maxDrawdown: -15.2,
        winRate: 68.5,
        profitFactor: 2.4,
        totalTrades: 156,
    },
    recentTrades: [
        { date: '2024-03-15', instrument: 'RELIANCE', type: 'BUY', price: 2450.75, quantity: 100, pnl: 12500 },
        { date: '2024-03-14', instrument: 'INFY', type: 'SELL', price: 1575.60, quantity: 150, pnl: -3200 },
        { date: '2024-03-13', instrument: 'TCS', type: 'BUY', price: 3890.25, quantity: 50, pnl: 8900 },
        { date: '2024-03-12', instrument: 'HDFCBANK', type: 'SELL', price: 1680.90, quantity: 200, pnl: 15600 },
    ],
};

export const SimulationResult = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen bg-gray-50">
                <div className="flex flex-col items-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600"></div>
                    <p className="mt-6 text-lg font-medium text-gray-700">Calculating the simulation result...</p>
                </div>
            </div>
        );
    }    

    return (
        <div className="bg-gray-50 min-h-screen">
            <AppBar />

            <header className="bg-gray-50 py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">Simulation Results</h1>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">

    
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">

    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <MetricCard
                            title="Total Return"
                            value={`${simulationResults.summary.totalReturn}%`}
                            icon={TrendingUp}
                            trend="up"
                            trendValue="23.5%"
                        />
                        <MetricCard
                            title="Win Rate"
                            value={`${simulationResults.summary.winRate}%`}
                            icon={Activity}
                        />
                        <MetricCard
                            title="Profit Factor"
                            value={simulationResults.summary.profitFactor}
                            icon={DollarSign}
                            trend="up"
                            trendValue="0.3"
                        />
                        <MetricCard
                            title="Total Trades"
                            value={simulationResults.summary.totalTrades}
                            icon={Calendar}
                        />
                    </div>

    
                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-semibold">Equity Curve</h2>
                            <LineChart className="text-blue-600 w-5 h-5" />
                        </div>
                        <div className="h-72 flex items-center justify-center text-gray-400">
                            [Equity Curve Chart Placeholder]
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="px-6 py-4">
                        <h2 className="text-lg font-semibold">Recent Trades</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Instrument</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Quantity</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">P&L</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {simulationResults.recentTrades.map((trade, index) => (
                                    <tr key={index}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{trade.date}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{trade.instrument}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                                trade.type === 'BUY' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                            }`}>
                                                {trade.type}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹{trade.price.toFixed(2)}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{trade.quantity}</td>
                                        <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                                            trade.pnl >= 0 ? 'text-green-600' : 'text-red-600'
                                        }`}>
                                            ₹{trade.pnl.toLocaleString()}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
};
