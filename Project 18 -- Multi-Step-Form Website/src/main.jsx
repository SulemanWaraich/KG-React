import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Preferences from './components/Preferences.jsx'
import Personel from './components/Personel.jsx'
import Address from './components/Address.jsx'
import Summary from './components/Summary.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "",
        element: <Personel />
      },
      {
        path: "address",
        element: <Address />
      },
      {
        path: "preferences",
        element: <Preferences />
      },
      {
        path: "summary",
        element: <Summary />
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
