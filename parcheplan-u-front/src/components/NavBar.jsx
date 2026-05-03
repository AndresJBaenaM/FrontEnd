import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="bg-slate-900 text-white shadow-lg">
      
      <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
        
        <h1 className="text-2xl font-bold text-indigo-400">
          ParchePlan U
        </h1>

        <div className="flex gap-6">
          
          <Link
            to="/parches"
            className="hover:text-indigo-400 transition-all"
          >
            Parches
          </Link>

          <Link
            to="/ranking"
            className="hover:text-indigo-400 transition-all"
          >
            Ranking
          </Link>

        </div>

      </nav>

    </header>
  );
}