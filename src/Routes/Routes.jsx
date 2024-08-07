import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Error from "../Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);

export default router;
