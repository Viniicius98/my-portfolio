import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import ErrorPage from "./routes/ErrorPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./routes/App";
import ApresentationScreen from "./routes/Apresentation";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <ApresentationScreen />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/home",
//     element: <App />,
//     errorElement: <ErrorPage />,
//   },
// ]);
const router = createBrowserRouter([
  {
    path: "/",
    element: <ApresentationScreen />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <App />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
