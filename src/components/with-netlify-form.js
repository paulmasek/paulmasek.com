import React from 'react';
import PropTypes from 'prop-types';

const withNetlifyForm = Component => {
  const withNetlify = ({ name, ...rest }) => {
    return (
      <Component
        name={name}
        action={`/${name}`}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        {...rest}
      />
    );
  };

  withNetlify.propTypes = {
    name: PropTypes.string.isRequired,
  };

  return withNetlify;
};

export default withNetlifyForm;
