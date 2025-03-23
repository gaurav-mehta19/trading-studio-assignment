import { ArrowDownRight, ArrowUpRight, LucideIcon } from "lucide-react";

interface MarticCardProps {
    title: string,
    value : string | number,
    icon : LucideIcon,
    trend?: 'up' | 'down' | null,
    trendValue?: string
}

export function MetricCard({ title, value, icon: Icon, trend , trendValue }:MarticCardProps) {
    return (
      <div className="bg-white rounded-xl p-6 shadow-md">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-gray-600 font-medium">{title}</h3>
          <Icon className="text-blue-600 w-5 h-5" />
        </div>
        <div className="flex items-end">
          <span className="text-2xl font-bold">{value}</span>
          {trend && (
            <div className={`flex items-center ml-2 ${trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
              {trend === 'up' ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
              <span className="text-sm">{trendValue}</span>
            </div>
          )}
        </div>
      </div>
    );
  }