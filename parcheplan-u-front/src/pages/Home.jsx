import Navbar from '../components/Navbar';
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 p-8">

      <section className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold text-slate-800 mb-4">
          Bienvenido a ParchePlan U
        </h1>

        <p className="text-lg text-gray-600 mb-10">
          Descubre y organiza planes universitarios.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          <article className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-indigo-600 mb-2">
              Deportes
            </h2>

            <p className="text-gray-600">
              Encuentra partidos y actividades deportivas.
            </p>
          </article>

          <article className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-indigo-600 mb-2">
              Videojuegos
            </h2>

            <p className="text-gray-600">
              Conecta con gamers de la universidad.
            </p>
          </article>

          <article className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-indigo-600 mb-2">
              Viajes
            </h2>

            <p className="text-gray-600">
              Organiza salidas y experiencias.
            </p>
          </article>

        </div>

      </section>

    </main>
  );
}