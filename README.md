# Event Pass Frontend

This is the frontend for the **Event Pass System**, built with Next.js.  
It provides a web interface to scan participant QR codes and validate them against the backend.

---

## Features

- Camera-based QR code scanning.
- Sends scanned data securely to the backend for verification.
- Displays results: valid, already used, or invalid.
- Responsive UI that works well on mobile devices.

---

## Tech Stack

- Next.js (React framework)
- QR scanning library (`react-qr-reader`)
- Axios (HTTP requests to backend API)
- Tailwind CSS (for styling)

---

## Getting Started

### Prerequisites

- Node.js (>= 18)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/event-pass-frontend.git
   ```

2. Navigate to the project folder:

   ```bash
   cd event-pass-frontend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Run Development Server

```bash
npm run dev
```

The app will run at http://localhost:3000.

---

## Project Structure

```bash
src/
  components/     # Reusable UI components
  pages/          # Next.js pages (scan, result, etc.)
  lib/            # API helpers
  styles/         # Tailwind and global styles
```

---

## Contributing

Contributions are welcome:

1. Fork the repository and create a feature branch.
2. Open a pull request with a clear description.
3. Before starting major changes, please open an issue to discuss.

---

## License

MIT License
