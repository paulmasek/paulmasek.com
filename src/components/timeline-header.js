import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withEventTracked from './with-event-tracked';
import LineSegment from './line-segment';

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
      <LineSegment
        render={(cssClass, props) => (
          <EventTrackedLink
            className={classNames('timeline__header', cssClass)}
            href={url}
            rel="noopener noreferrer"
            target="_blank"
            eventName={clickEvent}
            eventValue={clickEventValue}
            {...props}
          >
            {body}
          </EventTrackedLink>
        )}
        vertical
        horizontal
        modifier="header"
      />
    );
  }

  return (
    <LineSegment
      className="timeline__header"
      modifier="header"
      vertical
      horizontal
    >
      {body}
    </LineSegment>
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
