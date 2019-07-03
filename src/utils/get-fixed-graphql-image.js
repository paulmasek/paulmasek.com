function getFixedGraphQlImage(imageObj) {
  if (imageObj && imageObj.childImageSharp.resize.src) {
    return imageObj.childImageSharp.resize.src;
  }

  return null;
}

export default getFixedGraphQlImage;
