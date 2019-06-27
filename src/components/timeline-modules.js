import React from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import kebabCase from 'lodash.kebabcase';
import TimelineContentItem from './timeline-content-item';
import TimelineContent from './timeline-content';
import TimelineQuote from './timeline-quote';
import TimelineCompanyGrid from './timeline-company-grid';

const moduleLib = {
  timelineContent: TimelineContent,
  timelineQuote: TimelineQuote,
  timelineCompanyGrid: TimelineCompanyGrid,
};

const TimelineModules = ({ modules }) => {
  return modules.map(({ module, data, noBorder }, index) => {
    const RenderModule = moduleLib[module];
    const isLast = index === modules.length - 1;
    const key = kebabCase(module);

    return (
      <TimelineContentItem
        modifier={key}
        key={uniqid()}
        last={isLast}
        noBorder={noBorder}
      >
        <RenderModule {...data} />
      </TimelineContentItem>
    );
  });
};

TimelineModules.propTypes = {
  modules: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default TimelineModules;
