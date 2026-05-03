export default function App() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <section className="bg-white p-8 rounded shadow w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">
          ParchePlan U
        </h1>

        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Correo institucional"
            className="border p-2 rounded"
          />

          <input
            type="password"
            placeholder="Contraseña"
            className="border p-2 rounded"
          />

          <button className="bg-blue-500 text-white p-2 rounded">
            Ingresar
          </button>
        </form>
      </section>
    </main>
  );
}