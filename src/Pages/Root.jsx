import React from 'react';
import Nav from '../Components/Nav';
import { Outlet } from 'react-router';
import Foot from '../Components/Foot';

const Root = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Nav></Nav>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
            <Foot></Foot>
        </div>
    );
};

export default Root;