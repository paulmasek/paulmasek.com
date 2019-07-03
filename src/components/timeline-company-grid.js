import React from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import classNames from 'classnames';
import withEventTracked from './with-event-tracked';

const EventTrackedLink = withEventTracked('a');

const TimelineCompanyGrid = ({ companies }) => {
  return (
    <ul className="company-list grid grid--border-seperated">
      {companies.map(({ name, url, logo, slug }) => {
        const modifierClass = `company-list__item--${slug}`;
        const logoUrl = logo && logo.src && logo.src.publicURL;

        return (
          <li
            className={classNames(
              'company-list__item grid__col grid__col--6-12 grid__col--sm-3-12',
              modifierClass
            )}
            key={uniqid()}
          >
            <EventTrackedLink
              className="company-list__link"
              href={url}
              target="_blank"
              eventName="Company logo link click"
              eventValue={name}
              rel="noopener noreferrer"
            >
              <img alt={name} className="company-list__image" src={logoUrl} />
            </EventTrackedLink>
          </li>
        );
      })}
    </ul>
  );
};

TimelineCompanyGrid.propTypes = {
  companies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      logo: PropTypes.shape({
        src: PropTypes.shape({
          publicURL: PropTypes.string.isRequired,
        }),
      }),
    })
  ),
};

TimelineCompanyGrid.defaultProps = {
  companies: [],
};

export default TimelineCompanyGrid;
