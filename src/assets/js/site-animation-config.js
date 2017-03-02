export default [
  {
    name: 'Show header',
    el: 'body',
    sceneOpts: {
      triggerElement: '.js-trigger-header',
      triggerHook: 'onLeave',
      offset: -50,
    },
    type: 'class-toggle',
    activeClass: 'mobile-header-active'
  },
  {
    name: 'Show header',
    el: 'body',
    sceneOpts: {
      triggerElement: '.js-trigger-header',
      triggerHook: 'onLeave',
      offset: -60,
    },
    type: 'class-toggle',
    activeClass: 'desktop-header-active'
  },

  {
    name: 'Introduction',
    el: '.js-introduction-content',
    sceneOpts: {
      triggerElement: '.js-trigger-introduction',
      triggerHook: 'onLeave',
      duration: 400,
      offset: -150,
    },
    type: 'to',
    css: {
      opacity: 0,
      transform: 'translateY(-100px)'
    }
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
      transform: 'translateY(0)'
    }
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
      transform: 'translateY(0)'
    }
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
      transform: 'translateY(0)'
    }
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
      transform: 'translateX(0)'
    }
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
      transform: 'translateX(0)'
    }
  },

  {
    name: 'About Content',
    el: '.js-animate-about-content',
    sceneOpts: {
      triggerElement: '.js-animate-about-content',
      triggerHook: 'onEnter',
      offset: 200,
    },
    type: 'class-toggle',
    activeClass: 'about__content--active'
  },

]
