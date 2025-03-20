
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import { AuthFormDataProvider } from './context/AuthFormDataContext.jsx'

createRoot(document.getElementById('root')).render(
   <AuthFormDataProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
   </AuthFormDataProvider>
   
)
