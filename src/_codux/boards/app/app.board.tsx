import { createBoard } from '@wixc3/react-board';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import App from '../../../App';
import Home from '../../../components/Home';
import AboutUs from '../../../components/AboutUs';
import HowItWorks from '../../../components/HowItWorks';
import Contact from '../../../components/Contact';

const router = createMemoryRouter([
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

export default createBoard({
   name: 'App',
   Board: () => <RouterProvider router={router} />,
   environmentProps: {
      windowWidth: 1024,
      windowHeight: 768,
   },
});
