import React from 'react';
import PropTypes from 'prop-types';
import scrollToElement from 'scroll-to-element';
import { Link } from 'gatsby';

const handleClick = (e, onClick, to, duration) => {
  e.preventDefault();

  if (onClick) {
    onClick(e, to);
  }

  if (typeof window !== 'undefined') {
    const url = new URL(to, window.location);
    const anchor = to.substring(to.indexOf('#'));

    if (url.pathname === window.location.pathname) {
      scrollToElement(anchor, {
        offset: 0,
        duration,
      });
    }
  }
};

const SmoothScrollLink = ({ to, onClick, duration, children, ...props }) => {
  const external = to.indexOf('://') > -1;
  const pageLink = to.indexOf('/') === -1;

  if (pageLink && !external) {
    return (
      <a
        href={to}
        onClick={e => {
          handleClick(e, onClick, to);
        }}
        {...props}
      >
        {children}
      </a>
    );
  }

  if (!external) {
    return (
      <Link
        to={to}
        onClick={e => {
          handleClick(e, onClick, to);
        }}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <a
      href={to}
      onClick={e => {
        if (onClick) {
          onClick(e);
        }
      }}
      {...props}
    >
      {children}
    </a>
  );
};

SmoothScrollLink.propTypes = {
  to: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  duration: PropTypes.number,
  children: PropTypes.node,
};

SmoothScrollLink.defaultProps = {
  onClick: null,
  duration: 500,
  children: null,
};

export default SmoothScrollLink;
