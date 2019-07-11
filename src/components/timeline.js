import React from 'react';
import PropTypes from 'prop-types';
import TimelinePerm from './timeline-perm';
import TimelineFreelancing from './timeline-freelancing';
import LineSegment from './line-segment';

const Timeline = ({ perm, freelancing }) => {
  const {
    startDate: freelancingStartDate,
    startTitle: freelancingStartTitle,
    remote,
    contracting,
  } = freelancing;

  return (
    <LineSegment className="timeline" type="start-title" vertical>
      <div className="container container--thin">
        <TimelineFreelancing
          contracting={contracting}
          remote={remote}
          title={freelancingStartTitle}
          date={freelancingStartDate}
        />
      </div>
      <div className="container container--wide">
        <LineSegment modifier="freelancing" horizontal hideMobileHorizontal>
          <TimelinePerm roles={perm} />
        </LineSegment>
      </div>
    </LineSegment>
  );
};

Timeline.propTypes = {
  perm: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  freelancing: PropTypes.shape({}).isRequired,
};

Timeline.defaultProps = {};

export default Timeline;
