import React, { useState } from 'react';
import { Button } from 'reactstrap';
import SharedLayout from './SharedLayout';
import BedrijfRegistration from './BedrijfRegistration'; // Import the BedrijfRegistration component
import ErvaringsdeskundigeRegistration from './ErvaringsdeskundigeRegistration'; // Import the ErvaringsdeskundigeRegistration component
import '../css/registration.css'; // Import the registration CSS file

const Registration = () => {
    // State to track the selected option and whether to show BedrijfRegistration or ErvaringsdeskundigeRegistration
    const [selectedOption, setSelectedOption] = useState(null);

    // Function to handle checkbox selection
    const handleCheckboxChange = (option) => {
        setSelectedOption(option);
    };

    // Function to handle "Ga verder" button click
    const handleContinueButtonClick = () => {
        // Add any additional logic needed before showing BedrijfRegistration or ErvaringsdeskundigeRegistration
    };

    return (
        <SharedLayout>
            <div className="registration-page">
                <h2>Bent u een ervaringsdeskundige of bent u een bedrijf?</h2>
                <div className="registration-options">
                    <label className="checkbox-label">
                        <input
                            type="checkbox"
                            value="ervaringsdeskundige"
                            checked={selectedOption === 'ervaringsdeskundige'}
                            onChange={() => handleCheckboxChange('ervaringsdeskundige')}
                            className="registration-checkbox" // Apply the registration CSS class
                        />
                        Ervaringsdeskundige
                    </label>
                    <label className="checkbox-label">
                        <input
                            type="checkbox"
                            value="bedrijf"
                            checked={selectedOption === 'bedrijf'}
                            onChange={() => handleCheckboxChange('bedrijf')}
                            className="registration-checkbox" // Apply the registration CSS class
                        />
                        Bedrijf
                    </label>
                </div>
            </div>
            {selectedOption === 'bedrijf' && <BedrijfRegistration />} {/* Render BedrijfRegistration if 'bedrijf' is selected */}
            {selectedOption === 'ervaringsdeskundige' && <ErvaringsdeskundigeRegistration />} {/* Render ErvaringsdeskundigeRegistration if 'ervaringsdeskundige' is selected */}
        </SharedLayout>
    );
};

export { Registration };

