import lineSegmentTemplate from '../../templates/partials/line-segment.hbs'

class LineSegments {
  constructor() {
    this.generate()
  }

  generate() {
    const horizontalLineData = LineSegments.getLineData('horizontal', 'h')
    const verticalLineData = LineSegments.getLineData('vertical', 'v')
    this.lineData = horizontalLineData.concat(verticalLineData)

    this.lineData.forEach((lineData) => {
      const html = LineSegments.getLineNode(LineSegments.buildLine(lineData))
      lineData.parent.appendChild(html)
    })
  }

  static getLineNode(html) {
    const div = document.createElement('div')
    div.innerHTML = html
    return div.childNodes[1]
  }

  static buildLine(args) {
    return lineSegmentTemplate(args)
  }

  static getLineData(type, prefix) {
    const dataPrefix = `data-line-${prefix}`
    const containers = document.querySelectorAll(`[${dataPrefix}]`)
    const lineData = []

    for (let i = 0; i < containers.length; i += 1) {
      const el = containers[i]

      lineData.push({
        parent: el,
        name: el.getAttribute(`${dataPrefix}`),
        class: el.getAttribute(`${dataPrefix}-class`),
        fromLeft: el.getAttribute(`${dataPrefix}-fromLeft`),
        [type]: true,
      })
    }

    return lineData
  }
}

export default LineSegments
