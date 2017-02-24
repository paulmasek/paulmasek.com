import imagesLoaded from 'imagesloaded'
import SiteAnimation from './site-animation'
import siteAnimationConfig from './site-animation-config'

/* eslint-disable no-new */

const App = {

  init() {
    this.debug = false
    // this.debug = true
    this.setupIntroduction()
    this.setupSiteAnimation()
    this.setupNavigation()
  },

  setupNavigation() {
    const header = document.querySelector('.js-header')
    const navigation = document.querySelector('.js-primary-navigation')
    const trigger = document.querySelector('.js-trigger-primary-navigation')

    trigger.addEventListener('click', (e) => {
      trigger.classList.toggle('is-active')
      navigation.classList.toggle('primary-navigation--animate-in')
      header.classList.toggle('main-header--navigation-active')
      e.preventDefault()
    })
  },

  setupIntroduction() {
    // const introduction = document.querySelector('.js-introduction')
    const introduction = document.querySelector('.js-introduction')

    imagesLoaded(introduction, () => {
      console.log('here')
      introduction.classList.add('introduction--background-loaded')
    });
  },

  setupSiteAnimation() {
    new SiteAnimation({
      debug: this.debug,
      config: siteAnimationConfig,
    })
  },
}

App.init()

if (module.hot) {
  module.hot.accept()
}
