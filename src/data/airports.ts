// src/data/airports.ts
export const airports = [
  // East Africa
  { code: "EBB", name: "Entebbe International Airport", city: "Entebbe", country: "Uganda" },
  { code: "NBO", name: "Jomo Kenyatta International Airport", city: "Nairobi", country: "Kenya" },
  { code: "MBA", name: "Moi International Airport", city: "Mombasa", country: "Kenya" },
  { code: "KGL", name: "Kigali International Airport", city: "Kigali", country: "Rwanda" },
  { code: "DAR", name: "Julius Nyerere International Airport", city: "Dar es Salaam", country: "Tanzania" },
  { code: "JRO", name: "Kilimanjaro International Airport", city: "Arusha", country: "Tanzania" },
  { code: "ADD", name: "Addis Ababa Bole International Airport", city: "Addis Ababa", country: "Ethiopia" },
  { code: "JUB", name: "Juba International Airport", city: "Juba", country: "South Sudan" },
  { code: "BJM", name: "Bujumbura International Airport", city: "Bujumbura", country: "Burundi" },
  { code: "SEZ", name: "Seychelles International Airport", city: "Victoria", country: "Seychelles" },

  // Southern Africa
  { code: "LUN", name: "Kenneth Kaunda International Airport", city: "Lusaka", country: "Zambia" },
  { code: "HRE", name: "Robert Gabriel Mugabe International Airport", city: "Harare", country: "Zimbabwe" },
  { code: "JNB", name: "OR Tambo International Airport", city: "Johannesburg", country: "South Africa" },
  { code: "CPT", name: "Cape Town International Airport", city: "Cape Town", country: "South Africa" },
  { code: "DUR", name: "King Shaka International Airport", city: "Durban", country: "South Africa" },
  { code: "GBE", name: "Sir Seretse Khama International Airport", city: "Gaborone", country: "Botswana" },
  { code: "WDH", name: "Hosea Kutako International Airport", city: "Windhoek", country: "Namibia" },
  { code: "MPM", name: "Maputo International Airport", city: "Maputo", country: "Mozambique" },
  { code: "TNR", name: "Ivato International Airport", city: "Antananarivo", country: "Madagascar" },
  { code: "MRU", name: "Sir Seewoosagur Ramgoolam International Airport", city: "Port Louis", country: "Mauritius" },

  // West Africa
  { code: "LOS", name: "Murtala Muhammed International Airport", city: "Lagos", country: "Nigeria" },
  { code: "ABV", name: "Nnamdi Azikiwe International Airport", city: "Abuja", country: "Nigeria" },
  { code: "ACC", name: "Kotoka International Airport", city: "Accra", country: "Ghana" },
  { code: "ABJ", name: "Félix-Houphouët-Boigny International Airport", city: "Abidjan", country: "Côte d'Ivoire" },
  { code: "DKR", name: "Blaise Diagne International Airport", city: "Dakar", country: "Senegal" },
  { code: "BKO", name: "Modibo Keita International Airport", city: "Bamako", country: "Mali" },
  { code: "OUA", name: "Thomas Sankara International Airport", city: "Ouagadougou", country: "Burkina Faso" },
  { code: "LFW", name: "Lomé-Tokoin International Airport", city: "Lomé", country: "Togo" },
  { code: "COO", name: "Cadjehoun Airport", city: "Cotonou", country: "Benin" },
  { code: "NIM", name: "Diori Hamani International Airport", city: "Niamey", country: "Niger" },

  // Central Africa
  { code: "LAD", name: "Quatro de Fevereiro Airport", city: "Luanda", country: "Angola" },
  { code: "FIH", name: "N'djili Airport", city: "Kinshasa", country: "DR Congo" },
  { code: "BZV", name: "Maya-Maya Airport", city: "Brazzaville", country: "Republic of Congo" },
  { code: "SSG", name: "Malabo International Airport", city: "Malabo", country: "Equatorial Guinea" },
  { code: "LBV", name: "Libreville International Airport", city: "Libreville", country: "Gabon" },
  { code: "NDJ", name: "N'Djamena International Airport", city: "N'Djamena", country: "Chad" },
  { code: "BGF", name: "Bangui M'Poko International Airport", city: "Bangui", country: "Central African Republic" },

  // North Africa
  { code: "CAI", name: "Cairo International Airport", city: "Cairo", country: "Egypt" },
  { code: "ALY", name: "El Nouzha Airport", city: "Alexandria", country: "Egypt" },
  { code: "TIP", name: "Tripoli International Airport", city: "Tripoli", country: "Libya" },
  { code: "TUN", name: "Tunis-Carthage International Airport", city: "Tunis", country: "Tunisia" },
  { code: "ALG", name: "Houari Boumediene Airport", city: "Algiers", country: "Algeria" },
  { code: "CMN", name: "Mohammed V International Airport", city: "Casablanca", country: "Morocco" },
  { code: "RAK", name: "Menara Airport", city: "Marrakech", country: "Morocco" },
  { code: "NKC", name: "Nouakchott International Airport", city: "Nouakchott", country: "Mauritania" },

  // Other Major African Airports
  { code: "KRT", name: "Khartoum International Airport", city: "Khartoum", country: "Sudan" },
  { code: "ASM", name: "Asmara International Airport", city: "Asmara", country: "Eritrea" },
  { code: "DJI", name: "Djibouti-Ambouli International Airport", city: "Djibouti City", country: "Djibouti" },
  { code: "FNA", name: "Lungi International Airport", city: "Freetown", country: "Sierra Leone" },
  { code: "ROB", name: "Roberts International Airport", city: "Monrovia", country: "Liberia" },
  { code: "BJL", name: "Banjul International Airport", city: "Banjul", country: "Gambia" },
  { code: "CKY", name: "Conakry International Airport", city: "Conakry", country: "Guinea" },
  { code: "OXB", name: "Osvaldo Vieira International Airport", city: "Bissau", country: "Guinea-Bissau" },
  { code: "RAI", name: "Nelson Mandela International Airport", city: "Praia", country: "Cape Verde" },
  { code: "TMS", name: "São Tomé International Airport", city: "São Tomé", country: "São Tomé and Príncipe" },

  // Major International Airports Outside Africa
  { code: "DXB", name: "Dubai International Airport", city: "Dubai", country: "United Arab Emirates" },
  { code: "AUH", name: "Abu Dhabi International Airport", city: "Abu Dhabi", country: "United Arab Emirates" },
  { code: "IST", name: "Istanbul Airport", city: "Istanbul", country: "Turkey" },
  { code: "LHR", name: "Heathrow Airport", city: "London", country: "United Kingdom" },
  { code: "CDG", name: "Charles de Gaulle Airport", city: "Paris", country: "France" },
  { code: "FRA", name: "Frankfurt Airport", city: "Frankfurt", country: "Germany" },
  { code: "AMS", name: "Amsterdam Airport Schiphol", city: "Amsterdam", country: "Netherlands" },
  { code: "JFK", name: "John F. Kennedy International Airport", city: "New York", country: "United States" },
  { code: "IAD", name: "Washington Dulles International Airport", city: "Washington, D.C.", country: "United States" },
  { code: "YYZ", name: "Toronto Pearson International Airport", city: "Toronto", country: "Canada" },
  { code: "GRU", name: "São Paulo–Guarulhos International Airport", city: "São Paulo", country: "Brazil" },
  { code: "DXB", name: "Dubai International Airport", city: "Dubai", country: "United Arab Emirates" },
  { code: "PEK", name: "Beijing Capital International Airport", city: "Beijing", country: "China" },
  { code: "PVG", name: "Shanghai Pudong International Airport", city: "Shanghai", country: "China" },
  { code: "HND", name: "Haneda Airport", city: "Tokyo", country: "Japan" },
  { code: "SYD", name: "Sydney Kingsford Smith Airport", city: "Sydney", country: "Australia" },
  { code: "BOM", name: "Chhatrapati Shivaji Maharaj International Airport", city: "Mumbai", country: "India" },
  { code: "DEL", name: "Indira Gandhi International Airport", city: "New Delhi", country: "India" },

  // Additional African Regional Airports
  { code: "KIS", name: "Kisumu International Airport", city: "Kisumu", country: "Kenya" },
  { code: "EBB", name: "Entebbe International Airport", city: "Entebbe", country: "Uganda" },
  { code: "ARK", name: "Arusha Airport", city: "Arusha", country: "Tanzania" },
  { code: "ZNZ", name: "Abeid Amani Karume International Airport", city: "Zanzibar", country: "Tanzania" },
  { code: "LLW", name: "Lilongwe International Airport", city: "Lilongwe", country: "Malawi" },
  { code: "BLZ", name: "Chileka International Airport", city: "Blantyre", country: "Malawi" },
  { code: "RUN", name: "Roland Garros Airport", city: "Saint-Denis", country: "Réunion" },
  { code: "TMS", name: "São Tomé International Airport", city: "São Tomé", country: "São Tomé and Príncipe" },
  { code: "BEW", name: "Beira Airport", city: "Beira", country: "Mozambique" },
  { code: "VNX", name: "Vilankulo Airport", city: "Vilankulo", country: "Mozambique" },
  { code: "BUQ", name: "Joshua Mqabuko Nkomo International Airport", city: "Bulawayo", country: "Zimbabwe" },
  { code: "VFA", name: "Victoria Falls Airport", city: "Victoria Falls", country: "Zimbabwe" },
  { code: "LVI", name: "Livingstone Airport", city: "Livingstone", country: "Zambia" },
  { code: "KIW", name: "Southdowns Airport", city: "Kitwe", country: "Zambia" },
  { code: "MSU", name: "Moshoeshoe I International Airport", city: "Maseru", country: "Lesotho" },
  { code: "SHO", name: "King Mswati III International Airport", city: "Manzini", country: "Eswatini" },
  { code: "PRI", name: "Praslin Island Airport", city: "Praslin Island", country: "Seychelles" },
  { code: "TLE", name: "Toliara Airport", city: "Toliara", country: "Madagascar" },
  { code: "DIE", name: "Arrachart Airport", city: "Antsiranana", country: "Madagascar" },
  { code: "YVA", name: "Iconi Airport", city: "Moroni", country: "Comoros" },
  { code: "AJY", name: "Mano Dayak International Airport", city: "Agadez", country: "Niger" },
  { code: "ZIG", name: "Ziguinchor Airport", city: "Ziguinchor", country: "Senegal" },
  { code: "BJL", name: "Banjul International Airport", city: "Banjul", country: "Gambia" },
  { code: "MLW", name: "Spriggs Payne Airport", city: "Monrovia", country: "Liberia" },
  { code: "KEN", name: "Kenema Airport", city: "Kenema", country: "Sierra Leone" },
  { code: "BQE", name: "Bubaque Airport", city: "Bubaque", country: "Guinea-Bissau" },
  { code: "SID", name: "Amílcar Cabral International Airport", city: "Espargos", country: "Cape Verde" },
  { code: "BEN", name: "Benina International Airport", city: "Benghazi", country: "Libya" },
  { code: "AAE", name: "Rabah Bitat Airport", city: "Annaba", country: "Algeria" },
  { code: "ORN", name: "Oran Es Sénia Airport", city: "Oran", country: "Algeria" },
  { code: "FEZ", name: "Fès-Saïs Airport", city: "Fez", country: "Morocco" },
  { code: "OUD", name: "Angads Airport", city: "Oujda", country: "Morocco" },
  { code: "NDR", name: "Nador International Airport", city: "Nador", country: "Morocco" },
  { code: "ESU", name: "Essaouira-Mogador Airport", city: "Essaouira", country: "Morocco" },
  { code: "AGA", name: "Agadir–Al Massira Airport", city: "Agadir", country: "Morocco" },
  { code: "TNG", name: "Tangier Ibn Battouta Airport", city: "Tangier", country: "Morocco" },
  { code: "AHU", name: "Cherif Al Idrissi Airport", city: "Al Hoceima", country: "Morocco" },
  { code: "OZZ", name: "Ouarzazate Airport", city: "Ouarzazate", country: "Morocco" },
  { code: "ERH", name: "Moulay Ali Cherif Airport", city: "Errachidia", country: "Morocco" },
  { code: "LUX", name: "Luxembourg Airport", city: "Luxembourg City", country: "Luxembourg" },
  { code: "GVA", name: "Geneva Airport", city: "Geneva", country: "Switzerland" },
  { code: "ZRH", name: "Zurich Airport", city: "Zurich", country: "Switzerland" },
  { code: "BRU", name: "Brussels Airport", city: "Brussels", country: "Belgium" },
  { code: "VIE", name: "Vienna International Airport", city: "Vienna", country: "Austria" },
  { code: "CPH", name: "Copenhagen Airport", city: "Copenhagen", country: "Denmark" },
  { code: "OSL", name: "Oslo Airport", city: "Oslo", country: "Norway" },
  { code: "HEL", name: "Helsinki Airport", city: "Helsinki", country: "Finland" },
  { code: "ARN", name: "Stockholm Arlanda Airport", city: "Stockholm", country: "Sweden" },
  { code: "KEF", name: "Keflavík International Airport", city: "Reykjavík", country: "Iceland" },
  { code: "DUB", name: "Dublin Airport", city: "Dublin", country: "Ireland" },
  { code: "LIS", name: "Lisbon Portela Airport", city: "Lisbon", country: "Portugal" },
  { code: "OPO", name: "Francisco de Sá Carneiro Airport", city: "Porto", country: "Portugal" },
  { code: "MAD", name: "Adolfo Suárez Madrid–Barajas Airport", city: "Madrid", country: "Spain" },
  { code: "BCN", name: "Barcelona–El Prat Airport", city: "Barcelona", country: "Spain" },
  { code: "FCO", name: "Leonardo da Vinci–Fiumicino Airport", city: "Rome", country: "Italy" },
  { code: "MXP", name: "Malpensa Airport", city: "Milan", country: "Italy" },
  { code: "ATH", name: "Athens International Airport", city: "Athens", country: "Greece" },
  { code: "PRG", name: "Václav Havel Airport Prague", city: "Prague", country: "Czech Republic" },
  { code: "BUD", name: "Budapest Ferenc Liszt International Airport", city: "Budapest", country: "Hungary" },
  { code: "WAW", name: "Warsaw Chopin Airport", city: "Warsaw", country: "Poland" },
  { code: "SVO", name: "Sheremetyevo International Airport", city: "Moscow", country: "Russia" },
  { code: "DME", name: "Domodedovo International Airport", city: "Moscow", country: "Russia" },
  { code: "LED", name: "Pulkovo Airport", city: "Saint Petersburg", country: "Russia" },
  { code: "HKG", name: "Hong Kong International Airport", city: "Hong Kong", country: "China" },
  { code: "SIN", name: "Singapore Changi Airport", city: "Singapore", country: "Singapore" },
  { code: "BKK", name: "Suvarnabhumi Airport", city: "Bangkok", country: "Thailand" },
  { code: "KUL", name: "Kuala Lumpur International Airport", city: "Kuala Lumpur", country: "Malaysia" },
  { code: "CGK", name: "Soekarno–Hatta International Airport", city: "Jakarta", country: "Indonesia" },
  { code: "MNL", name: "Ninoy Aquino International Airport", city: "Manila", country: "Philippines" },
  { code: "ICN", name: "Incheon International Airport", city: "Seoul", country: "South Korea" },
  { code: "NRT", name: "Narita International Airport", city: "Tokyo", country: "Japan" },
  { code: "AKL", name: "Auckland Airport", city: "Auckland", country: "New Zealand" },
  { code: "WLG", name: "Wellington International Airport", city: "Wellington", country: "New Zealand" },
  { code: "CHC", name: "Christchurch International Airport", city: "Christchurch", country: "New Zealand" }
];