import React from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import { Waypoint } from 'react-waypoint';
import { Link } from 'gatsby';

import SocialMedia from './social-media';
import HeroBackground from './hero-background';

const Introduction = ({
  background,
  name,
  tagline,
  navigationItems,
  socialMediaLinks,
  id,
  setHeaderActive,
  setClassActive,
}) => {
  return (
    <section className="introduction js-introduction" id={id}>
      <div className="container introduction__container">
        <Waypoint
          onEnter={({ previousPosition }) => {
            const direction = previousPosition === 'below' ? 'down' : 'up';

            if (direction === 'up') {
              setClassActive(false);
              setHeaderActive(false);
            }
          }}
          onLeave={({ currentPosition }) => {
            const direction = currentPosition === 'above' ? 'down' : 'up';

            if (direction === 'down') {
              setClassActive(true);
              setHeaderActive(true);
            }
          }}
        >
          <div className="introduction__content-wrapper">
            <div className="introduction__content js-animate-introduction-content">
              <div className="introduction__header">
                <h1 className="introduction__heading">
                  <span className="introduction__heading-name">{name}</span>
                  <span className="introduction__heading-role">{tagline}</span>
                </h1>
                <SocialMedia
                  className="introduction__social-media social-media--introduction"
                  links={socialMediaLinks}
                  linkClickEvent="Introduction social media"
                />
              </div>
              <ul className="introduction__navigation">
                {navigationItems.map(({ text, link }) => (
                  <li className="introduction__navigation-item" key={uniqid()}>
                    <Link
                      className="introduction__navigation-link"
                      to={link}
                      data-event-name="Introduction navigation click"
                      data-event-value={text}
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Waypoint>
      </div>
      <HeroBackground
        className="introduction__background"
        modifier="introduction"
        alt={background.alt}
        imageObj={background.src}
      />
    </section>
  );
};

Introduction.propTypes = {
  background: PropTypes.shape({}).isRequired,
  name: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  navigationItems: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  socialMediaLinks: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  setClassActive: PropTypes.func.isRequired,
  setHeaderActive: PropTypes.func.isRequired,
  id: PropTypes.string,
};

Introduction.defaultProps = {
  id: null,
};

export default Introduction;
