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
import NewProject from "../pages/NewProject";
import Templates from "../pages/Templates";
import GenerateRoute from "../pages/GenerateRoute";
import AuthenticationRoute from "../pages/AuthenticationRoute";
import OverviewProject from "../pages/OverviewProject";
import MyProfile from "../pages/MyProfile";
import Settings from "../pages/Settings";
import Pricing from "../pages/Pricing";
import Contact from "../pages/Contact";
import Chat from "../pages/Chat";

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
        path: "project/my-projects",
        element: <MyProjects />,
      },
      {
        path: "project/new-project",
        element: <NewProject />,
      },
      {
        path: "project/templates",
        element: <Templates />,
      },
      // creator
      {
        path: "generate-route",
        element: <GenerateRoute />,
      },
      {
        path: "authentication-route",
        element: <AuthenticationRoute />,
      },
      {
        path: "overview-project",
        element: <OverviewProject />,
      },
      {
        path: "account/my-profile",
        element: <MyProfile />,
      },
      {
        path: "account/settings",
        element: <Settings />,
      },
      {
        path: "account/pricing",
        element: <Pricing />,
      },
      {
        path: "support/contact",
        element: <Contact />,
      },
      {
        path: "support/chat",
        element: <Chat />,
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
