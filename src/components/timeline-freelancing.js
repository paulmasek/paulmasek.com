import React from 'react';
import PropTypes from 'prop-types';
import TimelineContracting from './timeline-contracting';
import TimelineRemote from './timeline-remote';
import TimelineMajorChange from './timeline-major-change';

const TimelineFreelancing = ({ title, date, contracting, remote }) => (
  <>
    <TimelineContracting contracts={contracting} />
    <TimelineRemote {...remote} />
    <TimelineMajorChange date={date} title={title} />
  </>
);

TimelineFreelancing.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  contracting: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  remote: PropTypes.shape({}).isRequired,
};

export default TimelineFreelancing;
