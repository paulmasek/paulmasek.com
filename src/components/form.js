import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form as FormikForm } from 'formik';
import classNames from 'classnames';

const Form = ({
  name,
  className,
  initialValues,
  validationSchema,
  handleSubmit,
  render,
  renderCta,
  fieldWrapper,
  botFieldLabel,
  botFieldId,
  botFieldName,
  children,
  successMessage,
  errorMessage,
  ...rest
}) => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={(values, actions) => {
      const { setSubmitting, setStatus } = actions;

      return handleSubmit(values)
        .then(() => {
          setStatus({
            submitted: true,
            errored: false,
            message: successMessage,
          });
          setSubmitting(false);
        })
        .catch(e => {
          console.error(e);

          setStatus({ submitted: false, errored: true, message: errorMessage });
          setSubmitting(false);
        });
    }}
  >
    {({
      isSubmitting,
      errors,
      touched,
      status,
      setFieldValue,
      values,
      submitCount,
    }) => {
      const rootClass = 'form';

      const fields = render
        ? render(errors, touched, setFieldValue, values)
        : children;

      const ctaDisabled =
        submitCount > 0 &&
        Object.keys(errors).length > 0 &&
        Object.keys(touched).length > 0;

      return (
        <FormikForm
          name={name}
          className={classNames(rootClass, {
            [classNames]: classNames,
            [`${rootClass}--is-submitting`]: isSubmitting,
            [`${rootClass}--submitted`]: status && status.submitted,
          })}
          noValidate
          {...rest}
        >
          <div className="form__inner">
            {status && status.errored && status.message && (
              <div
                className="form__error"
                dangerouslySetInnerHTML={{ __html: status.message }}
              />
            )}
            {status && status.submitted && status.message && (
              <div
                className="form__success"
                dangerouslySetInnerHTML={{ __html: status.message }}
              />
            )}
            <div className="form__body">
              {fieldWrapper ? (
                <div className="form__fields">{fields}</div>
              ) : (
                fields
              )}
              {renderCta && renderCta(ctaDisabled)}
            </div>
          </div>
          <input type="hidden" name="form-name" value={name} />
          <p className="form__honey" aria-hidden="true">
            <label htmlFor={botFieldId}>{botFieldLabel}</label>
            <input id={botFieldId} name={botFieldName} tabIndex="-1" />
          </p>
        </FormikForm>
      );
    }}
  </Formik>
);

Form.propTypes = {
  name: PropTypes.string.isRequired,
  initialValues: PropTypes.shape({}).isRequired,
  validationSchema: PropTypes.shape({}).isRequired,
  className: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  render: PropTypes.func,
  renderCta: PropTypes.func,
  fieldWrapper: PropTypes.bool,
  botFieldLabel: PropTypes.string,
  botFieldId: PropTypes.string,
  botFieldName: PropTypes.string,
  children: PropTypes.node,
  successMessage: PropTypes.string,
  errorMessage: PropTypes.string,
};

Form.defaultProps = {
  className: null,
  render: null,
  renderCta: null,
  fieldWrapper: true,
  botFieldLabel: 'Don’t fill this out if you are human:',
  botFieldId: 'bot-field',
  botFieldName: 'bot-field',
  children: null,
  successMessage: 'Success message',
  errorMessage: 'Error message',
};

export default Form;
