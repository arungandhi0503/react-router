import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './component/Home';
import { homeLoader } from './loaders/Loaders';
const Contact = lazy(() => import('./component/Contact'));
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
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Contact />
          </Suspense>
        ),
      }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
