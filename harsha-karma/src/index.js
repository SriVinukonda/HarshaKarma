import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Journey from './pages/Journey';


/**
 * I will be using an SPA Format for the app, because while \
 * fast and responsibe user interaction is important, it is not highly critical
 */
const router = createBrowserRouter([
  {
      path:"/",
      element: <App />
  },
  {
    path:"/journey",
    element: <Journey />
  }
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>  
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
