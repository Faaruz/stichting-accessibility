import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

const Onboarding = () => {
    const [formData, setFormData] = useState({
        typeBeperking: '',
        ziektes: '',
        hulpmiddelen: '',
        contact: '',
        beschikbaarheid: '',
        partijen: '',
    });

    const typeBeperkingOptions = ['Option 1', 'Option 2', 'Option 3'];
    const hulpmiddelenOptions = ['Option A', 'Option B', 'Option C'];
    const contactOptions = ['Option 1', 'Option 2'];
    const beschikbaarheidOptions = ['Option A', 'Option B', 'Option C', 'Option D', 'Option E', 'Option F'];
    const partijenOptions = ['Option A', 'Option B'];
    const [modal, setModal] = useState(false);
    const toggleModal = () => setModal(!modal);
    const navigate = useNavigate();



    const handleSelectChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleRadioChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: checked
                ? [...prevData[name], e.target.value]
                : prevData[name].filter((option) => option !== e.target.value),
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Handle form submission, e.g., send data to a server
        console.log('Form submitted with data:', formData);
        navigate('/research');
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
                    <Label for="ziektes">Type Ziekte</Label>
                    <textarea
                        style={{ height: '100px' }}  // Adjust the height as needed
                        className="form-control"  // Bootstrap class for styling
                        name="ziektes"
                        id="ziektes"
                        value={formData.ziektes}
                        onChange={handleSelectChange}
                    />
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
                    <Label for="contact">Contact</Label>
                    {contactOptions.map((option, index) => (
                        <FormGroup check key={index}>
                            <Label check>
                                <Input
                                    type="radio"
                                    name="contact"
                                    id={`contactOption${index}`}
                                    value={option}
                                    checked={formData.contact === option}
                                    onChange={handleRadioChange}
                                />
                                {option}
                            </Label>
                        </FormGroup>
                    ))}
                </FormGroup>
                <FormGroup>
                    <Label for="beschikbaarheid">Beschikbaarheid</Label>
                    <Button color="primary" onClick={toggleModal}>
                        Choose options
                    </Button>
                    <Modal isOpen={modal} toggle={toggleModal}>
                        <ModalHeader toggle={toggleModal}>Select Beschikbaarheid</ModalHeader>
                        <ModalBody>
                            {beschikbaarheidOptions.map((option, index) => (
                                <FormGroup check key={index}>
                                    <Label check>
                                        <Input
                                            type="checkbox"
                                            name="beschikbaarheid"
                                            value={option}
                                            checked={formData.beschikbaarheid.includes(option)}
                                            onChange={handleCheckboxChange}
                                        />
                                        {option}
                                    </Label>
                                </FormGroup>
                            ))}
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={toggleModal}>
                                Done
                            </Button>
                        </ModalFooter>
                    </Modal>
                </FormGroup>
                <FormGroup>
                    <Label for="partijen">Partijen</Label>
                    {partijenOptions.map((option, index) => (
                        <FormGroup check key={index}>
                            <Label check>
                                <Input
                                    type="radio"
                                    name="partijen"
                                    value={option}
                                    checked={formData.partijen === option}
                                    onChange={handleRadioChange}
                                />
                                {option}
                            </Label>
                        </FormGroup>
                    ))}
                </FormGroup>
                <Button  color="primary" size="lg" type="submit" >
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Onboarding;