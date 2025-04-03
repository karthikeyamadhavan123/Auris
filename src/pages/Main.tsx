import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import Herosection from "../components/Herosection";
import Footer from "../components/Footer";

// Define types for better type safety
type NavLink = {
  name: string;
  path: string;
};

type CTAButton = {
  label: string;
  href: string;
};

type AuthButton = {
  label: string;
  variant: "primary" | "secondary";
  path: string
};

const NAVIGATION_LINKS: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'Features', path: '/features' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Help', path: '/help' }
];

const DEMO_BUTTON: CTAButton = {
  label: 'Request a Demo',
  href: '/demo',
};

const AUTH_BUTTONS: AuthButton[] = [
  { label: 'Log In', variant: 'secondary', path: '/login' },
  { label: 'Get Started', variant: 'primary', path: '/register' }
];

const Main = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      <Helmet>
        <title>Welcome to Auris</title>
        <meta name="description" content="Auris - Your solution for modern communication" />
      </Helmet>

      <div className="min-h-screen text-gray-900 font-montserrat flex flex-col">
        {/* Navigation with proper padding */}
        <div className="px-4 sm:px-6 lg:px-8 py-6">
          <Navbar
            logo={'./Logo.png'}
            navigationLinks={NAVIGATION_LINKS}
            activePath={currentPath}
            ctaButton={DEMO_BUTTON}
            authButtons={AUTH_BUTTONS}
          />
        </div>

        {/* Main content area - add your page content here */}
        <div className="px-4 sm:px-6 lg:px-8">
          <Herosection />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Main;