import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router';
import './index.css'
//อิมพอตคอมโพเน้นที่สร้างไว้
import { ProductPage } from './Page/ProductPage.jsx';
import Index from './Page/index.jsx';
import About from './Page/About.jsx';


const router = createBrowserRouter([

  {
    //index page
    path: '/',
    element: <Index />
  },
  {
    //page Product
    path: '/ProductPage',
    element: <ProductPage />,
  },
  {
    //about page
    path: '/about',
    element: <About />
  }
])

//ตัวนี้คือการเรียกใช้งาน RouterProvider โดยส่ง router ที่เราสร้างไว้เข้าไป
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);



