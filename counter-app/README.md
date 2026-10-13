# Simple Counter App

A clean and minimal Counter App built with React that demonstrates the use of the `useState` hook and `onClick` event handling.

## Features

- **Increment (+)** button to increase the count by 1
- **Decrement (-)** button to decrease the count by 1
- **Reset** button to set the count back to 0
- Initial count starts at 0

## Technologies Used

- React JS
- Vite (build tool)
- JavaScript (JSX)
- CSS3

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <your-repository-url>
```

2. Navigate into the project directory:

```bash
cd counter-app
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## Project Structure

```
counter-app/
├── public/
├── src/
│   ├── components/
│   │   └── Counter.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## How It Works

The `Counter` component uses the `useState` hook to manage the count state. Three event handlers are defined:

- `handleIncrement` – increases count by 1
- `handleDecrement` – decreases count by 1
- `handleReset` – resets count to 0

Each handler is bound to a button's `onClick` event.

## License

MIT
