import Layout from "@/components/Layout";
import React from "react";
import { knowledge } from "../profile";
import "./styles.css";

const Conocimientos = () => {
  return (
    <Layout>
      <div className="w-90 h-100 bg-indigo-custom-b">
        <h1>Conocimientos</h1>
        <div className="container">
          <div className="row">
            {knowledge.map(({ tecnology, image }, i) => (
              <div className="col-md-2 p-2 rounded-5" key={i}>
                <div className="card rounded-5 shadow-lg p-3 mb-1 bg-body-tertiary   h-100">
                  <div className="overflow">
                    <img src={`/${image}`} className="card-img-top" alt="..." />
                  </div>
                  <div className="card-body bg-indigo-custom rounded-5">
                    <h5 className="card-title mt-2">{tecnology}</h5>
                    {/*<p className="card-text">{description}</p>
                  <Link href="/Proyectos" className="btn btn-outline-dark">
                    Conoce más
                  </Link>*/}
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

export default Conocimientos;
