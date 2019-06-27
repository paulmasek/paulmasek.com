import React from 'react';
import PropTypes from 'prop-types';

const TimelineContent = ({ body }) => (
  <div dangerouslySetInnerHTML={{ __html: body }} />
);

TimelineContent.propTypes = {
  body: PropTypes.string.isRequired,
};

export default TimelineContent;
