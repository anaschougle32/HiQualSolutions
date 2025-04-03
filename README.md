# HiQual Solutions Website

A modern, responsive website for HiQual Solutions, a marketing agency specializing in real estate and interior design businesses.

## Features

- Modern, responsive design
- Smooth animations powered by Framer Motion
- Optimized performance
- Contact form with Supabase integration

## Tech Stack

- React
- Styled Components
- Framer Motion
- Supabase (for contact form submissions)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Supabase account (for the contact form)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/hiqual-solutions.git
cd hiqual-solutions
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory and add your Supabase credentials:
```
REACT_APP_SUPABASE_URL=your_supabase_url
REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Start the development server:
```bash
npm start
# or
yarn start
```

## Supabase Setup

For the contact form to work, you need to set up a Supabase project. Follow the instructions in [SUPABASE_SETUP.md](./SUPABASE_SETUP.md) for a step-by-step guide.

## Project Structure

```
hiqual-solutions/
├── public/
├── src/
│   ├── assets/         # Images, fonts, etc.
│   ├── components/     # React components
│   ├── App.js          # Main App component
│   ├── App.css         # Global styles
│   ├── index.js        # Entry point
│   └── supabaseClient.js # Supabase configuration
├── .env                # Environment variables (ignored by git)
├── package.json
└── README.md
```

## Deployment

To build the project for production:

```bash
npm run build
# or
yarn build
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspiration from modern real estate and interior design websites
- Icons from various open-source libraries
