import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { HashRouter, Routes, Route } from 'react-router';
import './index.css';

import { ProductPage } from './Page/ProductPage.jsx';
import Index from './Page/index.jsx';
import About from './Page/About.jsx';
import ProductDetail from './Page/ProductDetail.jsx';
import Test from './Page/testpage.jsx'

const router = createBrowserRouter([

  {
    path: '/ENDProject67/',
    element: <Index />,
  },
  {
    path: '/ProductPage',
    element: <ProductPage />,
  },
  {
    path: '/ProductPage/:KEY',
    element: <ProductDetail />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/test',
    element: <Test />,
  },
]);

const isLocalhost = window.location.hostname === 'localhost';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {isLocalhost ? (
      <RouterProvider router={router} />
    ) : (
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ProductPage" element={<ProductPage />} />
          <Route path="/ProductPage/:KEY" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </HashRouter>
    )}
  </StrictMode>
);
