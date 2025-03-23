import { AppBar } from "./AppBar"

export const ContactUs = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            <AppBar/>
            <div className="flex mt-20 justify-center items-center">
                <div className="bg-white shadow-xl rounded-xl p-8 max-w-lg w-full">
                    <h2 className="text-2xl font-bold text-gray-900 text-center">Contact Us</h2>
                    <p className="text-md text-gray-500 text-center mt-2">We'd love to hear from you!</p>

                    <form className="mt-6">
                        {/* Name Field */}
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-1">Your Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-600 focus:border-blue-600"
                            />
                        </div>

                        {/* Email Field */}
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-1">Your Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-600 focus:border-blue-600"
                            />
                        </div>

                        {/* Message Field */}
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-1">Your Message</label>
                            <textarea
                                placeholder="Write your message..."
                                rows={4}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-600 focus:border-blue-600"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-center mt-6">
                            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
