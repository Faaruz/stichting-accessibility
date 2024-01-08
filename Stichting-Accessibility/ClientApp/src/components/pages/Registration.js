import React, { useState } from 'react';
import BedrijfRegistration from './BedrijfRegistration';
import ErvaringsdeskundigeRegistration from './ErvaringsdeskundigeRegistration';
import '../css/registration.css';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

const apiBaseUrl = 'https://localhost:7294/api';
const Registration = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const navigate = useNavigate();

    const handleCheckboxChange = (option) => {
        setSelectedOption(option);
    };

    const handleContinueButtonClick = async (formData) => {
        try {
            // Include the 'role' in the request data
            await axios.post(`${apiBaseUrl}/registration`, formData);

            // Redirect or perform any other actions on successful registration
            if (selectedOption === 'bedrijf') {
                // Redirect to bedrijf registration page
                navigate('/bedrijf-dashboard')
                console.log('Redirect to Bedrijf Registration');
            } else if (selectedOption === 'ervaringsdeskundige') {
                // Redirect to ervaringsdeskundige registration page
                navigate('/research')
                console.log('Redirect to Ervaringsdeskundige Registration');
            }
        } catch (error) {
            console.error('Registration failed:', error);
            // Handle error (display an error message, etc.)
        }
    };

    return (
        <div className="registration-page">
            <h2>Bent u een ervaringsdeskundige of bent u een bedrijf?</h2>
            <div className="registration-options">
                <label className="radio-label">
                    <input
                        type="radio"
                        value="ervaringsdeskundige"
                        checked={selectedOption === 'ervaringsdeskundige'}
                        onChange={() => handleCheckboxChange('ervaringsdeskundige')}
                        className="registration-checkbox"
                    />
                    Ervaringsdeskundige
                </label>
                <label className="radio-label">
                    <input
                        type="radio"
                        value="bedrijf"
                        checked={selectedOption === 'bedrijf'}
                        onChange={() => handleCheckboxChange('bedrijf')}
                        className="registration-checkbox"
                    />
                    Bedrijf
                </label>
            </div>
            {selectedOption === 'bedrijf' && <BedrijfRegistration onSubmit={handleContinueButtonClick} />}
            {selectedOption === 'ervaringsdeskundige' && <ErvaringsdeskundigeRegistration onSubmit={handleContinueButtonClick} />}
        </div>
    );
};

export default Registration;