/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import useUpdateBodyClass from '../utils/use-update-body-class';
import Header from './header';
import Footer from './footer';
import '../styles/paul-masek.scss';

const Layout = ({ children, headerActive }) => {
  useUpdateBodyClass('header-active', headerActive);

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
        socialMedia {
          name
          url
        }
      }
      footer: footerJson {
        body
      }
    }
  `);

  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Raleway:400,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <div className="wrapper">
        <Header
          navigationItems={data.global.navigation}
          socialMediaLinks={data.global.socialMedia}
          active={headerActive}
        />
        <main className="wrapper__main">{children}</main>
        <Footer body={data.footer.body} />
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  headerActive: PropTypes.bool,
};

Layout.defaultProps = {
  headerActive: false,
};

export default Layout;
