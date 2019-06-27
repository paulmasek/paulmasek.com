function getGraphQlImage(imageObj) {
  if (imageObj && imageObj.childImageSharp) {
    return imageObj.childImageSharp.sizes;
  }

  return null;
}

export default getGraphQlImage;
