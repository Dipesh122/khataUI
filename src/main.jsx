import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App';
import Features from './components/Features';
import Details from './components/Details';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
          {
              path: 'features',
              element: <Features />,
          },
          {
            path: 'details',
            element: <Details />,
        },
        ]
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
