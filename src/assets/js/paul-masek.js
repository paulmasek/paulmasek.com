import imagesLoaded from 'imagesloaded'
import SiteAnimation from './site-animation'
import siteAnimationIndividual from './site-animation-individual'
import siteAnimationFlexible from './site-animation-flexible'
import AjaxForm from './form'
import Utils from './utils'
import EventTracking from './event-tracking'
import LineSegments from './line-segments'

/* eslint-disable no-new */

const App = {

  init() {
    this.debug = false
    this.disableParallax = true
    this.animationEndEvent = Utils.getAnimationEnd(Modernizr.prefixed('animation'))
    this.setupIntroduction()
    this.setupNavigation()
    this.setupEventTracking()
    this.setupForms()
  },

  setupForms() {
    const forms = document.querySelectorAll('.js-form')
    this.forms = []

    for (let i = 0; i < forms.length; i += 1) {
      this.forms.push(new AjaxForm({
        el: forms[i],
        resultDelay: 1000,
        onSubmit: () => {
          this.eventTracking.sendEvent('Form submission', 'Contact form', 'Submitted')
        },
        onSuccess: () => {
          this.eventTracking.sendEvent('Form submission', 'Contact form', 'Success')
        },
        onFailed: () => {
          this.eventTracking.sendEvent('Form submission', 'Contact form', 'Failed')
        },
      }))
    }
  },

  setupEventTracking() {
    this.eventTracking = new EventTracking({
      local: false,
    })
  },

  setupNavigation() {
    this.header = document.querySelector('.js-header')
    this.navigation = document.querySelector('.js-primary-navigation')
    this.navigationTrigger = document.querySelector('.js-trigger-primary-navigation')
    const links = document.querySelectorAll('.primary-navigation__link')

    this.navigationTrigger.addEventListener('click', (e) => {
      this.toggleNavigation()
      e.preventDefault()
    })

    for (let i = 0; i < links.length; i += 1) {
      const link = links[i]

      link.addEventListener('click', (e) => {
        this.toggleNavigation()
        e.preventDefault()
      })
    }
  },

  toggleNavigation() {
    this.navigationTrigger.classList.toggle('is-active')
    this.navigation.classList.toggle('primary-navigation--active')
    this.header.classList.toggle('main-header--navigation-active')
    document.body.classList.toggle('primary-navigation-active')
  },

  setupIntroduction() {
    const introduction = document.querySelector('.js-introduction')
    const introductionContent = introduction.querySelector('.js-animate-introduction-content')
    const backgroundLoadedClass = 'introduction--background-loaded'
    const animationCompleteClass = 'introduction--initial-animation-complete'

    imagesLoaded(introduction, () => {
      introduction.classList.add(backgroundLoadedClass)

      introductionContent.addEventListener(this.animationEndEvent, () => {
        introduction.classList.add(animationCompleteClass)
        this.setupSiteAnimation()
      })
    })
  },

  setupSiteAnimation() {
    this.siteAnimation = new SiteAnimation({
      debug: this.debug,
      indidvidualScenes: [
        {
          name: 'Show header',
          el: '.wrapper',
          sceneOpts: {
            triggerElement: '.js-trigger-header',
            triggerHook: 'onLeave',
            offset: 100,
          },
          type: 'class-toggle',
          activeClass: 'header-active',
        },
      ],
    })

    this.setupAnchors()

    if (!this.disableParallax) {
      this.setupParralax()
    }
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

  setupParralax() {
    this.lineSegments = new LineSegments()

    this.lineSegments.linesGenerated.then(() => {
      document.body.classList.remove('no-js-site-animations')
      document.body.classList.add('js-site-animations')

      this.siteAnimation.setupIndidvidualScenes(siteAnimationIndividual)
      this.siteAnimation.setupFlexibleScenes(siteAnimationFlexible)
    })
  },
}

App.init()

if (module.hot) {
  module.hot.accept()
}
