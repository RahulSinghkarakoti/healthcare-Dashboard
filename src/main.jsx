import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Form from "./components/Form.jsx"
import Main from './components/Dashboard.jsx'
const router=createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        path: '/',
        element:<Main/>
      },
      {
        path: '/add',
        element:<Form/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(

  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
