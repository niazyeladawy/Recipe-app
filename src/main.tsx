import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.tsx';
import NotFound from './NotFound.tsx';
import Layout from './Layout.tsx';
import RecipeDetails from './pages/recipes/[id]/index.tsx';
import { QueryClient, QueryClientProvider } from 'react-query';
import theme from './theme.ts';
import { ThemeProvider } from '@mui/material';

const queryClient = new QueryClient();


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "recipes/:id",
        element: <RecipeDetails />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
       

        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
