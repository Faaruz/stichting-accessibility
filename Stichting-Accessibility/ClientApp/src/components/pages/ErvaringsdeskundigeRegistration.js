import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export class ErvaringsdeskundigeRegistration extends Component {
    static displayName = ErvaringsdeskundigeRegistration.name;

    constructor(props) {
        super(props);

        // State to track form values and step
        this.state = {
            formValues: {
                voornaam: '',
                achternaam: '',
                postcode: '',
                woonplaats: '',
                email: '',
                telefoonnummer: '',
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
            <div className="ervaringsdeskundige-registration-page">
                <h2>Ervaringsdeskundige Registratie</h2>

                {step === 1 && (
                    <Form onSubmit={this.handleNextStep}>
                        {/* ... form fields for step 1 */}
                        <FormGroup>
                            <Label for="voornaam">Voornaam</Label>
                            <Input type="text" name="voornaam" id="voornaam" value={formValues.voornaam} onChange={this.handleInputChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="achternaam">Achternaam</Label>
                            <Input type="text" name="achternaam" id="achternaam" value={formValues.achternaam} onChange={this.handleInputChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="postcode">Postcode</Label>
                            <Input type="text" name="postcode" id="postcode" value={formValues.postcode} onChange={this.handleInputChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="woonplaats">Woonplaats</Label>
                            <Input type="text" name="woonplaats" id="woonplaats" value={formValues.woonplaats} onChange={this.handleInputChange} />
                        </FormGroup>
                        <div className="continue-button">
                            <Button color="primary" size="lg" type="submit">
                                Ga verder naar Stap 2
                            </Button>
                        </div>
                    </Form>
                )}

                {step === 2 && (
                    <Form onSubmit={this.handleFormSubmit}>
                        {/* ... form fields for step 2 */}
                        <FormGroup>
                            <Label for="email">E-mail</Label>
                            <Input type="email" name="email" id="email" value={formValues.email} onChange={this.handleInputChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="telefoonnummer">Telefoonnummer</Label>
                            <Input type="tel" name="telefoonnummer" id="telefoonnummer" value={formValues.telefoonnummer} onChange={this.handleInputChange} />
                        </FormGroup>
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
                )}
            </div>
        );
    }
}

export default ErvaringsdeskundigeRegistration;
