import React from 'react';
import PropTypes from 'prop-types';
import TimelineMajorPeriod from './timeline-major-period';
import TimelineSegment from './timeline-segment';
import TimelineHeader from './timeline-header';
import TimelineModules from './timeline-modules';

const TimelineRemote = ({ period, title, modules }) => {
  return (
    <TimelineMajorPeriod title={period} titleModifier="major-change">
      <TimelineSegment>
        <TimelineHeader title={title} />
        <TimelineModules modules={modules} />
      </TimelineSegment>
    </TimelineMajorPeriod>
  );
};

TimelineRemote.propTypes = {
  period: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  modules: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

TimelineRemote.defaultProps = {};

export default TimelineRemote;
