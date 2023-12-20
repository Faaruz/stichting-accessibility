import React, { Component } from 'react';
import BedrijfRegistration from './BedrijfRegistration';
import ErvaringsdeskundigeRegistration from './ErvaringsdeskundigeRegistration';
import '../css/registration.css';

export class Registration extends Component {
    static displayName = Registration.name;
    constructor(props) {
        super(props);

        // State to track the selected option and whether to show BedrijfRegistration or ErvaringsdeskundigeRegistration
        this.state = {
            selectedOption: null,
        };
    }

    // Function to handle checkbox selection
    handleCheckboxChange = (option) => {
        this.setState({ selectedOption: option });
    };

    // Function to handle "Ga verder" button click
    handleContinueButtonClick = () => {
        // Add any additional logic needed before showing BedrijfRegistration or ErvaringsdeskundigeRegistration
    };

    render() {
        const { selectedOption } = this.state;

        return (
            <div className="registration-page">
                <h2>Bent u een ervaringsdeskundige of bent u een bedrijf?</h2>
                <div className="registration-options">
                    <label className="radio-label">
                        <input
                            type="radio"
                            value="ervaringsdeskundige"
                            checked={selectedOption === 'ervaringsdeskundige'}
                            onChange={() => this.handleCheckboxChange('ervaringsdeskundige')}
                            className="registration-checkbox"/>
                        Ervaringsdeskundige
                    </label>
                    <label className="radio-label">
                        <input
                            type="radio"
                            value="bedrijf"
                            checked={selectedOption === 'bedrijf'}
                            onChange={() => this.handleCheckboxChange('bedrijf')}
                            className="registration-checkbox"
                        />
                        Bedrijf
                    </label>
                </div>
                {selectedOption === 'bedrijf' && <BedrijfRegistration />}
                {selectedOption === 'ervaringsdeskundige' && <ErvaringsdeskundigeRegistration />}
            </div>
        );
    }
}