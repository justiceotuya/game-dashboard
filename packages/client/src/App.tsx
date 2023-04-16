import { useState } from 'react'
import {
 BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useRoutes
} from "react-router-dom";
import Layout from './components/layout'
import Dashboard from './pages/dashboard';
import Users from './pages/users';
import Games from './pages/games';
import GamesPlay from './pages/game-play';
import { ErrorPage } from './pages/error';
import CreateUser from './pages/users/create-user';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
          <Route  element={<Layout />}>
          <Route  path="/" element={<Navigate to="/dashboard" replace />}  />
          <Route  path="/dashboard" element={<Dashboard />}  />
          <Route  path="/users" element={<Users />}  />
          <Route  path="/users/new" element={<CreateUser />}  />
          <Route  path="/games" element={<Games />}  />
          <Route path="/game-play" element={<GamesPlay />} />
          </Route>
          <Route path ='*' element={<ErrorPage />} />
        </Routes>
    </div>
  )
}

export default App
