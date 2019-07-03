/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

const scrollToElement = require('scroll-to-element');

const checkHash = ({ hash }) => {
  if (hash) {
    scrollToElement(hash, {
      offset: 0,
      duration: 500,
    });
  }
};

exports.onRouteUpdate = ({ location }) => {
  checkHash(location);
};
