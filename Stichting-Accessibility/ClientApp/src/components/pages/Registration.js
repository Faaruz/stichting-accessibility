import React, { useState } from 'react';
import BedrijfRegistration from './BedrijfRegistration';
import ErvaringsdeskundigeRegistration from './ErvaringsdeskundigeRegistration';
import '../css/registration.css';

const Registration = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleCheckboxChange = (option) => {
        setSelectedOption(option);
    };

    const handleContinueButtonClick = () => {
        // Add any additional logic needed before showing BedrijfRegistration or ErvaringsdeskundigeRegistration
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
            {selectedOption === 'bedrijf' && <BedrijfRegistration />}
            {selectedOption === 'ervaringsdeskundige' && <ErvaringsdeskundigeRegistration />}
        </div>
    );
};

export default Registration;