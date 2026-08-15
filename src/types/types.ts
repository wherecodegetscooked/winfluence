// Verfuegbare Seiten. Neue Route: hier ergaenzen, Page-Komponente
// anlegen und in App.tsx im Router-Switch registrieren.
// Der Wert entspricht direkt dem Pfad-Segment (/datenschutz etc.).
export type Page =
  | 'home'
  | 'brands'
  | 'marktplatz'
  | 'about'
  | 'contact'
  | 'vision'
  | 'impressum'
  | 'datenschutz'
  | 'nutzungsbedingungen';
