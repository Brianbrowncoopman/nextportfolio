import React, { useEffect } from "react";
import { Navbar } from "react-bootstrap";
import NavbarC from "./NavbarC";
import Footer from "./Footer";
import Head from "next/head";
import { useRouter } from "next/router";
import NProgress from "nprogress";

const Layout = ({ children, footer = true }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      console.log(url);
      NProgress.start();
    };

    router.events.on("routeChangeStart", handleRouteChange);

    router.events.on("routeChangeComplete", () => NProgress.done());

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <div className="d-flex flex-column min-vh-100">
      <NavbarC />

      <main className="  flex-grow-1 text-center   p-2 ">{children}</main>

      {footer && (
        <footer className="bg-dark text-light text-center">
          <div className="container p-4">
            <Footer />
          </div>
        </footer>
      )}
    </div>
  );
};

export default Layout;
