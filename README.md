# Calculator App

A simple calculator web application with a Node.js/Express backend and a React/TypeScript frontend.

## Project Structure

- `/server` - Node.js/Express backend
- `/client` - React/TypeScript frontend

## Features

- Calculator that allows selecting two numbers and an operator (+, -, *, /)
- Clean, minimalistic user interface
- Server-side calculation processing

## How to Run

### Backend

```bash
cd server
npm install
npm start
```

The server will run on http://localhost:3001

### Frontend

```bash
cd client
npm install
npm start
```

The client will run on http://localhost:3000

## How to Use

1. Enter the first number in the input field
2. Choose an operator (+, -, *, /)
3. Enter the second number in the input field
4. Click "Calculate" to see the result

## API Endpoints

- `POST /api/calculate` - Calculate operation with two numbers
  - Request body: `{ num1: string, num2: string, operator: string }`
  - Response: `{ result: string }` or `{ error: string, details?: string }`
- `GET /api/health` - Health check endpoint
  - Response: `{ status: "ok" }`
