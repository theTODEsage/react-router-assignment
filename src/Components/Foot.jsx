import React from 'react';
import { Link } from 'react-router';

const Foot = () => {
  return (
    <footer className="bg-gray-800 text-white mt-auto p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-2">Hero.Io</h3>
          <p className="text-gray-300 text-sm">
            Building simple and powerful interfaces for millions of users worldwide.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-gray-300 text-sm">
            <li>
              <Link to="/home" className="hover:text-white">Home</Link>
            </li>
            <li>
              <Link to="/app" className="hover:text-white">Apps</Link>
            </li>
            <li>
              <Link to="/install" className="hover:text-white">My Installation</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Resources</h4>
          <ul className="space-y-1 text-gray-300 text-sm">
            <li><a href="#" className="hover:text-white">Documentation</a></li>
            <li><a href="#" className="hover:text-white">Support</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Connect</h4>
          <div className="flex space-x-3">
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="https://github.com/theTODEsage/react-router-assignment" target="_blank" className="hover:text-white">GitHub</a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-300 text-sm">
        © 2026 Hero.Io — All rights reserved
      </div>
    </footer>
  );
};

export default Foot;
