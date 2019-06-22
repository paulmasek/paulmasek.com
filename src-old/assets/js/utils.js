export default {
  getAnimationEnd(animationPrefix) {
    const animEndEventNames = {
      animation: 'animationend',
      OAnimation: 'oAnimationEnd',
      MozAnimation: 'animationend',
      WebkitAnimation: 'webkitAnimationEnd',
    }

    return animEndEventNames[animationPrefix]
  },
}
