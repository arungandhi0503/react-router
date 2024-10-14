import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './component/Home';
import Contact from './component/Contact';
import { homeLoader } from './loaders/Loaders'; // Import the loader

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,  // App contains Navbar and Outlet for child routes
    children: [
      {
        path: "/",  // Child route rendered in Outlet
        element: <Home />
      },
      {
        path: "/home",
        element: <Home />,
        loader: homeLoader
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
