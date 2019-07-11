import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TimelineMajorPeriod = ({ className, modifier, title, children }) => {
  const modifierClass = !!modifier.length && `timeline__segment--${modifier}`;

  return (
    <div className="timeline__major-period">
      <strong
        className={classNames(
          'timeline__period-title timeline__period-title-content',
          className,
          modifierClass
        )}
      >
        {title}
      </strong>
      {children}
    </div>
  );
};

TimelineMajorPeriod.propTypes = {
  className: PropTypes.string,
  modifier: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

TimelineMajorPeriod.defaultProps = {
  className: '',
  modifier: '',
  children: null,
};

export default TimelineMajorPeriod;
