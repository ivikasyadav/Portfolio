import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ThemeProvider } from './context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
 
    <ThemeProvider>
    <App />
  </ThemeProvider>
  
  </BrowserRouter>
)
