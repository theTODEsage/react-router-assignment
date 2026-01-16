import React from 'react';

const DemoCardsHome = ({ data }) => {
    const { image, title, downloads } = data
    return (
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
                </div>
            </div>
        </div>

    );
};

export default DemoCardsHome;