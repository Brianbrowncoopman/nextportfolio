import Layout from "@/components/Layout";
import React from "react";
import "./styles.css";
import Link from "next/link";

const Contactame = () => {
  return (
    <Layout>
      <div className=" w-90 h-100   m-4 p-2 bg-indigo-custom-b  border-primary">
        <h1>Contactame</h1>
        <form
          action="https://formsubmit.co/brianbrowncoopman@gmail.com"
          method="POST"
          className="row g-3"
        >
          <div className="col-md-6">
            <label for="firstName" className="form-label border ">
              Nombre / First Name
            </label>
            <input
              className="form-control border border-primary bg-indigo-custom-c"
              id="firstName"
              placeholder="Nombre / First Name"
              required
              name="nombre"
            />
          </div>
          <div className="col-md-6">
            <label for="secondName" className="form-label ">
              Apellido / Last Name
            </label>
            <input
              className="form-control border-primary bg-indigo-custom-c"
              id="secondName"
              placeholder="Apellido / Last Name"
              required
              name="apellido"
            />
          </div>
          <div className="col-md-8">
            <label for="emailInfo" className="form-label text-center">
              E-mail
            </label>
            <input
              type="email"
              className="form-control border-primary bg-indigo-custom-c"
              id="emailInfo"
              placeholder="usuario@user.com"
              required
              name="email"
            />
          </div>
          <div className="col-md-4">
            <label for="phoneNumber" className="form-label">
              Numero de telefono /Phone Number
            </label>
            <input
              type="number"
              className="form-control border-primary bg-indigo-custom-c"
              id="phoneNumber"
              placeholder="+56 -987-654-321"
              name="numero de telefono"
            />
          </div>
          <div className="col-md-12">
            <label for="comments" className="form-label">
              Comentarios, preguntas?
            </label>
            <textarea
              className="form-control border-primary bg-indigo-custom-c"
              id="comments"
              rows="3"
              required
              name="comentarios"
            />
          </div>
          <div className="col-md-12">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <div className="col-md-12 text-center">
            <Link
              href="/cv.pdf"
              passHref
              className="btn btn-secondary"
              download
            >
              Descargar Archivo
            </Link>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Contactame;
