import lineSegmentTemplate from '../../templates/partials/line-segment.hbs'

class LineSegments {
  constructor() {
    this.generate()
  }

  generate() {
    this.linesGenerated = new Promise((resolve) => {
      const horizontalLineData = LineSegments.getLineData('horizontal', 'h')
      const verticalLineData = LineSegments.getLineData('vertical', 'v')
      this.lineData = horizontalLineData.concat(verticalLineData)

      this.lineData.forEach((lineData, index) => {
        const line = LineSegments.buildLine(lineData)
        lineData.parent.appendChild(line)
        this.lineData[index].el = line

        if (index === this.lineData.length - 1) {
          resolve('Lines generated and inserted')
        }
      })
    })
  }

  static getLineNode(html) {
    const div = document.createElement('div')
    div.innerHTML = html
    return div.childNodes[1]
  }

  static buildLine(args) {
    return LineSegments.getLineNode(lineSegmentTemplate(args))
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
        fromLeft: el.getAttribute(`${dataPrefix}-from-left`),
        [type]: true,
      })
    }

    return lineData
  }
}

export default LineSegments
