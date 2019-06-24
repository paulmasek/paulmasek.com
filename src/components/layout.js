/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import useUpdateBodyClass from '../utils/useUpdateBodyClass';
import Header from './header';
import Footer from './footer';
import '../styles/paul-masek.scss';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query globalSiteData {
      site {
        siteMetadata {
          title
        }
      }
      global: globalJson {
        navigation {
          link
          text
        }
        social_media {
          name
          url
        }
      }
      footer: footerJson {
        body
      }
    }
  `);

  const [headerActive, setHeaderActive] = useState(false);
  const [setClassActive] = useUpdateBodyClass('header-active', headerActive);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Helmet>
        <meta charset="utf-8" />
      </Helmet>
      <Helmet>
        <meta name="robots" content="noodp" />
      </Helmet>
      <Helmet>
        <link rel="canonical" href="{{ URL }}" />
      </Helmet>
      <Helmet>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      </Helmet>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Raleway:400,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <div className="no-js-site-animations">
        <Header
          navigationItems={data.global.navigation}
          socialMediaLinks={data.global.social_media}
          active={headerActive}
        />
        <main>{children}</main>
        <Footer body={data.footer.body} />
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
