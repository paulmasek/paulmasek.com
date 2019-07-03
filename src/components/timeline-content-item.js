import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TimelineContentItem = ({ modifier, last, noBorder, children }) => {
  const modifierClass =
    !!modifier.length && `timeline__content-item--${modifier}`;
  const lineH = !last && !noBorder && 'work-horizontal-after-modules';

  return (
    <div
      className={classNames(
        'timeline__content-item timeline__content-item js-animate-trigger-content-module',
        modifierClass,
        {
          'timeline__content-item--last line-segment line-segment--content line-segment--horizontal': last,
          'timeline__content-item--no-border': noBorder,
        }
      )}
      data-line-h={lineH}
    >
      <div className="timeline__content-module js-animate-content-module">
        {children}
      </div>
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
