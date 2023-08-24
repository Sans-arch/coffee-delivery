import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Header } from "../components/Header";
import { Home } from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import { Checkout } from "../pages/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "checkout",
    element: <Checkout />,
  },
]);

export function Layout() {
  return (
    <>
      <Header />

      <RouterProvider router={router} />
    </>
  );
}
