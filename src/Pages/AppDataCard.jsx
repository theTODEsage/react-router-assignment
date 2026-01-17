import React from 'react';

const AppDataCard = ({appsData}) => {
    const { image, title, downloads, ratingAvg } = appsData
    return (
        <>
            <div className="max-w-xs rounded border bg-white">
            <img
                src={image}
                alt="Forest App"
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
        
        
        
        </>
    );
};

export default AppDataCard;