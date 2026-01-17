
import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import AppDataCard from './AppDataCard';

const App = () => {
    const allData = useLoaderData();
    const [search, setSearch] = useState('');
    const trimmedData = search.trim().toLowerCase();
    const searchedData = trimmedData
        ? allData.filter(data => data.title.toLowerCase().includes(trimmedData))
        : allData;

    return (
        <>
                <div className='text-center mt-14 mb-6'>
                    <h2 className='text-2xl font-bold mb-3.5'>Our All Applications</h2>
                    <p>Explore All Apps on the Market developed by us. We code for Millions</p>
                </div>
                <div className='flex items-center justify-between my-4'>
                    <div>{allData.length} Apps Found</div>
                    <label className="input">
                        <input value={search} onChange={(e) => setSearch(e.target.value)} type="search" placeholder="" />
                    </label>
                </div>

                <div className='grid grid-cols-4 gap-4 max-w-7xl mx-auto'>
                    {searchedData.length > 0
                        ? searchedData.map(appsData => <AppDataCard key={appsData.id} appsData={appsData} />)
                        : <p>No data found</p>
                    }
                </div>
        </>
    );
};

export default App;
