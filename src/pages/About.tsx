import { Link } from 'react-router-dom';
import { routes } from '../utils/routes';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-md mx-auto bg-white rounded p-6 shadow-md">
        <h2 className="text-2xl font-semibold mb-4">About Workout Wizard</h2>
        <p className="text-gray-700 mb-4">
          Welcome to Workout Wizard, your personalized fitness companion! Version 1.0.0 is just the beginning of our journey together.
        </p>
        <p className="text-gray-700 mb-4">
          Our mission is to make your workout experience enjoyable and effective. Whether you're a fitness enthusiast or just getting started, Workout Wizard is here to assist you on your fitness journey.
        </p>
        <p className="text-gray-700 mb-4">
          Thank you for choosing Workout Wizard. If you have any feedback or suggestions, feel free to reach out. Happy exercising!
        </p>
        <div className="mt-6">
          <Link to={routes.index} className="text-blue-500 hover:underline">
            &larr; Go Back to Workout Wizard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
