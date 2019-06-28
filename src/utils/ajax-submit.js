import axios from 'axios';
import { generateformData } from './form';

export default function ajaxSubmit(formName, values) {
  const formValues = {
    'form-name': formName,
    ...values,
  };

  const data = generateformData(formValues);

  return axios({
    method: 'post',
    url: '',
    headers: { 'content-type': 'multipart/form-data' },
    data,
  });
}
