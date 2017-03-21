import Request from 'superagent'

class AjaxForm {
  constructor(options) {
    this.form = options.el
    this.debug = (typeof options.debug !== 'undefined') ? options.debug : false
    this.resultDelay = options.resultDelay
    this.action = this.form.getAttribute('action')
    this.setupSubmit()
  }

  setupSubmit() {
    this.form.addEventListener('submit', (event) => {
      const formData = new FormData(this.form)
      event.preventDefault()
      this.form.classList.add('form--loading')
      this.sendRequest(formData)
    })
  }

  sendRequest(formData) {
    Request.post(this.action)
      .send(formData)
      .set('Accept', 'application/json')
      .then(() => {
        setTimeout(() => {
          this.form.classList.add('form--success')
        }, this.resultDelay)
      },
      () => {
        setTimeout(() => {
          this.form.classList.add('form--failed')
        }, this.resultDelay)
      })
  }
}

export default AjaxForm
