import React from 'react';
import PropTypes from 'prop-types';
import ReactStringReplace from 'react-string-replace';

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
        <a
          className="main-footer__back-to-top"
          href={`#${topId}`}
          data-event-name={topEventName}
          data-event-value={topEventValue}
        >
          {topText}
        </a>
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
