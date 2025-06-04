# DecodeAir

DecodeAir is a sleek, mobile-friendly web app that helps users decode and understand aviation-related codes such as country codes, airline codes, airport codes, cities, and the aviation alphabet. Designed with clarity and simplicity, it’s perfect for beginners and aviation enthusiasts alike.

---

## 🚀 Features

- **Search**: Quickly search any code or word related to countries, airlines, airports, cities, or the aviation alphabet.
- **Glossary Browser**: Browse full lists with filtering and sorting capabilities.
- **Reverse Lookup**: Lookup names to find corresponding codes and related info.
- **Random 5 Codes of the Day**: Learn something new daily with a random set of aviation codes.
- **Map Integration**: View location maps for airports and cities.
- **Dark Mode**: Toggle between light and dark themes for a comfortable viewing experience.
- **Offline-Friendly**: Glossary data is stored locally, so it works even without an internet connection.
- **Accessible & Responsive**: Built with accessibility and mobile users in mind.
- **Clean UI**: Minimal, intuitive, and visually appealing interface powered by Tailwind CSS.

---

## 📁 Project Structure

decodeair/
├── src/
│ ├── app/ # Next.js App Router pages and layouts
│ │ ├── layout.tsx # Global layout (header, footer, theme)
│ │ ├── page.tsx # Home page
│ │ ├── loading.tsx # Loading state UI
│ │ ├── not-found.tsx # 404 page UI
│ │ └── glossary/ # Glossary pages
│ │ └── page.tsx
│ ├── components/ # Reusable React components
│ │ ├── SearchBar.tsx
│ │ ├── ResultCard.tsx
│ │ ├── CategoryCard.tsx
│ │ ├── Header.tsx
│ │ ├── Footer.tsx
│ │ └── ThemeToggle.tsx
│ ├── data/ # Static mock data (countries, airlines, etc.)
│ │ ├── countries.ts
│ │ ├── airlines.ts
│ │ ├── airports.ts
│ │ ├── cities.ts
│ │ └── alphabet.ts
│ ├── hooks/ # Custom React hooks (optional)
│ ├── styles/ # Global CSS and Tailwind config
│ │ └── globals.css
│ └── utils/ # Helper functions (search, format, etc.)
│ ├── search.ts
│ └── format.ts
├── public/ # Static assets (flags, logos, icons)
├── tailwind.config.ts # Tailwind CSS configuration
├── tsconfig.json # TypeScript configuration
├── next.config.js # Next.js configuration
└── package.json # Project dependencies and scripts


---

## 🛠️ Technologies Used

- **Next.js 13+** (App Router)
- **React 18+**
- **TypeScript**
- **Tailwind CSS** for styling and dark mode support
- **Vercel** (optional) for deployment

---

## 💡 Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

### Installation

1. Clone the repo:

```bash
git clone https://github.com/yourusername/decodeair.git
cd decodeair


2. Install dependencies:

bash
Copy
Edit
npm install
# or
yarn



Run the development server:

bash
Copy
Edit
npm run dev
# or
yarn dev



Open http://localhost:3000 in your browser.


📚 Usage
Use the search bar on the homepage to lookup aviation codes or names.

Browse the full glossary from the navigation menu.

Toggle dark mode with the button in the header.

Explore random codes of the day for quick learning.

Click on airports or cities to see them on a map.


🎯 Future Enhancements
Integrate real-time API data for airlines and airports.

Add user authentication for saving favorites.

Add multilingual support.

Improve offline support with service workers.

Add animations and transitions for better UX.

Mobile app version with React Native.


🤝 Contributing
Contributions, issues, and feature requests are welcome!


📄 License
This project is licensed under the MIT License.

🙏 Acknowledgments
Thanks to Next.js, React, and Tailwind CSS communities.