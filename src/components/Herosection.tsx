import { Link } from "react-router-dom"

const Herosection = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 md:gap-12 px-4 sm:px-6 py-8 sm:py-12 md:py-16 max-w-6xl mx-auto">
            {/* Text Content */}
            <div className="flex flex-col space-y-4 sm:space-y-6 text-center lg:text-left w-full lg:w-1/2">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900">Welcome to Auris.</h1>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800">Docs that listen.</h2>
                <div className="space-y-2">
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-700">
                        Write. Edit. Perfect. With AI that understands.
                    </p>
                </div>
                <div className="space-y-2">
                    <p className="text-base sm:text-lg text-gray-600">
                        Smart organization for those who prefer brilliance without the busywork.
                    </p>
                </div>
                <div className="flex flex-col space-y-3 sm:space-y-3 md:flex-row md:space-y-0 md:space-x-2.5 md:items-center md:justify-center sm:items-center xs:items-center lg:flex-row lg:space-y-0 lg:space-x-2.5 xl:flex-row xl:space-x-2.5 lg:justify-start">
                    <Link to="/login" className="inline-flex items-center justify-center px-6 py-3 text-base font-medium hover:text-white text-black border border-transparent rounded-md shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out w-44 text-center">Log In</Link>
                    <Link to="/register" className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-blue-500 border border-transparent rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out w-44">Sign Up</Link>
                </div>
            </div>

            {/* Image Container */}
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0 relative">
                {/* Main Image */}
                <div className="w-full flex justify-center">
                    <img
                        src="/Illustrator1.jpg"
                        alt="Auris app interface"
                        className="w-full max-w-sm sm:max-w-md rounded-lg shadow-xl"
                    />
                </div>
            </div>
        </div>
    )
}

export default Herosection