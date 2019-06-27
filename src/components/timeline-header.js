import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TimelineHeader = ({
  title,
  url,
  isLogoTitle,
  children,
  clickEvent,
  clickEventValue,
}) => {
  const body = (
    <>
      <div className="js-animate-trigger-contracing-title">
        <h3
          className={classNames(
            'heading-three timeline__header-title js-animate-contracting-title',
            {
              'timeline__header-title--hidden': isLogoTitle,
            }
          )}
        >
          {title}
        </h3>
      </div>
      {children}
    </>
  );

  if (url) {
    return (
      <a
        className="timeline__header line-segment line-segment--header line-segment--horizontal line-segment--vertical js-animate-trigger-logo"
        data-line-v="work-small-after-title"
        data-line-v-class="line-segment__line--small-separator-header"
        data-line-h="work-horizontal-after-title"
        data-line-h-class="line-segment__line--header-h"
        href={url}
        rel="noopener noreferrer"
        target="_blank"
        data-event-name={clickEvent}
        data-event-value={clickEventValue}
      >
        {body}
      </a>
    );
  }

  return (
    <div
      className="timeline__header line-segment  line-segment--header line-segment--horizontal line-segment--vertical"
      data-line-v="work-small-after-title"
      data-line-v-class="line-segment__line--small-separator-header"
      data-line-h="work-horizontal-after-title"
      data-line-h-class="line-segment__line--header-h"
    >
      {body}
    </div>
  );
};

TimelineHeader.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  isLogoTitle: PropTypes.bool,
  children: PropTypes.node,
  clickEvent: PropTypes.string,
  clickEventValue: PropTypes.string,
};

TimelineHeader.defaultProps = {
  url: null,
  isLogoTitle: false,
  children: null,
  clickEvent: '',
  clickEventValue: '',
};

export default TimelineHeader;
