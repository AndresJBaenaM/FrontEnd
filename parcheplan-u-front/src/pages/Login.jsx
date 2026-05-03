export default function Login() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-900 p-4">
      <section className="w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl p-8">
        
        <div className="flex flex-col items-center mb-6">
          <div className="w-16 h-16 rounded-full bg-indigo-500 flex items-center justify-center text-white text-2xl font-bold mb-4">
            P
          </div>

          <h1 className="text-4xl font-bold text-white">
            ParchePlan U
          </h1>

          <p className="text-gray-300 text-sm mt-2 text-center">
            Organiza tus planes universitarios fácilmente
          </p>
        </div>

        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Correo institucional"
            className="bg-white/20 border border-white/20 text-white placeholder:text-gray-300 p-3 rounded-xl outline-none focus:border-indigo-400"
          />

          <input
            type="password"
            placeholder="Contraseña"
            className="bg-white/20 border border-white/20 text-white placeholder:text-gray-300 p-3 rounded-xl outline-none focus:border-indigo-400"
          />

          <button className="bg-indigo-500 hover:bg-indigo-600 transition-all text-white font-semibold p-3 rounded-xl">
            Ingresar
          </button>
        </form>

        <p className="text-center text-gray-300 text-sm mt-6">
          ¿No tienes cuenta? Regístrate
        </p>
      </section>
    </main>
  );
}