import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import getFluidGraphQlImage from '../utils/get-fluid-graphql-image';
import SectionAnchor from './section-anchor';
import TrackedHtmlContent from './tracked-html-content';
import LineSegment from './line-segment';

const About = ({ body, id, profilePicImage, profilePicAlt }) => {
  const imageSizes = getFluidGraphQlImage(profilePicImage);

  return (
    <section className="section about">
      <LineSegment
        className="container container--thin about__inner"
        modifier="start"
        vertical
      >
        <LineSegment modifier="header" horizontal vertical>
          <Img
            className="about__profile-pic"
            src="profile-pic"
            alt={profilePicAlt}
            sizes={imageSizes}
          />
        </LineSegment>
        <div>
          <TrackedHtmlContent className="about__content" body={body} />
        </div>
      </LineSegment>
      <SectionAnchor id={id} />
    </section>
  );
};

About.propTypes = {
  id: PropTypes.string,
  body: PropTypes.string.isRequired,
  profilePicImage: PropTypes.shape({}).isRequired,
  profilePicAlt: PropTypes.string.isRequired,
};

About.defaultProps = {
  id: null,
};

export default About;
