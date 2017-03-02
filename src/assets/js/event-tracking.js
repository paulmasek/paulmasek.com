class EventTracking {
  constructor(options) {
    this.local = true;
    this.setupLinkTracking()
  }

  setupLinkTracking() {
    const matches = document.body.matchesSelector || document.body.webkitMatchesSelector || document.body.mozMatchesSelector || document.body.msMatchesSelector || document.body.webkitMatchesSelector || document.body.matchesSelector

    document.addEventListener('click', (event) => {
      if (event.target.matches('a, a *')) {

        let href = event.target.href
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

  findUpTag(el, attr) {
    while (el.parentNode) {
        el = el.parentNode
        if (el[attr]) {
            return el
        }
    }
    return null
  }

  sendEvent(name, value) {
    if (this.local) {
      console.log(`Log event '${name}', with a value of '${value}' to Analytics`)
    } else {
      //Post to Analytics
    }
  }
}

export default EventTracking
