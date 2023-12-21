import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardTitle, Collapse, Button } from 'reactstrap';

const Research = () => {
    // State to store onderzoeken data
    const [onderzoeken, setOnderzoeken] = useState([]);

    // Fetch onderzoeken data (Replace this with your API call or data source)
    useEffect(() => {
        // Simulated data for demonstration purposes
        const simulatedData = [
            { id: 1, companyName: 'Bakker Bart', details: 'Details about Bakker Bart onderzoek', isOpen: false },
            { id: 2, companyName: 'Albert Heijn', details: 'Details about Albert Heijn onderzoek', isOpen: false },
            { id: 3, companyName: 'Gem. Den Haag', details: 'Details about Gem. Den Haag onderzoek', isOpen: false },
        ];

        setOnderzoeken(simulatedData);
    }, []);

    // Function to toggle the collapse state for an onderzoek
    const toggleOnderzoek = (id) => {
        setOnderzoeken((prevOnderzoeken) =>
            prevOnderzoeken.map((onderzoek) =>
                onderzoek.id === id ? { ...onderzoek, isOpen: !onderzoek.isOpen } : onderzoek
            )
        );
    };

    return (
        <div className="onderzoeken-page">
            <h1>Onderzoeken</h1>
            {onderzoeken.map((onderzoek) => (
                <Card key={onderzoek.id} className="onderzoek-card">
                    <CardBody>
                        <CardTitle>{onderzoek.companyName}</CardTitle>
                        <Button onClick={() => toggleOnderzoek(onderzoek.id)}>Details</Button>
                        <Collapse isOpen={onderzoek.isOpen}>
                            <p>{onderzoek.details}</p>
                            {/* Add more details or components as needed */}
                        </Collapse>
                    </CardBody>
                </Card>
            ))}
        </div>
    );
};

export default Research;