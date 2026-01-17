import React, { useState } from 'react';
import { useLoaderData, useParams, Link } from 'react-router';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const AppDetails = () => {
    const { id } = useParams();
    const apps = useLoaderData();
    const [isInstalled, setIsInstalled] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const app = apps.find(a => String(a.id) === id);
    if (!app) {
        return (
            <div className="text-center mt-20">
                <h2 className="text-4xl font-bold mb-4">App Not Found</h2>
                <p className="text-gray-600 mb-6">Sorry, the app you're looking for doesn't exist.</p>
                <Link to="/app" className="btn btn-primary">Browse All Apps</Link>
            </div>
        );
    }

    const { image, title, downloads, ratingAvg, companyName, description, size, reviews, ratings } = app;

    const formatDownloads = (num) => {
        if (num >= 1000000000) return (num / 1000000000).toFixed(1) + 'B';
        if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
        if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
        return num;
    };

    const handleInstall = () => {
        setIsInstalled(true);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
    };

    const chartData = ratings.map(rating => ({
        name: rating.name,
        count: rating.count
    }));

    const getColor = (index) => {
        const colors = ['#FF6B6B', '#FFA07A', '#FFD93D', '#6BCF7F', '#4ECDC4'];
        return colors[index];
    };

    return (
        <div className="max-w-7xl mx-auto py-8 px-4">
            {showToast && (
                <div className="toast toast-top toast-center">
                    <div className="alert alert-success">
                        <span>App installed successfully!</span>
                    </div>
                </div>
            )}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <div className="flex gap-8">
                    <img src={image} alt={title} className="w-64 h-64 object-contain rounded-lg" />
                    <div className="flex-1">
                        <h1 className="text-4xl font-bold mb-2">{title}</h1>
                        <p className="text-gray-600 mb-4">{companyName}</p>
                        
                        <div className="grid grid-cols-4 gap-4 mb-6">
                            <div className="bg-purple-100 p-4 rounded-lg">
                                <div className="text-2xl font-bold">{ratingAvg}</div>
                                <div className="text-sm">Rating</div>
                            </div>
                            <div className="bg-blue-100 p-4 rounded-lg">
                                <div className="text-2xl font-bold">{formatDownloads(downloads)}</div>
                                <div className="text-sm">Downloads</div>
                            </div>
                            <div className="bg-green-100 p-4 rounded-lg">
                                <div className="text-2xl font-bold">{reviews.toLocaleString()}</div>
                                <div className="text-sm">Reviews</div>
                            </div>
                            <div className="bg-orange-100 p-4 rounded-lg">
                                <div className="text-2xl font-bold">{size} MB</div>
                                <div className="text-sm">Size</div>
                            </div>
                        </div>

                        <button
                            onClick={handleInstall}
                            disabled={isInstalled}
                            className={`btn btn-lg ${isInstalled ? 'btn-disabled' : 'btn-primary'} px-12`}
                        >
                            {isInstalled ? 'Installed' : 'Install'}
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6">Ratings & Reviews</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={chartData} layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" />
                        <YAxis dataKey="name" type="category" />
                        <Tooltip />
                        <Bar dataKey="count" radius={[0, 8, 8, 0]}>
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={getColor(index)} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-4">About this app</h2>
                <p className="text-gray-700">{description}</p>
            </div>
        </div>
    );
};

export default AppDetails;