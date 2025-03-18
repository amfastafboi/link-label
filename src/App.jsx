import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Services from './pages/Services.jsx';
import AppLayout from './components/Layout/AppLayout.jsx';
import './App.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
      path: '/',
      element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/services',
        element: <Services />
      }
    ]
}
  
])

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App;