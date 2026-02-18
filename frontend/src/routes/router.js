import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import ProfilePage from "../pages/ProfilePage";
import ProtectedRoute from "./ProtectedRoute";
import AdminRoute from "./AdminRoute";

import AdminLayout from "../layouts/AdminLayout";
import AdminProductsPage from "../pages/admin/AdminProductsPage/AdminProductsPage";
import AdminFeedbackPage from "../pages/admin/AdminFeedbackPage/AdminFeedbackPage";
import ProductPage from "../pages/ProductPage/ProductPage";
import Catalog from "../pages/Catalog";
import CartPage from "../pages/CartPage/CartPage";

import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/catalog", element: <Catalog /> },
  { path: "/card/:id", element: <ProductPage /> },
  { path: "/cart", element: <CartPage /> },

  {
    element: <ProtectedRoute />,
    children: [{ path: "/profile", element: <ProfilePage /> }],
  },

  {
    element: <AdminRoute />,
    children: [
      {
        path: "/admin",
        element: <AdminLayout />,
        children: [
          { path: "products", element: <AdminProductsPage /> },
          // пока что просто пустые заглушки
          { path: "discounts", element: <div>Знижки</div> },
          { path: "ingredients", element: <div>Склад продукту</div> },
          { path: "popular", element: <div>Карти для популярних</div> },
          { path: "feedbacks", element: <AdminFeedbackPage /> },
        ],
      },
    ],
  },

  { path: "*", element: <NotFound /> },
]);

export default router;
