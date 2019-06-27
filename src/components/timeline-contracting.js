import React from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import TimelineMajorPeriod from './timeline-major-period';
import TimelineSegment from './timeline-segment';
import TimelineHeader from './timeline-header';
import TimelineModules from './timeline-modules';

const TimelineContracting = ({ contracts }) => {
  return contracts.map(({ yearStarting, contracts: roles }) => (
    <TimelineMajorPeriod
      title={yearStarting}
      className="line-segment line-segment--period-title line-segment--vertical"
      key={uniqid()}
    >
      {roles.map(({ slug, company, url, logoTitle, logo, modules }) => (
        <TimelineSegment modifier={slug} key={uniqid()}>
          <TimelineHeader
            title={company}
            url={url}
            isLogoTitle={logoTitle}
            clickEvent="Company logo link click"
            clickEventValue={company}
          >
            <img
              alt={`${company} logo`}
              className="timeline__contracting-logo js-animate-logo"
              src={logo.src.publicURL}
            />
          </TimelineHeader>
          <TimelineModules modules={modules} />
        </TimelineSegment>
      ))}
    </TimelineMajorPeriod>
  ));
};

TimelineContracting.propTypes = {
  contracts: PropTypes.arrayOf(
    PropTypes.shape({
      yearStarting: PropTypes.string.isRequired,
      contracts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    })
  ),
};

TimelineContracting.defaultProps = {};

export default TimelineContracting;
