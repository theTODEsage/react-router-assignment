import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { Star, Download } from 'lucide-react';

const Install = () => {
    const [installedApps, setInstalledApps] = useState([]);
    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        const apps = JSON.parse(localStorage.getItem('installedApps')) || [];
        setInstalledApps(apps);
    }, []);

    const formatDownloads = (num) => {
        if (num >= 1000000000) return (num / 1000000000).toFixed(1) + 'B+';
        if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M+';
        if (num >= 1000) return (num / 1000).toFixed(1) + 'K+';
        return num;
    };

    const handleUninstall = (appId) => {
        const updatedApps = installedApps.filter(app => app.id !== appId);
        localStorage.setItem('installedApps', JSON.stringify(updatedApps));
        setInstalledApps(updatedApps);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
    };

    return (
        <div className="max-w-7xl mx-auto py-8 px-4">
            {showToast && (
                <div className="toast toast-top toast-center">
                    <div className="alert alert-info">
                        <span>App uninstalled successfully!</span>
                    </div>
                </div>
            )}

            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold mb-4">My Installation</h1>
                <p className="text-gray-600">Your installed applications</p>
            </div>

            {installedApps.length === 0 ? (
                <div className="text-center py-20">
                    <h3 className="text-2xl font-bold text-gray-700 mb-2">No Apps Installed</h3>
                    <p className="text-gray-500 mb-6">Browse and install apps to see them here</p>
                    <Link to="/app" className="btn btn-primary">Browse Apps</Link>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {installedApps.map(app => (
                        <div key={app.id} className="rounded-lg border border-gray-200 bg-white hover:shadow-lg transition-shadow">
                            <Link to={`/appDetails/${app.id}`}>
                                <div className="flex items-center justify-center p-4 bg-gray-50">
                                    <img src={app.image} alt={app.title} className="h-32 w-32 object-contain" />
                                </div>
                            </Link>

                            <div className="p-4 border-t border-gray-100">
                                <Link to={`/appDetails/${app.id}`}>
                                    <h3 className="font-semibold text-gray-800 mb-2 truncate">{app.title}</h3>
                                </Link>
                                
                                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                                    <div className="flex items-center gap-1">
                                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                        <span className="font-medium">{app.ratingAvg}</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-gray-500">
                                        <Download className="w-4 h-4" />
                                        <span>{formatDownloads(app.downloads)}</span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => handleUninstall(app.id)}
                                    className="btn btn-error btn-sm w-full"
                                >
                                    Uninstall
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Install;