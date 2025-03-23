import { 
  LineChart, 
  ArrowUpRight, 
  History, 
  Save, 
  PlayCircle, 
  List, 
  Copy,
  ChevronRight,
  BarChart3,
  TrendingUp,
  Timer,
  Settings
} from 'lucide-react';
import { AppBar } from '../components/AppBar';
import { useNavigate } from 'react-router-dom';

export const Landing = () => {
  const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        {/* Hero Section */}
        <header className="bg-white">
        <AppBar/>
        
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Create, Test, and Perfect Your
                <span className="text-blue-600"> Trading Strategies</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Build sophisticated trading strategies with our powerful platform. Backtest your ideas against historical data and optimize your investment approach.
              </p>
              <div className="flex justify-center gap-4">
                <button onClick={()=> navigate('/strategy')} className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg hover:bg-blue-700 transition flex items-center">
                  Start Building <ArrowUpRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </header>
  
        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Platform Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: <LineChart className="h-8 w-8" />, title: "Create Strategies", description: "Build custom trading strategies with our intuitive interface" },
                { icon: <Save className="h-8 w-8" />, title: "Save Progress", description: "Save incomplete strategies and continue later" },
                { icon: <PlayCircle className="h-8 w-8" />, title: "Run Simulations", description: "Test strategies against historical market data" },
                { icon: <History className="h-8 w-8" />, title: "Track Status", description: "Monitor execution status in real-time" },
                { icon: <List className="h-8 w-8" />, title: "View Results", description: "Analyze detailed performance metrics" },
                { icon: <Copy className="h-8 w-8" />, title: "Clone Strategies", description: "Copy and modify existing strategies" },
              ].map((feature, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition">
                  <div className="text-blue-600 mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* How it Works Section */}
        <section id="how-it-works" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="space-y-12">
              {[
                {
                  icon: <BarChart3 className="h-8 w-8" />,
                  title: "Scanner Step",
                  description: "Define criteria to identify financial instruments that match your requirements on any given day."
                },
                {
                  icon: <TrendingUp className="h-8 w-8" />,
                  title: "Buy Step",
                  description: "Set specific conditions that trigger buy signals for shortlisted instruments."
                },
                {
                  icon: <Timer className="h-8 w-8" />,
                  title: "Sell Step",
                  description: "Configure exit conditions including trailing stop-loss and minimum holding periods."
                },
                {
                  icon: <Settings className="h-8 w-8" />,
                  title: "Simulation Step",
                  description: "Set portfolio parameters and run comprehensive backtests on historical data."
                }
              ].map((step, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="bg-blue-100 p-4 rounded-lg text-blue-600">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* CTA Section */}
        <section className="bg-blue-600 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Trading Smarter?</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of traders who are already using Trading Studio to optimize their investment strategies.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg hover:bg-gray-100 transition flex items-center mx-auto">
              Create Your First Strategy <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </section>
  
        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center mb-8">
              <LineChart className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-white">Trading Studio</span>
            </div>
            <p className="text-center text-sm">
              © {new Date().getFullYear()} Trading Studio. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
        
    )
}