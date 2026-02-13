# UnlockDigiServices

A modern digital services platform built with React and Vite, offering affordable digital solutions for individuals, freelancers, startups, and small businesses.

## About

UnlockDigiServices provides practical, easy-to-access digital services that support personal branding and business growth, including:

- 🌐 Custom Website Development
- 📱 Social Media Management
- 📄 Professional Resume Building
- 📝 Blog & Articles Platform
- 👥 Admin Dashboard

## Tech Stack

- **Frontend Framework:** React 19.2
- **Build Tool:** Vite 7.2
- **Styling:** TailwindCSS 4.1
- **State Management:** Redux Toolkit
- **Routing:** React Router DOM
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **HTTP Client:** Axios

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 16 or higher)
- **npm** (comes with Node.js)

## Getting Started

Follow these steps to clone and run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/UnlockDiscounts/Digi-Services.git
cd Digi-Services
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173/` (or another port if 5173 is busy).

### 4. Build for Production

```bash
npm run build
```

The production-ready files will be generated in the `dist/` directory.

### 5. Preview Production Build

```bash
npm run preview
```

## Available Scripts

- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Build the application for production
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview the production build locally

## Project Structure

```
Digi-Services/
├── public/           # Static assets
├── src/
│   ├── components/   # Reusable React components
│   ├── pages/        # Page components for routing
│   ├── data/         # Data files and configurations
│   ├── assets/       # Images, SVGs, and other media
│   ├── App.jsx       # Main application component
│   └── main.jsx      # Application entry point
├── index.html        # HTML template
├── package.json      # Dependencies and scripts
└── vite.config.js    # Vite configuration
```

## Features

- **Landing Page** with Hero, Services, Pricing, and Testimonials sections
- **Service Categories** for different digital offerings
- **Blog/Articles** platform for content marketing
- **About Us** and **Contact Us** pages
- **Admin Dashboard** with authentication
- **Responsive Design** optimized for all devices
- **Smooth Animations** using Framer Motion

## Development Notes

- The project uses React Compiler for optimizations (may impact dev/build performance)
- ESLint is configured for code quality checks
- TailwindCSS is used for styling with Vite plugin integration

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is private and proprietary.

## Support

For questions or support, please open an issue in the GitHub repository.
