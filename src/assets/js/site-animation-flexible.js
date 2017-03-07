export default [
  {
    name: 'Work line',
    trigger: '.js-animate-trigger-line-work',
    animate: '.js-animate-line-work',
    config:  {
      sceneOpts: {
        triggerHook: 'onEnter',
        duration: 150,
        offset: 120,
      },
      type: 'to',
      css: {
        transform: 'translateY(0)'
      }
    }
  },
  {
    name: 'Work horizontal',
    trigger: '.js-animate-trigger-line-work-horizontal',
    animate: ['.js-animate-line-work-horizontal-part-one', '.js-animate-line-work-horizontal-part-two'],
    config: {
      sceneOpts: {
        triggerHook: 'onEnter',
        duration: 150,
        offset: 180,
      },
      type: 'to',
      css: {
        transform: 'translateX(0)'
      }
    }
  }
]
