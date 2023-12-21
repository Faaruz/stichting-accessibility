import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardTitle, Collapse, Button } from 'reactstrap';

const Research = () => {
    const [onderzoeken, setOnderzoeken] = useState([]);
    const [selectedOnderzoek, setSelectedOnderzoek] = useState(null);

    useEffect(() => {
        const simulatedData = [
            { id: 1, titel: 'Onderzoek Broodje', bedrijf: 'Bakker Bart', datum: '14-09-2024 om 13:00 uur', locatie: 'Slinger 7.75', tag: 'Visuele Beperking', compensatie: 'Lunch en VVE bon', omschrijving: 'In dit onderzoek willen we erachter komen hoe mensen met een visuele beperking onze website ervaren.', isOpen: false },
            { id: 2, titel: 'Onderzoek Boodschappen', bedrijf: 'Albert Heijn', datum: '20-09-2024 om 14:30 uur', locatie: 'Supermarktplein 1', tag: 'Gehoorbeperking', compensatie: 'Boodschappenpakket', omschrijving: 'Wij onderzoeken de winkelervaring van mensen met een gehoorbeperking tijdens het boodschappen doen.', isOpen: false },
            { id: 3, titel: 'Stadsbeleving', bedrijf: 'Gem. Den Haag', datum: '25-09-2024 om 11:00 uur', locatie: 'Stadhuisplein 1', tag: 'Mobiliteitsbeperking', compensatie: 'Vergoeding reiskosten', omschrijving: 'Hoe ervaren mensen met een mobiliteitsbeperking de stadsvoorzieningen? We willen het weten!', isOpen: false },
        ];

        setOnderzoeken(simulatedData);
    }, []);


    const toggleOnderzoek = (id) => {
        setOnderzoeken((prevOnderzoeken) =>
            prevOnderzoeken.map((onderzoek) =>
                onderzoek.id === id
                    ? { ...onderzoek, isOpen: !onderzoek.isOpen }
                    : { ...onderzoek, isOpen: false }
            )
        );
        // Set the selected onderzoek for detailed view
        const selected = onderzoeken.find((onderzoek) => onderzoek.id === id);
        setSelectedOnderzoek(selected);
    };



    const handleInschrijven = () => {
        // Implement logic for inschrijven button
        console.log('User enrolled in research:', selectedOnderzoek);
    };

    const handleContactOpnemen = () => {
        // Implement logic for contact opnemen button
        console.log('Contact opnemen with company representative:', selectedOnderzoek);
    };

    return (
        <div className="onderzoeken-page">
            <h1>Onderzoeken</h1>
            {onderzoeken.map((onderzoek) => (
                <Card key={onderzoek.id} className="onderzoek-card">
                    <CardBody>
                        <CardTitle> {onderzoek.titel} - {onderzoek.bedrijf}</CardTitle>
                        <Button onClick={() => toggleOnderzoek(onderzoek.id)}>Details</Button>
                        <Collapse isOpen={onderzoek.isOpen}>
                            <p>
                                <strong>Titel:</strong> {onderzoek.titel}
                                <br />
                                <strong>Bedrijf:</strong> {onderzoek.bedrijf}
                                <br />
                                <strong>Datum:</strong> {onderzoek.datum}
                                <br />
                                <strong>Locatie:</strong> {onderzoek.locatie}
                                <br />
                                <strong>Tag:</strong> {onderzoek.tag}
                                <br />
                                <strong>Compensatie:</strong> {onderzoek.compensatie}
                                <br />
                                <strong>Omschrijving:</strong> {onderzoek.omschrijving}
                            </p>
                            <Button onClick={handleInschrijven}>Inschrijven</Button>
                            <Button onClick={handleContactOpnemen}>Neem contact met ons op</Button>
                        </Collapse>
                    </CardBody>
                </Card>
            ))}
        </div>
    );
};

export default Research;
