import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import PrivacyPopup from './PrivacyAgreement';

const ErvaringsdeskundigeRegistration = ({ onSubmit }) => {
    const [formValues, setFormValues] = useState({
        voornaam: '',
        bedrijfsnaam: '',
        achternaam: '',
        postcode: '',
        woonplaats: '',
        email: '',
        telefoonnummer: '',
        wachtwoord: '',
        bevestigWachtwoord: '',
        privacyConsent: false,
    });
    const [privacyPopupOpen, setPrivacyPopupOpen] = useState(false);

    const togglePrivacyPopup = () => {
        setPrivacyPopupOpen(!privacyPopupOpen);
    };
    const handleCheckboxClick = () => {
        // Open the privacy popup when the word "privacyverklaring" is clicked
        togglePrivacyPopup();
    };

    const [step, setStep] = useState(1);
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));

        // Validate input based on the field name
        validateInput(name, value);
    };

    const validateInput = (name, value) => {
        const newErrors = { ...errors };

        // Check if voornaam and achternaam only contain letters (including spaces)
        const nameRegex = /^[a-zA-Z\s]+$/;
        if ((name === 'voornaam' || name === 'achternaam') && !nameRegex.test(value)) {
            newErrors[name] = `${name.charAt(0).toUpperCase() + name.slice(1)} moet alleen letters en spaties bevatten.`;
        } else {
            delete newErrors[name];
        }

        // Check if postcode has the format of 4 numbers and 2 letters
        if (name === 'postcode') {
            // Remove spaces and then validate
            const formattedValue = value.replace(/\s/g, '');
            const postcodeRegex = /^\d{4}[A-Za-z]{2}$/;
            if (!postcodeRegex.test(formattedValue)) {
                newErrors.postcode = 'Ongeldige postcode-indeling. Een postcode bestaat uit 4 cijfers en 2 letters.';
            } else {
                delete newErrors.postcode;
            }
        }

        // Check if woonplaats only contains letters (including spaces)
        if (name === 'woonplaats' && !nameRegex.test(value)) {
            newErrors.woonplaats = 'Woonplaats moet alleen letters en spaties bevatten.';
        } else {
            delete newErrors.woonplaats;
        }

        // Check if telefoonnummer only contains numbers
        const phoneRegex = /^\d+$/;
        if (name === 'telefoonnummer' && !phoneRegex.test(value)) {
            newErrors.telefoonnummer = 'Telefoonnummer moet alleen cijfers bevatten.';
        } else {
            delete newErrors.telefoonnummer;
        }

        // Check if wachtwoord meets the specified criteria
        const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(.{8,})$/;
        if (name === 'wachtwoord' && !passwordRegex.test(value)) {
            newErrors.wachtwoord =
                'Wachtwoord moet minstens 8 tekens lang zijn en een hoofdletter en een leesteken (!@#$%^&*) bevatten.';
        } else {
            delete newErrors.wachtwoord;
        }

        // Check if wachtwoord and bevestigWachtwoord match
        if (name === 'bevestigWachtwoord' && value !== formValues.wachtwoord) {
            newErrors.bevestigWachtwoord = 'Wachtwoord en bevestig wachtwoord moeten overeenkomen.';
        } else {
            delete newErrors.bevestigWachtwoord;
        }

        setErrors(newErrors);
    };

    const handleNextStep = (e) => {
        e.preventDefault();
        // Validate all fields before proceeding to the next step
        const isStepValid = Object.keys(errors).length === 0;
        if (isStepValid) {
            setStep((prevStep) => prevStep + 1);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Validate all fields before submitting the form
        const isFormValid = Object.keys(errors).length === 0;

        // Additional validation for password criteria
        const passwordCriteriaMet =
            formValues.wachtwoord &&
            /^(?=.*[A-Z])(?=.*[!@#$%^&*])(.{8,})$/.test(formValues.wachtwoord);

        if (isFormValid && passwordCriteriaMet) {
            // Add the 'role' to the form data
            const formDataWithRole = { ...formValues, role: 'ervaringsdeskundige' };

            // Make the API request with the updated form data
            console.log('Form submitted:', formDataWithRole);
            // Call the provided onSubmit function with the form data
            onSubmit(formDataWithRole);
        } else {
            // Password mismatch error message
            setErrors((prevErrors) => ({
                ...prevErrors,
                bevestigWachtwoord: 'Wachtwoord en bevestig wachtwoord moeten overeenkomen, tenminste 8 tekens lang zijn en een hoofdletter en leesteken bevatten.',
            }));
        }
    };

    return (
        <div className="ervaringsdeskundige-registration-page">
            <h2>Ervaringsdeskundige Registratie</h2>

            {step === 1 && (
                <Form onSubmit={handleNextStep}>
                    <FormGroup>
                        <Label for="voornaam">Voornaam</Label>
                        <Input
                            type="text"
                            name="voornaam"
                            required={true}
                            id="voornaam"
                            value={formValues.voornaam}
                            onChange={handleInputChange}
                        />
                        {errors.voornaam && (
                            <span className="error-message">{errors.voornaam}</span>
                        )}
                    </FormGroup>
                    <FormGroup>
                        <Label for="achternaam">Achternaam</Label>
                        <Input
                            type="text"
                            name="achternaam"
                            required={true}
                            id="achternaam"
                            value={formValues.achternaam}
                            onChange={handleInputChange}
                        />
                        {errors.achternaam && (
                            <span className="error-message">{errors.achternaam}</span>
                        )}
                    </FormGroup>
                    <FormGroup>
                        <Label for="postcode">Postcode</Label>
                        <Input
                            type="text"
                            name="postcode"
                            required={true}
                            id="postcode"
                            value={formValues.postcode}
                            onChange={handleInputChange}
                        />
                        {errors.postcode && (
                            <span className="error-message">{errors.postcode}</span>
                        )}
                    </FormGroup>
                    <FormGroup>
                        <Label for="woonplaats">Woonplaats</Label>
                        <Input
                            type="text"
                            name="woonplaats"
                            required={true}
                            id="woonplaats"
                            value={formValues.woonplaats}
                            onChange={handleInputChange}
                        />
                        {errors.woonplaats && (
                            <span className="error-message">{errors.woonplaats}</span>
                        )}
                    </FormGroup>
                    <div className="continue-button">
                        <Button color="primary" size="lg" type="submit">
                            Ga verder naar Stap 2
                        </Button>
                    </div>
                </Form>
            )}

            {step === 2 && (
                <Form onSubmit={handleFormSubmit}>
                    <FormGroup>
                        <Label for="email">E-mail</Label>
                        <Input
                            type="email"
                            name="email"
                            required={true}
                            id="email"
                            value={formValues.email}
                            onChange={handleInputChange}
                        />
                        {errors.email && (
                            <span className="error-message">{errors.email}</span>
                        )}
                    </FormGroup>
                    <FormGroup>
                        <Label for="telefoonnummer">Telefoonnummer</Label>
                        <Input
                            type="tel"
                            name="telefoonnummer"
                            required={true}
                            id="telefoonnummer"
                            value={formValues.telefoonnummer}
                            onChange={handleInputChange}
                        />
                        {errors.telefoonnummer && (
                            <span className="error-message">{errors.telefoonnummer}</span>
                        )}
                    </FormGroup>
                    <FormGroup>
                        <Label for="wachtwoord">Wachtwoord</Label>
                        <Input
                            type="password"
                            name="wachtwoord"
                            required={true}
                            id="wachtwoord"
                            value={formValues.wachtwoord}
                            onChange={handleInputChange}
                        />
                        {errors.wachtwoord && (
                            <span className="error-message">{errors.wachtwoord}</span>
                        )}
                    </FormGroup>
                    <FormGroup>
                        <Label for="bevestigWachtwoord">Bevestig Wachtwoord</Label>
                        <Input
                            type="password"
                            name="bevestigWachtwoord"
                            required={true}
                            id="bevestigWachtwoord"
                            value={formValues.bevestigWachtwoord}
                            onChange={handleInputChange}
                        />
                        {errors.bevestigWachtwoord && (
                            <span className="error-message">{errors.bevestigWachtwoord}</span>
                        )}
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input
                                type="checkbox"
                                name="privacyConsent"
                                checked={formValues.privacyConsent}
                                onChange={handleInputChange}
                            />{' '}
                            Ik stem in met de{' '}
                            <span
                                style={{ color: 'blue', cursor: 'pointer', textDecoration: 'underline' }}
                                onClick={handleCheckboxClick}
                            >
                                privacyverklaring
                            </span>
                        </Label>
                    </FormGroup>
                    <div className="continue-button">
                        <Button color="primary" size="lg" type="submit">
                            Voltooien
                        </Button>
                    </div>
                </Form>
            )}
            <PrivacyPopup isOpen={privacyPopupOpen} toggle={togglePrivacyPopup}/>
        </div>
    );
};
export default ErvaringsdeskundigeRegistration;
