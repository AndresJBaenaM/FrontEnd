import { BrowserRouter, Routes, Route } from 'react-router-dom';;
import Layout from './layouts/Layout';;
import Login from './pages/Login';;;
import Parches from './pages/Parches';;;
import ParcheDetail from './pages/ParcheDetails';;;
import PlanDetail from './pages/PlanDetail';;;
import Ranking from './pages/Ranking';;;

export default function App() {
  // usuario mock 
  const user = { name: 'Test User' };;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout user={user} />}>
          <Route index element={<Login />} />
          <Route path="parches" element={<Parches />} />
          <Route path="parches/:id" element={<ParcheDetail />} />
          <Route path="planes/:id" element={<PlanDetail />} />
          <Route path="ranking" element={<Ranking />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );;
}