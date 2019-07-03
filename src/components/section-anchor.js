import React from 'react';
import PropTypes from 'prop-types';

const SectionAnchor = ({ id }) => (
  <span className="section__anchor" id={id}>
    &nbsp;
  </span>
);

SectionAnchor.propTypes = {
  id: PropTypes.string.isRequired,
};

export default SectionAnchor;
