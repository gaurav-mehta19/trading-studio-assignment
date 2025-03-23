
import { AppBar } from '../components/AppBar';
import { PricingCard } from '../components/PricingCard';


export const Pricing = () => {
    return (
        <div className='min-h-screen bg-gray-50'>
            <AppBar />
            <div className='py-20'>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Simple, transparent pricing</h1>
                        <p className="text-xl text-gray-600">Choose the perfect plan for your trading needs</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <PricingCard title='Free' price='$0' duration='/month' forWhom='Perfect for getting started' f1='Basic analytics' f2='Up to 5 projects' f3='Community support' buttonText='Get Started' />
                        <PricingCard title='Pro' price='$29' duration='/month' mostPopular forWhom='For growing businesses' f1='Advanced analytics' f2='Up to 20 projects' f3='Priority support' f4='Custom domains' buttonText='Start Free Trial' />
                        <PricingCard title='Business' price='$99' duration='/month' forWhom='For larger teams' f1='Enterprise analytics' f2='Unlimited projects' f3='24/7 phone support' f4='Custom integrations' f5='SLA guarantee' buttonText='Contact Sales' />
                        <PricingCard title='Enterprise' price='Custome' forWhom='For organizations' f1='Custom analytics' f2='Dedicated support team' f3='Custom contracts' f4='On-premise options' f5='Advanced security' buttonText='Talk to Sales' />
                    </div>

                </div>
            </div>
        </div>
    )
}