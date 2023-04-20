import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from '../components/layout'
import Dashboard from '../pages/dashboard';
import Users from '../pages/users';
import Games from '../pages/games';
import { ErrorPage } from '../components/error-container/error';

export const layoutRoutes = [
  { path: "/", element: <Navigate to="/users" replace /> },
  // { path: "/dashboard", element: <Dashboard /> },
  { path: "/users", element: <Users /> },
  { path: "/games", element: <Games /> },
]
const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {
          layoutRoutes.map(route => {
            const { path, element } = route
            return <Route key={path} path={path} element={element} />
          })
        }
      </Route>
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  )
}

export default AppRoutes
