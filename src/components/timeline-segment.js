import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TimelineSegment = ({ modifier, children }) => {
  const modifierClass = !!modifier.length && `timeline__segment--${modifier}`;

  return (
    <div
      className={classNames(
        'timeline__segment line-segment line-segment--vertical line-segment--medium-separator',
        modifierClass
      )}
    >
      {children}
    </div>
  );
};

TimelineSegment.propTypes = {
  modifier: PropTypes.string,
  children: PropTypes.node,
};

TimelineSegment.defaultProps = {
  modifier: '',
  children: null,
};

export default TimelineSegment;
