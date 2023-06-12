//const { default: Layout } = require("@/components/Layout");
import Layout from "@/components/Layout";
import Image from "next/image";
import { skills, experiences, proyects } from "../profile";
import Link from "next/link";
import "./styles.css";

console.log(skills, experiences);

const Index = () => (
  <Layout>
    <div className="  w-90 h-100%   m-4 p-2 bg-indigo-custom-b  border-primary">
      {/*header card*/}
      <header className="row ">
        <div className="col-md-12 ">
          <div className="card card-body bg-secondary text-light">
            <div className="row">
              <div className="col-md-3">
                <img src="/perfilp.jpg" alt="" className="img-fluid" />
              </div>
              <div className="col-md-9 p-2 bg-indigo-custom-e rounded">
                <h1>Brian Brown</h1>
                <h3>FullStack Developer</h3>
                <p className="text-center">
                  ¡Hola! Mi nombre es Brian Brown y tengo 40 años de edad. Nací
                  el 1 de marzo de 1983.{" "}
                </p>
                <p>
                  Cuento con más de 20 años de experiencia en la industria
                  hotelera y restaurantes, desempeñándome tanto como
                  administrador como chef. Durante mi carrera, he adquirido una
                  amplia experiencia en la gestión de operaciones, el liderazgo
                  de equipos y la creación de experiencias culinarias
                  excepcionales.
                </p>{" "}
                <p>
                  {" "}
                  Recientemente, decidí embarcarme en una nueva aventura y
                  expandir mis horizontes en el mundo de la tecnología. Completé
                  un bootcamp en el año 2022 en Larnu, donde obtuve mi título
                  como Full Stack Developer. Durante el bootcamp, adquirí
                  habilidades en diferentes tecnologías y frameworks, como HTML,
                  CSS, JavaScript, React, Node.js y bases de datos.
                </p>{" "}
                <p>
                  {" "}
                  Actualmente, me encuentro en la búsqueda de oportunidades
                  laborales en el campo de la tecnología de la información como
                  Junior Developer. Estoy emocionado por aplicar mis habilidades
                  recién adquiridas y mi pasión por la resolución de problemas
                  para contribuir al desarrollo de soluciones innovadoras.
                </p>
                <p>
                  {" "}
                  Soy una persona comprometida, autodidacta y apasionada por el
                  aprendizaje continuo. Me encanta enfrentar nuevos desafíos y
                  trabajar en equipo para lograr resultados sobresalientes. Si
                  estás buscando a alguien con una entusiasmo por el desarrollo
                  web, ¡estaré encantado de ser parte de tu equipo!
                </p>{" "}
                <p>
                  No dudes en ponerse en contacto conmigo a través de
                  brianbrowncoopman@gmail.com o +56 9 51397667 para discutir
                  oportunidades de colaboración. ¡Espero tener la oportunidad de
                  trabajar juntos y contribuir al éxito de tu empresa!
                </p>
                <div className="column">
                  <Link
                    href="/cv.pdf"
                    passHref
                    className="btn btn-primary"
                    download
                  >
                    Descargar Archivo
                  </Link>

                  <Link href="/Contactame" className=" btn btn-outline-light">
                    Contactame
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* second section */}
      {/*skills */}
      <div className="row px-2 py-2">
        <div className="col-md-2">
          <div className="card bg-light">
            <div className="card-body bg-indigo-custom-e rounded">
              <h1>Skills</h1>
              <div className="row ">
                {skills.map(({ skill, percentage, image }, i) => (
                  <div
                    className=" card p-3 border-bottom bg-indigo-custom-f"
                    key={i}
                  >
                    <h5>{skill}</h5>
                    <Image
                      src={`/${image}`}
                      className="card-img"
                      width={100}
                      height={100}
                      alt="..."
                    />
                    <div className="progress">
                      <div
                        className="progress-bar bg-secondary"
                        role="progressbar"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/*   experiencias */}
        <div className="col-md-10 bg-indigo-custom-e p-2  rounded">
          <div className="card  bg-indigo-custom-f ">
            <div className="card-body text-center">
              <h1>Experiencia</h1>
              <br />
              <ul>
                {experiences.map(({ title, from, to, description }, index) => (
                  <li key={index}>
                    <h3>{title}</h3>
                    <h5>
                      {from}-{to}
                    </h5>
                    <p>{description}</p>
                  </li>
                ))}
              </ul>
              <div className="container  ">
                <div className="row col-md-12">
                  <div className=" m-2 p-2 ">
                    <div className="card bg-indigo-custom-e">
                      <Link
                        href="/Experiencia"
                        className="btn btn-outline-light"
                      >
                        Experiencias
                      </Link>
                      <Link
                        href="/Contactame"
                        className="btn btn-outline-light"
                      >
                        Contactame
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*portfolio*/}
    <div className="row">
      <div className="col-md-12">
        <div className="card card-body bg-dark">
          <div className="row container-fluid">
            <div className="col-md-12">
              <h1 className="text-center text-light">Proyectos</h1>
            </div>

            {proyects.map(({ name, description, page, image }, i) => (
              <div className="col-md-4 p-2" key={i}>
                <div className="card h-100 ">
                  <div className="overflow">
                    <img src={`/${image}`} className="card-img-top" alt="..." />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <div className="row m-2">
                      <Link href="/Proyectos" className=" btn btn-outline-dark">
                        Conoce mas
                      </Link>
                      <Link href={page} className="btn btn-outline-dark">
                        Ir a la app
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link href="/Proyectos" className="btn btn-outline-light">
              Mas Proyectos
            </Link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Index;
