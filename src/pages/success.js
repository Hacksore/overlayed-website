import React, { useEffect } from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";

import "./index.css";

const AuthSuccessPage = () => {

  useEffect(() => {
    const authData = localStorage.getItem("auth");

    // attempt to post to the overlayed client
    fetch("http://localhost:61200/auth", {
      method: "POST",
      body: authData,
      headers: {
        "Content-Type": "application/json"
      }
    });

  }, []);

  return (
    <Layout>
      <Seo title="Overlayed" />
      <h1>Auth worked, telling Overlayed</h1>
 
    </Layout>
  );
};

export default AuthSuccessPage;
