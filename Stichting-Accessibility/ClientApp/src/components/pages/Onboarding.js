import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Onboarding = () => {
    const [formData, setFormData] = useState({
        typeBeperking: '',
        hulpmiddelen: '',
        ziektes: '',
    });

    const typeBeperkingOptions = ['Option 1', 'Option 2', 'Option 3'];
    const hulpmiddelenOptions = ['Option A', 'Option B', 'Option C'];

    const handleSelectChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Handle form submission, e.g., send data to a server
        console.log('Form submitted with data:', formData);
    };

    return (
        <div className="onboarding">
            <div className="onboarding-content fade-up">
                {/* Your content here */}
            </div>
            <Form className="fade-up" onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="typeBeperking">Type Beperking</Label>
                    <Input
                        type="select"
                        name="typeBeperking"
                        id="typeBeperking"
                        value={formData.typeBeperking}
                        onChange={handleSelectChange}
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
                        value={formData.hulpmiddelen}
                        onChange={handleSelectChange}
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
                        value={formData.ziektes}
                        onChange={handleSelectChange}
                    />
                </FormGroup>
                <Button color="primary" size="lg" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Onboarding;