import { useState } from "react";
import { AppBar } from "./AppBar";
import { useNavigate } from "react-router-dom";

export const Begin = () => {
    const navigate = useNavigate();
    const [strategyName, setStrategyName] = useState<string>('');
    return (
        <div className="bg-gray-50 mb-10">
            <AppBar/>
            <div className="flex justify-center items-center mt-16">
                <div className="bg-white min-w-4xl rounded-xl shadow-lg min-h-80 p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mt-2 text-center">Create a Strategy</h3>
                    <p className="text-center mt-2 text-md text-gray-500">to simulate returns</p>


                    <div className="flex justify-center items-center mt-8 gap-5">
                        <input
                            type="text"
                            value={strategyName}
                            onChange={(e) => setStrategyName(e.target.value)}
                            placeholder="Enter strategy name"
                            className="w-full px-3 py-2 max-w-96 text-center border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>


                    <div className="flex justify-center mt-10">
                        <button onClick={() => navigate('/simulation-steps')} className="bg-blue-600 not-odd: text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                            BEGIN
                        </button>
                    </div>

                    <div className="border-t border-gray-200 mx-10 mt-8"></div>

                    <p className="text-gray-500 text-center mt-6">Or Test with Built-in strategies</p>
                </div>
            </div>
        </div>
    )
}