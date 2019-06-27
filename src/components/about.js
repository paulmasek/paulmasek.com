import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import getGraphQlImage from '../utils/get-graphql-image';
import SectionAnchor from './section-anchor';

const About = ({ body, id, profilePicImage, profilePicAlt }) => {
  const imageSizes = getGraphQlImage(profilePicImage);

  return (
    <section className="section about js-about-content">
      <div
        className="container container--thin about__inner line-segment line-segment--start line-segment--vertical"
        data-line-v="about-one"
        data-line-v-class="line-segment__line--small-separator"
      >
        <div
          className="line-segment line-segment--header line-segment--vertical line-segment--horizontal"
          data-line-v="about-two"
          data-line-v-class="line-segment__line--small-separator-header"
          data-line-h="about-three"
        >
          <Img
            className="about__profile-pic js-animate-profile-pic"
            src="profile-pic"
            alt={profilePicAlt}
            sizes={imageSizes}
          />
        </div>
        <div className="js-animate-trigger-about-content">
          <div
            className="about__content js-animate-about-content"
            dangerouslySetInnerHTML={{ __html: body }}
          />
        </div>
      </div>
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
