import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
import Layout from './components/Layout';
import Research from './components/pages/Research'; // Import the Research component

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('yourTokenKey');
        console.log('Token on refresh:', token);
        setIsAuthenticated(!!token);
    }, []);


    const handleLogout = () => {
        // Clear the authentication token on logout
        localStorage.removeItem('yourTokenKey');
        setIsAuthenticated(false);
    };

    return (
        <Layout isAuthenticated={isAuthenticated} handleLogout={handleLogout}>
            <Routes>
                {AppRoutes.map((route, index) => {
                    const { element, requireAuth, ...rest } = route;
                    return (
                        <Route
                            key={index}
                            {...rest}
                            element={requireAuth ? <AuthorizeRoute {...rest} element={element} /> : element}
                        />
                    );
                })}
                {isAuthenticated && <Route path="/research" element={<Research />} />} {/* Add the Research route only if authenticated */}
            </Routes>
        </Layout>
    );
};

export default App;
