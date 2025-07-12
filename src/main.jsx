import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/Home", element: <App /> },
  { path: "/Projects", element: <App /> },
  { path: "*", element: <NotFound /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
