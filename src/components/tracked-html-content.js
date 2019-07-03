import React from 'react';
import PropTypes from 'prop-types';
import trackEvent from '../utils/track-event';

function findNearestLink(el) {
  let node = el;

  while (node.parentNode) {
    node = node.parentNode;
    if (node.href) {
      return node;
    }
  }
  return null;
}

function trackChildLink(target, eventCategory) {
  if (target.matches('a, a *')) {
    const { href } = target;
    let link = target;

    if (!href) {
      link = findNearestLink(target);
    }

    if (link) {
      const eventName = link.getAttribute('data-event-name');
      const eventValue = link.getAttribute('data-event-value');

      if (eventName && eventValue) {
        trackEvent(eventName, eventCategory, eventValue);
        return true;
      }
    }
  }

  return false;
}

const TrackedHtmlContent = ({ body, eventCategory, onClick, ...props }) => {
  return (
    <div
      onClick={e => {
        trackChildLink(e.target, eventCategory);

        if (onClick) {
          onClick(e);
        }
      }}
      dangerouslySetInnerHTML={{ __html: body }}
      {...props}
    />
  );
};

TrackedHtmlContent.propTypes = {
  body: PropTypes.string.isRequired,
  eventCategory: PropTypes.string,
  onClick: PropTypes.func,
};

TrackedHtmlContent.defaultProps = {
  eventCategory: 'Tracked link',
  onClick: null,
};

export default TrackedHtmlContent;
