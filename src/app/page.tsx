import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 py-12 gap-8 bg-[#27384c] text-white font-sans">
      {/* Contenedor superior */}
      <div className="flex items-center gap-4 mb-8">
        {/* Logo e Información */}
        <Image src="/logo.png" alt="Logo" width={50} height={50} />
        <div className="flex flex-col">
          <h1 className="text-3xl sm:text-5xl font-bold text-white">Roanger Ochoa</h1>
          <p className="text-lg sm:text-xl text-gray-300">Arquitecto de Soluciones Tecnológicas</p>
        </div>
      </div>

      {/* Botones sociales */}
      <div className="flex gap-8 mt-8">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/roangerochoa"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#8B0000] hover:bg-[#AA1616] text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300 ease-in-out"
        >
          LinkedIn
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/526243204400"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#8B0000] hover:bg-[#AA1616] text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300 ease-in-out"
        >
          Contáctame
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/roanger"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#8B0000] hover:bg-[#AA1616] text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300 ease-in-out"
        >
          GitHub
        </a>
      </div>

      {/* Contenido central */}
      <div className="flex sm:flex-row flex-col mt-12 gap-8">
        {/* Lado izquierdo: miniatura CV */}
        <div className="flex justify-center items-center">
          <Image
            src="/cv-thumbnail.jpg" // Esta imagen puedes cambiarla por tu propia miniatura
            alt="CV Miniatura"
            width={150}
            height={200}
          />
        </div>

        {/* Lado derecho: Reseña */}
        <div className="text-center sm:text-left text-gray-300 max-w-lg">
          <p className="text-lg sm:text-xl">
            Soy un apasionado de la tecnología con enfoque en soluciones DevOps. A lo largo de los años he trabajado con diversas
            herramientas y tecnologías que me han permitido ayudar a pequeñas y medianas empresas a implementar soluciones
            robustas y escalables. Siempre en búsqueda de la vanguardia tecnológica, me esfuerzo por seguir aprendiendo y
            mejorando continuamente.
          </p>
        </div>
      </div>
    </main>
  );
}
