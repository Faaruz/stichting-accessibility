import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const BedrijfRegistration = () => {
    const [formValues, setFormValues] = useState({
        voornaam: '',
        achternaam: '',
        bedrijfsnaam: '',
        email: '',
        telefoonnummer: '',
        postcode: '',
        plaats: '',
        wachtwoord: '',
        bevestigWachtwoord: '',
    });

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

        // Check if telefoonnummer only contains numbers
        const phoneRegex = /^\d+$/;
        if (name === 'telefoonnummer' && !phoneRegex.test(value)) {
            newErrors.telefoonnummer = 'Telefoonnummer moet alleen cijfers bevatten.';
        } else {
            delete newErrors.telefoonnummer;
        }

        // Check if postcode has the format of 4 numbers and 2 letters
        const postcodeRegex = /^\d{4}[A-Za-z]{2}$/;
        if (name === 'postcode' && !postcodeRegex.test(value)) {
            newErrors.postcode = 'Ongeldige postcode-indeling.';
        } else {
            delete newErrors.postcode;
        }
        
        // Check if plaats only contains letters (including spaces)
        const plaatsRegex = /^[a-zA-Z\s]+$/;
        if (name === 'plaats' && !plaatsRegex.test(value)) {
            newErrors.plaats = 'Plaats moet alleen letters en spaties bevatten.';
        } else {
            delete newErrors.plaats;
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
            // Add any additional logic needed for form submission
            console.log('Form submitted:', formValues);
        } else {
            // Password mismatch error message
            setErrors((prevErrors) => ({
                ...prevErrors,
                bevestigWachtwoord: 'Wachtwoord en bevestig wachtwoord moeten overeenkomen, teminste 8 tekens lang zijn en een hoofdletter en leesteken bevatten.',
            }));
        }
    };

    return (
        <div className="bedrijf-registration-page">
            <h2>Bedrijfsregistratie</h2>
            {step === 1 && (
                <>
                    <Form onSubmit={handleNextStep}>
                        <FormGroup>
                            <Label for="voornaam">Voornaam contactpersoon</Label>
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
                            <Label for="achternaam">Achternaam contactpersoon</Label>
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
                            <Label for="bedrijfsnaam">Bedrijfsnaam</Label>
                            <Input
                                type="text"
                                name="bedrijfsnaam"
                                required={true}
                                id="bedrijfsnaam"
                                value={formValues.bedrijfsnaam}
                                onChange={handleInputChange}
                            />
                            {errors.bedrijfsnaam && (
                                <span className="error-message">{errors.bedrijfsnaam}</span>
                            )}
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
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
                        <div className="continue-button">
                            <Button color="primary" size="lg" type="submit">
                                Ga verder naar stap 2
                            </Button>
                        </div>
                    </Form>
                </>
            )}

            {step === 2 && (
                <>
                    <Form onSubmit={handleFormSubmit}>
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
                            <Label for="plaats">Plaats</Label>
                            <Input
                                type="text"
                                name="plaats"
                                required={true}
                                id="plaats"
                                value={formValues.plaats}
                                onChange={handleInputChange}
                            />
                            {errors.plaats && (
                                <span className="error-message">{errors.plaats}</span>
                            )}
                        </FormGroup>
                        <p>Login met Google, Microsoft of handmatig</p>
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
                        <div className="continue-button">
                            <Button color="primary" size="lg" type="submit">
                                Voltooien
                            </Button>
                        </div>
                    </Form>
                </>
            )}
        </div>
    );
};

export default BedrijfRegistration;
