import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import {useAuth} from "../services/AuthContext";
import axios from 'axios';

const apiBaseUrl = 'https://localhost:7294/api';
const Login = () => {
    const { login } = useAuth();

    const [loginData, setLoginData] = useState({
        username: 'test@test.nl',
        password: 'Test123!',
    });
    const navigate = useNavigate(); // Use navigate within the component

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    const handleLogin = async () => {
        try {
            // Make a request to your API for user authentication
            const response = await axios.post(`${apiBaseUrl}/login`, loginData);

            // Log the entire response data to inspect its structure
            console.log('API Response:', response.data);

            // Assuming your API returns a token along with other data upon successful login
            const { token, message, accountType } = response.data;

            // Check if the token exists
            if (token) {
                // Store the token in local storage or a secure storage solution.
                // Replace 'yourTokenKey' with the key you want to use for storing the token.
                localStorage.setItem('yourTokenKey', token);

                login();
                // Redirect to the onboarding page (or another page) on successful login
                navigate('/onboarding');
            } else {
                // Handle the case where the token is not present in the response
                console.error('Token not found in the API response');
            }
        } catch (error) {
            console.error('Login failed:', error);
            // Handle incorrect login credentials (display an error message, etc.)
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin();
    };


    return (
        <div className="login-page">
            <div className="login-content fade-up">
                <h1 className="welcome-text">Login to Your Account</h1>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input
                            type="text"
                            name="username"
                            id="username"
                            value={loginData.username}
                            onChange={handleInputChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input
                            type="password"
                            name="password"
                            id="password"
                            value={loginData.password}
                            onChange={handleInputChange}
                        />
                    </FormGroup>
                    <Button color="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </div>
            <div className="register-link-container fade-up">
                <Link to="/registration">Don't have an account? Register here.</Link>
            </div>
        </div>
    );
};

export default Login;
