import { AppBar } from "./AppBar"


export const FAQ = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            <AppBar/>
        <div className="flex justify-center items-center mt-10">
            <div className="bg-white shadow-xl rounded-xl p-8 max-w-4xl w-full">
                <h2 className="text-2xl font-bold text-gray-900 text-center">Frequently Asked Questions</h2>
                <p className="text-md text-gray-500 text-center mt-2">Find answers to common questions about Trading Studio</p>

                <div className="mt-6 space-y-4">
                    {/* FAQ Item 1 */}
                    <details className="border border-gray-300 rounded-md p-4">
                        <summary className="text-lg font-medium text-blue-600 cursor-pointer">What is Trading Studio?</summary>
                        <p className="text-gray-700 mt-2">
                            Trading Studio is an online platform that allows users to create, backtest, and simulate trading or investment strategies using historical data.
                        </p>
                    </details>

                    {/* FAQ Item 2 */}
                    <details className="border border-gray-300 rounded-md p-4">
                        <summary className="text-lg font-medium text-blue-600 cursor-pointer">How can I create a new strategy?</summary>
                        <p className="text-gray-700 mt-2">
                            You can create a strategy by setting up scanner rules, defining buy and sell triggers, and configuring the simulation settings.
                        </p>
                    </details>

                    {/* FAQ Item 3 */}
                    <details className="border border-gray-300 rounded-md p-4">
                        <summary className="text-lg font-medium text-blue-600 cursor-pointer">Can I save an incomplete strategy?</summary>
                        <p className="text-gray-700 mt-2">
                            Yes, you can save an incomplete strategy and continue working on it later.
                        </p>
                    </details>

                    {/* FAQ Item 4 */}
                    <details className="border border-gray-300 rounded-md p-4">
                        <summary className="text-lg font-medium text-blue-600 cursor-pointer">What are the four stages of a strategy?</summary>
                        <p className="text-gray-700 mt-2">
                            A strategy consists of:
                            <ul className="list-disc ml-6 mt-2">
                                <li><strong>Scanner Step:</strong> Identifies financial instruments based on scanner rules.</li>
                                <li><strong>Buy Step:</strong> Filters instruments that meet buy conditions.</li>
                                <li><strong>Sell Step:</strong> Determines when to sell shortlisted instruments.</li>
                                <li><strong>Simulation Step:</strong> Simulates the portfolio performance.</li>
                            </ul>
                        </p>
                    </details>

                    {/* FAQ Item 5 */}
                    <details className="border border-gray-300 rounded-md p-4">
                        <summary className="text-lg font-medium text-blue-600 cursor-pointer">How do I track the execution status of my strategy?</summary>
                        <p className="text-gray-700 mt-2">
                            You can check the execution status in the platform’s dashboard, where you’ll see in-progress and completed strategies.
                        </p>
                    </details>

                    {/* FAQ Item 6 */}
                    <details className="border border-gray-300 rounded-md p-4">
                        <summary className="text-lg font-medium text-blue-600 cursor-pointer">Can I copy a previously saved strategy?</summary>
                        <p className="text-gray-700 mt-2">
                            Yes, you can duplicate any previously saved strategy and modify it as needed.
                        </p>
                    </details>
                </div>
            </div>
        </div>
        </div>
    );
};
