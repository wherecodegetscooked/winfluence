import React from 'react';
import { LegalLayout, LegalSection } from './LegalLayout';
import type { Language } from '../App';

interface ImprintPageProps {
  language: Language;
}

const GermanImprintPage: React.FC = () => (
  <LegalLayout title="Impressum">
    <LegalSection heading="Anbieter">
      <p>
        winfluence GmbH
        <br />
        Turbinenstrasse 18
        <br />
        8005 Zürich
        <br />
        Schweiz
      </p>
    </LegalSection>

    <LegalSection heading="Kontakt">
      <p>
        Telefon: +41 76 569 99 22
        <br />
        E-Mail: <a href="mailto:team@winfluence.net" className="text-accent hover:underline">team@winfluence.net</a>
        <br />
        Website: <a href="https://www.winfluence.net" className="text-accent hover:underline">www.winfluence.net</a>
      </p>
    </LegalSection>

    <LegalSection heading="Vertretungsberechtigte Person">
      <p>Stephan Brunner</p>
    </LegalSection>

    <LegalSection heading="Handelsregister">
      <p>
        Eingetragen im Handelsregister des Kantons Zürich
        <br />
        Firmenname: winfluence.net
        <br />
        UID: CHE-326.274.931
      </p>
    </LegalSection>

    <LegalSection heading="Mehrwertsteuer">
      <p>MWST-Nr.: CHE-326.274.931</p>
    </LegalSection>

    <LegalSection heading="Haftungsausschluss">
      <p>
        Die Inhalte dieser Website werden mit grösster Sorgfalt erstellt. Für die Richtigkeit,
        Vollständigkeit und Aktualität der Inhalte wird jedoch keine Gewähr übernommen. Trotz
        sorgfältiger Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den
        Inhalt der verlinkten Seiten sind ausschliesslich deren Betreiber verantwortlich.
      </p>
    </LegalSection>

    <LegalSection heading="Urheberrechte">
      <p>
        Sämtliche Inhalte, Bilder, Grafiken, Logos und Dokumente auf dieser Website sind
        urheberrechtlich geschützt. Jede Verwendung, Vervielfältigung oder Weitergabe bedarf der
        vorherigen schriftlichen Zustimmung des Rechteinhabers, sofern gesetzlich nichts anderes
        vorgesehen ist.
      </p>
    </LegalSection>

    <LegalSection heading="Datenschutz">
      <p>
        Informationen zur Bearbeitung personenbezogener Daten finden Sie in unserer
        Datenschutzerklärung.
      </p>
    </LegalSection>
  </LegalLayout>
);

const EnglishImprintPage: React.FC = () => (
  <LegalLayout title="Imprint">
    <LegalSection heading="Provider">
      <p>
        winfluence GmbH
        <br />
        Turbinenstrasse 18
        <br />
        8005 Zurich
        <br />
        Switzerland
      </p>
    </LegalSection>

    <LegalSection heading="Contact">
      <p>
        Phone: +41 76 569 99 22
        <br />
        Email: <a href="mailto:team@winfluence.net" className="text-accent hover:underline">team@winfluence.net</a>
        <br />
        Website: <a href="https://www.winfluence.net" className="text-accent hover:underline">www.winfluence.net</a>
      </p>
    </LegalSection>

    <LegalSection heading="Authorised representative">
      <p>Stephan Brunner</p>
    </LegalSection>

    <LegalSection heading="Commercial register">
      <p>
        Registered in the Commercial Register of the Canton of Zurich
        <br />
        Company name: winfluence.net
        <br />
        UID: CHE-326.274.931
      </p>
    </LegalSection>

    <LegalSection heading="Value-added tax">
      <p>VAT number: CHE-326.274.931</p>
    </LegalSection>

    <LegalSection heading="Disclaimer">
      <p>
        The content of this website is prepared with the greatest possible care. However, no
        guarantee is given for its accuracy, completeness, or timeliness. Despite careful review,
        we accept no liability for the content of external links. The operators of the linked
        websites are solely responsible for their content.
      </p>
    </LegalSection>

    <LegalSection heading="Copyright">
      <p>
        All content, images, graphics, logos, and documents on this website are protected by
        copyright. Any use, reproduction, or distribution requires the prior written consent of the
        rights holder unless otherwise permitted by law.
      </p>
    </LegalSection>

    <LegalSection heading="Data protection">
      <p>
        Information about how we process personal data can be found in our Privacy Policy.
      </p>
    </LegalSection>
  </LegalLayout>
);

export const ImprintPage: React.FC<ImprintPageProps> = ({ language }) =>
  language === 'de' ? <GermanImprintPage /> : <EnglishImprintPage />;
