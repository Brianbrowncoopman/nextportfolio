import Layout from "@/components/Layout";
import React from "react";
import "./styles.css";

const Certificados = () => {
  return (
    <Layout>
      <div className=" w-90 h-95   m-3 p-4 bg-indigo-custom-b  border border-1 rounded">
        <h2>Certificados</h2>
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="d-flex flex-column align-items-center">
                <img
                  src="larnu.png"
                  className="carousel-image border border-3 rounded img-fluid"
                  alt="..."
                />
                <p className="carousel-text">Larnu || Full Stack</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex flex-column align-items-center">
                <img
                  src="jp1.png"
                  className="carousel-image border border-3 rounded img-fluid"
                  alt="..."
                />
                <p className="carousel-text">JProg || Js 1</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex flex-column align-items-center">
                <img
                  src="jp2.png"
                  className="carousel-image border border-3 rounded img-fluid"
                  alt="..."
                />
                <p className="carousel-text">JProg || Js 2</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex flex-column align-items-center">
                <img
                  src="jp3.png"
                  className="carousel-image border border-3 rounded img-fluid"
                  alt="..."
                />
                <p className="carousel-text">JProg || Phaser.js</p>
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

export default Certificados;
