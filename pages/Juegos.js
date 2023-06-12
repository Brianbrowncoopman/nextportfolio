import Layout from "@/components/Layout";
import React from "react";
import { juegos } from "../profile";
import "./styles.css";
import Link from "next/link";

const Juegos = () => {
  return (
    <Layout>
      <div className=" w-90 h-100   m-4 p-2 bg-indigo-custom-b  border-primary">
        <h1>Juegos</h1>
        <div className="container">
          <div className="row">
            {juegos.map(({ gameName, gameImage, page, description }, i) => (
              <div className="col-md-2 p-2 rounded-5" key={i}>
                {/*card*/}
                <div className="card rounded-5 shadow-lg p-3 mb-2 bg-indigo-custom-d h-100 shadow p-3 mb-5 bg-body-indigo-custom-d rounded">
                  {/*botn*/}
                  <button type="button" className="btn btn-outline-info">
                    <Link
                      href={page}
                      className="text-decoration-none fw-bold text-reset"
                    >
                      {gameName}
                    </Link>
                  </button>
                  <br />
                  {/*imagen*/}
                  <div className="overflow">
                    <img
                      src={`/${gameImage}`}
                      className="card-img-top"
                      alt="..."
                    />
                  </div>
                  {/*descripcion*/}
                  <div className="card-body bg-indigo-custom rounded-5">
                    <p className="card-text">{description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Juegos;
