import React, { useState, useEffect } from 'react';
import {
    Card,
    CardBody,
    CardTitle,
    Collapse,
    Button,
    Row,
    Col,
    ModalFooter,
    ModalBody,
    ModalHeader,
    Modal
} from 'reactstrap';
import '../css/research.css';

const Research = () => {
    const [onderzoeken, setOnderzoeken] = useState([]);
    const [selectedOnderzoek, setSelectedOnderzoek] = useState(null);
    const [tab, setTab] = useState('zoeken'); // Default tab is "Zoek Onderzoeken"
    const [modal, setModal] = useState(false);

    useEffect(() => {
        const simulatedData = [
            { id: 1, titel: 'Onderzoek Broodje', bedrijf: 'Bakker Bart', datum: '14-09-2024 om 13:00 uur', locatie: 'Slinger 7.75', tag: 'Visuele Beperking', compensatie: 'Lunch en VVE bon', omschrijving: 'In dit onderzoek willen we erachter komen hoe mensen met een visuele beperking onze website ervaren.', isOpen: false },
            { id: 2, titel: 'Onderzoek Boodschappen', bedrijf: 'Albert Heijn', datum: '20-09-2024 om 14:30 uur', locatie: 'Supermarktplein 1', tag: 'Gehoorbeperking', compensatie: 'Boodschappenpakket', omschrijving: 'Wij onderzoeken de winkelervaring van mensen met een gehoorbeperking tijdens het boodschappen doen.', isOpen: false },
            { id: 3, titel: 'Stadsbeleving', bedrijf: 'Gem. Den Haag', datum: '25-09-2024 om 11:00 uur', locatie: 'Stadhuisplein 1', tag: 'Mobiliteitsbeperking', compensatie: 'Vergoeding reiskosten', omschrijving: 'Hoe ervaren mensen met een mobiliteitsbeperking de stadsvoorzieningen? We willen het weten!', isOpen: false },
            { id: 4, titel: 'User Experience Test', bedrijf: 'TechCorp', datum: '10-10-2024 om 15:30 uur', locatie: 'TechCenter 42', tag: 'Algemeen', compensatie: 'Gadgetpakket', omschrijving: 'We nodigen deelnemers uit om de gebruikerservaring van onze nieuwe app te testen. Laat ons weten wat je ervan vindt!', isOpen: false },
            { id: 5, titel: 'Product Feedback Session', bedrijf: 'InnovateTech', datum: '18-10-2024 om 10:00 uur', locatie: 'Innovation Hub', tag: 'Algemeen', compensatie: 'Innovatieve producten', omschrijving: 'Geef feedback op onze nieuwste producten en help ons ze te verbeteren. Gratis innovatieve gadgets voor deelnemers!', isOpen: false },
        ];

        setOnderzoeken(simulatedData);
    }, []);

    const toggleOnderzoek = (id) => {
        // Set the selected onderzoek for detailed view
        const selected = onderzoeken.find((onderzoek) => onderzoek.id === id);
        setSelectedOnderzoek(selected);

        toggleModal();
    };

    const handleInschrijven = () => {
        console.log('User enrolled in research:', selectedOnderzoek);
    };

    const toggleModal = () => {
        setModal(!modal);
    };
    
    const handleContactOpnemen = () => {
        console.log('Contact opnemen with company representative:', selectedOnderzoek);
    };

    const renderResearchCard = (onderzoek) => (
        <Col key={onderzoek.id} xs={12} sm={10} md={10} lg={10} className="onderzoek-col">
            <div className="onderzoek-container">
                <img src="https://via.placeholder.com/300" alt="Research" />
                <CardBody className="card-body">
                    <CardTitle className="ellipsis-title">{onderzoek.titel} - {onderzoek.bedrijf}</CardTitle>
                    <div className="button-container">
                        <Button onClick={() => toggleOnderzoek(onderzoek.id)} className="details-button">
                            Details
                        </Button>
                    </div>
                </CardBody>
            </div>
        </Col>
    );


    return (
        <div className="onderzoeken-page">
            <h1 style={{ textAlign: 'center' }}>Onderzoeken</h1>
            <div className="tabs">
                <span tabIndex="0" className={tab === 'zoeken' ? 'active-tab' : ''} onClick={() => setTab('zoeken')} onKeyDown={(e) =>     e.key === 'Enter' && setTab('zoeken')}>
                    Zoek Onderzoeken
                </span>
                <span tabIndex="0" className={tab === 'uwOnderzoeken' ? 'active-tab' : ''} onClick={() => setTab('uwOnderzoeken')} onKeyDown={(e) => e.key === 'Enter' && setTab('uwOnderzoeken')}>
                    Uw Onderzoeken
                </span>
            </div>
            {tab === 'zoeken' && (
                <Row>
                    {onderzoeken.map((onderzoek) => (
                        <Col key={onderzoek.id} xs={6} md={6} lg={4} className="onderzoek-col">
                            {renderResearchCard(onderzoek)}
                        </Col>
                    ))}
                </Row>
            )}
            {tab === 'uwOnderzoeken' && (
                // Render your "Uw Onderzoeken" content here
                <p>Your ongoing research goes here...</p>
            )}
            <div className="deelnemen-row">
            </div>
            {/* Details Modal */}
            <Modal isOpen={modal} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Details</ModalHeader>
                <ModalBody>
                    <p>
                        <strong>Titel:</strong> {selectedOnderzoek?.titel}
                        <br />
                        <strong>Bedrijf:</strong> {selectedOnderzoek?.bedrijf}
                        <br />
                        <strong>Omschrijving:</strong> {selectedOnderzoek?.omschrijving}
                        <br />
                        <strong>Datum:</strong> {selectedOnderzoek?.datum}
                        <br />
                        <strong>Locatie:</strong> {selectedOnderzoek?.locatie}
                        <br />
                        <strong>Compensatie:</strong> {selectedOnderzoek?.compensatie}
                        <br />
                        <strong>Type:</strong> {selectedOnderzoek?.tag}
                    </p>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleInschrijven}>
                        Inschrijven
                    </Button>{' '}
                    <Button color="secondary" onClick={toggleModal}>
                        Annuleren
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default Research;
