import { LineChart } from "lucide-react"
import { useLocation, useNavigate } from "react-router-dom"


export const AppBar = () => {
    const navigate = useNavigate()
    return (
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <LineChart className="h-8 w-8 text-blue-600" />
                    <span onClick={()=> navigate('/')} className="ml-2 text-2xl font-bold text-gray-900">Trading Studio</span>
                </div>
                <NavBar/>
            </div>
        </nav>
    )
}

const NavBar = () => {
    const navigate = useNavigate()
    const location = useLocation()

    if (location.pathname === '/') {
        return <div className="hidden md:flex justify-center items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-blue-600">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-blue-600">How it Works</a>
            <a href="/price" className="text-gray-600 hover:text-blue-600">Pricing</a>
            <a href="/questions" className="text-gray-600 hover:text-blue-600">FAQ</a>
            <a href="/contact" className="text-gray-600 hover:text-blue-600">Contact Us</a>
            <button onClick={()=> navigate('/strategy')} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Get Started
            </button>
        </div>
    }

    return <div className="hidden md:flex justify-center items-center space-x-8">
         <a href="/contact" className="text-gray-600 hover:text-blue-600">Contact Us</a>
        <a href="/price" className="text-gray-600 hover:text-blue-600">Pricing</a>
        <a href="/questions" className="text-gray-600 hover:text-blue-600">FAQ</a>
        <button onClick={()=> navigate('/')} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Logout
        </button>
    </div>
}