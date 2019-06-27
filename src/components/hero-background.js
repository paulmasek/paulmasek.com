import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Img from 'gatsby-image';
import getGraphQlImage from '../utils/get-graphql-image';

const HeroBackground = ({ className, modifier, alt, imageObj }) => {
  const modifierClass = !!modifier.length && `hero-background--${modifier}`;
  const imageSizes = getGraphQlImage(imageObj);

  return (
    <div className={classNames('hero-background', className, modifierClass)}>
      <Img
        className="hero-background__image js-animate-section-hero-background"
        sizes={imageSizes}
        alt={alt}
      />
    </div>
  );
};

HeroBackground.propTypes = {
  className: PropTypes.string,
  modifier: PropTypes.string,
  alt: PropTypes.string.isRequired,
  imageObj: PropTypes.shape({}).isRequired,
};

HeroBackground.defaultProps = {
  className: '',
  modifier: '',
};

export default HeroBackground;
