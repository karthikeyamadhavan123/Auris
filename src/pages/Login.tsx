import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom'; // Make sure to import Link from your router
import Footer from '../components/Footer';

const Register = () => {
  return (
    <>
      <Helmet>
        <title>Login - Auris</title>
        <meta name="description" content="Log in to your Auris account and enjoy seamless communication with our powerful features." />
      </Helmet>
      <div className='flex flex-col lg:flex-row justify-center items-center min-h-screen p-4 lg:p-0'>
        {/* Left Column - Form */}
        <div className='w-full lg:w-auto px-4 py-8 lg:px-10 lg:py-14 font-montserrat flex flex-col items-start space-y-1 max-w-lg'>
          <div className='mb-6 lg:mb-10 w-full flex justify-center lg:justify-start'>
            <img src="/Logo.png" alt="Logo" className='w-32 lg:w-36' />
          </div>

          <div className='flex flex-col mb-6 lg:mb-8 w-full'>
            <h1 className='font-semibold text-2xlxl lg:text-3xl mb-2 text-center lg:text-left'>WELCOME BACK TO AURIS.</h1>
            <div className='flex space-x-1 items-center justify-center lg:justify-start mb-1'>
              <h2 className='font-semibold text-xl lg:text-2xl'>Auris is listening. Log in to continue.</h2>
            </div>
          </div>

          {/* Form */}
          <div className='w-full'>
            <form className='space-y-6 w-full'>
              <div className='space-y-4'>
                <input
                  type="email"
                  placeholder='Email'
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm lg:text-base'
                />
                <input
                  type="password"
                  placeholder='Password'
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm lg:text-base'
                />
              </div>

              <button
                type="submit"
                className='w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm lg:text-base'
              >
                Log In
              </button>

              <div className='flex items-center justify-center space-x-2 my-4'>
                <div className='flex-grow border-t border-gray-300'></div>
                <span className='text-gray-500 text-sm lg:text-base'>Or</span>
                <div className='flex-grow border-t border-gray-300'></div>
              </div>

              <button
                type="button"
                className='w-full flex items-center justify-center space-x-2 border border-gray-300 py-3 px-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-sm lg:text-base'
              >
                <img src="/google.png" alt="Google" className='w-4 h-4 lg:w-5 lg:h-5' />
                <span>Log In with Google</span>
              </button>

              {/* Already have an account link */}
              <div className='text-center mt-6'>
                <span className='text-gray-600 text-sm lg:text-base'>
                  Don&apos;t have an account?{' '}
                  <Link
                    to="/register"
                    className='text-blue-600 hover:text-blue-800 font-medium transition-colors'
                  >
                    Sign Up
                  </Link>
                </span>
              </div>
            </form>
            <div className='text-center mt-6'>
                <span className='text-gray-600 text-sm lg:text-base'>
                 Forgot Password | {' '}
                  <Link
                    to="/forgot-password"
                    className='text-blue-600 hover:text-blue-800 font-medium transition-colors'
                  >
                    Forgot Password?
                  </Link>
                </span>
              </div>
          </div>
        </div>

        {/* Right Column - Image (hidden on mobile) */}
        <div className='hidden lg:block lg:pl-10 xl:pl-20'>
          <img
            src="/Login.jpg"
            alt="Login"
            className='w-full max-w-md xl:max-w-lg object-cover rounded-lg shadow-xl'
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Register;