import React from 'react';
import PropTypes from 'prop-types';

const TimelineMajorChange = ({ date, title }) => {
  return (
    <div className="timeline__segment timeline__segment--major-change line-segment line-segment--big-separator line-segment--vertical">
      <strong className="timeline__period-title timeline__period-title--major-change timeline__period-title-content">
        {date}
      </strong>
      <div>
        <h3 className="heading-two timeline__started-freelancing">{title}</h3>
      </div>
    </div>
  );
};

TimelineMajorChange.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default TimelineMajorChange;
