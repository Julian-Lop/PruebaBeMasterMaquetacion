import React from 'react'
import ReactDOM from 'react-dom/client'

// * React-router
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Routes'

// * Css
import './assets/styles/main.scss'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
