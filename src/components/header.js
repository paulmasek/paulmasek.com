import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import useMediaQuery from '../utils/use-media-query';
import Navigation from './navigation';
import SocialMedia from './social-media';
import SmoothScrollLink from './smooth-scroll-link';

const Header = ({ navigationItems, socialMediaLinks }) => {
  const [primaryNavigationOpen, setNavigationOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 600px)');

  return (
    <>
      <header
        className={classNames('main-header js-header', {
          'main-header--navigation-active': primaryNavigationOpen,
        })}
      >
        <div className="main-header__inner container">
          <SmoothScrollLink
            className="main-header__branding branding branding--minimal"
            to="#top"
            data-event-name="Content link click"
            data-event-value="Branding click"
          >
            <span className="branding__part branding__part--one">
              <span className="branding__minimal-part branding__minimal-part--one">
                P
              </span>
              <span className="branding__full-part branding__full-part--one">
                aul
              </span>
            </span>
            <span className="branding__part branding__part--two">
              <span className="branding__minimal-part branding__minimal-part--two">
                M
              </span>
              <span className="branding__full-part branding__full-part--two">
                asek
              </span>
            </span>
          </SmoothScrollLink>
          <SocialMedia
            className="main-header__social-media social-media--header"
            links={socialMediaLinks}
            linkClickEvent="Primary navigation social media"
          />
          <button
            className={classNames(
              'primary-navigation-show-hide hamburger hamburger--squeeze js-trigger-primary-navigation',
              {
                'is-active': primaryNavigationOpen,
              }
            )}
            type="button"
            onClick={() => setNavigationOpen(!primaryNavigationOpen)}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </header>
      <Navigation
        items={navigationItems}
        active={primaryNavigationOpen}
        linkClick={() => {
          if (isMobile) {
            setNavigationOpen(false);
          }
        }}
      />
    </>
  );
};

Header.propTypes = {
  navigationItems: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  socialMediaLinks: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

Header.defaultProps = {};

export default Header;
