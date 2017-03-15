class EventTracking {
  constructor(options) {
    this.local = true
    this.setupLinkTracking()
  }

  setupLinkTracking() {
    document.addEventListener('click', (event) => {
      if (event.target.Modernizr.prefixed('matchesSelector', document.body)('a, a *')) {
        const href = event.target.href
        let link = event.target

        if (!href) {
          link = this.findUpTag(event.target, 'href')
        }

        const name = link.getAttribute('data-event-name')
        const value = link.getAttribute('data-event-value')

        if (name && value) {
          this.sendEvent(name, value)
        }
      }
    })
  }

  sendEvent(name, value) {
    if (this.local) {
      console.log(`Log event '${name}', with a value of '${value}' to Analytics`)
    } else {
      //Post to Analytics
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
