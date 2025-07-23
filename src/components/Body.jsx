import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser, clearUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./../../firebase";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Home";
import Login from "./Login";
import Layout from "./Layout";
import Error from "./error";
import Browse from "./Browse";

const Body = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(setUser({ uid, displayName, email }));
        // ...
      } else {
        dispatch(clearUser());
      }
    });
  }, []);

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home /> },
        { path: "/login", element: <Login /> },
         { path: "/browse", element: <Browse /> },
      ],
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;
