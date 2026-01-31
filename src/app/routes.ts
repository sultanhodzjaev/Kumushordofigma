import { createBrowserRouter } from 'react-router';
import { HomePage } from '@/app/pages/HomePage';
import { ProductPage } from '@/app/pages/ProductPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/product/:id',
    Component: ProductPage
  }
]);
