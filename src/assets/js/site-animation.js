import ScrollMagic from 'ScrollMagic'
import 'animation.gsap'
import 'debug.addIndicators'
import 'GSAP.scrollTo'

/* eslint-disable no-new */

class SiteAnimation {
  constructor(options) {
    this.debug = options.debug
    this.indidvidualScenes = options.indidvidualScenes
    this.flexibleScenes = options.flexibleScenes
    this.tweenOptions = ['to', 'fromTo', 'staggerFromTo']
    this.setupController()
    this.setupAnimations()
    this.setupScrollTo()
  }

  setupController() {
    this.controller = new ScrollMagic.Controller()
  }

  setupAnimations() {
    this.scenes = []

    this.setupIndidvidualScenes()
    this.setupFlexibleScenes()
  }

  setupIndidvidualScenes() {
    for (let i = 0; i < this.indidvidualScenes.length; i++) {
      this.setupScene(this.indidvidualScenes[i])
    }
  }

  setupFlexibleScenes() {
    for (let i = 0; i < this.flexibleScenes.length; i++) {

      const thisFlexScene = this.flexibleScenes[i]
      const triggerElements = document.querySelectorAll(thisFlexScene.trigger)

      for (let j = 0; j < triggerElements.length; j++) {
        const thisTrigger = triggerElements[j]
        let config = thisFlexScene.config
        const elId = j + 1
        config.sceneOpts.triggerElement = thisTrigger

        if (Array.isArray(thisFlexScene.animate)) {
          for (var k = 0; k < thisFlexScene.animate.length; k++) {
            let selector = thisFlexScene.animate[k]
            const partId = k + 1
            config.el = thisTrigger.querySelector(selector)
            config.name = `${thisFlexScene.name} ${elId} part ${partId}`
            this.setupScene(config)
          }
        } else {
          config.el = thisTrigger.querySelector(thisFlexScene.animate)
          config.name = `${thisFlexScene.name} ${elId}`
          this.setupScene(config)
        }
      }
    }
  }

  setupScene(config) {
    const scene = new ScrollMagic.Scene(config.sceneOpts)
    let tween = false

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

    if (tween && this.tweenOptions.includes(config.type)) {
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
