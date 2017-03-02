import imagesLoaded from 'imagesloaded'
import SiteAnimation from './site-animation'
import siteAnimationConfig from './site-animation-config'
import Utils from './utils'
import EventTracking from './event-tracking'

/* eslint-disable no-new */

const App = {

  init() {
    this.debug = false
    // this.debug = true
    this.animationEndEvent = Utils.getAnimationEnd(Modernizr.prefixed('animation'))
    this.setupIntroduction()
    this.setupNavigation()
    new EventTracking()
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
    const introductionContent = document.querySelector('.js-introduction-content')
    const backgroundLoadedClass = 'introduction--background-loaded'
    const animationCompleteClass = 'introduction--initial-animation-complete'

    imagesLoaded(introduction, () => {
      introduction.classList.add(backgroundLoadedClass)

      introductionContent.addEventListener(this.animationEndEvent, () => {
        introduction.classList.add(animationCompleteClass)
        this.setupSiteAnimation()
      })
    });
  },

  setupSiteAnimation() {
    this.siteAnimation = new SiteAnimation({
      debug: this.debug,
      config: siteAnimationConfig,
    })

    this.setupAnchors()
  },

  setupAnchors() {
    this.anchorLinks = document.querySelectorAll('a[href^=\'#\']')

    for (let i = 0; i < this.anchorLinks.length; i += 1) {
      this.anchorLinks[i].addEventListener('click', (event) => {
        const el = this.anchorLinks[i]
        const anchoredTo = el.href.substring(el.href.indexOf('#') + 1)

        if (anchoredTo && anchoredTo.length > 0) {
          const target = document.getElementById(anchoredTo)

          if (target) {
            this.siteAnimation.controller.scrollTo(target)
          }
        }

        event.preventDefault()
      })
    }
  },
}

App.init()

if (module.hot) {
  module.hot.accept()
}
