
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import { AuthFormDataProvider } from './context/AuthFormDataContext.jsx'
import { UserProvider } from './context/UserContext.jsx'

createRoot(document.getElementById('root')).render(
   <UserProvider>
   <AuthFormDataProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
   </AuthFormDataProvider>
   </UserProvider>
)
