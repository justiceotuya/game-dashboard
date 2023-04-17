import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useRoutes
} from "react-router-dom";
import Layout from '../components/layout'
import Dashboard from '../pages/dashboard';
import Users from '../pages/users';
import Games from '../pages/games';
import GamesPlay from '../pages/game-play';
import { ErrorPage } from '../pages/error';
import EditUser from '../pages/users/edit-user';

export const layoutRoutes = [
  { path: "/", element: <Navigate to="/dashboard" replace /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/users", element: <Users /> },
  { path: "/users/:id/edit", element: <EditUser /> },
  { path: "/games", element: <Games /> },
  { path: "/game-play", element: <GamesPlay /> },
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
