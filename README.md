# White Castle Restaurant Web App

A modern web application for the White Castle restaurant that allows customers to view the menu, add items to their cart, and proceed to checkout.

## Features

- Browse menu items by category (Lunch, Dinner, Drinks, Beers, Wines)
- Add menu items to cart
- View and manage cart
- Admin panel for managing menu items (add, update, delete)

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- React Router DOM
- Context API for state management

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```
git clone https://github.com/yourusername/white-castle-restaurant.git
cd white-castle-restaurant
```

2. Install dependencies
```
npm install
```
or
```
yarn install
```

### PowerShell Execution Policy

If you encounter PowerShell execution policy restrictions, you can run the following command in an Administrator PowerShell to allow script execution:

```
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Alternatively, you can use Command Prompt (cmd.exe) instead of PowerShell to run npm commands.

3. Start the development server
```
npm start
```
or
```
yarn start
```

4. Open your browser and visit `http://localhost:3000`

## Admin Access

To access the admin panel, navigate to the `/admin` route. Here you can add, edit, or remove menu items.

## Project Structure

```
src/
  ├── assets/           # Static assets like images
  ├── components/       # Reusable UI components
  ├── contexts/         # React Context providers
  ├── pages/            # Main page components
  ├── types/            # TypeScript type definitions
  ├── utils/            # Utility functions and sample data
  ├── App.tsx           # Main App component
  └── index.tsx         # Application entry point
```

## License

This project is open source. 