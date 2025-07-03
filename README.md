# Compider

## Installing Server Dependencies
1. Install Node.js (version 18+ recommended).
2. Navigate to the server directory and run `npm install` to install required packages.

## Installing Extension Dependencies
1. Navigate to the browser extension directory.
2. Run `npm install` to download extension packages.
3. Add the required URLs to `host_permissions` in `manifest.json`.
4. Reload the extension in your browser to apply changes.

## Starting WebSocket Server (if available)
1. Run `npm start` in the server directory to launch the WebSocket server.
2. Use a WebSocket client or the extension to connect to `ws://localhost:PORT`.
3. Ensure the server outputs connection information to confirm it is running.
