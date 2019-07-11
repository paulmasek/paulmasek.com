import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import LineSegment from './line-segment';

const TimelineSegment = ({ modifier, children }) => {
  const modifierClass = !!modifier.length && `timeline__segment--${modifier}`;

  return (
    <LineSegment
      className={classNames('timeline__segment', modifierClass)}
      modifier="medium-separator"
      vertical
    >
      {children}
    </LineSegment>
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
