import { Navigate, Outlet } from 'react-router-dom'

// Redirects to /login if not authenticated, otherwise renders the matched child via <Outlet />
function PrivateRoute() {

  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />
}

export default PrivateRoute
