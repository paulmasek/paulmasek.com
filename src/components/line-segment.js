import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const LineSegment = ({
  vertical,
  horizontal,
  hideMobileVertical,
  hideDesktopVertical,
  hideMobileHorizontal,
  hideDesktopHorizontal,
  type,
  modifier,
  className,
  children,
  render,
  ...props
}) => {
  const cssClass = classNames(
    'line-segment',
    {
      'line-segment--vertical': vertical,
      'line-segment--horizontal': horizontal,
      'line-segment--hide-mobile-vertical': hideMobileVertical,
      'line-segment--hide-desktop-vertical': hideDesktopVertical,
      'line-segment--hide-mobile-horizontal': hideMobileHorizontal,
      'line-segment--hide-desktop-horizontal': hideDesktopHorizontal,
      [`line-segment--${type}`]: type,
      [`line-segment--${modifier}`]: modifier,
    },
    className
  );

  if (render) {
    return render(cssClass, props);
  }

  return <div className={cssClass}>{children}</div>;
};

LineSegment.propTypes = {
  vertical: PropTypes.bool,
  horizontal: PropTypes.bool,
  hideMobileVertical: PropTypes.bool,
  hideDesktopVertical: PropTypes.bool,
  hideMobileHorizontal: PropTypes.bool,
  hideDesktopHorizontal: PropTypes.bool,
  className: PropTypes.string,
  modifier: PropTypes.string,
  children: PropTypes.node,
  render: PropTypes.func,
  type: PropTypes.string,
};

LineSegment.defaultProps = {
  children: null,
  render: null,
  vertical: false,
  horizontal: false,
  hideMobileVertical: false,
  hideDesktopVertical: false,
  hideMobileHorizontal: false,
  hideDesktopHorizontal: false,
  className: '',
  modifier: '',
  type: '',
};

export default LineSegment;
