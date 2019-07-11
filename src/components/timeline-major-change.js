import React from 'react';
import PropTypes from 'prop-types';
import LineSegment from './line-segment';

const TimelineMajorChange = ({ date, title }) => {
  return (
    <LineSegment
      className="timeline__segment timeline__segment--major-change"
      type="big-separator"
      vertical
    >
      <strong className="timeline__period-title timeline__period-title--major-change timeline__period-title-content">
        {date}
      </strong>
      <div>
        <h3 className="heading-two timeline__started-freelancing">{title}</h3>
      </div>
    </LineSegment>
  );
};

TimelineMajorChange.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default TimelineMajorChange;
