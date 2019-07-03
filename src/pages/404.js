import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => {
  return (
    <Layout headerActive>
      <SEO title="Page not found" />
      <div className="simple-section container container--thin">
        <h1 className="heading-three">Page not found</h1>
        <p>You just hit a route that doesn't exist... the sadness.</p>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
