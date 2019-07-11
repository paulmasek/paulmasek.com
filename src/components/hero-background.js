import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Img from 'gatsby-image';
import getFluidGraphQlImage from '../utils/get-fluid-graphql-image';

const HeroBackground = ({
  className,
  modifier,
  loading,
  alt,
  imageObj,
  onLoaded,
}) => {
  const modifierClass = !!modifier.length && `hero-background--${modifier}`;
  const imageSizes = getFluidGraphQlImage(imageObj);

  return (
    <div className={classNames('hero-background', className, modifierClass)}>
      <Img
        className="hero-background__image"
        sizes={imageSizes}
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
