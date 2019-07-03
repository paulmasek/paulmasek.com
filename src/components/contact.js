import React from 'react';
import PropTypes from 'prop-types';
import SectionAnchor from './section-anchor';
import SectionHero from './section-hero';
import ContactForm from './form-contact';

const Contact = ({
  id,
  introductionTitle,
  introductionBody,
  introductionBackground,
  submitSuccessMessage,
  submitFailedMessage,
}) => {
  return (
    <section className="section contact">
      <SectionHero
        title={introductionTitle}
        body={introductionBody}
        imageAlt={introductionBackground.alt}
        imageObject={introductionBackground.src}
        modifier="contact"
      />
      <div className="container container--wide contact__inner">
        <ContactForm
          submitSuccessMessage={submitSuccessMessage}
          submitFailedMessage={submitFailedMessage}
        />
      </div>
      <SectionAnchor id={id} />
    </section>
  );
};

Contact.propTypes = {
  id: PropTypes.string,
  introductionTitle: PropTypes.string.isRequired,
  introductionBody: PropTypes.string.isRequired,
  introductionBackground: PropTypes.shape({}).isRequired,
  submitSuccessMessage: PropTypes.string.isRequired,
  submitFailedMessage: PropTypes.string.isRequired,
};

Contact.defaultProps = {
  id: null,
};

export default Contact;
