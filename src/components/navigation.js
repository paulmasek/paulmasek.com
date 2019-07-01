import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import uniqid from 'uniqid';
import { Link } from 'gatsby';

import useUpdateBodyClass from '../utils/use-update-body-class';
import SmoothScrollLink from './smooth-scroll-link';

const Navigation = ({ items, active, linkClick }) => {
  useUpdateBodyClass('primary-navigation-active', active);

  return (
    <nav
      className={classNames('primary-navigation js-primary-navigation', {
        'primary-navigation--active': active,
      })}
    >
      <div className="primary-navigation__inner">
        <ul className="primary-navigation__list">
          {items.map(({ text, link }) => (
            <li className="primary-navigation__item" key={uniqid()}>
              <SmoothScrollLink
                className="primary-navigation__link"
                data-event-name="Header primary navigation click"
                data-event-value={text}
                to={link}
                onClick={e => {
                  linkClick(e, link);
                }}
              >
                {text}
              </SmoothScrollLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

Navigation.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      to: PropTypes.string,
    })
  ).isRequired,
  active: PropTypes.bool.isRequired,
  linkClick: PropTypes.func.isRequired,
};

export default Navigation;
