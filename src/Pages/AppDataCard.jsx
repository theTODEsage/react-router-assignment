import React from 'react';
import { Link } from 'react-router';
import { Star, Download } from 'lucide-react';

const AppDataCard = ({ appsData }) => {
    const { image, title, downloads, ratingAvg, id } = appsData;
    const formatDownloads = (num) => {
        if (num >= 1000000000) return (num / 1000000000).toFixed(1) + 'B+';
        if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M+';
        if (num >= 1000) return (num / 1000).toFixed(1) + 'K+';
        return num;
    };

    return (
        <Link to={`/appDetails/${id}`}>
            <div className="rounded-lg border border-gray-200 bg-white hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-center justify-center p-4 bg-gray-50">
                    <img
                        src={image}
                        alt={title}
                        className="h-32 w-32 object-contain"
                    />
                </div>
                <div className="p-4 border-t border-gray-100">
                    <h3 className="font-semibold text-gray-800 mb-2 truncate">{title}</h3>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                            <span className="font-medium">{ratingAvg}</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-500">
                            <Download className="w-4 h-4" />
                            <span>{formatDownloads(downloads)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default AppDataCard;