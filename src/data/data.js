export const REGIONS = ['All', 'Temple', 'Beach', 'Hills', 'Heritage', 'Nature'];

export const destinations = [
  { id: 'madurai', name: 'Madurai', ta: 'மதுரை', region: 'Temple', emoji: '🛕', rating: 4.8, g: 'linear-gradient(135deg,#e53935,#ff9800)', desc: 'Temple city of Meenakshi Amman, jasmine and legendary jigarthanda.' },
  { id: 'rameswaram', name: 'Rameswaram', ta: 'இராமேஸ்வரம்', region: 'Temple', emoji: '🌉', rating: 4.7, g: 'linear-gradient(135deg,#0288d1,#26c6da)', desc: 'Sacred island with Ramanathaswamy Temple and the Pamban Bridge.' },
  { id: 'kanyakumari', name: 'Kanyakumari', ta: 'கன்னியாகுமரி', region: 'Beach', emoji: '🌅', rating: 4.8, g: 'linear-gradient(135deg,#ff7043,#fbc02d)', desc: 'Where three seas meet – sunrise, Vivekananda Rock and Thiruvalluvar Statue.' },
  { id: 'ooty', name: 'Ooty', ta: 'உதகமண்டலம்', region: 'Hills', emoji: '🚂', rating: 4.6, g: 'linear-gradient(135deg,#2e7d32,#9ccc65)', desc: 'Queen of Hill Stations – tea gardens, lake and the Nilgiri toy train.' },
  { id: 'kodaikanal', name: 'Kodaikanal', ta: 'கொடைக்கானல்', region: 'Hills', emoji: '🌲', rating: 4.6, g: 'linear-gradient(135deg,#00897b,#80cbc4)', desc: 'Princess of Hill Stations – misty valleys, Pillar Rocks and star lake.' },
  { id: 'thanjavur', name: 'Thanjavur', ta: 'தஞ்சாவூர்', region: 'Heritage', emoji: '🏯', rating: 4.7, g: 'linear-gradient(135deg,#8e24aa,#ec407a)', desc: 'Chola glory – Brihadeeswarar Temple, Tanjore paintings and bronze art.' },
  { id: 'mahabalipuram', name: 'Mahabalipuram', ta: 'மகாபலிபுரம்', region: 'Heritage', emoji: '🗿', rating: 4.5, g: 'linear-gradient(135deg,#f57c00,#ffd54f)', desc: 'Pallava rock-cut caves, Shore Temple and a golden beach.' },
  { id: 'courtallam', name: 'Courtallam', ta: 'குற்றாலம்', region: 'Nature', emoji: '💦', rating: 4.4, g: 'linear-gradient(135deg,#1565c0,#4dd0e1)', desc: 'Spa of South India – herbal waterfalls and a cool monsoon season.' }
];

const inc = ['AC vehicle with driver', '3★ hotel stay', 'Daily breakfast', 'Local guide', 'Toll & parking'];
const mk = (id, title, days, price, itinerary) => ({ id, destId: id, title, days, price, includes: inc, itinerary });

export const packages = [
  mk('madurai', 'Meenakshi Amman Darshan Tour', 3, 6999, ['Arrive Madurai, Meenakshi Amman Temple evening aarti', 'Thirumalai Nayakkar Palace, Gandhi Museum, Alagar Kovil', 'Street-food walk (jigarthanda, parotta), departure']),
  mk('rameswaram', 'Rameswaram – Dhanushkodi Pilgrimage', 3, 7499, ['Arrive, Ramanathaswamy Temple 22 theerthams', 'Pamban Bridge, Dhanushkodi ghost town, Abdul Kalam Memorial', 'Local beach time and departure']),
  mk('kanyakumari', 'Kanyakumari Sunrise Special', 2, 5499, ['Arrive, sunset point, Kumari Amman Temple', 'Sunrise, ferry to Vivekananda Rock & Thiruvalluvar Statue, departure']),
  mk('ooty', 'Ooty Tea Garden Escape', 4, 9999, ['Arrive Ooty, Botanical Garden', 'Doddabetta Peak, Tea Factory, Ooty Lake boating', 'Nilgiri toy train ride, Pykara Falls', 'Shopping at Charing Cross, departure']),
  mk('kodaikanal', 'Kodaikanal Mist & Lake Holiday', 3, 8499, ['Arrive, Kodai Lake boating', 'Coaker’s Walk, Pillar Rocks, Guna Caves, Pine Forest', 'Bryant Park, homemade chocolates, departure']),
  mk('thanjavur', 'Chola Heritage Trail', 3, 6499, ['Arrive Thanjavur, Brihadeeswarar Temple', 'Thanjavur Palace, Art Gallery, Saraswathi Mahal Library', 'Gangaikonda Cholapuram & Darasuram, departure']),
  mk('mahabalipuram', 'Mahabalipuram Shore Temple Getaway', 2, 4999, ['Arrive, Shore Temple, Five Rathas, Arjuna’s Penance', 'Krishna Butter Ball, Tiger Cave, beach, departure']),
  mk('courtallam', 'Courtallam Waterfalls Monsoon Trip', 3, 5999, ['Arrive Tenkasi, Chitraruvi & Five Falls', 'Main Falls herbal oil bath, Old Courtallam Falls', 'Tenkasi Kasi Viswanathar Temple, departure'])
];

export const getDest = (id) => destinations.find((d) => d.id === id);
export const getPackage = (id) => packages.find((p) => p.id === id);
export const money = (n) => '₹' + Number(n).toLocaleString('en-IN');
