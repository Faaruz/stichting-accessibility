import React, { useEffect, useState } from 'react';
import { fetchOnderzoeken } from '../services/onderzoekenService';
import '../css/bedrijfportaal.css';

const BedrijfDashboard = () => {
    const [onderzoeken, setOnderzoeken] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadOnderzoeken = async () => {
            try {
                const onderzoekenData = await fetchOnderzoeken();
                setOnderzoeken(onderzoekenData);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching onderzoeken:', error);
                setIsLoading(false);
            }
        };

        loadOnderzoeken();
    }, []);

    const renderLoading = () => <div>Laden onderzoeken...</div>;

    const renderOnderzoeken = () => (
        <ul className="dashboard-list">
            {onderzoeken.map((onderzoek) => (
                <li key={onderzoek.id} className="dashboard-item">
                    <div>
                        <div className="dashboard-item-title">{onderzoek.title}</div>
                        <div
                            className={`dashboard-item-status ${
                                onderzoek.status === 'In Uitvoering' ? 'in-uitvoering' : 'voltooid'
                            }`}
                        >
                            {onderzoek.status}
                        </div>
                        <div className="dashboard-item-date">{onderzoek.date}</div>
                    </div>
                    {/* Add more details or actions here */}
                </li>
            ))}
        </ul>
    );

    return (
        <div className="landing-page">
            <div className={`landing-content fade-up ${isLoading ? 'loading' : ''}`}>
                <h1 className="welcome-text">[Bedrijf naam] Dashboard</h1>
                <h2>Uw Onderzoeken</h2>
                {isLoading ? renderLoading() : renderOnderzoeken()}
            </div>
        </div>
    );
};

export default BedrijfDashboard;
