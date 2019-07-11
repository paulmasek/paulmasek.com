import React from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import withEventTracked from './with-event-tracked';
import LineSegment from './line-segment';

const EventTrackedLink = withEventTracked('a');

const TimelinePerm = ({ roles }) => {
  return (
    <div className="grid timeline__perm-grid">
      {roles.map(
        (
          { period, url, company, logo, role, introduction, responsibilities },
          index
        ) => {
          const last = index === roles.length - 1;

          const contentFragment = (
            <>
              <LineSegment modifier="period-title-perm" vertical>
                <strong className="timeline__period-title timeline__period-title--perm timeline__period-title-content">
                  {period}
                </strong>
              </LineSegment>
              <div>
                <div className="timeline__content-module">
                  <EventTrackedLink
                    className="timeline__header timeline__header--perm"
                    href={url}
                    rel="noopener noreferrer"
                    target="_blank"
                    eventName="Company logo link click"
                    eventValue={company}
                  >
                    <h3 className="heading-three timeline__perm-title">
                      {company}
                    </h3>
                    <img
                      alt={`${company} logo`}
                      className="timeline__perm-logo"
                      src={logo.src.publicURL}
                    />
                  </EventTrackedLink>
                  <strong className="timeline__perm-role">{role}</strong>
                </div>
              </div>
            </>
          );

          const responsibilitiesFragment = (
            <div className="timeline__content-item timeline__content-item--perm timeline__content-item--last cms">
              <div dangerouslySetInnerHTML={{ __html: introduction }} />
              <ul>
                {responsibilities.map(({ body }) => (
                  <li key={uniqid()}>
                    <div dangerouslySetInnerHTML={{ __html: body }} />
                  </li>
                ))}
              </ul>
            </div>
          );

          return (
            <div className="grid__col timeline__perm" key={uniqid()}>
              {!last ? (
                <LineSegment
                  className="timeline__major-period timeline__segment"
                  modifier="perm-branch"
                  vertical
                >
                  <LineSegment
                    className="line-segment--medium-separator"
                    modifier="mobile-perm-separator"
                    vertical
                  >
                    {contentFragment}
                    <LineSegment
                      className="line-segment--hide-desktop-horizontal"
                      modifier="content"
                      horizontal
                    >
                      {responsibilitiesFragment}
                    </LineSegment>
                  </LineSegment>
                </LineSegment>
              ) : (
                <LineSegment
                  className="timeline__major-period timeline__major-period--last timeline__segment"
                  modifier="perm-branch"
                  vertical
                >
                  <div className="">
                    {contentFragment}
                    <div>{responsibilitiesFragment}</div>
                  </div>
                </LineSegment>
              )}
            </div>
          );
        }
      )}
    </div>
  );
};

TimelinePerm.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default TimelinePerm;
