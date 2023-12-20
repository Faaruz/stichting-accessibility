// SharedLayout.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

const SharedLayout = ({ children }) => {
    return (
        <div className="shared-layout">
            <div className="logo"> {/* Include your logo here */}</div>
            <div className="login-button"> {/* Include your login button here */}</div>
            {children}
        </div>
    );
};

export default SharedLayout;

