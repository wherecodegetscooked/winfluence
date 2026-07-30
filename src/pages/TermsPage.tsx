import React from 'react';
import { LegalLayout, LegalSection, LegalList } from './LegalLayout';
import type { Language } from '../App';

interface TermsPageProps {
  language: Language;
}

const GermanTermsPage: React.FC = () => (
  <LegalLayout title="Nutzungsbestimmungen" meta="Stand: Juli 2026">
    <LegalSection heading="1. Geltungsbereich">
      <p>
        Diese Nutzungsbestimmungen regeln die Nutzung der Website winfluence.net (nachfolgend
        «Website»). Mit dem Zugriff auf die Website erklären Sie sich mit diesen
        Nutzungsbestimmungen einverstanden.
      </p>
    </LegalSection>

    <LegalSection heading="2. Zweck der Website">
      <p>
        Die Website dient der Bereitstellung von Informationen über unser Unternehmen, unsere
        Dienstleistungen und unsere Produkte sowie der Kontaktaufnahme mit unserem Unternehmen. Ein
        Anspruch auf jederzeitige Verfügbarkeit der Website besteht nicht.
      </p>
    </LegalSection>

    <LegalSection heading="3. Nutzung der Website">
      <p>
        Die Website darf nur im Rahmen der geltenden Gesetze genutzt werden. Insbesondere ist es
        untersagt,
      </p>
      <LegalList
        items={[
          'die Website missbräuchlich zu verwenden,',
          'Sicherheitsmechanismen zu umgehen,',
          'Schadsoftware einzuschleusen,',
          'automatisierte Zugriffe ohne Zustimmung durchzuführen,',
          'Inhalte zu manipulieren oder unbefugt zu verändern,',
          'Rechte Dritter zu verletzen.',
        ]}
      />
    </LegalSection>

    <LegalSection heading="4. Benutzerkonten">
      <p>Soweit Benutzerkonten angeboten werden, verpflichtet sich der Nutzer,</p>
      <LegalList
        items={[
          'seine Zugangsdaten vertraulich zu behandeln,',
          'sichere Passwörter zu verwenden,',
          'uns über einen Verdacht auf Missbrauch unverzüglich zu informieren.',
        ]}
      />
      <p>
        Der Nutzer haftet für sämtliche Aktivitäten, die über sein Benutzerkonto erfolgen, soweit
        ihn ein Verschulden trifft. Wir behalten uns vor, Benutzerkonten bei Missbrauch oder
        Verstössen gegen diese Nutzungsbestimmungen zu sperren oder zu löschen.
      </p>
    </LegalSection>

    <LegalSection heading="5. Inhalte der Website">
      <p>Alle Inhalte werden mit grösstmöglicher Sorgfalt erstellt. Dennoch übernehmen wir keine Gewähr für:</p>
      <LegalList
        items={['Richtigkeit,', 'Vollständigkeit,', 'Aktualität,', 'Verfügbarkeit der Inhalte.']}
      />
      <p>
        Die Inhalte dienen ausschliesslich der allgemeinen Information und stellen keine verbindliche
        Beratung dar.
      </p>
    </LegalSection>

    <LegalSection heading="6. Geistiges Eigentum">
      <p>Sämtliche Inhalte dieser Website, insbesondere</p>
      <LegalList
        items={['Texte', 'Bilder', 'Grafiken', 'Logos', 'Videos', 'Dokumente', 'Software']}
      />
      <p>
        sind urheberrechtlich oder anderweitig geschützt. Ohne unsere vorherige schriftliche
        Zustimmung dürfen Inhalte weder vervielfältigt, veröffentlicht, verbreitet noch kommerziell
        genutzt werden.
      </p>
    </LegalSection>

    <LegalSection heading="7. Links zu Drittanbietern">
      <p>
        Unsere Website kann Links zu Websites Dritter enthalten. Für deren Inhalte, Datenschutz oder
        Verfügbarkeit übernehmen wir keine Verantwortung. Beim Besuch externer Websites gelten
        ausschliesslich deren eigene Nutzungs- und Datenschutzbestimmungen.
      </p>
    </LegalSection>

    <LegalSection heading="8. Haftung">
      <p>
        Wir haften ausschliesslich für Schäden, die durch vorsätzliches oder grobfahrlässiges
        Verhalten verursacht wurden, soweit gesetzlich zulässig. Eine Haftung für indirekte Schäden,
        Folgeschäden, entgangenen Gewinn oder Datenverlust ist – soweit gesetzlich zulässig –
        ausgeschlossen. Wir übernehmen keine Haftung für Schäden infolge technischer Störungen,
        Unterbrüche oder Ausfälle der Website.
      </p>
    </LegalSection>

    <LegalSection heading="9. Verfügbarkeit">
      <p>
        Wir bemühen uns um einen möglichst unterbrechungsfreien Betrieb der Website. Wartungsarbeiten,
        Sicherheitsupdates oder technische Störungen können jedoch zu vorübergehenden Einschränkungen
        oder Unterbrüchen führen.
      </p>
    </LegalSection>

    <LegalSection heading="10. Datenschutz">
      <p>
        Die Bearbeitung personenbezogener Daten richtet sich nach unserer Datenschutzerklärung.
      </p>
    </LegalSection>

    <LegalSection heading="11. Änderungen">
      <p>
        Wir behalten uns vor, diese Nutzungsbestimmungen jederzeit zu ändern. Massgebend ist jeweils
        die auf unserer Website veröffentlichte aktuelle Version.
      </p>
    </LegalSection>

    <LegalSection heading="12. Anwendbares Recht und Gerichtsstand">
      <p>
        Diese Nutzungsbestimmungen unterstehen ausschliesslich dem materiellen Recht der Schweiz.
        Soweit gesetzlich zulässig, ist ausschliesslicher Gerichtsstand der Sitz der winfluence GmbH.
      </p>
    </LegalSection>
  </LegalLayout>
);

