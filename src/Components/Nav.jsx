import React from 'react';
import { NavLink } from 'react-router';

const Nav = () => {
    return (
        <div className="navbar bg-base-100 shadow">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li><NavLink to='/home'>Home</NavLink></li>
                        <li><NavLink to='/app'>App</NavLink></li>
                        <li><NavLink to='/install'>Installation</NavLink></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Hero.Io</a>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to='/home'>Home</NavLink></li>
                    <li><NavLink to='/app'>App</NavLink></li>
                    <li><NavLink to='/install'>Installation</NavLink></li>
                </ul>
            </div>

            <div className="navbar-end">
                <a href='https://github.com/theTODEsage/react-router-assignment' target='_blank' className="btn btn-primary">Contribute</a>
            </div>
        </div>
    );
};

export default Nav;