import React from 'react';
import { useLoaderData } from 'react-router';
import AppDataCard from './AppDataCard';

const App = () => {
    const allData = useLoaderData()
    return (
        <>

            <div className='text-center mt-14 mb-6'>
                <h2 className='text-2xl font-bold mb-3.5'>Our All Applications</h2>
                <p>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex items-center justify-between my-4'>
                <div>{allData.length} Apps Found</div>
                <input placeholder='enter app name' className='border-2' type="text" />
            </div>
        
            <div className='grid grid-cols-4 gap-4 max-w-7xl mx-auto'>
                {
                    allData.map((appsData, index)=><AppDataCard key={index} appsData={appsData}></AppDataCard>)
                }
            </div>
        
        
        
        </>
    );
};

export default App;