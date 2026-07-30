import React from 'react';
import { LegalLayout, LegalSection, LegalList } from './LegalLayout';
import type { Language } from '../App';

interface PrivacyPageProps {
  language: Language;
}

const GermanPrivacyPage: React.FC = () => (
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

const EnglishPrivacyPage: React.FC = () => (
  <LegalLayout title="Privacy Policy" meta="Last updated: July 2026">
    <p>
      Protecting your personal data is important to us. This Privacy Policy explains which personal
      data we collect, the purposes for which we process it, and the rights available to you.
    </p>

    <LegalSection heading="1. Controller">
      <p>The controller responsible for processing your personal data is:</p>
      <p>
        winfluence GmbH
        <br />
        Turbinenstrasse 18
        <br />
        CH-8005 Zurich
        <br />
        Switzerland
        <br />
        Phone: +41 76 569 99 22
        <br />
        Email: <a href="mailto:team@winfluence.net" className="text-accent hover:underline">team@winfluence.net</a>
      </p>
    </LegalSection>

    <LegalSection heading="2. Legal bases">
      <p>
        We process personal data in accordance with the provisions of the revised Swiss Federal Act
        on Data Protection (revFADP). Where the General Data Protection Regulation (GDPR) applies,
        processing is additionally carried out on that basis.
      </p>
    </LegalSection>

    <LegalSection heading="3. Personal data we process">
      <p>Depending on how you use our website, we process the following personal data in particular:</p>
      <LegalList
        items={[
          'First and last name',
          'Company name',
          'Address',
          'Telephone number',
          'Email address',
          'Contents of communications',
          'Application documents',
          'Contract and customer data',
          'Payment information (where required)',
          'IP address',
          'Browser information',
          'Device information',
          'Date and time of the visit',
          'Pages visited and usage data',
        ]}
      />
    </LegalSection>

    <LegalSection heading="4. Purposes of processing">
      <p>We process personal data in particular for the following purposes:</p>
      <LegalList
        items={[
          'Providing our website',
          'Responding to contact enquiries',
          'Processing contracts',
          'Customer support',
          'Sending newsletters',
          'Conducting recruitment processes',
          'Improving our services',
          'Audience measurement and statistical analysis',
          'Ensuring IT security',
          'Complying with legal obligations',
        ]}
      />
    </LegalSection>

    <LegalSection heading="5. Contacting us">
      <p>
        If you contact us by email or through a contact form, we process the information you provide
        solely to respond to your enquiry and any follow-up questions.
      </p>
    </LegalSection>

    <LegalSection heading="6. Job applications">
      <p>
        If you apply for a position with us, we process the personal data you submit solely for the
        purposes of the recruitment process.
      </p>
      <p>
        If no employment relationship is established, your data will be deleted after the
        recruitment process has been completed, unless statutory retention obligations apply or you
        have expressly consented to a longer retention period.
      </p>
    </LegalSection>

    <LegalSection heading="7. Cookies">
      <p>Our website uses cookies and comparable technologies. Cookies are used in particular to:</p>
      <LegalList
        items={[
          'improve user-friendliness,',
          'increase security,',
          'save settings,',
          'perform statistical analysis.',
        ]}
      />
      <p>
        You can restrict or delete cookies at any time through your browser settings. Doing so may
        affect individual functions of the website.
      </p>
    </LegalSection>

    <LegalSection heading="8. Analytics and tracking services">
      <p>
        Where used, we employ analytics and tracking services to optimise our website. These may
        include the following services in particular:
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
        These services may use cookies and collect information about the use of our website. Where
        required by law, we obtain your consent through a cookie banner before using such
        technologies.
      </p>
    </LegalSection>

    <LegalSection heading="9. Google services">
      <p>Our website may use Google services, such as:</p>
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
        Personal data may be transferred to Google servers in connection with these services. Data
        may also be processed outside Switzerland.
      </p>
    </LegalSection>

    <LegalSection heading="10. Social media">
      <p>We maintain profiles on social networks such as:</p>
      <LegalList items={['LinkedIn', 'Facebook', 'Instagram', 'YouTube']} />
      <p>
        When you visit our social media pages, the privacy policies of the respective platform
        operators also apply.
      </p>
    </LegalSection>

    <LegalSection heading="11. Newsletter">
      <p>
        If you subscribe to our newsletter, we process your email address solely for the purpose of
        sending the newsletter. Registration generally uses a double opt-in procedure. You may
        unsubscribe at any time through the unsubscribe link or by notifying us.
      </p>
    </LegalSection>

    <LegalSection heading="12. Hosting">
      <p>
        Our website is operated by an external hosting provider. The following data in particular
        may be processed to ensure the secure operation of the website:
      </p>
      <LegalList
        items={[
          'IP address',
          'Time of access',
          'Browser information',
          'Log files',
          'Technical error messages',
        ]}
      />
    </LegalSection>

    <LegalSection heading="13. Disclosure of personal data">
      <p>We disclose personal data only where:</p>
      <LegalList
        items={[
          'this is necessary to perform a contract,',
          'you have given your consent,',
          'we are legally required to do so,',
          'external service providers act on our behalf.',
        ]}
      />
      <p>
        Our service providers process personal data solely in accordance with our instructions or
        within the scope of their own responsibilities under data protection law.
      </p>
    </LegalSection>

    <LegalSection heading="14. International data transfers">
      <p>
        Where personal data is transferred abroad, we ensure an adequate level of data protection
        or implement suitable contractual and organisational safeguards in accordance with
        applicable legal requirements.
      </p>
    </LegalSection>

    <LegalSection heading="15. Data security">
      <p>
        We use appropriate technical and organisational security measures to protect personal data
        against loss, manipulation, unauthorised access, or misuse.
      </p>
    </LegalSection>

    <LegalSection heading="16. Retention period">
      <p>
        Personal data is stored only for as long as necessary for the relevant purposes or as
        required by law. Once the purpose of processing no longer applies, the data is deleted or
        anonymised unless statutory retention obligations prevent this.
      </p>
    </LegalSection>

    <LegalSection heading="17. Your rights">
      <p>Within the scope of applicable law, you have in particular the right to:</p>
      <LegalList
        items={[
          'obtain information about your personal data,',
          'correct inaccurate data,',
          'have your data deleted where no statutory retention obligations apply,',
          'restrict processing,',
          'receive your personal data,',
          'withdraw consent with effect for the future.',
        ]}
      />
      <p>To exercise your rights, please contact the contact point stated above.</p>
    </LegalSection>

    <LegalSection heading="18. Changes to this Privacy Policy">
      <p>
        We reserve the right to amend this Privacy Policy at any time, in particular when legal
        requirements change or new services are introduced. The current version published on this
        website applies.
      </p>
    </LegalSection>
  </LegalLayout>
);

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ language }) =>
  language === 'de' ? <GermanPrivacyPage /> : <EnglishPrivacyPage />;
