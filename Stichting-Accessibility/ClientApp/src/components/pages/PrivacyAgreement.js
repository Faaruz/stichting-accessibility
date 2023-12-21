import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

const PrivacyPopup = ({ isOpen, toggle }) => {
    return (
        <Modal isOpen={isOpen} toggle={toggle}>
            <ModalHeader toggle={toggle}>Privacyverklaring</ModalHeader>
            <ModalBody>
                {<div className="privacy-agreement-container">
                    <div className="privacy-agreement">
                        <h3>Persoonsgegevens die wij verwerken</h3>
                        <ul>
                            <li>Voor- en achternaam</li>
                            <li>Geboortedatum</li>
                            <li>Adresgegevens</li>
                            <li>Telefoonnummer</li>
                            <li>E-mailadres</li>
                            <li>IP-adres</li>
                            <li>Overige persoonsgegevens die u actief verstrekt bijvoorbeeld door een profiel op deze
                                website
                                aan te maken, in correspondentie en telefonisch
                            </li>
                            {/* Add other personal data as needed */}
                        </ul>
                    </div>

                    <div className="special-data">
                        <h3>Bijzondere en/of gevoelige persoonsgegevens die wij verwerken</h3>
                        <ul>
                            <li>Gezondheid</li>
                            <li>Gegevens van personen jonger dan 16 jaar</li>
                            {/* Add other special data as needed */}
                        </ul>
                    </div>

                    <div className="processing-purpose">
                        <h3>Met welk doel en op basis van welke grondslag wij persoonsgegevens verwerken</h3>
                        <ul>
                            <li>Verzenden van onze nieuwsbrief en/of reclamefolder</li>
                            <li>U te kunnen bellen of e-mailen indien dit nodig is om onze dienstverlening uit te kunnen
                                voeren
                            </li>
                            <li>U de mogelijkheid te bieden een account aan te maken</li>
                            <li>Om goederen en diensten bij u af te leveren</li>
                            <li>Stichting Accessibility analyseert uw gedrag op de website om daarmee de website te
                                verbeteren
                                en het aanbod van producten en diensten af te stemmen op uw voorkeuren
                            </li>
                            <li>Stichting Accessibility volgt uw surfgedrag over verschillende websites waarmee wij onze
                                producten en diensten afstemmen op uw behoefte
                            </li>
                            {/* Add other processing purposes as needed */}
                        </ul>
                    </div>

                    <div className="automated-decision">
                        <h3>Geautomatiseerde besluitvorming</h3>
                        <p>Stichting Accessibility neemt verantwoordelijkheid op basis van geautomatiseerde verwerkingen
                            besluiten over zaken die (aanzienlijke) gevolgen kunnen hebben voor personen. Het gaat hier
                            om
                            besluiten die worden genomen door computerprogramma's of -systemen, zonder dat daar een mens
                            tussen
                            zit. Stichting Accessibility gebruikt de volgende computerprogramma's of -systemen:
                            #use_explanation</p>
                    </div>

                    <div className="data-retention">
                        <h3>Hoe lang we persoonsgegevens bewaren</h3>
                        <p>Stichting Accessibility bewaart uw persoonsgegevens niet langer dan strikt nodig is om de
                            doelen te
                            realiseren waarvoor uw gegevens worden verzameld. Wij hanteren de volgende bewaartermijnen
                            voor de
                            volgende (categorieën) van persoonsgegevens: #retention_period</p>
                    </div>

                    <div className="data-sharing">
                        <h3>Delen van persoonsgegevens met derden</h3>
                        <p>Stichting Accessibility verkoopt uw gegevens niet aan derden en verstrekt deze uitsluitend
                            indien dit
                            nodig is voor de uitvoering van onze overeenkomst met u of om te voldoen aan een wettelijke
                            verplichting. Met bedrijven die uw gegevens verwerken in onze opdracht, sluiten wij een
                            bewerkersovereenkomst om te zorgen voor eenzelfde niveau van beveiliging en
                            vertrouwelijkheid van uw
                            gegevens. Stichting Accessibility blijft verantwoordelijk voor deze verwerkingen.</p>
                    </div>

                    <div className="cookies">
                        <h3>Cookies, of vergelijkbare technieken, die wij gebruiken</h3>
                        <p>Stichting Accessibility gebruikt functionele, analytische en tracking cookies. Een cookie is
                            een
                            klein tekstbestand dat bij het eerste bezoek aan deze website wordt opgeslagen in de browser
                            van uw
                            computer, tablet of smartphone. Stichting Accessibility gebruikt cookies met een puur
                            technische
                            functionaliteit. Deze zorgen ervoor dat de website naar behoren werkt en dat bijvoorbeeld uw
                            voorkeursinstellingen onthouden worden. Deze cookies worden ook gebruikt om de website goed
                            te laten
                            werken en deze te kunnen optimaliseren. Daarnaast plaatsen we cookies die uw surfgedrag
                            bijhouden
                            zodat we op maat gemaakte content en advertenties kunnen aanbieden. Bij uw eerste bezoek aan
                            onze
                            website hebben wij u al geïnformeerd over deze cookies en toestemming gevraagd voor het
                            plaatsen
                            ervan. U kunt zich afmelden voor cookies door uw internetbrowser zo in te stellen dat deze
                            geen
                            cookies meer opslaat. Daarnaast kunt u ook alle informatie die eerder is opgeslagen via de
                            instellingen van uw browser verwijderen. Zie voor een toelichting: <a
                                href="https://veiliginternetten.nl/themes/situatie/cookies-wat-zijn-het-en-wat-doe-ik-ermee/"
                                target="_blank"
                                rel="noopener noreferrer">https://veiliginternetten.nl/themes/situatie/cookies-wat-zijn-het-en-wat-doe-ik-ermee/</a>
                        </p>
                        {/* Add information about specific cookies here */}
                    </div>

                    <div className="data-access">
                        <h3>Gegevens inzien, aanpassen of verwijderen</h3>
                        <p>U heeft het recht om uw persoonsgegevens in te zien, te corrigeren of te verwijderen. Dit
                            kunt u zelf
                            doen via de persoonlijke instellingen van uw account. Daarnaast heeft u het recht om uw
                            eventuele
                            toestemming voor de gegevensverwerking in te trekken of bezwaar te maken tegen de verwerking
                            van uw
                            persoonsgegevens door ons bedrijf en heeft u het recht op gegevensoverdraagbaarheid. Dat
                            betekent
                            dat u bij ons een verzoek kunt indienen om de persoonsgegevens die wij van u beschikken in
                            een
                            computerbestand naar u of een ander, door u genoemde organisatie, te sturen. Wilt u gebruik
                            maken
                            van uw recht op bezwaar en/of recht op gegevensoverdraagbaarheid of heeft u andere
                            vragen/opmerkingen over de gegevensverwerking, stuur dan een gespecificeerd verzoek naar <a
                                href="mailto:info@accessibility.nl">info@accessibility.nl</a>. Om er zeker van te zijn
                            dat het
                            verzoek tot inzage door u is gedaan, vragen wij u een kopie van uw identiteitsbewijs bij het
                            verzoek
                            mee te sturen. Maak in deze kopie uw pasfoto, MRZ (machine readable zone, de strook met
                            nummers
                            onderaan het paspoort), paspoortnummer en Burgerservicenummer (BSN) zwart. Dit ter
                            bescherming van
                            uw privacy. Stichting Accessibility zal zo snel mogelijk, maar in ieder geval binnen vier
                            weken, op
                            uw verzoek reageren. Stichting Accessibility wil u er tevens op wijzen dat u de mogelijkheid
                            hebt om
                            een klacht in te dienen bij de nationale toezichthouder, de Autoriteit Persoonsgegevens. Dat
                            kan via
                            de volgende link: <a
                                href="https://autoriteitpersoonsgegevens.nl/nl/contact-met-de-autoriteit-persoonsgegevens/tip-ons"
                                target="_blank"
                                rel="noopener noreferrer">https://autoriteitpersoonsgegevens.nl/nl/contact-met-de-autoriteit-persoonsgegevens/tip-ons</a>
                        </p>
                    </div>

                    <div className="data-security">
                        <h3>Hoe wij persoonsgegevens beveiligen</h3>
                        <p>Stichting Accessibility neemt de bescherming van uw gegevens serieus en neemt passende
                            maatregelen om
                            misbruik, verlies, onbevoegde toegang, ongewenste openbaarmaking en ongeoorloofde wijziging
                            tegen te
                            gaan. Als u de indruk heeft dat uw gegevens niet goed beveiligd zijn of er zijn aanwijzingen
                            van
                            misbruik, neem dan contact op met onze klantenservice of via <a
                                href="mailto:info@accessibility.nl">info@accessibility.nl</a>. Stichting Accessibility
                            heeft de
                            volgende maatregelen genomen om uw persoonsgegevens te beveiligen:</p>
                        <ul>
                            <li>Beveiligingssoftware, zoals een virusscanner en firewall.</li>
                            <li>TLS (voorheen SSL) Wij versturen uw gegevens via een beveiligde internetverbinding. Dit
                                kunt u
                                zien aan de adresbalk 'https' en het hangslotje in de adresbalk.
                            </li>
                        </ul>
                    </div>
                </div>}
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={toggle}>
                    Sluiten
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default PrivacyPopup;