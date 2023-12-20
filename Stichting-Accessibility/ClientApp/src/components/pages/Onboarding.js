import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export class Onboarding extends Component {
    static displayName = Onboarding.name;

    constructor(props) {
        super(props);

        // State to hold selected options
        this.state = {
            typeBeperking: '',
            hulpmiddelen: '',
            ziektes: '',
        };
    }

    handleSelectChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Handle form submission, e.g., send data to a server
        console.log('Form submitted with data:', this.state);
    };

    render() {
        const typeBeperkingOptions = ['Option 1', 'Option 2', 'Option 3'];
        const hulpmiddelenOptions = ['Option A', 'Option B', 'Option C'];

        return (
            <div className="onboarding">
                <div className="onboarding-content fade-up">
                </div>
                <Form className="fade-up" onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="typeBeperking">Type Beperking</Label>
                        <Input
                            type="select"
                            name="typeBeperking"
                            id="typeBeperking"
                            value={this.state.typeBeperking}
                            onChange={this.handleSelectChange}
                        >
                            <option value="" disabled>Select an option</option>
                            {typeBeperkingOptions.map((option, index) => (
                                <option key={index} value={option}>{option}</option>
                            ))}
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="hulpmiddelen">Hulpmiddelen</Label>
                        <Input
                            type="select"
                            name="hulpmiddelen"
                            id="hulpmiddelen"
                            value={this.state.hulpmiddelen}
                            onChange={this.handleSelectChange}
                        >
                            <option value="" disabled>Select an option</option>
                            {hulpmiddelenOptions.map((option, index) => (
                                <option key={index} value={option}>{option}</option>
                            ))}
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="ziektes">Ziektes</Label>
                        <Input
                            type="input"
                            name="ziektes"
                            id="ziektes"
                            value={this.state.ziektes}
                            onChange={this.handleSelectChange}>
                        </Input>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}
