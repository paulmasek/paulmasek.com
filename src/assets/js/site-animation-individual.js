export default [
  {
    name: 'Show header',
    el: 'body',
    sceneOpts: {
      triggerElement: '.js-trigger-header',
      triggerHook: 'onLeave',
      offset: 100,
    },
    type: 'class-toggle',
    activeClass: 'header-active',
  },
  {
    name: 'Introduction',
    el: '.js-animate-introduction-content',
    sceneOpts: {
      triggerElement: '.js-animate-introduction-content',
      triggerHook: 'onLeave',
      duration: 400,
      offset: -150,
    },
    type: 'to',
    css: {
      opacity: 0,
      transform: 'translateY(-100px)',
    },
  },

  {
    name: 'About line 1',
    el: '.js-animate-line-about-one',
    sceneOpts: {
      triggerElement: '.js-animate-trigger-line-about-one',
      triggerHook: 'onEnter',
      duration: 150,
      offset: 100,
    },
    type: 'to',
    css: {
      transform: 'translateY(0)',
    },
  },

  {
    name: 'About Profile Pic',
    el: '.js-animate-profile-pic',
    sceneOpts: {
      triggerElement: '.js-about-content',
      triggerHook: 'onEnter',
      duration: 200,
      offset: 220,
    },
    type: 'to',
    css: {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },

  {
    name: 'About line 2',
    el: '.js-animate-line-about-two',
    sceneOpts: {
      triggerElement: '.js-animate-trigger-line-about-two',
      triggerHook: 'onEnter',
      duration: 150,
      offset: 120,
    },
    type: 'to',
    css: {
      transform: 'translateY(0)',
    },
  },

  {
    name: 'About line 3 part one',
    el: '.js-animate-line-about-three-part-one',
    sceneOpts: {
      triggerElement: '.js-animate-trigger-line-about-three',
      triggerHook: 'onEnter',
      duration: 150,
      offset: 180,
    },
    type: 'to',
    css: {
      transform: 'translateX(0)',
    },
  },

  {
    name: 'About line 3 part two',
    el: '.js-animate-line-about-three-part-two',
    sceneOpts: {
      triggerElement: '.js-animate-trigger-line-about-three',
      triggerHook: 'onEnter',
      duration: 150,
      offset: 180,
    },
    type: 'to',
    css: {
      transform: 'translateX(0)',
    },
  },

  {
    name: 'About Content',
    el: '.js-animate-about-content',
    sceneOpts: {
      triggerElement: '.js-animate-trigger-about-content',
      triggerHook: 'onEnter',
      duration: 150,
      offset: 0,
    },
    type: 'to',
    css: {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },

  {
    name: 'Skills Hero Background',
    el: '.js-animate-skills-hero-background',
    sceneOpts: {
      triggerElement: '.js-animate-skills-hero',
      triggerHook: 0.5,
      duration: 200,
      offset: 0,
    },
    type: 'to',
    css: {
      filter: 'blur(4px)',
    },
  },

  {
    name: 'Skills Hero Content',
    el: '.js-animate-skills-hero-content',
    sceneOpts: {
      triggerElement: '.js-animate-skills-hero',
      triggerHook: 0.5,
      duration: 300,
      offset: 0,
    },
    type: 'to',
    css: {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },

  {
    name: 'Work Hero Background',
    el: '.js-animate-work-hero-background',
    sceneOpts: {
      triggerElement: '.js-animate-work-hero',
      triggerHook: 0.5,
      duration: 200,
      offset: 0,
    },
    type: 'to',
    css: {
      filter: 'blur(4px)',
    },
  },

  {
    name: 'Work Hero Content',
    el: '.js-animate-work-hero-content',
    sceneOpts: {
      triggerElement: '.js-animate-work-hero',
      triggerHook: 0.5,
      duration: 300,
      offset: 0,
    },
    type: 'to',
    css: {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },

  {
    name: 'Contact Hero Background',
    el: '.js-animate-contact-hero-background',
    sceneOpts: {
      triggerElement: '.js-animate-contact-hero',
      triggerHook: 0.5,
      duration: 200,
      offset: 0,
    },
    type: 'to',
    css: {
      filter: 'blur(4px)',
    },
  },

  {
    name: 'Contact Hero Content',
    el: '.js-animate-contact-hero-content',
    sceneOpts: {
      triggerElement: '.js-animate-contact-hero',
      triggerHook: 0.5,
      duration: 300,
      offset: 0,
    },
    type: 'to',
    css: {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },

  {
    name: 'Skills Content',
    el: '.js-animate-trigger-skills-content',
    sceneOpts: {
      triggerElement: '.js-animate-skills-content',
      triggerHook: 'onEnter',
      offset: 150,
    },
    type: 'class-toggle',
    activeClass: 'skills--active',
  },

  {
    name: 'Stagger main skills',
    el: '.js-animate-main-skill',
    sceneOpts: {
      triggerElement: '.js-animate-trigger-main-skill',
      triggerHook: 'onEnter',
      offset: 100,
      duration: 400,
    },
    type: 'staggerFromTo',
    fromCSS: {
      opacity: 0,
      transform: 'translateY(50px)',
    },
    toCSS: {
      opacity: 1,
      transform: 'translateY(0)',
    },
    staggerGap: 1,
  },

  {
    name: 'Skills separator',
    el: '.js-animate-line-skills-separator',
    sceneOpts: {
      triggerElement: '.js-animate-trigger-line-skills-separator',
      triggerHook: 'onEnter',
      duration: 150,
      offset: 150,
    },
    type: 'to',
    css: {
      transform: 'translateX(0)',
    },
  },

  {
    name: 'Skills Workflow',
    el: '.js-animate-workflow',
    sceneOpts: {
      triggerElement: '.js-animate-trigger-workflow',
      triggerHook: 'onEnter',
      duration: 100,
      offset: 100,
    },
    type: 'to',
    css: {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },

  {
    name: 'Skills Design',
    el: '.js-animate-design',
    sceneOpts: {
      triggerElement: '.js-animate-trigger-design',
      triggerHook: 'onEnter',
      duration: 100,
      offset: 200,
    },
    type: 'to',
    css: {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
]
