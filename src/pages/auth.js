import React, { useEffect } from "react";
import { navigate } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

import "./index.css";

const API_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://auth.overlayed.dev"
    : "http://localhost:3000";

const AuthCallbackPage = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    fetch(`${API_BASE_URL}/token`, {
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
