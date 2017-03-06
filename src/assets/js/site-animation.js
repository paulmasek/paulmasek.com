import ScrollMagic from 'ScrollMagic'
import 'animation.gsap'
import 'debug.addIndicators'
import 'GSAP.scrollTo'

/* eslint-disable no-new */

class SiteAnimation {
  constructor(options) {
    this.debug = options.debug
    this.config = options.config
    this.setupController()
    this.setupAnimations()
    this.setupScrollTo()
  }

  setupController() {
    this.controller = new ScrollMagic.Controller()
  }

  setupAnimations() {
    this.scenes = []

    for (let i = 0; i < this.config.length; i++) {
      let config = this.config[i]
      let tween = false
      const scene = new ScrollMagic.Scene(config.sceneOpts)
      const tweenOptions = ['to', 'fromTo', 'staggerFromTo']

      switch (config.type) {
        case 'class-toggle':
          scene.setClassToggle(config.el, config.activeClass)
          break
        case 'to':
          tween = TweenMax.to(config.el, 1, config.css)
          break
        case 'fromTo':
          tween = TweenMax.fromTo(config.el, 1, config.from, config.to)
          break
        case 'staggerFromTo':
          tween = TweenMax.staggerFromTo(config.el, 2, config.fromCSS, config.toCSS, config.staggerGap)
          break
      }

      if (tween && tweenOptions.includes(config.type)) {
        scene.setTween(tween)
      }

      scene.addTo(this.controller)

      if (this.debug || typeof config.debug !== 'undefined') {
        scene.addIndicators({
          name: config.name
        })
      }

      this.scenes.push(scene)
    }
  }

  setupScrollTo() {
    this.controller.scrollTo(function(newpos) {
      TweenMax.to(window, 1, {
        scrollTo: {
          y: newpos
        }
      })
    })
  }
}

export default SiteAnimation
