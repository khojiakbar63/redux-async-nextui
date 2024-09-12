import { createBrowserRouter } from "react-router-dom";
import { Authorization, Public } from "../layouts";
import { Home, Posts, Profile, Followers, NotFound } from "../pages";

const router = [
  {
    path: "/",
    element: <Public />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/posts",
        element: <Posts />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/followers",
        element: <Followers />,
      },
      {
        path: "/*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Authorization />,
  },
];

export const AppRouter = createBrowserRouter(router);
