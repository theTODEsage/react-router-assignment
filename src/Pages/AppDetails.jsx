import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const AppDetails = () => {
    const {id} = useParams()
    const apps = useLoaderData()
    
    const app = apps.find(a=> String(a.id)===id)
    
    
    const {image, title, downloads, ratingAvg} = app

    return (
        <div className="max-w-xs rounded border bg-white">
                    <img
                        src={image}
                        alt=""
                        className="h-[315px] w-[315px] object-contain"
                    />

                    <div className="p-3">
                        <h3 className="text-sm font-semibold">{title}</h3>
                        <div className="mt-3 flex justify-between text-xs text-gray-700">
                            <span>⬇ {downloads}</span>
                            <span>{ratingAvg}</span>
                        </div>
                    </div>
                </div>
    );
};

export default AppDetails;