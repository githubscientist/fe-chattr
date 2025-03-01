import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ToastProvider from "./components/ToastProvider";

const routes = [
  {
    path: "/",
    element: <HomePage />
  }
];

const router = createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  }
})

const App = () => {
  return <>
    <ToastProvider />
    <RouterProvider router={router} />
  </>
}

export default App;