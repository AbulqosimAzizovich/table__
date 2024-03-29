import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {createBrowserRouter} from 'react-router-dom';

import Layout from '../pages/Layout/Layout';
import Home from '../pages/Home';
import Hodim from '../pages/Xodim';
import About from '../pages/About';
import NotFound from '../pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/hodim-id',
        element: <Hodim />,
      },
      {
        path: '/list',
        element: <Home />,
      },
    ],
  },
]);

export default router;
