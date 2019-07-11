import React from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import SetionHero from './section-hero';
import SectionAnchor from './section-anchor';

const Skills = ({
  id,
  introductionTitle,
  introductionBody,
  introductionBackground,
  mainSkillsTitle,
  mainSkillsSkills,
  workflowTitle,
  workflowSkills,
  softwareTitle,
  softwareSkills,
}) => {
  return (
    <section className="section skills">
      <SetionHero
        title={introductionTitle}
        body={introductionBody}
        imageAlt={introductionBackground.alt}
        imageObject={introductionBackground.src}
        modifier="skills"
      />
      <div className="container container--thin skills__inner">
        <div className="skills__main line-segment line-segment--content line-segment--horizontal">
          <h3 className="heading-three skills__main-title">
            {mainSkillsTitle}
          </h3>
          <ul>
            {mainSkillsSkills.map(({ title, subTitle, body }) => (
              <li key={uniqid()}>
                <h4 className="heading-four skills__title">
                  {title}
                  {subTitle && ` - ${subTitle}`}
                </h4>
                <div dangerouslySetInnerHTML={{ __html: body }} />
              </li>
            ))}
          </ul>
        </div>
        <div className="grid">
          <div className="grid__col grid__col--12-12 grid__col--sm-6-12 skills__secondary">
            <div className="skills__secondary-inner">
              <h3 className="heading-three">{workflowTitle}</h3>
              <ul className="">
                {workflowSkills.map(({ title, body }) => (
                  <li key={uniqid()}>
                    <h4 className="heading-four skills__title">{title}</h4>
                    <div dangerouslySetInnerHTML={{ __html: body }} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="grid__col grid__col--12-12 grid__col--sm-6-12 skills__secondary">
            <div className="skills__secondary-inner">
              <h3 className="heading-three">{softwareTitle}</h3>
              <ul className="design-tools">
                {softwareSkills.map(({ title }) => (
                  <li className="design-tools__item" key={uniqid()}>
                    {title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <SectionAnchor id={id} />
    </section>
  );
};

Skills.propTypes = {
  id: PropTypes.string,
  introductionTitle: PropTypes.string.isRequired,
  introductionBody: PropTypes.string.isRequired,
  introductionBackground: PropTypes.shape({}).isRequired,
  mainSkillsTitle: PropTypes.string.isRequired,
  mainSkillsSkills: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  workflowTitle: PropTypes.string.isRequired,
  workflowSkills: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  softwareTitle: PropTypes.string.isRequired,
  softwareSkills: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

Skills.defaultProps = {
  id: null,
};

export default Skills;
