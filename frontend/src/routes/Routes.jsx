import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import EquipmentPage from "../pages/EquipmentPage";
import HomePage from "../pages/HomePage";
import ContactUsPage from "../pages/ContactUsPage";

import Leaderboard from "../pages/LeaderboardPage";
import BookingPage from "../pages/BookingPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import PrivateRoute from "../components/PrivateRoute";
//import PlaceOrderPage from '../pages/PlaceReservationPage';
//import ReservationDetailsPage from '../pages/ReservationDetailsPage';
//import ProfilePage from '../pages/ProfilePage';
import AdminRoute from "../components/AdminRoute";
import BookingListsPage from "../pages/admin/ReservationListPage";
import EquipmenListPage from "../pages/admin/EquipmentListPage";
import UserListPage from "../pages/admin/UserListPage";
import UserLogsPage from "../pages/admin/UserLogsPage";

import EquipmentFormPage from "../pages/admin/EquipmentFormPage";
import UpdateUserFormPage from "../pages/admin/UpdateUserFormPage";
import NotFoundPage from "../pages/NotFoundPage";
import AdminDashboard from "../AdminDashboard";

import Dashboard from "../pages/admin/Dashboard";
import AdminProfilePage from "../pages/admin/AdminProfilePage";
import AdminListPage from "../pages/admin/AdminListPage";
import ResetPasswordRequestPage from "../pages/ResetPasswordRequestPage";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import GalleryPage from "../pages/GalleryPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/Equipment:id",
        element: <EquipmentPage />,
      },
      {
        path: "/contact",
        element: <ContactUsPage />,
      },
      {
        path: "/gallery",
        element: <GalleryPage />,
      },
      {
        path: "/leaderboard",
        element: <Leaderboard />,
      },
      {
        path: "/reset-password",
        element: <ResetPasswordRequestPage />,
      },
      {
        path: "/reset-password/:id/:token",
        element: <ResetPasswordPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "",
        element: <PrivateRoute />,
        children: [
          // {
          //   path: '/place-order',
          //   element: <PlaceOrderPage />
          // },
          // {
          //   path: '/reservation/:id',
          //   element: <ReservationDetailsPage />
          // },
          // {
          //   path: '/profile',
          //   element: <ProfilePage />
          // },
          {
            path: "/booking",
            element: <BookingPage />,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "",
    element: <AdminDashboard />,
    children: [
      {
        path: "",
        element: <AdminRoute />,
        children: [
          {
            path: "/admin/dashboard",
            element: <Dashboard />,
          },

          {
            path: "/admin/equipment-list",
            element: <EquipmenListPage />,
          },
          {
            path: "/admin/reservation-list",
            element: <BookingListsPage />,
          },
          {
            path: "/admin/user-list",
            element: <UserListPage />,
          },
          {
            path: "/admin/user-log",
            element: <UserLogsPage />,
          },
          {
            path: "/admin/equipment/create",
            element: <EquipmentFormPage />,
          },
          {
            path: "/admin/profile",
            element: <AdminProfilePage />,
          },
          {
            path: "/admin/create",
            element: <AdminProfilePage />,
          },
          {
            path: "/admin/admin-list",
            element: <AdminListPage />,
          },
          // {
          //   path: '/admin/reservation/:id',
          //   element: <ReservationDetailsPage />
          // },
          {
            path: "/admin/user/update/:id",
            element: <UpdateUserFormPage />,
          },
          {
            path: "/admin/equipment/update/:id",
            element: <EquipmentFormPage />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
