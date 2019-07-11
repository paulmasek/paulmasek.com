import React from 'react';
import PropTypes from 'prop-types';
import TimelinePerm from './timeline-perm';
import TimelineFreelancing from './timeline-freelancing';

const Timeline = ({ perm, freelancing }) => {
  const {
    startDate: freelancingStartDate,
    startTitle: freelancingStartTitle,
    remote,
    contracting,
  } = freelancing;

  return (
    <div className="timeline line-segment line-segment--start-title line-segment--vertical">
      <div className="container container--thin">
        <TimelineFreelancing
          contracting={contracting}
          remote={remote}
          title={freelancingStartTitle}
          date={freelancingStartDate}
        />
      </div>
      <div className="container container--wide">
        <div className="line-segment line-segment--horizontal line-segment--freelancing line-segment--hide-mobile-horizontal">
          <TimelinePerm roles={perm} />
        </div>
      </div>
    </div>
  );
};

Timeline.propTypes = {
  perm: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  freelancing: PropTypes.shape({}).isRequired,
};

Timeline.defaultProps = {};

export default Timeline;
