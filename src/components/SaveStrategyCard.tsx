import { useState } from 'react';
import {
    CheckCircle2,
    Search,
    TrendingUp,
    ArrowDownToLine,
    Settings,
    History,
    ArrowRight,
    Copy,
    ChevronDown,
    ChevronUp,
    LineChart,
    Pencil
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SavedStrategyCardProps {
    isSimulated?: boolean;
}

export const SavedStrategyCard = ({ isSimulated = false }: SavedStrategyCardProps) => {
    const navigate = useNavigate();
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="max-w-4xl mx-auto mt-8">
            <div
                className={`bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 ease-in-out cursor-pointer
          ${isExpanded ? 'shadow-lg' : 'hover:shadow-md'}`}
            >
                <div
                    className="p-4 flex items-center justify-between"
                    onClick={toggleExpand}
                >
                    <div className="flex items-center space-x-3">
                        <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center">
                            <CheckCircle2 className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">My Momentum Strategy</h3>
                            <p className="text-sm text-gray-500">Last updated 2 hours ago</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center text-sm text-gray-600">
                            <History className="h-4 w-4 mr-1" />
                            {isSimulated ? 'Simulation Complete' : 'Not simulated yet'}
                        </div>
                        {isExpanded ? (
                            <ChevronUp className="h-5 w-5 text-gray-400" />
                        ) : (
                            <ChevronDown className="h-5 w-5 text-gray-400" />
                        )}
                    </div>
                </div>

                {isExpanded && (
                    <div className="border-t border-gray-100">
                        <div className="flex">
                            {/* Strategy Details Section */}
                            <div className="flex-1 p-6">
                                <div className="grid grid-cols-2 gap-8">
                                    {/* Scanner Rules */}
                                    <div>
                                        <h4 className="text-sm font-medium text-gray-900 flex items-center mb-2">
                                            <Search className="h-4 w-4 mr-1" />
                                            Scanner Rules
                                        </h4>
                                        <ul className="text-sm text-gray-600 space-y-1">
                                            <li>• Exchange: NSE</li>
                                            <li>• Instrument Type: EQUITY</li>

                                            <li>
                                                <span className="font-medium mt-2 ">Any of the following:</span>
                                                <ul className="pl-4 space-y-1">
                                                    <li>• Price Growth (300d) &gt; 0% </li>
                                                    <li>• Price &gt; ₹99</li>
                                                    <li className="text-gray-400">OR</li>
                                                    <li>• Market Cap Rank: Top 10% </li>
                                                    <li>• 90d Avg Daily Value &gt; ₹300M</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Buy & Sell Rules */}
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-medium text-gray-900 flex items-center mb-2">
                                                <TrendingUp className="h-4 w-4 mr-1" />
                                                Buy Rules
                                            </h4>
                                            <ul className="text-sm text-gray-600 space-y-1">
                                                <li>• Last Price &gt;= 30d Close</li>
                                                <li>• Last Price &gt;= 30d Moving Average</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-medium text-gray-900 flex items-center mb-2">
                                                <ArrowDownToLine className="h-4 w-4 mr-1" />
                                                Sell Rules
                                            </h4>
                                            <ul className="text-sm text-gray-600 space-y-1">
                                                <li>• Trailing Stop Loss: 10%</li>
                                                <li>• Minimum Hold: 5 days</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 pt-4 border-t border-gray-100">
                                    <h4 className="text-sm font-medium text-gray-900 flex items-center mb-2">
                                        <Settings className="h-4 w-4 mr-1" />
                                        Simulation Parameters
                                    </h4>
                                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                                        <div>
                                            <p>• Initial Margin: ₹100,000</p>
                                            <p>• Max Positions: 20</p>
                                        </div>
                                        <div>
                                            <p>• Period: 01/01/2000 - 20/03/2025</p>
                                            <p>• Order Priority: 300d Top Gainers First</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Action Section */}
                            <div className="w-64 bg-gray-50 p-6 flex flex-col justify-between border-l border-gray-100">
                                <div className="space-y-2">
                                    <h4 className="text-sm font-medium text-gray-900">Strategy Status</h4>
                                    <div className="flex items-center text-sm text-gray-600">
                                        <History className="h-4 w-4 mr-1" />
                                        {isSimulated ? 'Simulation Complete' : 'Not simulated yet'}
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    {isSimulated ? (
                                        <button onClick={()=> navigate('/simulation-result')} className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                                            Show Results
                                            <LineChart className="h-4 w-4 ml-2" />
                                        </button>
                                    ) : (
                                        <button  onClick={()=> navigate('/simulation-result')}  className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                                            Start Simulation
                                            <ArrowRight className="h-4 w-4 ml-2" />
                                        </button>
                                    )}
                                    <button onClick={()=> navigate('/simulation-steps')} className="w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                                        <Pencil className="h-4 w-4 mr-2" />
                                        Edit Strategy
                                    </button>
                                    <button className="w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                                        <Copy className="h-4 w-4 mr-2" />
                                        Duplicate Strategy
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};