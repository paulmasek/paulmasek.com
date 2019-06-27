import React from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';

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
              <div
                className="line-segment line-segment--vertical line-segment--period-title-perm js-animate-trigger-perm-date-title"
                data-line-v="work-start-perm-item"
                data-line-v-class="line-segment__line--small-separator"
              >
                <strong className="timeline__period-title timeline__period-title--perm timeline__period-title-content js-animate-perm-date-title">
                  {period}
                </strong>
              </div>
              <div className="js-animate-trigger-content-module">
                <div className="timeline__content-module js-animate-content-module">
                  <a
                    className="timeline__header timeline__header--perm"
                    href={url}
                    rel="noopener noreferrer"
                    target="_blank"
                    data-event-name="Company logo link click"
                    data-event-value={company}
                  >
                    <h3 className="heading-three timeline__perm-title">
                      {company}
                    </h3>
                    <img
                      alt={`${company} logo`}
                      className="timeline__perm-logo"
                      src={logo.src.publicURL}
                    />
                  </a>
                  <strong className="timeline__perm-role">{role}</strong>
                </div>
              </div>
            </>
          );

          const responsibilitiesFragment = (
            <div className="timeline__content-item timeline__content-item--perm timeline__content-item--last cms js-animate-content-module">
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
                <div
                  className="timeline__major-period timeline__segment line-segment line-segment--vertical line-segment--perm-branch"
                  data-line-v="work-small-start-perm"
                  data-line-v-class="line-segment__line--perm-branch"
                >
                  <div
                    className="line-segment line-segment--vertical line-segment--medium-separator line-segment--mobile-perm-separator"
                    data-line-v="work"
                    data-line-v-class="line-segment__line--medium-separator line-segment__line--mobile-perm-separator"
                  >
                    {contentFragment}
                    <div
                      className="line-segment line-segment--horizontal line-segment--content line-segment--hide-desktop-horizontal js-animate-trigger-content-module"
                      data-line-h="work-horizontal"
                    >
                      {responsibilitiesFragment}
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  className="timeline__major-period timeline__segment line-segment line-segment--vertical line-segment--perm-branch timeline__major-period--last"
                  data-line-v="work-small-start-perm"
                  data-line-v-class="line-segment__line--perm-branch"
                >
                  <div className="">
                    {contentFragment}
                    <div className="js-animate-trigger-content-module">
                      {responsibilitiesFragment}
                    </div>
                  </div>
                </div>
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
