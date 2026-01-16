import React from 'react';
import { useLoaderData } from 'react-router';
import DemoCardsHome from './demoCardsHome';

const Home = () => {
    const fullData = useLoaderData()

    const mainData = fullData.slice(0, 8)

    return (
        <>

            <div className='grid grid-cols-4 gap-4 max-w-7xl mx-auto'>
                {
                    mainData.map(data => <DemoCardsHome data={data}></DemoCardsHome>)
                }
            </div>
        </>
    );
};

export default Home;