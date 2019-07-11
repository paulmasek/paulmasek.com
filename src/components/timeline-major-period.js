import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TimelineMajorPeriod = ({
  titleClass,
  titleModifier,
  title,
  children,
}) => {
  const modifierClass =
    !!titleModifier.length && `timeline__segment--${titleModifier}`;

  return (
    <div className="timeline__major-period">
      <strong
        className={classNames(
          'timeline__period-title timeline__period-title-content',
          titleClass,
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
  titleClass: PropTypes.string,
  titleModifier: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

TimelineMajorPeriod.defaultProps = {
  titleClass: '',
  titleModifier: '',
  children: null,
};

export default TimelineMajorPeriod;
