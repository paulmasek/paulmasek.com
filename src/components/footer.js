import React from 'react';
import PropTypes from 'prop-types';
import ReactStringReplace from 'react-string-replace';
import SmoothScrollLink from './smooth-scroll-link';
import withEventTracked from './with-event-tracked';

const EventTrackedSmoothScrollLink = withEventTracked(SmoothScrollLink);

const Footer = ({ body, topId, topText, topEventName, topEventValue }) => (
  <footer className="main-footer">
    <div className="main-footer__inner container">
      <div className="main-footer__content">
        <div
          className="main-footer__body"
          dangerouslySetInnerHTML={{
            __html: ReactStringReplace(body, '[year]', () =>
              new Date().getFullYear()
            ).join(''),
          }}
        />
        <EventTrackedSmoothScrollLink
          className="main-footer__back-to-top"
          to={`#${topId}`}
          eventName={topEventName}
          eventValue={topEventValue}
        >
          {topText}
        </EventTrackedSmoothScrollLink>
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  body: PropTypes.string.isRequired,
  topId: PropTypes.string,
  topText: PropTypes.string,
  topEvent: PropTypes.string,
};

Footer.defaultProps = {
  topId: 'top',
  topText: 'Back to top',
  topEventName: 'Content link click',
  topEventValue: 'Back to top',
};

export default Footer;
