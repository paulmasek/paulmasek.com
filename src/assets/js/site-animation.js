import ScrollMagic from 'ScrollMagic'
import 'animation.gsap'
import 'GSAP.scrollTo'

/* eslint-disable no-new */

class SiteAnimation {
  constructor(options) {
    this.debug = options.debug
    this.indidvidualScenes = (typeof options.indidvidualScenes !== 'undefined') ? options.indidvidualScenes : false
    this.flexibleScenes = (typeof options.flexibleScenes !== 'undefined') ? options.flexibleScenes : false
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

    if (this.indidvidualScenes && this.indidvidualScenes.length > 0) {
      this.setupIndidvidualScenes(this.indidvidualScenes)
    }

    if (this.flexibleScenes && this.flexibleScenes.length > 0) {
      this.setupFlexibleScenes(this.flexibleScenes)
    }
  }

  setupIndidvidualScenes(sceneConfigArr) {
    for (let i = 0; i < sceneConfigArr.length; i += 1) {
      this.setupScene(sceneConfigArr[i])
    }
  }

  setupFlexibleScenes(sceneConfigArr) {
    for (let i = 0; i < sceneConfigArr.length; i += 1) {
      const thisFlexScene = sceneConfigArr[i]
      const triggerElements = document.querySelectorAll(thisFlexScene.trigger)

      for (let j = 0; j < triggerElements.length; j += 1) {
        const thisTrigger = triggerElements[j]
        const config = thisFlexScene.config
        const elId = j + 1
        config.sceneOpts.triggerElement = thisTrigger

        if (Array.isArray(thisFlexScene.animate)) {
          for (let k = 0; k < thisFlexScene.animate.length; k += 1) {
            const selector = thisFlexScene.animate[k]
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
    if (config.el) {
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
        default:
      }

      if (tween && this.tweenOptions.includes(config.type)) {
        scene.setTween(tween)
      }

      scene.addTo(this.controller)

      if (this.debug || typeof config.debug !== 'undefined') {
        scene.addIndicators({
          name: config.name,
        })
      }

      this.scenes.push(scene)
    } else {
      console.log(`Could not set up scene ${config.name}, because el to animate could not be found`)
    }
  }

  setupScrollTo() {
    this.controller.scrollTo((newpos) => {
      TweenMax.to(window, 1, {
        scrollTo: {
          y: newpos,
        },
      })
    })
  }
}

export default SiteAnimation
