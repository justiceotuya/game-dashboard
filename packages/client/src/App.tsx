import { useState } from 'react'
import {
 BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useRoutes
} from "react-router-dom";

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Layout from './components/layout'
import Dashboard from './pages/dashboard';
import Users from './pages/users';
import Games from './pages/games';
import GamesPlay from './pages/game-play';
import { ErrorPage } from './pages/error';
import CreateUser from './pages/users/create-user';

const queryClient = new QueryClient()

function App() {
  const [count, setCount] = useState(0)

  return (
    <QueryClientProvider client={queryClient}>
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
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
