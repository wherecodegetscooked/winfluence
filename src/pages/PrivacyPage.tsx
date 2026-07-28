import React from 'react';
import { LegalLayout, LegalSection, LegalList } from './LegalLayout';

export const PrivacyPage: React.FC = () => (
  <LegalLayout title="Datenschutzerklärung" meta="Stand: Juli 2026">
    <p>
      Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges Anliegen. In dieser
      Datenschutzerklärung informieren wir Sie darüber, welche Personendaten wir erheben, zu welchem
      Zweck wir diese bearbeiten und welche Rechte Ihnen zustehen.
    </p>

    <LegalSection heading="1. Verantwortliche Stelle">
      <p>Verantwortlich für die Bearbeitung Ihrer Personendaten ist:</p>
      <p>
        winfluence GmbH
        <br />
        Turbinenstrasse 18
        <br />
        CH-8005 Zürich
        <br />
        Schweiz
        <br />
        Telefon: +41 76 569 99 22
        <br />
        E-Mail: <a href="mailto:team@winfluence.net" className="text-accent hover:underline">team@winfluence.net</a>
      </p>
    </LegalSection>

    <LegalSection heading="2. Rechtsgrundlagen">
      <p>
        Wir bearbeiten Personendaten gemäss den Bestimmungen des revidierten Schweizer
        Datenschutzgesetzes (revDSG). Soweit die Datenschutz-Grundverordnung (DSGVO) anwendbar ist,
        erfolgt die Bearbeitung zusätzlich auf deren Grundlage.
      </p>
    </LegalSection>

    <LegalSection heading="3. Welche Daten wir bearbeiten">
      <p>Je nach Nutzung unserer Website bearbeiten wir insbesondere folgende Personendaten:</p>
      <LegalList
        items={[
          'Name und Vorname',
          'Firmenname',
          'Anschrift',
          'Telefonnummer',
          'E-Mail-Adresse',
          'Kommunikationsinhalte',
          'Bewerbungsunterlagen',
          'Vertrags- und Kundendaten',
          'Zahlungsinformationen (sofern erforderlich)',
          'IP-Adresse',
          'Browserinformationen',
          'Geräteinformationen',
          'Datum und Uhrzeit des Besuchs',
          'besuchte Seiten und Nutzungsdaten',
        ]}
      />
    </LegalSection>

    <LegalSection heading="4. Zweck der Datenbearbeitung">
      <p>Wir bearbeiten Personendaten insbesondere zu folgenden Zwecken:</p>
      <LegalList
        items={[
          'Bereitstellung unserer Website',
          'Bearbeitung von Kontaktanfragen',
          'Vertragsabwicklung',
          'Kundenbetreuung',
          'Versand von Newslettern',
          'Durchführung von Bewerbungsverfahren',
          'Verbesserung unseres Angebots',
          'Reichweitenmessung und statistische Auswertungen',
          'Gewährleistung der IT-Sicherheit',
          'Erfüllung gesetzlicher Verpflichtungen',
        ]}
      />
    </LegalSection>

    <LegalSection heading="5. Kontaktaufnahme">
      <p>
        Wenn Sie uns per E-Mail oder über ein Kontaktformular kontaktieren, bearbeiten wir Ihre
        Angaben ausschliesslich zur Bearbeitung Ihrer Anfrage sowie für allfällige Anschlussfragen.
      </p>
    </LegalSection>

    <LegalSection heading="6. Bewerbungen">
      <p>
        Wenn Sie sich bei uns bewerben, bearbeiten wir die von Ihnen übermittelten Personendaten
        ausschliesslich zum Zweck des Bewerbungsverfahrens.
      </p>
      <p>
        Kommt kein Arbeitsverhältnis zustande, werden Ihre Daten nach Abschluss des
        Bewerbungsverfahrens gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten bestehen
        oder Sie einer längeren Aufbewahrung ausdrücklich zugestimmt haben.
      </p>
    </LegalSection>

    <LegalSection heading="7. Cookies">
      <p>Unsere Website verwendet Cookies und vergleichbare Technologien. Cookies dienen insbesondere dazu:</p>
      <LegalList
        items={[
          'die Benutzerfreundlichkeit zu verbessern,',
          'die Sicherheit zu erhöhen,',
          'Einstellungen zu speichern,',
          'statistische Auswertungen durchzuführen.',
        ]}
      />
      <p>
        Sie können Cookies jederzeit über die Einstellungen Ihres Browsers einschränken oder
        löschen. Dadurch können einzelne Funktionen der Website beeinträchtigt werden.
      </p>
    </LegalSection>

    <LegalSection heading="8. Analyse- und Trackingdienste">
      <p>
        Soweit eingesetzt, verwenden wir Analyse- und Trackingdienste zur Optimierung unserer
        Website. Hierzu können insbesondere folgende Dienste gehören:
      </p>
      <LegalList
        items={[
          'Google Analytics 4',
          'Google Tag Manager',
          'LinkedIn Insight Tag',
          'Meta Pixel',
          'Microsoft Clarity',
          'Matomo',
        ]}
      />
      <p>
        Diese Dienste können Cookies verwenden und Informationen über die Nutzung unserer Website
        erfassen. Soweit gesetzlich erforderlich, holen wir vor dem Einsatz solcher Technologien
        Ihre Einwilligung über ein Cookie-Banner ein.
      </p>
    </LegalSection>

    <LegalSection heading="9. Google-Dienste">
      <p>Unsere Website kann Dienste von Google nutzen, beispielsweise:</p>
      <LegalList
        items={[
          'Google Maps',
          'Google Fonts',
          'Google reCAPTCHA',
          'YouTube',
          'Google Analytics',
          'Google Tag Manager',
        ]}
      />
      <p>
        Dabei können personenbezogene Daten an Server von Google übermittelt werden. Es können Daten
        auch ausserhalb der Schweiz bearbeitet werden.
      </p>
    </LegalSection>

    <LegalSection heading="10. Social Media">
      <p>Wir unterhalten Profile auf sozialen Netzwerken wie:</p>
      <LegalList items={['LinkedIn', 'Facebook', 'Instagram', 'YouTube']} />
      <p>
        Beim Besuch unserer Social-Media-Seiten gelten zusätzlich die Datenschutzbestimmungen des
        jeweiligen Plattformbetreibers.
      </p>
    </LegalSection>

    <LegalSection heading="11. Newsletter">
      <p>
        Wenn Sie unseren Newsletter abonnieren, bearbeiten wir Ihre E-Mail-Adresse ausschliesslich
        zum Versand des Newsletters. Die Anmeldung erfolgt grundsätzlich mittels
        Double-Opt-in-Verfahren. Sie können den Newsletter jederzeit über den Abmeldelink oder durch
        Mitteilung an uns abbestellen.
      </p>
    </LegalSection>

    <LegalSection heading="12. Hosting">
      <p>
        Unsere Website wird durch einen externen Hosting-Dienstleister betrieben. Zum sicheren
        Betrieb der Website können insbesondere folgende Daten verarbeitet werden:
      </p>
      <LegalList
        items={[
          'IP-Adresse',
          'Zugriffszeit',
          'Browserinformationen',
          'Logfiles',
          'technische Fehlermeldungen',
        ]}
      />
    </LegalSection>

    <LegalSection heading="13. Weitergabe von Personendaten">
      <p>Wir geben Personendaten nur weiter, wenn:</p>
      <LegalList
        items={[
          'dies zur Vertragserfüllung erforderlich ist,',
          'Sie eingewilligt haben,',
          'wir gesetzlich dazu verpflichtet sind,',
          'externe Dienstleister in unserem Auftrag tätig werden.',
        ]}
      />
      <p>
        Unsere Dienstleister bearbeiten Personendaten ausschliesslich nach unseren Weisungen oder im
        Rahmen ihrer eigenen datenschutzrechtlichen Verantwortlichkeit.
      </p>
    </LegalSection>

    <LegalSection heading="14. Datenübermittlung ins Ausland">
      <p>
        Soweit Personendaten ins Ausland übermittelt werden, achten wir auf ein angemessenes
        Datenschutzniveau oder treffen geeignete vertragliche und organisatorische Schutzmassnahmen
        gemäss den gesetzlichen Vorgaben.
      </p>
    </LegalSection>

    <LegalSection heading="15. Datensicherheit">
      <p>
        Wir setzen angemessene technische und organisatorische Sicherheitsmassnahmen ein, um
        Personendaten vor Verlust, Manipulation, unbefugtem Zugriff oder Missbrauch zu schützen.
      </p>
    </LegalSection>

    <LegalSection heading="16. Aufbewahrungsdauer">
      <p>
        Personendaten werden nur so lange gespeichert, wie dies für die jeweiligen Zwecke
        erforderlich oder gesetzlich vorgeschrieben ist. Nach Wegfall des Bearbeitungszwecks werden
        die Daten gelöscht oder anonymisiert, sofern keine gesetzlichen Aufbewahrungspflichten
        entgegenstehen.
      </p>
    </LegalSection>

    <LegalSection heading="17. Ihre Rechte">
      <p>Sie haben im Rahmen der gesetzlichen Bestimmungen insbesondere das Recht auf:</p>
      <LegalList
        items={[
          'Auskunft über Ihre Personendaten,',
          'Berichtigung unrichtiger Daten,',
          'Löschung Ihrer Daten, soweit keine gesetzlichen Aufbewahrungspflichten bestehen,',
          'Einschränkung der Bearbeitung,',
          'Herausgabe Ihrer Personendaten,',
          'Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft.',
        ]}
      />
      <p>Zur Ausübung Ihrer Rechte wenden Sie sich bitte an die oben genannte Kontaktstelle.</p>
    </LegalSection>

    <LegalSection heading="18. Änderungen dieser Datenschutzerklärung">
      <p>
        Wir behalten uns vor, diese Datenschutzerklärung jederzeit anzupassen, insbesondere wenn
        sich gesetzliche Vorgaben ändern oder neue Dienstleistungen eingeführt werden. Es gilt
        jeweils die auf dieser Website veröffentlichte aktuelle Version.
      </p>
    </LegalSection>
  </LegalLayout>
);
