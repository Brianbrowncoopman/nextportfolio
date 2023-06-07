import Layout from "@/components/Layout";
import Link from "next/link";
import React from "react";

const custom404 = () => (
  <Layout>
    <div className="text-center">
      <h1>404</h1>
      <p>
        esta pagina no existe. Porfavor regresa a <Link href="/">Home</Link>
      </p>
    </div>
  </Layout>
);

export default custom404;
