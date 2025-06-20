import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'

import LandingPage from './pages/LandingPage'
import Register from './pages/Register'
import Login from './pages/Login'
import AboutPage from './pages/AboutPage'
import Dashboard from './pages/dashboard/Dashboard'

import Error from './components/error/Error'
import ServicesPage from './pages/ServicesPage'



function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <LandingPage />,
    },
    {
      path: '/about',
      element: <AboutPage />
    },
    {
      path: '/register',
      element: <Register />
    },
    {
      path: '/login',
      element: <Login />
    },
     {
      path: '/services',
      element: <ServicesPage/>
    },
    {
      path: '/dashboard',
      element: <Dashboard />,
      children: [
        {
          path: 'main',
          element: <h1>Analytics</h1>
        },
        
        // {
        //   path: 'profile',
        //   element: <h1>Analytics</h1>
        // }
      ]
    },
    {
      path: '*',
      element: <Error />
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App