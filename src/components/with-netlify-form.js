import React from 'react';
import PropTypes from 'prop-types';

const withNetlifyForm = Component => {
  const withNetlify = ({ name, botFieldName, ...rest }) => {
    return (
      <Component
        name={name}
        action={`/${name}`}
        data-netlify="true"
        data-netlify-honeypot={botFieldName}
        botFieldName={botFieldName}
        {...rest}
      />
    );
  };

  withNetlify.propTypes = {
    name: PropTypes.string.isRequired,
    botFieldName: PropTypes.string,
  };

  withNetlify.defaultProps = {
    botFieldName: 'bot-field',
  };

  return withNetlify;
};

export default withNetlifyForm;
