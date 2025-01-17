import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router';
import './index.css'
import DataProductkey from '../public/Data/ข้อมูลครืมตุ่งๆ.json'
//อิมพอตคอมโพเน้นที่สร้างไว้
import { ProductPage } from './Page/ProductPage.jsx';
import Index from './Page/index.jsx';
import About from './Page/About.jsx';
import ProductDetail from './Page/ProductDetail.jsx'

const KEY = DataProductkey.map((data) => data.KEY)

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
    path: '/ProductPage/:KEY',
    element: <ProductDetail />
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



