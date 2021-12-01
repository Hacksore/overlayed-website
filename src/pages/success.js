import React, { useEffect, useState } from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";

import "./index.css";

const AuthSuccessPage = () => {
  const [tokenAck, setTokenAck] = useState(false);

  useEffect(() => {
    const authData = localStorage.getItem("auth");

    // attempt to post to the overlayed client
    fetch("http://localhost:61200/auth", {
      method: "POST",
      body: authData,
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json())
    .then(res => {
      if (!res.error) {
        setTokenAck(true);

        // we dont want to keep the token
        localStorage.removeItem("auth");
      }
    });

  }, []);

  return (
    <Layout>
      <Seo title="Overlayed" />
      <h1>Auth succesful, telling Overlayed</h1>
    

      {tokenAck && (
        <h3>You can close this page now</h3>
      )}

    </Layout>
  );
};

export default AuthSuccessPage;
