import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  return (
    <div className=" bg-gray-100 flex flex-col items-center justify-center">
      <nav className="w-full bg-slate-700 p-4">
        <ul className="flex justify-center space-x-8">
          <li>
            <Link
              to="/"
              className="text-white font-semibold hover:bg-slate-600 px-3 py-2 rounded transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-white font-semibold hover:bg-slate-600 px-3 py-2 rounded transition"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white font-semibold hover:bg-slate-600 px-3 py-2 rounded transition"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <div className="container mx-auto mt-10 p-5">
        <Suspense fallback={<div><img src="https://i.gifer.com/6os.gif" alt="" /></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
