function getFluidGraphQlImage(imageObj) {
  if (imageObj && imageObj.childImageSharp) {
    return imageObj.childImageSharp.sizes;
  }

  return null;
}

export default getFluidGraphQlImage;
