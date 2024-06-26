import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { TopicAnalysisPage } from "./pages/TopicAnalysisPage/topicAnalysisPage";
import ResultPage from "./pages/ResultPage/resultpage";
import AboutPage from "./pages/AboutPage/aboutpage";
import DataAnalysisPage from "./pages/DataAnalysisPage/dataAnalysisPage";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import {BrowserRouter} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/result",
    element: <ResultPage />,
  },
  {
    path: "/dataAnalysis",
    element: <DataAnalysisPage />,
  },
  {
    path: "/topicAnalysis",
    element: <TopicAnalysisPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
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
