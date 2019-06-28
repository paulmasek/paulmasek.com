import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const withFormField = Component => {
  const withFormFieldComponent = ({
    wrapperClass,
    formName,
    id,
    name,
    label,
    required,
    className,
    errored,
    error,
    hideErrorMessage,
    staticErrorMessage,
    ...rest
  }) => {
    const [hasValue, updateValue] = useState(false);
    const rootClass = 'form-field';
    const fieldId = `${formName}-${id}`;

    return (
      <div
        className={classNames(
          rootClass,
          {
            [`${rootClass}--has-value`]: hasValue,
            [`${rootClass}--invalid`]: errored,
            [`${rootClass}--hide-error-message`]: hideErrorMessage,
            [`${rootClass}--static-error-message`]: staticErrorMessage,
          },
          wrapperClass
        )}
      >
        <label className="form-field__label" htmlFor={fieldId}>
          {label}
          {required && ' *'}
        </label>
        <Component
          id={fieldId}
          name={name}
          className={classNames('form-field__input', className)}
          required={required}
          onInput={({ target }) => {
            const { value } = target;

            if (value.length > 0) {
              return updateValue(true);
            }

            return updateValue(false);
          }}
          {...rest}
        />
        {errored && error(name, 'form-field__error')}
      </div>
    );
  };

  withFormFieldComponent.propTypes = {
    className: PropTypes.string,
    wrapperClass: PropTypes.string,
    formName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    required: PropTypes.bool,
    errored: PropTypes.bool.isRequired,
    error: PropTypes.func.isRequired,
    hideErrorMessage: PropTypes.bool,
    staticErrorMessage: PropTypes.bool,
  };

  withFormFieldComponent.defaultProps = {
    className: null,
    wrapperClass: null,
    required: false,
    hideErrorMessage: false,
    staticErrorMessage: false,
  };

  return withFormFieldComponent;
};

export default withFormField;
