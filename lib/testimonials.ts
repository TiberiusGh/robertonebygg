export type Platform = 'google' | 'facebook' | 'site'

export type Testimonial = {
  name: string
  initials: string
  avatarColor: string
  date: string
  rating: number
  message: string
  platform: Platform
  location?: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Anders Karlsson',
    initials: 'AK',
    avatarColor: '#4285F4',
    date: 'Mars 2025',
    rating: 5,
    platform: 'google',
    location: 'Kalmar',
    message:
      'Anlitade Robertonebygg för en ny altan och är mer än nöjd. Jobbet utfördes snabbt, prydligt och till ett rimligt pris. Robert lyssnade på vad vi ville ha och gav bra förslag längs vägen. Rekommenderas varmt!',
  },
  {
    name: 'Maria Lindström',
    initials: 'ML',
    avatarColor: '#EA4335',
    date: 'Januari 2025',
    rating: 5,
    platform: 'google',
    location: 'Nybro',
    message:
      'Totalrenovering av badrummet – ett fantastiskt resultat! Allt från kakel till dörrar är perfekt utfört. Professionell kommunikation under hela projektet och levererade i tid. Kan inte tänka mig att anlita någon annan framöver.',
  },
  {
    name: 'Johan Persson',
    initials: 'JP',
    avatarColor: '#34A853',
    date: 'November 2024',
    rating: 5,
    platform: 'google',
    location: 'Mönsterås',
    message:
      'Takbyte på villans garage. Snabb respons vid förfrågan, tydlig offert och jobbet blev klart före plan. Noggrannt och välgjort hantverk. Absolut värd varje krona.',
  },
  {
    name: 'Karin Gustafsson',
    initials: 'KG',
    avatarColor: '#9C27B0',
    date: 'September 2024',
    rating: 5,
    platform: 'facebook',
    location: 'Oskarshamn',
    message:
      'Vi fick hjälp med en tillbyggnad på ca 20 kvm. Robert och hans team var pålitliga, städade efter sig varje dag och slutresultatet överträffade våra förväntningar. Verkligen ett proffs-team!',
  },
  {
    name: 'Erik Svensson',
    initials: 'ES',
    avatarColor: '#FF5722',
    date: 'Juli 2024',
    rating: 5,
    platform: 'google',
    location: 'Kalmar',
    message:
      'Fönster- och dörrbyte på hela huset. Kompetent hantverk och mycket god kommunikation. Alla fönster sitter perfekt och energibesparingen märks redan. Rekommen­derar Robertonebygg till alla i Kalmar-trakten.',
  },
  {
    name: 'Sofie Nilsson',
    initials: 'SN',
    avatarColor: '#00BCD4',
    date: 'Maj 2024',
    rating: 5,
    platform: 'facebook',
    location: 'Emmaboda',
    message:
      'Byggde ett attefallshus åt oss i trädgården. Superb kvalitet och hjälpsam personal. De tog hand om allt från grund till tak och vi är stolta över slutresultatet. Tusen tack!',
  },
  {
    name: 'Lars-Erik Magnusson',
    initials: 'LM',
    avatarColor: '#607D8B',
    date: 'April 2024',
    rating: 5,
    platform: 'google',
    location: 'Torsås',
    message:
      'Fundamentarbete för nytt garage. Allt gjordes korrekt från start – schaktning, dränering och gjutning. Inga överraskningar, inget merarbete. Precis som man önskar sig av ett byggföretag.',
  },
  {
    name: 'Åsa Björklund',
    initials: 'ÅB',
    avatarColor: '#FF9800',
    date: 'Februari 2024',
    rating: 5,
    platform: 'google',
    location: 'Kalmar',
    message:
      'Badrumsrenovering som vi hade skjutit på i flera år. Äntligen tog vi steget och anlitade Robertonebygg – borde ha gjort det för länge sedan. Resultatet är fantastiskt och priset var väldigt konkurrenskraftigt.',
  },
  {
    name: 'Mikael Johansson',
    initials: 'MJ',
    avatarColor: '#3F51B5',
    date: 'Oktober 2023',
    rating: 5,
    platform: 'facebook',
    location: 'Nybro',
    message:
      'Stugbyggnation på tomten utanför Nybro. Engagerad personal som verkligen bryr sig om detaljerna. Robert kom med smarta lösningar som sparade oss tid och pengar. Femstjärnigt på alla plan!',
  },
  {
    name: 'Birgitta Olsson',
    initials: 'BO',
    avatarColor: '#E91E63',
    date: 'Augusti 2023',
    rating: 5,
    platform: 'google',
    location: 'Mönsterås',
    message:
      'Fasadrenovering och byte av fönster. Jobbet är solitt utfört och fasaden ser ut som ny. Teamet var alltid punktliga och lämnade arbetsplatsen välstädad. Nöjd kund som gärna återkommer!',
  },
]
