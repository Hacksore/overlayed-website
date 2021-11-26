import React, { useEffect, useState } from "react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = () => {
  const [relaseData, setReleaseData] = useState(null);
  useEffect(() => {
    fetch("https://api.github.com/repos/Hacksore/overlayed/releases/latest")
      .then(res => res.json())
      .then(res => setReleaseData(res));
  }, []);

  return (
    <Layout>
      <Seo title="Overlayed" />
      <h1>Overlayed</h1>
      <p>
        With overlayed you can track who is speaking in your voice channel
        without having to open discord.
      </p>
      <p>You can get the latest version for your platform below</p>

      {relaseData?.assets.map(item => (
        <div>
          <a href={item.browser_download_url}>{item.browser_download_url}</a>
        </div>
      ))}

      <StaticImage
        src="../images/screenshot-1.png"
        width={860}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A screenshot of overlayed"
        style={{ marginBottom: `1.45rem` }}
      />
    </Layout>
  );
};

export default IndexPage;
