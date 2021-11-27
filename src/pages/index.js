import React, { useEffect, useState } from "react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";

import "./index.css";

const IndexPage = () => {
  const [relaseData, setReleaseData] = useState(null);
  useEffect(() => {
    fetch("https://api.github.com/repos/Hacksore/overlayed/releases/latest")
      .then(res => res.json())
      .then(res => setReleaseData(res));
  }, []);

  const downloads =
    relaseData?.assets.map(item => {
      if (item.browser_download_url.includes("mac")) {
        return { platform: "Mac", url: item.browser_download_url };
      }
      if (item.browser_download_url.includes("win")) {
        return { platform: "Windows", url: item.browser_download_url };
      }
      if (item.browser_download_url.includes("linux")) {
        return { platform: "Linux", url: item.browser_download_url };
      }

      return {};
    }) || [];

  return (
    <Layout>
      <Seo title="Overlayed" />
      <h1>Overlayed</h1>
      <p>
        This is an{" "}
        <a href="https://github.com/Hacksore/overlayed">open source</a> discord
        overlay built with electron and react. With overlayed you can track who
        is speaking in your voice channel without having to open discord.
      </p>
      <p>
        Grab the latest version for your platform below and if you find any bugs
        please{" "}
        <a href="https://github.com/Hacksore/overlayed/issues" target="_blank">
          raise an issue
        </a>
        .
      </p>

      <div style={{ display: "flex" }}>
        {downloads.map(item => (
          <a href={item?.url} className="button">
            {item?.platform}
          </a>
        ))}
      </div>
      <a href={relaseData?.html_url} target="_blank">
        <h4 style={{ marginTop: 20 }}>Latest Version {relaseData?.name}</h4>
      </a>

      <StaticImage
        src="../images/screenshot-1.png"
        width={860}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A screenshot of overlayed"
      />
    </Layout>
  );
};

export default IndexPage;
