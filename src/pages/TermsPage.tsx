import React from 'react';
import { LegalLayout, LegalSection, LegalList } from './LegalLayout';

export const TermsPage: React.FC = () => (
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
