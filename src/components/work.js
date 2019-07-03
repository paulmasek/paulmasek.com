import React from 'react';
import PropTypes from 'prop-types';
import SectionHero from './section-hero';
import SectionAnchor from './section-anchor';
import Timeline from './timeline';

const Work = ({
  id,
  introductionTitle,
  introductionBody,
  introductionBackground,
  timeline,
}) => {
  return (
    <section className="work section">
      <SectionHero
        title={introductionTitle}
        body={introductionBody}
        imageAlt={introductionBackground.alt}
        imageObject={introductionBackground.src}
        modifier="work"
      />
      <div className="work__inner">
        <Timeline {...timeline} />
      </div>
      <SectionAnchor id={id} />
    </section>
  );
};

Work.propTypes = {
  id: PropTypes.string,
  introductionTitle: PropTypes.string.isRequired,
  introductionBody: PropTypes.string.isRequired,
  introductionBackground: PropTypes.shape({}).isRequired,
  timeline: PropTypes.shape({}).isRequired,
};

Work.defaultProps = {
  id: null,
};

export default Work;
