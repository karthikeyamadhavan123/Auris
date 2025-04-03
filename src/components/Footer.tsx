import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-white py-8 px-4 font-montserrat">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-4">
          <Link to="/privacy" className="text-gray-600 hover:text-gray-900 mx-2">Privacy Policy</Link> | 
          <Link to="/terms" className="text-gray-600 hover:text-gray-900 mx-2">Terms of Use</Link> | 
          <Link to="/contact" className="text-gray-600 hover:text-gray-900 mx-2">Contact</Link> | 
          <Link to="/faq" className="text-gray-600 hover:text-gray-900 mx-2">FAQ</Link>
        </div>
        
        <div className="mb-6">
          <a href="https://twitter.com/AurisLabs" className="text-gray-600 hover:text-gray-900 mx-2" target="_blank" rel="noopener noreferrer">Twitter</a> | 
          <a href="https://discord.gg/auris" className="text-gray-600 hover:text-gray-900 mx-2" target="_blank" rel="noopener noreferrer">Discord</a> | 
          <Link to="/blog" className="text-gray-600 hover:text-gray-900 mx-2">Blog</Link>
        </div>
        
        <div className="text-gray-500 text-sm">
          &copy; 2025 Auris. Built for the effortlessly brilliant.
        </div>
      </div>
    </footer>
  )
}

export default Footer