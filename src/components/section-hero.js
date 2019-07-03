import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import HeroBackground from './hero-background';
import TrackedHtmlContent from './tracked-html-content';

const SectionHero = ({ title, body, modifier, imageObject, imageAlt }) => {
  const modifierClass = !!modifier.length && `section-hero--${modifier}`;

  return (
    <div
      className={classNames(
        'section-hero js-animate-trigger-section-hero-background',
        modifierClass
      )}
    >
      <div className="section-hero__inner">
        <div className="container container--thin">
          <div className="section-hero__content-wrapper js-animate-trigger-section-hero-content">
            <div className="section-hero__content js-animate-section-hero-content">
              <h2 className="section-hero__title">{title}</h2>
              <TrackedHtmlContent className="section-hero__body" body={body} />
            </div>
          </div>
          <HeroBackground
            className="introduction__background"
            alt={imageAlt}
            imageObj={imageObject}
          />
        </div>
      </div>
    </div>
  );
};

SectionHero.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  modifier: PropTypes.string.isRequired,
  imageObject: PropTypes.shape({}).isRequired,
  imageAlt: PropTypes.string.isRequired,
};

export default SectionHero;
