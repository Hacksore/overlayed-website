import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = () => (
  <Layout>
    <Seo title="Overlayed" />
    <h1>Simple Discord Overlay</h1>
    <p>
      With overlayed you can track who is speaking in your voice channel without
      having to open discord.
    </p>
    <p>
      You can get the latest version for your platform below - TODO
    </p>

    <h4>Overlayed in action</h4>
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

export default IndexPage;
