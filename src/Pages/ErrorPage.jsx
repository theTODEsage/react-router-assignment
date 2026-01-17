import React from 'react';
import { useRouteError, Link } from 'react-router';

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
                <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
                <p className="text-gray-600 mb-6">{error?.message || "The page you're looking for doesn't exist."}</p>
                <Link to="/home" className="btn btn-primary">
                    Go Back Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;