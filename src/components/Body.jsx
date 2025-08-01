import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Home";
import Login from "./Login";
import Layout from "./Layout";
import Error from "./error";
import Browse from "./Browse";

const Body = () => {
  
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Login /> },
        { path: "/login", element: <Login /> },
         { path: "/browse", element: <Browse /> },
      ],
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;
