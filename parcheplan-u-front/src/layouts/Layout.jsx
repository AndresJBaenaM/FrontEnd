import { Outlet, Link } from 'react-router-dom';;;

export default function Layout({ user }) {
  // usuario actual 
  const currentUser = user;;

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4 flex justify-between">
        <h1>ParchePlan U</h1>

        <nav className="flex gap-4">
          <Link to="/parches">Parches</Link>
          <Link to="/ranking">Ranking</Link>
        </nav>
      </header>

      <main className="flex-1 p-4">
        <Outlet />
      </main>
    </div>
  );;
}