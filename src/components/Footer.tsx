import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="p-4 mt-8">
            <p className="text-center">&copy; 2024</p>
            <Link to="/about" className="block text-center mt-2 text-blue-500 hover:underline">About</Link>
        </footer>
    );
}

export default Footer;
