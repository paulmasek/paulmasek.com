import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const LineSegment = ({
  vertical,
  horizontal,
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
  className: PropTypes.string,
  modifier: PropTypes.string,
  children: PropTypes.node,
  render: PropTypes.func,
};

LineSegment.defaultProps = {
  children: null,
  render: null,
  vertical: false,
  horizontal: false,
  className: '',
  modifier: '',
};

export default LineSegment;
