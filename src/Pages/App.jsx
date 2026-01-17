import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import AppDataCard from './AppDataCard';
import Loading from '../Components/Loading';

const App = () => {
    const allData = useLoaderData();
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const trimmedData = search.trim().toLowerCase();
    const searchedData = trimmedData
        ? allData.filter(data => data.title.toLowerCase().includes(trimmedData))
        : allData;

    const handleSearch = (e) => {
        setIsLoading(true);
        setSearch(e.target.value);
        setTimeout(() => {
            setIsLoading(false);
        }, 300);
    };

    return (
        <>
            <div className='text-center mt-14 mb-6'>
                <h2 className='text-2xl font-bold mb-3.5'>Our All Applications</h2>
                <p>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex items-center justify-between my-4'>
                <div>{allData.length} Apps Found</div>
                <label className="input">
                    <input 
                        value={search} 
                        onChange={handleSearch} 
                        type="search" 
                        placeholder="Search..." 
                    />
                </label>
            </div>

            {isLoading ? (
                <Loading />
            ) : (
                <div className='grid grid-cols-4 gap-4 max-w-7xl mx-auto'>
                    {searchedData.length > 0
                        ? searchedData.map(appsData => <AppDataCard key={appsData.id} appsData={appsData} />)
                        : <p className="col-span-4 text-center py-10">No apps found</p>
                    }
                </div>
            )}
        </>
    );
};

export default App;
