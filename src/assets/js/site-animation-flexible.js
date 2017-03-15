export default [
  {
    name: 'Work line',
    trigger: '.js-animate-trigger-line-work',
    animate: '.js-animate-line-work',
    config: {
      sceneOpts: {
        triggerHook: 'onEnter',
        duration: 120,
        offset: 50,
      },
      type: 'to',
      css: {
        transform: 'translateY(0)',
      },
    },
  },
  {
    name: 'Work line Small',
    trigger: '.js-animate-trigger-line-work-small',
    animate: '.js-animate-line-work-small',
    config: {
      sceneOpts: {
        triggerHook: 'onEnter',
        duration: 60,
        offset: 40,
      },
      type: 'to',
      css: {
        transform: 'translateY(0)',
      },
    },
  },
  {
    name: 'Work line Small After title',
    trigger: '.js-animate-trigger-line-work-small-after-title',
    animate: '.js-animate-line-work-small-after-title',
    config: {
      sceneOpts: {
        triggerHook: 'onEnter',
        duration: 60,
        offset: 100,
      },
      type: 'to',
      css: {
        transform: 'translateY(0)',
      },
    },
  },
  {
    name: 'Work horizontal',
    trigger: '.js-animate-trigger-line-work-horizontal',
    animate: ['.js-animate-line-work-horizontal-part-one', '.js-animate-line-work-horizontal-part-two'],
    config: {
      sceneOpts: {
        triggerHook: 'onEnter',
        duration: 150,
        offset: -100,
      },
      type: 'to',
      css: {
        transform: 'translateX(0)',
      },
    },
  },
  {
    name: 'Work horizontal after title',
    trigger: '.js-animate-trigger-line-work-horizontal-after-title',
    animate: ['.js-animate-line-work-horizontal-after-title-part-one', '.js-animate-line-work-horizontal-after-title-part-two'],
    config: {
      sceneOpts: {
        triggerHook: 'onEnter',
        duration: 150,
        offset: 100,
      },
      type: 'to',
      css: {
        transform: 'translateX(0)',
      },
    },
  },
  {
    name: 'Work horizontal after modules',
    trigger: '.js-animate-trigger-line-work-horizontal-after-modules',
    animate: ['.js-animate-line-work-horizontal-after-modules-part-one', '.js-animate-line-work-horizontal-after-modules-part-two'],
    config: {
      sceneOpts: {
        triggerHook: 'onEnter',
        duration: 150,
        offset: 20,
      },
      type: 'to',
      css: {
        transform: 'translateX(0)',
      },
    },
  },
  {
    name: 'Work line after modules',
    trigger: '.js-animate-trigger-line-work-after-modules',
    animate: '.js-animate-line-work-after-modules',
    config: {
      sceneOpts: {
        triggerHook: 'onEnter',
        duration: 60,
        offset: 140,
      },
      type: 'to',
      css: {
        transform: 'translateY(0)',
      },
    },
  },
  {
    name: 'Date title',
    trigger: '.js-animate-trigger-date-title',
    animate: '.js-animate-date-title',
    config: {
      sceneOpts: {
        triggerHook: 'onEnter',
        duration: 100,
        offset: 0,
      },
      type: 'to',
      css: {
        opacity: '1',
        transform: 'translateY(0)',
      },
    },
  },
  {
    name: 'Logo',
    trigger: '.js-animate-trigger-logo',
    animate: '.js-animate-logo',
    config: {
      sceneOpts: {
        triggerHook: 'onEnter',
        duration: 130,
        offset: 50,
      },
      type: 'to',
      css: {
        opacity: '1',
        transform: 'translateY(0)',
      },
    },
  },
  {
    name: 'Contacting title',
    trigger: '.js-animate-trigger-contracing-title',
    animate: '.js-animate-contracting-title',
    config: {
      sceneOpts: {
        triggerHook: 'onEnter',
        duration: 100,
        offset: 50,
      },
      type: 'to',
      css: {
        opacity: '1',
        transform: 'translateY(0)',
      },
    },
  },
  {
    name: 'Timeline module',
    trigger: '.js-animate-trigger-content-module',
    animate: '.js-animate-content-module',
    config: {
      sceneOpts: {
        triggerHook: 'onEnter',
        duration: 150,
        offset: 50,
      },
      type: 'to',
      css: {
        opacity: '1',
        transform: 'translateY(0)',
      },
    },
  },
  {
    name: 'Work line after freelancing',
    trigger: '.js-animate-trigger-line-work-after-freelancing',
    animate: '.js-animate-line-work-after-freelancing',
    config: {
      sceneOpts: {
        triggerHook: 'onEnter',
        duration: 60,
        offset: 100,
      },
      type: 'to',
      css: {
        transform: 'translateY(0)',
      },
    },
  },
  {
    name: 'Work horizontal start perm',
    trigger: '.js-animate-trigger-line-work-start-perm',
    animate: ['.js-animate-line-work-start-perm-part-one', '.js-animate-line-work-start-perm-part-two'],
    config: {
      sceneOpts: {
        triggerHook: 'onEnter',
        duration: 100,
        offset: 56,
      },
      type: 'to',
      css: {
        transform: 'translateX(0)',
      },
    },
  },
  {
    name: 'Work line small start perm',
    trigger: '.js-animate-trigger-line-work-small-start-perm',
    animate: '.js-animate-line-work-small-start-perm',
    config: {
      sceneOpts: {
        triggerHook: 'onEnter',
        duration: 60,
        offset: 150,
      },
      type: 'to',
      css: {
        transform: 'translateY(0)',
      },
    },
  },
  {
    name: 'Perm title',
    trigger: '.js-animate-trigger-perm-date-title',
    animate: '.js-animate-perm-date-title',
    config: {
      sceneOpts: {
        triggerHook: 'onEnter',
        duration: 100,
        offset: 100,
      },
      type: 'to',
      css: {
        opacity: '1',
        transform: 'translateY(0)',
      },
    },
  },
  {
    name: 'Work line small start perm item',
    trigger: '.js-animate-trigger-line-work-start-perm-item',
    animate: '.js-animate-line-work-start-perm-item',
    config: {
      sceneOpts: {
        triggerHook: 'onEnter',
        duration: 60,
        offset: 150,
      },
      type: 'to',
      css: {
        transform: 'translateY(0)',
      },
    },
  },
]
