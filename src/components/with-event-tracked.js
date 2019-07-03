import React from 'react';
import PropTypes from 'prop-types';
import trackEvent from '../utils/track-event';

const withEventTracked = Component => {
  const EventTracked = ({
    eventName,
    eventValue,
    eventCategory,
    onClick,
    ...props
  }) => (
    <Component
      {...props}
      onClick={e => {
        trackEvent(eventName, eventCategory, eventValue);

        if (onClick) {
          onClick(e);
        }
      }}
    />
  );

  EventTracked.propTypes = {
    eventCategory: PropTypes.string,
    eventName: PropTypes.string.isRequired,
    eventValue: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  };

  EventTracked.defaultProps = {
    eventCategory: 'Tracked link',
    onClick: null,
  };

  return EventTracked;
};

export default withEventTracked;
