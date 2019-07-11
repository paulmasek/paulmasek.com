import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withEventTracked from './with-event-tracked';

const EventTrackedLink = withEventTracked('a');

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
      <div>
        <h3
          className={classNames('heading-three timeline__header-title', {
            'timeline__header-title--hidden': isLogoTitle,
          })}
        >
          {title}
        </h3>
      </div>
      {children}
    </>
  );

  if (url) {
    return (
      <EventTrackedLink
        className="timeline__header line-segment line-segment--header line-segment--horizontal line-segment--vertical"
        href={url}
        rel="noopener noreferrer"
        target="_blank"
        eventName={clickEvent}
        eventValue={clickEventValue}
      >
        {body}
      </EventTrackedLink>
    );
  }

  return (
    <div className="timeline__header line-segment  line-segment--header line-segment--horizontal line-segment--vertical">
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
