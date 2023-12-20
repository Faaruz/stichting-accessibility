// ErvaringsdeskundigeRegistration.js
import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import SharedLayout from './SharedLayout';

const ErvaringsdeskundigeRegistration = () => {
    // State to track form values and step
    const [formValues, setFormValues] = useState({
        voornaam: '',
        achternaam: '',
        postcode: '',
        woonplaats: '',
        email: '',
        telefoonnummer: '',
        typeBeperking: '',
        hulpmiddelen: '',
        ziektes: '',
    });
    const [step, setStep] = useState(1);

    // Function to handle form field changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    // Function to handle form submission and navigate to the next step
    const handleNextStep = (e) => {
        e.preventDefault();
        setStep(step + 1);
    };

    return (
        <SharedLayout>
            <div className="ervaringsdeskundige-registration-page">
                <h2>Ervaringsdeskundige Registratie</h2>

                {step === 1 && (
                    <Form onSubmit={handleNextStep}>
                        {/* ... form fields for step 1 */}
                        <FormGroup>
                            <Label for="voornaam">Voornaam</Label>
                            <Input type="text" name="voornaam" id="voornaam" value={formValues.voornaam} onChange={handleInputChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="achternaam">Achternaam</Label>
                            <Input type="text" name="achternaam" id="achternaam" value={formValues.achternaam} onChange={handleInputChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="postcode">Postcode</Label>
                            <Input type="text" name="postcode" id="postcode" value={formValues.postcode} onChange={handleInputChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="woonplaats">Woonplaats</Label>
                            <Input type="text" name="woonplaats" id="woonplaats" value={formValues.woonplaats} onChange={handleInputChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">E-mail</Label>
                            <Input type="email" name="email" id="email" value={formValues.email} onChange={handleInputChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="telefoonnummer">Telefoonnummer</Label>
                            <Input type="tel" name="telefoonnummer" id="telefoonnummer" value={formValues.telefoonnummer} onChange={handleInputChange} />
                        </FormGroup>
                        <div className="continue-button">
                            <Button color="primary" size="lg" type="submit">
                                Ga verder naar Stap 2
                            </Button>
                        </div>
                    </Form>
                )}

                {step === 2 && (
                    <Form>
                        {/* ... form fields for step 2 */}
                        <FormGroup>
                            <Label for="typeBeperking">Type beperking</Label>
                            <Input
                                type="select"
                                name="typeBeperking"
                                id="typeBeperking"
                                value={formValues.typeBeperking}
                                onChange={handleInputChange}
                            >
                                <option value="">Selecteer...</option>
                                <option value="fysiek">Fysieke beperking</option>
                                <option value="visueel">Visuele beperking</option>
                                {/* Add more options as needed */}
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="hulpmiddelen">Eventuele Hulpmiddelen</Label>
                            <Input
                                type="select"
                                name="hulpmiddelen"
                                id="hulpmiddelen"
                                value={formValues.hulpmiddelen}
                                onChange={handleInputChange}
                            >
                                <option value="">Selecteer...</option>
                                <option value="braille">Braille</option>
                                <option value="geleidehond">Geleidehond</option>
                                <option value="Geen Hulpmiddelen">Geen Hulpmiddel</option>
                                {/* Add more options as needed */}
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="ziektes">Eventuele ziektes</Label>
                            <Input type="text" name="ziektes" id="ziektes" value={formValues.ziektes} onChange={handleInputChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="gebruikersnaam">Gebruikersnaam</Label>
                            <Input
                                type="text"
                                name="gebruikersnaam"
                                id="gebruikersnaam"
                                value={formValues.gebruikersnaam}
                                onChange={handleInputChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="wachtwoord">Wachtwoord</Label>
                            <Input
                                type="password"
                                name="wachtwoord"
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
        </SharedLayout>
    );
};

export default ErvaringsdeskundigeRegistration;

