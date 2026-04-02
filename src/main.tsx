/* Dependencies */
import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import "./_essentials.css";

/* Components */
import App from "./app.tsx";
const Home = lazy(() => import("./pages/Home/index.tsx"));
const Projects = lazy(() => import("./pages/Projects/index.tsx"));
const Contact = lazy(() => import("./pages/Contact/index.tsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Navigate to="/about-me" /> },
      { path: "/about-me", element: <Home /> },
      { path: "/projects", element: <Projects /> },
      { path: "/contact-me", element: <Contact /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback={<div className="body-container" />}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>,
);
