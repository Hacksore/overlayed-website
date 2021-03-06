/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function Seo({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            longDescription
            twitterUsername
            siteUrl
            image
          }
        }
      }
    `
  );

  const { siteUrl, longDescription, image, twitterUsername, description: defaultDescription } = site.siteMetadata;
  const metaDescription = description || defaultDescription;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={[
        {
          name: `description`,
          content: longDescription,
        },
        {
          property: `og:title`,
          content: `${title} - ${metaDescription}`,
        },
        {
          property: `og:description`,
          content: longDescription,
        },
        {
          property: `og:image`,
          content: `${siteUrl}/${image}`,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: twitterUsername,
        },
        {
          name: `twitter:title`,
          content: `${title} - ${metaDescription}`,
        },
        {
          property: `twitter:image`,
          content: `${siteUrl}/${image}`,
        },
        {
          name: `twitter:description`,
          content: longDescription,
        },
      ].concat(meta)}
    />
  );
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default Seo;
