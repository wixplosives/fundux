import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import HowItWorks from './components/HowItWorks';
import Contact from './components/Contact';
import './index.css';

const router = createBrowserRouter([
   {
      path: '/',
      element: <App />,
      children: [
         { path: '/', element: <Home /> },
         { path: 'about', element: <AboutUs /> },
         { path: 'how-it-works', element: <HowItWorks /> },
         { path: 'contact', element: <Contact /> },
      ],
   },
]);

const root = ReactDOM.createRoot(
   document.getElementById('root') as HTMLElement
);

root.render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
);
