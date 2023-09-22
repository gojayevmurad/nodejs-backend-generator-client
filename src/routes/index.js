import AuthLayout from "../layouts/AuthLayout";
import CreatorLayout from "../layouts/CreatorLayout";
import MainLayout from "../layouts/MainLayout";
import MyProjects from "../pages/MyProjects";
import ForgotPassword from "../pages/ForgotPassword";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ResetPassword from "../pages/ResetPassword";
import PrivateRoute from "./PrivateRoute";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
    ],
  },
  {
    path: "creator",
    auth: true,
    element: <CreatorLayout />,
    children: [
      {
        index: true,
        element: <MyProjects />,
      },
    ],
  },
];

const authMap = (routes) => {
  return routes.map((route) => {
    if (route?.auth) {
      route.element = <PrivateRoute>{route.element}</PrivateRoute>;
    }

    if (route?.children) {
      route.children = authMap(route.children);
    }

    return route;
  });
};

export default authMap(routes);
