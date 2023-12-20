import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const BedrijfRegistration = () => {
    // State to track form values and step
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
            <div className="bedrijf-registration-page">
                <h2>Bedrijfsregistratie</h2>
                {step === 1 && (
                    <>
                        <Form onSubmit={handleNextStep}>
                            {/* ... form fields for step 1 */}
                            <FormGroup>
                                <Label for="voornaam">Voornaam contactpersoon</Label>
                                <Input
                                    type="text"
                                    name="voornaam"
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
                        <Form>
                            {/* ... form fields for step 2 */}
                            <FormGroup>
                                <Label for="postcode">Postcode</Label>
                                <Input
                                    type="text"
                                    name="postcode"
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
                    </>
                )}
            </div>
    );
};

export default BedrijfRegistration;




