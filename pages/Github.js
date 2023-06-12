import Layout from "@/components/Layout";
import React from "react";
import Error from "./_error";
import "./styles.css";

const Github = ({ user, statusCode }) => {
  if (statusCode) {
    return <Error statusCode={statusCode} />;
  }
  //console.log(props);
  return (
    <Layout footer={true}>
      <div className="  w-90 h-100   m-4 p-2 bg-indigo-custom-b  border-primary">
        <div className="row ">
          <div className="col-md-4 offset-md-4 ">
            <div className="card car-body text-center ">
              <h1>{user.name}</h1>
              <img src={user.avatar_url} alt="" />
              <p>{user.bio}</p>

              <a
                href={user.html_url}
                target="_blanc"
                className="btn btn-outline-secondary"
              >
                Ir a Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  const res = await fetch("https://api.github.com/users/Brianbrowncoopman");
  const data = await res.json();

  const statusCode = res.status > 200 ? res.status : false;

  console.log(data);
  return {
    props: {
      user: data,
      statusCode,
    },
  };
}

export default Github;
