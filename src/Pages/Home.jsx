import React, { useState, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router';
import DemoCardsHome from './demoCardsHome';
import Hero from '../Components/Hero';
import Loading from '../Components/Loading';

const Home = () => {
    const fullData = useLoaderData();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 500);
    }, []);

    const mainData = fullData.slice(0, 8);

    if (loading) return <Loading />;

    return (
        <>
            <Hero></Hero>
            <div className='text-center mt-5'>
                <h2 className='text-3xl font-bold mb-6'>Trending Apps</h2>
                <p className='mb-4'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='grid grid-cols-4 gap-4 max-w-7xl mx-auto'>
                {mainData.map(data => <DemoCardsHome key={data.id} data={data}></DemoCardsHome>)}
            </div>
            <div className='text-center my-8'>
                <Link className='btn' to='/app'>Show All</Link>
            </div>
        </>
    );
};

export default Home;