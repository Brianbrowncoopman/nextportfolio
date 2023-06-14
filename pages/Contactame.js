import Layout from "@/components/Layout";
import React from "react";
import "./styles.css";
import Link from "next/link";

const Contactame = () => {
  return (
    <Layout>
      <div className=" w-90 h-95   m-3 p-4 bg-indigo-custom-b border border-1 rounded">
        <h1>Contactame</h1>
        <form
          action=" 948ae6566c14e93ca14b83b0a6dcb62b"
          method="POST"
          className="row g-3 "
        >
          <div className="col-md-6">
            <label for="firstName" className=" h4 form-label  ">
              Nombre / First Name
            </label>
            <input
              className="  form-control border border-primary bg-indigo-custom-c"
              id="firstName"
              placeholder="Nombre / First Name"
              required
              name="nombre"
            />
          </div>
          <div className="col-md-6">
            <label for="secondName" className=" h4 form-label ">
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
            <label for="emailInfo" className=" h4 form-label text-center">
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
            <label for="phoneNumber" className=" h4 form-label">
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
            <label for="comments" className=" h4 form-label">
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
            <button
              type="submit"
              className="btn btn-secondary bg-indigo-custom-a"
            >
              Submit
            </button>
          </div>
          <div className="col-md-12 text-center">
            <Link
              href="/cv.pdf"
              passHref
              className="btn btn-secondary bg-indigo-custom-a"
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
