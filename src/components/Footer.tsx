import { Link } from 'react-router-dom'

const baseUrl = import.meta.env.VITE_PUBLIC_PATH;

const Footer = () => {
    return (
        <footer className="p-4 mt-8">
            <p className="text-center">&copy; 2024</p>
            <Link to={`${baseUrl}about`} className="block text-center mt-2 text-blue-500 hover:underline">About</Link>
        </footer>
    );
}

export default Footer;
