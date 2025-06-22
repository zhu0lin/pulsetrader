import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Import your main page component
import Homepage from './routes/Homepage';

// --- Placeholder Components ---
// You should move these into their own files inside the `/routes` folder.

// Placeholder for the Stock Page
const StockPage = () => (
  <div className="min-h-screen bg-slate-900 text-white p-8">
    <h1 className="text-4xl font-bold mb-4">Stock Details Page</h1>
    <p>This is where the detailed stock information, charts, and alerts will be displayed.</p>
    <Link to="/" className="text-cyan-400 hover:text-cyan-300 mt-4 inline-block">&larr; Back to Home</Link>
  </div>
);

// Placeholder for the Login Page
const LoginPage = () => (
  <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
    <div className="bg-slate-800 p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-3xl font-bold text-center mb-6">Sign In</h2>
      <form className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email Address</label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full bg-slate-700 border border-slate-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
          <input
            type="password"
            id="password"
            className="mt-1 block w-full bg-slate-700 border border-slate-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
            placeholder="••••••••"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold py-2 px-4 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200"
        >
          Login
        </button>
        <p className="text-center text-sm text-gray-400">
          <Link to="/" className="text-cyan-400 hover:underline">
            Go back to the homepage
          </Link>
        </p>
      </form>
    </div>
  </div>
);

// Main App component to handle routing
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route for the homepage */}
        <Route path="/" element={<Homepage />} />

        {/* Route for the stock details page */}
        <Route path="/stocks" element={<StockPage />} />

        {/* Route for the login page */}
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;