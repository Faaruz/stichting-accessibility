import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import ErvaringsdeskundigeRegistration from "./ErvaringsdeskundigeRegistration";

export class BedrijfRegistration extends Component {
    static displayName = BedrijfRegistration.name;
    constructor(props) {
        super(props);

        // State to track form values and step
        this.state = {
            formValues: {
                voornaam: '',
                achternaam: '',
                bedrijfsnaam: '',
                email: '',
                telefoonnummer: '',
                postcode: '',
                plaats: '',
                wachtwoord: '',
                bevestigWachtwoord: '',
            },
            step: 1,
        };
    }

    // Function to handle form field changes
    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState((prevState) => ({
            formValues: {
                ...prevState.formValues,
                [name]: value,
            },
        }));
    };

    // Function to handle form submission and navigate to the next step
    handleNextStep = (e) => {
        e.preventDefault();
        this.setState((prevState) => ({
            step: prevState.step + 1,
        }));
    };
    
    // Function to handle form submission
    handleFormSubmit = (e) => {
        e.preventDefault();
        // Add any additional logic needed for form submission
        console.log('Form submitted:', this.state.formValues);
    };

    render() {
        const { formValues, step } = this.state;

        return (
            <div className="bedrijf-registration-page">
                <h2>Bedrijfsregistratie</h2>
                {step === 1 && (
                    <>
                        <Form onSubmit={this.handleNextStep}>
                            {/* ... form fields for step 1 */}
                            <FormGroup>
                                <Label for="voornaam">Voornaam contactpersoon</Label>
                                <Input
                                    type="text"
                                    name="voornaam"
                                    id="voornaam"
                                    value={formValues.voornaam}
                                    onChange={this.handleInputChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="achternaam">Achternaam contactpersoon</Label>
                                <Input
                                    type="text"
                                    name="achternaam"
                                    id="achternaam"
                                    value={formValues.achternaam}
                                    onChange={this.handleInputChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="bedrijfsnaam">Bedrijfsnaam</Label>
                                <Input
                                    type="text"
                                    name="bedrijfsnaam"
                                    id="bedrijfsnaam"
                                    value={formValues.bedrijfsnaam}
                                    onChange={this.handleInputChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formValues.email}
                                    onChange={this.handleInputChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="telefoonnummer">Telefoonnummer</Label>
                                <Input
                                    type="tel"
                                    name="telefoonnummer"
                                    id="telefoonnummer"
                                    value={formValues.telefoonnummer}
                                    onChange={this.handleInputChange}
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
                        <Form onSubmit={this.handleFormSubmit}>
                            {/* ... form fields for step 2 */}
                            <FormGroup>
                                <Label for="postcode">Postcode</Label>
                                <Input
                                    type="text"
                                    name="postcode"
                                    id="postcode"
                                    value={formValues.postcode}
                                    onChange={this.handleInputChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="plaats">Plaats</Label>
                                <Input
                                    type="text"
                                    name="plaats"
                                    id="plaats"
                                    value={formValues.plaats}
                                    onChange={this.handleInputChange}
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
                                    onChange={this.handleInputChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="bevestigWachtwoord">Bevestig Wachtwoord</Label>
                                <Input
                                    type="password"
                                    name="bevestigWachtwoord"
                                    id="bevestigWachtwoord"
                                    value={formValues.bevestigWachtwoord}
                                    onChange={this.handleInputChange}
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
    }
}

export default BedrijfRegistration;