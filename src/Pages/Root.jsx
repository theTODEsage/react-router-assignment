import React from 'react';
import Nav from '../Components/Nav';
import { Outlet } from 'react-router';
import Foot from '../Components/Foot';
import Hero from '../Components/Hero';

const Root = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Nav></Nav>
            <Hero></Hero>
            <div className='flex-1 max-w-[1200px] mx-auto'>
                <Outlet></Outlet>
            </div>
            <Foot></Foot>
        </div>
    );
};

export default Root;