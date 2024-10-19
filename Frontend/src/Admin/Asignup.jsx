import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Asignup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [isAdminVerified, setIsAdminVerified] = useState(false);
  
  const navigate = useNavigate();
  
  const correctAdminPassword = "skchess04"; 

  const handleAdminPasswordSubmit = (e) => {
    e.preventDefault();
    if (adminPassword === correctAdminPassword) {
      setIsAdminVerified(true);
      alert("Admin access granted!");
    } else {
      alert("Incorrect admin password.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let payload = { name, email, password };

    axios
      .post("http://localhost:4000/asignup", payload)
      .then((result) => {
        alert('Account created');
        console.log(result);
        navigate('/alogin');
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to create an account");
      });
  };

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  let formHandle1 = (e) => {
    e.preventDefault();
    navigate("/alogin");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-md shadow-md overflow-hidden relative">
        <div className="text-center mb-4">
          <h2 className="text-3xl font-extrabold text-gray-900">Admin Registration</h2>
        </div>

        {/* Admin Password Form */}
        {!isAdminVerified ? (
          <form className="space-y-6" onSubmit={handleAdminPasswordSubmit}>
            <div>
              <label htmlFor="admin-password" className="block text-sm font-medium text-gray-700">
                Admin Password
              </label>
              <input
                id="admin-password"
                type="password"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter Admin Password"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-indigo-300 transition-all duration-300"
              >
                Verify
              </button>
            </div>
          </form>
        ) : (
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Email address"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Password"
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-indigo-300 transition-all duration-300"
              >
                Signup
              </button>
            </div>

            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <button
                onClick={formHandle1}
                className="text-indigo-500 hover:underline focus:outline-none focus:ring focus:border-indigo-300 transition-all duration-300"
              >
                Login
              </button>
            </p>
          </form>
        )}

        {/* Go Back Button */}
        <div className="mt-4">
          <button
            onClick={handleGoBack}
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-indigo-300 transition-all duration-300"
          >
            Go Back
          </button>
        </div>

        <div className="absolute h-full w-full bg-indigo-500 transform -skew-y-6 origin-bottom-right"></div>
      </div>
    </div>
  );
};

export default Asignup;

