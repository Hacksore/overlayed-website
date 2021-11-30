import React, { useEffect } from "react";
import { navigate } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

import "./index.css";

const AuthCallbackPage = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    fetch("https://auth.overlayed.dev/token", {
      method: "POST",
      body: JSON.stringify({
        code: params.get("code"),
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.access_token) {
          localStorage.setItem("auth", JSON.stringify(res));
          navigate("/success");
        }
      });
  }, []);

  return (
    <Layout>
      <Seo title="Overlayed" />
      <h1>Authenticating with Discord...</h1>
    </Layout>
  );
};

export default AuthCallbackPage;
