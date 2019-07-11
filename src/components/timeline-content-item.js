import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import LineSegment from './line-segment';

const TimelineContentItem = ({ modifier, last, noBorder, children }) => {
  const modifierClass =
    !!modifier.length && `timeline__content-item--${modifier}`;
  const child = <div className="timeline__content-module">{children}</div>;

  if (last) {
    return (
      <LineSegment
        className={classNames(
          'timeline__content-item timeline__content-item--last',
          modifierClass,
          {
            'timeline__content-item--no-border': noBorder,
          }
        )}
        type="content"
        horizontal
      >
        {child}
      </LineSegment>
    );
  }

  return (
    <div
      className={classNames('timeline__content-item', modifierClass, {
        'timeline__content-item--no-border': noBorder,
      })}
    >
      {child}
    </div>
  );
};

TimelineContentItem.propTypes = {
  modifier: PropTypes.string,
  last: PropTypes.bool,
  noBorder: PropTypes.bool,
  children: PropTypes.node,
};

TimelineContentItem.defaultProps = {
  modifier: '',
  last: false,
  noBorder: false,
  children: null,
};

export default TimelineContentItem;
