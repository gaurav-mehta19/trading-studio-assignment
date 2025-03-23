import { Begin } from "../components/Begin"
import { SavedStrategyCard } from "../components/SaveStrategyCard"


export const Strategy = () => {
    return (
        <div className="bg-gray-50 min-h-screen pb-20">
            <Begin/>
            <SavedStrategyCard/>
            <SavedStrategyCard isSimulated/>
        </div>
    )
}
