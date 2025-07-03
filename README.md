# Compider

This repository contains a minimal prototype for an A2A-based Web Browser Agent. It includes:

- `extension/` – a browser extension using Manifest V3
- `agent/` – a FastAPI server implementing the A2A JSON-RPC interface

## Running the agent server

```bash
cd agent
pip install -r requirements.txt
uvicorn main:app --reload
```

The server exposes `/task` for JSON-RPC requests and `/.well-known/agent.json` for the agent card.

## Loading the extension

1. Open your browser's extensions page (`chrome://extensions` in Chrome).
2. Enable Developer mode and load the `extension/` directory as an unpacked extension.
3. Click the extension icon, enter a command like `open https://example.com` and press **Send**.

The extension will send the prompt to the agent server and execute the returned action plan in the active tab.
