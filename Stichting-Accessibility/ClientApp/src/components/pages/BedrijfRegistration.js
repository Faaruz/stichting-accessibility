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
        console.log('Form submitted:', formValues);
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
                </>
            )}
        </div>
    );
};

export default BedrijfRegistration;