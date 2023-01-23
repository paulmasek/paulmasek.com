import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import uniqid from 'uniqid';

import Github from '../images/icons/github.svg';
import LinkedIn from '../images/icons/linkedin.svg';
import withEventTracked from './with-event-tracked';

const EventTrackedLink = withEventTracked('a');

const icons = {
  linkedin: LinkedIn,
  github: Github,
};

const SocialMedia = ({ className, links, linkClickEvent }) => (
  <ul className={classNames('social-media', className)}>
    {links.map(({ url, name }) => {
      const Icon = icons[name];

      return (
        <li className="social-media__item" key={uniqid()}>
          <EventTrackedLink
            className="social-media__link"
            eventName={linkClickEvent}
            eventValue={name}
            href={url}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icon className="social-media__icon" />
          </EventTrackedLink>
        </li>
      );
    })}
  </ul>
);

SocialMedia.propTypes = {
  className: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  linkClickEvent: PropTypes.string,
};

SocialMedia.defaultProps = {
  className: '',
  linkClickEvent: 'Social media click',
};

export default SocialMedia;
