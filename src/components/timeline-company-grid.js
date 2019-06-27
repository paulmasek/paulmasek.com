import React from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import classNames from 'classnames';

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
            <a
              className="company-list__link"
              href={url}
              target="_blank"
              data-event-name="Company logo link click"
              data-event-value={name}
              rel="noopener noreferrer"
            >
              <img alt={name} className="company-list__image" src={logoUrl} />
            </a>
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
