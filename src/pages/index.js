import React, { useEffect, useState } from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import { WarningBanner } from "../components/warningBanner";

import "./index.css";

const IndexPage = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("/api/releases")
      .then(res => res.json())
      .then(res => setData(res));
  }, []);

  return (
    <Layout>
      <Seo title="Overlayed" />
      <h1>Overlayed</h1>
      <WarningBanner />
      <p>
        This is an{" "}
        <a href="https://github.com/Hacksore/overlayed" rel="noreferrer">open source</a> discord
        overlay built with electron and react. With overlayed you can track who
        is speaking in your voice channel without having to open discord.
      </p>

      <p>
        Since the{" "}
        <a
          href="https://discord.com/developers/docs/topics/rpc"
          target="_blank"
          rel="noreferrer"
        >
          Discord RPC API
        </a>{" "}
        is a private beta you need to request access to the overlayed
        application. Please see{" "}
        <a
          href="https://github.com/Hacksore/overlayed/issues/2"
          target="_blank"
          rel="noreferrer"
        >
          this issue on github
        </a>{" "}
        for more information on how to do that.
      </p>

      <p>
        Grab the latest version for your platform below and if you find any bugs
        please{" "}
        <a href="https://github.com/Hacksore/overlayed/issues" target="_blank" rel="noreferrer">
          raise an issue
        </a>
        .
      </p>

      {data && (
        <>
          <div style={{ display: "flex" }}>
            {data.downloads.map(item => (
              <a href={item?.url} className="button" target="_blank" rel="noreferrer">
                {item?.platform}
              </a>
            ))}
          </div>
          <a href={data.url} target="_blank" rel="noreferrer">
            <h4 style={{ marginTop: 20 }}>Latest Release {data.name}</h4>
          </a>
        </>
      )}

      <video style={{ width: "100% " }} controls loop autoPlay muted>
        <source src="/demo.mp4" type="video/mp4" />
      </video>
    </Layout>
  );
};

export default IndexPage;
