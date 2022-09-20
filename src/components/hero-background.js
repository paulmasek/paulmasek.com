import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const HeroBackground = ({
  className,
  modifier,
  loading,
  alt,
  imageObj,
  onLoaded,
}) => {
  const modifierClass = !!modifier.length && `hero-background--${modifier}`;
  const image = getImage(imageObj);

  return (
    <div className={classNames('hero-background', className, modifierClass)}>
      <GatsbyImage
        className="hero-background__image"
        image={image}
        alt={alt}
        onLoad={onLoaded}
        loading={loading}
        objectPosition="top right"
      />
    </div>
  );
};

HeroBackground.propTypes = {
  className: PropTypes.string,
  modifier: PropTypes.string,
  loading: PropTypes.string,
  alt: PropTypes.string.isRequired,
  imageObj: PropTypes.shape({}).isRequired,
  onLoaded: PropTypes.func,
};

HeroBackground.defaultProps = {
  className: '',
  modifier: '',
  onLoaded: null,
  loading: 'lazy',
};

export default HeroBackground;
