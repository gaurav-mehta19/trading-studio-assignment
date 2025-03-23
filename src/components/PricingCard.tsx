import { Check } from "lucide-react";

interface PriceCardProps {
    title: string;
    price: string;
    duration?: string;
    forWhom: string;
    f1: string;
    f2: string;
    f3: string;
    f4?: string;
    f5?: string;
    mostPopular?: boolean;
    buttonText:string
}

export const PricingCard = ({
    title,
    price,
    duration,
    forWhom,
    f1,
    f2,
    f3,
    f4,
    f5,
    mostPopular,
    buttonText
}: PriceCardProps) => {
    return (
        <div>
            <div className={`bg-white p-8 rounded-xl min-h-[475px] shadow-md relative ${mostPopular ? 'border-2 border-blue-600' : 'border-none'}`}>
                {mostPopular && (
                    <div className="absolute top-0 right-8 transform -translate-y-1/2">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">Most Popular</span>
                    </div>
                )}
                <h3 className="text-xl font-semibold mb-4">{title}</h3>
                <div className="mb-6">
                    <span className="text-4xl font-bold">{price}</span>
                    {duration && <span className="text-gray-600">{duration}</span>}
                </div>
                <p className="text-gray-600 mb-6">{forWhom}</p>
                <ul className="space-y-4 mb-8">
                    {[f1, f2, f3, f4, f5].filter(Boolean).map((feature, index) => (
                        <li key={index} className="flex items-center">
                            <Check className="h-5 w-5 text-blue-600 mr-2" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
                <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                         {buttonText}
                </button>
            </div>
        </div>
    );
};
