import { Link } from "react-router-dom"
import { FaEnvelope, FaFacebookF, FaGoogle, FaLock, FaRegCopyright } from "react-icons/fa";


const LoginScreen = () => {
    return (

        <div className="flex justify-center items-center min-h-screen bg-blackBG">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg transform transition-all hover:scale-105 duration-300">
                <h2 className="text-4xl font-primary font-bold mb-8 text-secondary text-center">
                    Welcome Back
                </h2>

                <form className="space-y-6 mb-4 text-left">
                    <div>

                        <div className="relative">
                            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="email"
                                id="email"
                                value=""
                                className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-shadow duration-300"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                    </div>

                    <div>

                        <div className="relative">
                            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="password"
                                id="password"
                                value=""
                                className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-shadow duration-300"
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-primary text-white rounded-md font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-2xl"
                    >
                        Sign In
                    </button>
                </form>


                <div className="flex items-center justify-center mt-4">
                    <span className="text-gray-500 text-sm">or sign in with</span>
                </div>

                <div className="flex space-x-4 mt-4">
                    <button
                        className="flex items-center justify-center w-1/2 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all duration-300"
                    >
                        <FaGoogle className="mr-2" />
                        Google
                    </button>
                    <button

                        className="flex items-center justify-center w-1/2 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300"
                    >
                        <FaFacebookF className="mr-2" />
                        Facebook
                    </button>
                </div>

                <div className="mt-4 flex justify-center text-sm text-gray-600">
                    <Link to="/forgot-password" className="hover:text-blue-700 transition-all duration-200 pr-4">Forgot Password</Link>
                    <Link to="/signup" className="hover:text-blue-700 transition-all duration-200 pr-4">Create Account</Link>
                </div>


                <p className="mt-5 text-center text-gray-500 text-xs font-semibold">
                    <FaRegCopyright className="inline" /> All Rights Reserved
                </p>

            </div>
        </div>
    );
};
export default LoginScreen