function getAbsoluteUrl(src) {
  return `${process.env.URL}${src}`;
}

export default getAbsoluteUrl;
