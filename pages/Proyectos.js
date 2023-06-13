import Layout from "@/components/Layout";
import React from "react";
import "./styles.css";

const Proyectos = () => {
  return (
    <Layout>
      <div className=" w-90 h-95   m-3 p-4 bg-indigo-custom-b  border border-1 rounded">
        <h2>Proyectos</h2>
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="d-flex flex-column align-items-center">
                <img src="css.png" className="carousel-image" alt="..." />
                <p className="carousel-text">Texto debajo de la imagen 1</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex flex-column align-items-center">
                <img src="git.png" className="carousel-image" alt="..." />
                <p className="carousel-text">Texto debajo de la imagen 2</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex flex-column align-items-center">
                <img src="js.png" className="carousel-image" alt="..." />
                <p className="carousel-text">Texto debajo de la imagen 3</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex flex-column align-items-center">
                <img src="mui.png" className="carousel-image" alt="..." />
                <p className="carousel-text">Texto debajo de la imagen 4</p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Proyectos;
