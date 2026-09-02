import type { Locale } from './locales';

export const CONTATTI: Record<Locale, {
  eyebrow: string;
  title: string;
  lead: string;
  whereTitle: string;
  mapLink: string;
  writeTitle: string;
  phoneNote: string;
  checkTitle: string;
  checkPlaceholder: string;
  bookingTitle: string;
  bookingText: string;
}> = {
  it: {
    eyebrow: 'Parliamone', title: 'Contatti',
    lead: "Per informazioni sulla disponibilità, richieste particolari o indicazioni per l'arrivo.",
    whereTitle: 'Dove siamo', mapLink: 'Apri su Google Maps →',
    writeTitle: 'Scrivici', phoneNote: '(telefono / WhatsApp)',
    checkTitle: 'Check-in e check-out', checkPlaceholder: '[Orari da confermare]',
    bookingTitle: 'Prenotazioni', bookingText: 'Per ora le prenotazioni si effettuano direttamente su Airbnb:',
  },
  es: {
    eyebrow: 'Hablemos', title: 'Contacto',
    lead: 'Para información sobre disponibilidad, solicitudes especiales o indicaciones para la llegada.',
    whereTitle: 'Dónde estamos', mapLink: 'Abrir en Google Maps →',
    writeTitle: 'Escríbenos', phoneNote: '(teléfono / WhatsApp)',
    checkTitle: 'Entrada y salida', checkPlaceholder: '[Horarios por confirmar]',
    bookingTitle: 'Reservas', bookingText: 'Por ahora las reservas se realizan directamente en Airbnb:',
  },
  en: {
    eyebrow: "Let's talk", title: 'Contact',
    lead: 'For availability, special requests, or directions to arrive.',
    whereTitle: 'Where we are', mapLink: 'Open in Google Maps →',
    writeTitle: 'Write to us', phoneNote: '(phone / WhatsApp)',
    checkTitle: 'Check-in and check-out', checkPlaceholder: '[Times to be confirmed]',
    bookingTitle: 'Bookings', bookingText: 'For now, bookings are made directly on Airbnb:',
  },
  fr: {
    eyebrow: 'Parlons-en', title: 'Contact',
    lead: 'Pour toute information sur les disponibilités, demandes particulières ou indications pour arriver.',
    whereTitle: 'Où nous trouver', mapLink: 'Ouvrir sur Google Maps →',
    writeTitle: 'Écrivez-nous', phoneNote: '(téléphone / WhatsApp)',
    checkTitle: 'Arrivée et départ', checkPlaceholder: '[Horaires à confirmer]',
    bookingTitle: 'Réservations', bookingText: 'Pour l\u2019instant, les réservations se font directement sur Airbnb :',
  },
  de: {
    eyebrow: 'Sprechen wir', title: 'Kontakt',
    lead: 'Für Fragen zur Verfügbarkeit, besondere Wünsche oder Anfahrtshinweise.',
    whereTitle: 'Wo wir sind', mapLink: 'Auf Google Maps öffnen →',
    writeTitle: 'Schreiben Sie uns', phoneNote: '(Telefon / WhatsApp)',
    checkTitle: 'Check-in und Check-out', checkPlaceholder: '[Zeiten noch zu bestätigen]',
    bookingTitle: 'Buchungen', bookingText: 'Buchungen erfolgen derzeit direkt über Airbnb:',
  },
};
