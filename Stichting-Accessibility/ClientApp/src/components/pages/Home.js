import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../css/home.css';
const Home = () => {
    return (
            <div className="landing-page">
                <div className="landing-content fade-up">
                    <h1 className="welcome-text">Welkom bij Stichting Accessibility!</h1>
                    <p className="description-text">Registreer hier als bedrijf of als ervaringsdeskundige</p>
                </div>
                <div className="register-button-container fade-up">
                    <Link to="/registration">
                        <Button color="primary" size="lg">Registreer</Button>
                    </Link>
                </div>
            </div>
    );
};

export { Home };


