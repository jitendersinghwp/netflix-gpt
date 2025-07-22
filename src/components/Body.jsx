import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Home";
import Login from "./Login";
import Layout from "./Layout";
import Error from "./error"; 

const Body = () => {
  const appRouter = createBrowserRouter([
    { 
      path: "/", 
      element: <Layout />, 
      errorElement: <Error />, 
      children: [
        { index: true, element: <Home /> },
        { path: "/login", element: <Login /> },
      ]
    }
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;
