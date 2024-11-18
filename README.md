# Stock Price Tracker with Caching and Dynamic UI

## Overview

The **Stock Price Tracker** is a web application built using **Next.js 15**, **Emotion**, and **Material-UI (MUI)**. It allows users to search for stock prices and view real-time financial data with a dynamic, interactive UI. The project demonstrates advanced features like caching for optimized performance and Emotion for animations and styling.

## Features

- **Real-time Stock Price Tracking**: Fetch current stock data using the [Stock Price API](https://api.api-ninjas.com/).
- **Caching with Next.js 15**: Implements server-side caching with `force-cache` and client-side caching using SWR for periodic updates.
- **Dynamic UI**: 
  - Interactive card-flipping animation to display stock data.
  - Pulsing animated button using MUI and Emotion.

## Technologies Used

- **Next.js 15**: For server-side rendering and caching.
- **Emotion**: For CSS-in-JS dynamic styling and animations.
- **Material-UI (MUI)**: Pre-built components with custom styling.
- **SWR**: For client-side data fetching and caching.
- **Stock Price API**: To fetch real-time stock price data.

## Installation and Setup

Follow the steps below to set up and run the project locally.

### Prerequisites

- **Node.js**: Version 16 or above.
- **NPM**: For managing dependencies.

### Steps to Launch

1. **Install Dependencies**:  
   Run the following command to install all project dependencies:  
   ```bash
   npm install
   ```

2. **Install Additional Packages**:  
   The project requires the following additional packages. Install them with these commands:

   - **Emotion (CSS-in-JS)**:
     ```bash
     npm install @emotion/react @emotion/styled
     ```

   - **Material-UI (MUI)**:
     ```bash
     npm install @mui/material @emotion/react @emotion/styled
     ```

   - **SWR (Data Fetching)**:
     ```bash
     npm install swr
     ```

3. **Run the Development Server**:  
   Start the development server with:  
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`.

4. **Test the Application**:  
   - Open your browser and navigate to `http://localhost:3000`.
   - Enter a stock ticker (e.g., AAPL, TSLA) and click **Check Stock**.
   - View the dynamic, flipping card with real-time stock data.