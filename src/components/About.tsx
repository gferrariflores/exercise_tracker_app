import { Link } from 'react-router-dom'

const baseUrl = import.meta.env.VITE_PUBLIC_PATH;

const About = () => {
    return (
      <div className="bg-gray-100 p-4 mt-8">
        <h4 className="text-lg font-semibold mb-4">Version 1.0.0</h4>
        <Link to={baseUrl} className="text-blue-500 hover:underline">Go Back</Link>
      </div>
    );
  }
  
  export default About;