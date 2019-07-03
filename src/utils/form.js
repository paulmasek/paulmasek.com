export function generateformData(data) {
  const formData = new FormData();

  Object.keys(data).map(key => {
    if (data[key] instanceof File) {
      formData.append(key, data[key], data[key].name);
    } else {
      formData.append(key, data[key]);
    }
  });

  return formData;
}

export function showFormError(field, errors, touched) {
  const hasErrored = !!errors[field];
  const isTouched = touched[field];

  if (hasErrored && isTouched) {
    return true;
  }

  return false;
}
