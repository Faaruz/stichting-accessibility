// BedrijfDashboard.js
import React, { Component } from 'react';
import { fetchOnderzoeken } from '../services/onderzoekenService';
import '../css/bedrijfportaal.css';

export class BedrijfDashboard extends Component {
    static displayName = BedrijfDashboard.name;

    constructor(props) {
        super(props);

        this.state = {
            onderzoeken: [],
            isLoading: true,
        };
    }

    componentDidMount() {
        this.loadOnderzoeken();
    }

    async loadOnderzoeken() {
        try {
            const onderzoeken = await fetchOnderzoeken();
            this.setState({ onderzoeken, isLoading: false });
        } catch (error) {
            console.error('Error fetching onderzoeken:', error);
            this.setState({ isLoading: false });
        }
    }

    renderLoading() {
        return <div>Laden onderzoeken...</div>;
    }

    renderOnderzoeken() {
        return (
            <ul className="dashboard-list">
                {this.state.onderzoeken.map((onderzoek) => (
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
    }

    render() {
        const { isLoading } = this.state;

        return (
            <div className="landing-page">
                <div className={`landing-content fade-up ${isLoading ? 'loading' : ''}`}>
                    <h1 className="welcome-text">[Bedrijf naam] Dashboard</h1>
                    <h2>Uw Onderzoeken</h2>
                    {isLoading ? this.renderLoading() : this.renderOnderzoeken()}
                </div>
            </div>
        );
    }
}