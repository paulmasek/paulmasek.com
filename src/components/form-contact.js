import React from 'react';
import * as Yup from 'yup';
import { ErrorMessage } from 'formik';
import PropTypes from 'prop-types';

import ajaxSubmit from '../utils/ajax-submit';
import { showFormError } from '../utils/form';
import Form from './form';

import withFormField from './with-form-field';
import withNetlifyForm from './with-netlify-form';
import TextInput from './text-input';

const FancyTextInput = withFormField(TextInput);
const NetlifyForm = withNetlifyForm(Form);

const MESSAGE_REQUIRED_FIELD = 'Required';
const MESSAGE_INVALID_EMAIL = 'Must be email';

const validationSchema = Yup.object().shape({
  name: Yup.string().required(MESSAGE_REQUIRED_FIELD),
  email: Yup.string()
    .email(MESSAGE_INVALID_EMAIL)
    .required(MESSAGE_REQUIRED_FIELD),
  message: Yup.string().required(MESSAGE_REQUIRED_FIELD),
});

const initialValues = {
  name: '',
  email: '',
  message: '',
};

const formName = 'contact';

const ContactForm = ({
  submitSuccessMessage,
  submitFailedMessage,
  ctaButtonText,
}) => {
  return (
    <NetlifyForm
      method="post"
      className="form-contact"
      name={formName}
      initialValues={initialValues}
      validationSchema={validationSchema}
      handleSubmit={values => {
        return ajaxSubmit(formName, values);
      }}
      successMessage={submitSuccessMessage}
      errorMessage={submitFailedMessage}
      render={(errors, touched) => (
        <>
          <div className="grid form__inputs">
            <FancyTextInput
              errored={showFormError('name', errors, touched)}
              formName={formName}
              id="name"
              label="Name"
              wrapperClass="grid__col grid__col--sm-6-12 form-row"
              name="name"
              required
              error={(name, cssClass) => (
                <ErrorMessage
                  className={cssClass}
                  name={name}
                  component="div"
                />
              )}
            />
            <FancyTextInput
              errored={showFormError('email', errors, touched)}
              formName={formName}
              id="email"
              label="Email"
              wrapperClass="grid__col grid__col--sm-6-12 form-row"
              type="email"
              name="email"
              required
              error={(name, cssClass) => (
                <ErrorMessage
                  className={cssClass}
                  name={name}
                  component="div"
                />
              )}
            />
            <FancyTextInput
              errored={showFormError('message', errors, touched)}
              formName={formName}
              id="message"
              label="Message"
              wrapperClass="grid__col grid__col--sm-12-12 form-row"
              name="message"
              required
              component="textarea"
              rows="10"
              error={(name, cssClass) => (
                <ErrorMessage
                  className={cssClass}
                  name={name}
                  component="div"
                />
              )}
            />
          </div>
        </>
      )}
      renderCta={disabled => (
        <button className="button" type="submit" disabled={disabled}>
          {ctaButtonText}
        </button>
      )}
    />
  );
};

ContactForm.propTypes = {
  submitSuccessMessage: PropTypes.string.isRequired,
  submitFailedMessage: PropTypes.string.isRequired,
  ctaButtonText: PropTypes.string,
};

ContactForm.defaultProps = {
  ctaButtonText: 'Submit',
};

export default ContactForm;
