import React from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TextInput = ({ className, type, name, id, ...props }) => {
  return (
    <Field
      name={name}
      id={id}
      className={classNames('text-input', className)}
      type={type}
      {...props}
    />
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
};

TextInput.defaultProps = {
  className: null,
  type: 'text',
};

export default TextInput;
