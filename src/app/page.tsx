import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 py-12 gap-8 bg-gray-900 text-white font-sans">
      {/* Título principal */}
      <h1 className="text-5xl sm:text-7xl font-bold text-center text-teal-400">
        Roanger | Arquitecto de Soluciones
      </h1>

      {/* Subtítulo */}
      <p className="text-center text-lg sm:text-xl max-w-3xl text-gray-300 mt-4">
        Desarrollando soluciones tecnológicas de vanguardia con un enfoque DevOps y visión futurista.
      </p>

      {/* Botones principales */}
      <div className="flex flex-col sm:flex-row gap-6 mt-8">
        {/* Descargar CV */}
        <a
          href="/cv-roanger.pdf"
          download
          className="bg-teal-500 hover:bg-teal-600 text-black px-6 py-3 rounded-full text-lg font-semibold transition duration-300 ease-in-out"
        >
          Descargar CV
        </a>

        {/* Ir a DevXter */}
        <a
          href="https://devxter.vercel.app" // <- Cambia este link si es necesario
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-teal-500 text-teal-400 px-6 py-3 rounded-full text-lg font-semibold hover:bg-teal-500 hover:text-black transition duration-300 ease-in-out"
        >
          Visitar DevXter
        </a>
      </div>

      {/* Íconos de redes sociales */}
      <div className="flex gap-8 mt-12">
        {/* GitHub */}
        <a href="https://github.com/roanger" target="_blank" rel="noopener noreferrer">
          <Image src="/github.svg" alt="GitHub" width={40} height={40} />
        </a>
        {/* LinkedIn */}
        <a href="https://linkedin.com/in/roanger" target="_blank" rel="noopener noreferrer">
          <Image src="/linkedin.svg" alt="LinkedIn" width={40} height={40} />
        </a>
        {/* Agrega más redes sociales si lo deseas */}
      </div>
    </main>
  );
}
