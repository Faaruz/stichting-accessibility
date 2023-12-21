import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const ErvaringsdeskundigeRegistration = () => {
    const [formValues, setFormValues] = useState({
        voornaam: '',
        achternaam: '',
        postcode: '',
        woonplaats: '',
        email: '',
        telefoonnummer: '',
        wachtwoord: '',
        bevestigWachtwoord: '',
    });

    const [step, setStep] = useState(1);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleNextStep = (e) => {
        e.preventDefault();
        setStep((prevStep) => prevStep + 1);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Add any additional logic needed for form submission
        console.log('Form submitted:', formValues);
    };

    return (
        <div className="ervaringsdeskundige-registration-page">
            <h2>Ervaringsdeskundige Registratie</h2>

            {step === 1 && (
                <Form onSubmit={handleNextStep}>
                    <FormGroup>
                        <Label for="voornaam">Voornaam</Label>
                        <Input type="text" name="voornaam" required={true} id="voornaam" value={formValues.voornaam} onChange={handleInputChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="achternaam">Achternaam</Label>
                        <Input type="text" name="achternaam" required={true} id="achternaam" value={formValues.achternaam} onChange={handleInputChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="postcode">Postcode</Label>
                        <Input type="text" name="postcode" required={true} id="postcode" value={formValues.postcode} onChange={handleInputChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="woonplaats">Woonplaats</Label>
                        <Input type="text" name="woonplaats" required={true} id="woonplaats" value={formValues.woonplaats} onChange={handleInputChange} />
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
                        <Input type="email" name="email" required={true} id="email" value={formValues.email} onChange={handleInputChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="telefoonnummer">Telefoonnummer</Label>
                        <Input type="tel" name="telefoonnummer" required={true} id="telefoonnummer" value={formValues.telefoonnummer} onChange={handleInputChange} />
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
                    </FormGroup>
                    <div className="continue-button">
                        <Button color="primary" size="lg" type="submit">
                            Voltooien
                        </Button>
                    </div>
                </Form>
            )}
        </div>
    );
};

export default ErvaringsdeskundigeRegistration;