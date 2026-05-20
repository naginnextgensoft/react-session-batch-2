import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PublicLayout from '../layouts/PublicLayout'
import PrivateLayout from '../layouts/PrivateLayout'
import PrivateRoute from './PrivateRoute'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import DashboardPage from '../pages/DashboardPage'
import ProductsPage from '../pages/ProductsPage'
import ProductDetailPage from '../pages/ProductDetailPage'
import NotFoundPage from '../pages/NotFoundPage'

//
// Route tree:
//
//  /                   → PublicLayout  → <Outlet /> renders HomePage
//  /login              → PublicLayout  → <Outlet /> renders LoginPage
//
//  /dashboard          → PrivateRoute checks auth → <Outlet /> →
//                        PrivateLayout  → <Outlet /> renders DashboardPage
//  /products           → PrivateRoute  → PrivateLayout → ProductsPage
//  /products/:id       → PrivateRoute  → PrivateLayout → ProductDetailPage
//
//  *                   → NotFoundPage (no layout)
//

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public layout wraps public pages */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>

        {/* PrivateRoute checks auth first, then PrivateLayout wraps protected pages */}
        <Route element={<PrivateRoute />}>
          <Route element={<PrivateLayout />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<ProductDetailPage />} />
          </Route>
        </Route>

        {/* 404 — no layout */}
        <Route path="*" element={<NotFoundPage />} />

      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