const EnglishTermsPage: React.FC = () => (
  <LegalLayout title="Terms of Use" meta="Last updated: July 2026">
    <LegalSection heading="1. Scope">
      <p>
        These Terms of Use govern the use of the website winfluence.net (hereinafter the
        “Website”). By accessing the Website, you agree to these Terms of Use.
      </p>
    </LegalSection>

    <LegalSection heading="2. Purpose of the Website">
      <p>
        The Website provides information about our company, services, and products and enables you
        to contact our company. There is no entitlement to uninterrupted availability of the
        Website.
      </p>
    </LegalSection>

    <LegalSection heading="3. Use of the Website">
      <p>
        The Website may be used only in accordance with applicable law. In particular, it is
        prohibited to:
      </p>
      <LegalList
        items={[
          'misuse the Website,',
          'circumvent security mechanisms,',
          'introduce malware,',
          'carry out automated access without consent,',
          'manipulate or alter content without authorisation,',
          'infringe the rights of third parties.',
        ]}
      />
    </LegalSection>

    <LegalSection heading="4. User accounts">
      <p>Where user accounts are offered, users undertake to:</p>
      <LegalList
        items={[
          'keep their login details confidential,',
          'use secure passwords,',
          'notify us immediately of any suspected misuse.',
        ]}
      />
      <p>
        Users are liable for all activities carried out through their user accounts to the extent
        that they are at fault. We reserve the right to suspend or delete user accounts in the event
        of misuse or violations of these Terms of Use.
      </p>
    </LegalSection>

    <LegalSection heading="5. Website content">
      <p>All content is created with the greatest possible care. Nevertheless, we give no warranty regarding:</p>
      <LegalList
        items={['accuracy,', 'completeness,', 'timeliness,', 'availability of the content.']}
      />
      <p>
        The content is provided solely for general information and does not constitute binding
        advice.
      </p>
    </LegalSection>

    <LegalSection heading="6. Intellectual property">
      <p>All content on this Website, in particular:</p>
      <LegalList
        items={['texts', 'images', 'graphics', 'logos', 'videos', 'documents', 'software']}
      />
      <p>
        is protected by copyright or other intellectual property rights. Content may not be
        reproduced, published, distributed, or used commercially without our prior written consent.
      </p>
    </LegalSection>

    <LegalSection heading="7. Third-party links">
      <p>
        Our Website may contain links to third-party websites. We accept no responsibility for
        their content, privacy practices, or availability. When visiting external websites, only
        their own terms of use and privacy policies apply.
      </p>
    </LegalSection>

    <LegalSection heading="8. Liability">
      <p>
        To the extent permitted by law, we are liable only for damage caused by intentional or
        grossly negligent conduct. Liability for indirect damage, consequential damage, loss of
        profit, or loss of data is excluded to the extent permitted by law. We accept no liability
        for damage resulting from technical faults, interruptions, or outages of the Website.
      </p>
    </LegalSection>

    <LegalSection heading="9. Availability">
      <p>
        We endeavour to operate the Website with as few interruptions as possible. However,
        maintenance work, security updates, or technical faults may result in temporary limitations
        or interruptions.
      </p>
    </LegalSection>

    <LegalSection heading="10. Data protection">
      <p>
        The processing of personal data is governed by our Privacy Policy.
      </p>
    </LegalSection>

    <LegalSection heading="11. Amendments">
      <p>
        We reserve the right to amend these Terms of Use at any time. The current version published
        on our Website applies.
      </p>
    </LegalSection>

    <LegalSection heading="12. Governing law and jurisdiction">
      <p>
        These Terms of Use are governed exclusively by the substantive laws of Switzerland. To the
        extent permitted by law, the registered office of winfluence GmbH is the exclusive place of
        jurisdiction.
      </p>
    </LegalSection>
  </LegalLayout>
);

export const TermsPage: React.FC<TermsPageProps> = ({ language }) =>
  language === 'de' ? <GermanTermsPage /> : <EnglishTermsPage />;
