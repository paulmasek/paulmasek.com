class EventTracking {
  constructor(options) {
    this.local = (typeof options.local !== 'undefined') ? options.local : false
    this.setupLinkTracking()
  }

  setupLinkTracking() {
    const matches = Modernizr.prefixed('matchesSelector', document.body, false)

    document.addEventListener('click', (event) => {
      if (event.target[matches]('a, a *')) {
        const href = event.target.href
        let link = event.target

        if (!href) {
          link = this.findUpTag(event.target, 'href')
        }

        const name = link.getAttribute('data-event-name')
        const value = link.getAttribute('data-event-value')

        if (name && value) {
          this.sendEvent('Tracked link', name, value)
        }
      }
    })
  }

  sendEvent(category, action, label) {
    const analyticsDefined = typeof ga !== 'undefined'

    if (!this.local && analyticsDefined) {
      ga('send', {
        hitType: 'event',
        eventCategory: category,
        eventAction: action,
        eventLabel: label,
      })
    } else {
      console.log(`Log event '${action}', with a label of '${label}' to Analytics (part of ${category} category)`)
      if (!analyticsDefined) {
        console.log('Google analytics is undefined - check it is installed correctly')
      }
    }
  }

  static findUpTag(el, attr) {
    let node = el

    while (node.parentNode) {
      node = node.parentNode
      if (node[attr]) {
        return node
      }
    }
    return null
  }
}

export default EventTracking
