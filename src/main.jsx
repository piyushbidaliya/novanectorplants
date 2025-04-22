import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import  CartContextProvider from './context/CartContext.jsx'
createRoot(document.getElementById('root')).render(
  <CartContextProvider>
    <App />
  </CartContextProvider>,
)
