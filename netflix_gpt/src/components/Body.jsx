import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./SignUp";

const Body = () => {
  const AppRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
  ]);

  return (
    <div className="text-3xl bg-black text-white">
      <RouterProvider router={AppRouter}>
        <Login />
        <Browse />
        <SignUp />
      </RouterProvider>
    </div>
  );
};

export default Body;
