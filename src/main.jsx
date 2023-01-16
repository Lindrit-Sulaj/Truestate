import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ThemeProvider from "./ThemeContext";
import './index.css'
import './assets/index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
