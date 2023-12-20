import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
import { Layout } from './components/Layout';
import { Research } from './components/pages/Research'; // Import the Research component

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
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
                    {/* Add the Research route */}
                    <Route path="/research" element={<Research />} />
                </Routes>
            </Layout>
        );
    }
}


