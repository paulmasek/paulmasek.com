import Request from 'superagent'

class AjaxForm {
  constructor(options) {
    this.form = options.el
    this.debug = (typeof options.debug !== 'undefined') ? options.debug : false
    this.resultDelay = options.resultDelay
    this.action = this.form.getAttribute('action')
    this.onSubmit = (typeof options.onSubmit !== 'undefined') ? options.onSubmit : false
    this.onSuccess = (typeof options.onSuccess !== 'undefined') ? options.onSuccess : false
    this.onFailed = (typeof options.onFailed !== 'undefined') ? options.onFailed : false
    this.setupSubmit()
  }

  setupSubmit() {
    this.form.addEventListener('submit', (event) => {
      const formData = new FormData(this.form)
      event.preventDefault()
      this.form.classList.add('form--loading')
      if (this.onSubmit) {
        this.onSubmit()
      }
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
          if (this.onSuccess) {
            this.onSuccess()
          }
        }, this.resultDelay)
      },
      () => {
        setTimeout(() => {
          this.form.classList.add('form--failed')
          if (this.onFailed) {
            this.onFailed()
          }
        }, this.resultDelay)
      })
  }
}

export default AjaxForm
