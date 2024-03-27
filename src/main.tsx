import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/app.css'
import './config/i18n.ts'
import { RouterProvider } from 'react-router-dom'
import { router } from '@/router/router.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
