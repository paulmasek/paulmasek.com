import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import getAbsoluteUrl from '../utils/get-absolute-url';
import getFixedGraphQlImage from '../utils/get-fixed-graphql-image';

function getSocialImage(imageObj, defaultImageObj) {
  const imageSrc = getFixedGraphQlImage(imageObj);
  const defaultImageSrc = getFixedGraphQlImage(defaultImageObj);

  if (imageSrc) {
    return imageSrc;
  }

  if (defaultImageSrc) {
    return defaultImageSrc;
  }

  return null;
}

function Seo({ lang, meta, description, title, ogImage, twitterImage }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        globalJson {
          metaName
          metaDescription
          ogDescription
          ogImage {
            childImageSharp {
              resize(width: 1200, height: 630) {
                src
              }
            }
          }
          twitterHandle
          twitterImage {
            childImageSharp {
              resize(width: 1000, height: 1000) {
                src
              }
            }
          }
        }
      }
    `
  );

  const metaDescription =
    description && description.length > 0
      ? description
      : data.globalJson.metaDescription;

  const openGraphImageSrc = getAbsoluteUrl(
    getSocialImage(ogImage, data.globalJson.ogImage)
  );
  const twitterImageSrc = getAbsoluteUrl(
    getSocialImage(twitterImage, data.globalJson.twitterImage)
  );

  const processedTitle = title
    ? `${title} | ${data.globalJson.metaName}`
    : data.site.siteMetadata.title;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      defaultTitle={data.site.siteMetadata.title}
      title={processedTitle}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          name: 'og:locale',
          content: 'en_gb',
        },
        {
          name: 'og:site_name',
          content: data.globalJson.metaName,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:title',
          content: processedTitle,
        },
        {
          property: 'og:description',
          content: data.globalJson.ogDescription,
        },
        {
          property: 'og:image',
          content: openGraphImageSrc,
        },
        {
          property: 'og:image:width',
          content: '1200',
        },
        {
          property: 'og:image:height',
          content: '630',
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:site',
          content: data.globalJson.twitterHandle,
        },
        {
          name: 'twitter:title',
          content: processedTitle,
        },
        {
          name: 'twitter:creator',
          content: data.globalJson.twitterHandle,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
        {
          name: 'twitter:image',
          content: twitterImageSrc,
        },
      ].concat(meta)}
    />
  );
}

Seo.propTypes = {
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      content: PropTypes.string,
    })
  ),
  description: PropTypes.string,
  title: PropTypes.string,
  ogImage: PropTypes.shape({}),
  twitterImage: PropTypes.shape({}),
};

Seo.defaultProps = {
  lang: 'en-GB',
  meta: [],
  description: '',
  title: '',
  ogImage: null,
  twitterImage: null,
};

export default Seo;
