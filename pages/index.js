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
              <div className="col-md-4">
                <img src="/acordeon.jpg" alt="" className="img-fluid" />
              </div>
              <div className="col-md-8">
                <h1>Brian Brown</h1>
                <h3>FullStack Developer</h3>
                <p className="text-start">
                  blablaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccccccc
                  blablaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                  blablaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                  blablaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                  blablaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                  blablaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                  blablaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                  blablaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                  blablaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
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
      <div className="row py-3">
        <div className="col-md-2">
          <div className="card bg-light">
            <div className="card-body ">
              <h1>Skills</h1>
              <div className="row">
                {skills.map(({ skill, percentage, image }, i) => (
                  <div className=" card p-3 border-bottom" key={i}>
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
        <div className="col-md-10">
          <div className="card bg-light">
            <div className="card-body">
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
              <div className="card bg-indigo-custom-b">
                <Link
                  href="/Experiencia"
                  className="text-decoration-none text-"
                >
                  Experiencias
                </Link>
                <Link href="/Contactame" className="text-decoration-none">
                  Contactame
                </Link>
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
