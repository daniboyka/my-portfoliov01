import foto from "./utils/foto/foto.jpeg";
import fondo01 from "./utils/tapas/tapa.jpg";
import fondo02 from "./utils/tapas/tapa02.png";
import fondo03 from "./utils/tapas/tapa03.png";

import "./styles.css";

function App() {
  return (
    <div className="bg-gradient-to-r from-customColor1 to-customColor2 min-h-screen flex flex-col items-center justify-center">
      <section className="max-w-3xl bg-white p-6 rounded shadow-lg">
        <img
          src={foto}
          alt="Tu Foto"
          className="w-40 h-48 rounded-full mx-auto"
        />
        <h1 className="text-3xl font-bold text-center mt-4 text-customText1">
          Portafolio de Daniel
        </h1>
      </section>

      <section className="max-w-3xl bg-white p-6 mt-4 rounded shadow-lg">
        <h2 className="text-2xl font-bold text-customText2">Acerca de mí</h2>
        <p className="mt-2 text-gray-700">
        ¡Hola! Soy Daniel, un argentino de 33 años que ingresó al mundo de la programación hace aproximadamente 1 año. 
        Mi carrera profesional ha sido diversa, incluyendo trabajos previos como mensajero y operario en una arrocera, actualmente me encuentro 
        trabajando en le rubro metalurgico, donde he trabajado durante 8 años. Esta experiencia me ha dotado de habilidades para 
        resolver problemas cotidianos del dia a dia, adaptarme a nuevos métodos de trabajo y trabajar eficazmente en equipo. A mediados de 2022, 
        mi curiosidad me llevó a la programación, donde he aprendido HTML, CSS, JavaScript, React y Tailwind CSS por cuenta propia. 
        Actualmente, estoy explorando Node.js, Express y SQL con Sequelize. Mi compromiso con el aprendizaje y la creación de proyectos 
        significativos me motiva a seguir creciendo. ¡Espero con ansias contribuir con soluciones innovadoras en el mundo de la tecnología!
        </p>
      </section>

      <section className="max-w-3xl bg-white p-6 mt-4 rounded shadow-lg">
        <h2 className="text-2xl font-bold text-customText3">
          Mis Proyectos Destacados
        </h2>
        <ul className="list-disc list-outside mt-2">
          <li className="mb-4">
            <h3 className="text-lg font-semibold text-customText1">
              Proyecto 1: E-Commerce Simple de Practica
            </h3>
            <p className="text-gray-700">
              Se uso React con los hooks Usestate, Useeffect, Usecontext
            </p>
            <a
              href="https://tiendabasica87.netlify.app/"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Proyecto
            </a>
            <a
              href="https://github.com/daniboyka/curso-mini-ecommers"
              className="text-blue-500 hover:underline ml-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Código en GitHub
            </a>
            <div className="mt-4">
              <img src={fondo01} alt="Proyecto 1" className="w-full h-auto" />
            </div>
          </li>
          <br></br>
          <br></br>
          <br></br>
          <li className="mb-4">
            <h3 className="text-lg font-semibold text-customText1">
              Proyecto 2: Single Page Application
            </h3>
            <p className="text-gray-700">
              Se uso React, se practico CSS:Tailwind y Responsive
            </p>
            <a
              href="https://autocentro2.netlify.app/"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Proyecto
            </a>
            <a
              href="https://github.com/daniboyka/paguina-bateria"
              className="text-blue-500 hover:underline ml-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Código en GitHub
            </a>
            <div className="mt-4">
              <img src={fondo02} alt="Proyecto 1" className="w-full h-auto" />
            </div>
          </li>
          <br></br>
          <br></br>
          <br></br>
          <li className="mb-4">
            <h3 className="text-lg font-semibold text-customText1">
              Proyecto 3: Buscador de Pelicula
            </h3>
            <p className="text-gray-700">
              Se uso React, llamado a API Usestate 
            </p>
            <a
              href="https://buscador-pelis-react-practica.netlify.app/"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Proyecto
            </a>
            <a
              href="https://github.com/daniboyka/curso-buscador-pelis-react"
              className="text-blue-500 hover:underline ml-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Código en GitHub
            </a>
            <div className="mt-4">
              <img src={fondo03} alt="Proyecto 1" className="w-full h-auto" />
            </div>
          </li>

        </ul>
      </section>

      <section className="max-w-3xl bg-white p-6 mt-4 rounded shadow-lg">
        <h2 className="text-2xl font-bold text-customText4">
          ¡Vamos a Conectar!
        </h2>
        <p className="mt-2 text-gray-700">
          Si estás interesado en conectarte conmigo, aprender más sobre mis
          proyectos o simplemente charlar sobre programación, no dudes en
          contactarme en [tu dirección de correo electrónico] o a través de mi
          perfil de{" "}
          <a
            href="https://www.linkedin.com/in/daniel-corazza87/"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          o en mi{" "}
          <a
            href="https://github.com/daniboyka"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </p>
      </section>
    </div>
  );
}

export default App;
