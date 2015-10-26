(() => {
  const $ = document.querySelector.bind(document)
  class Colordots {
    static styles = `
      .colordot {
        height: 40px;
        width: 40px;
        display: inline-block;
        border-radius: 50%;
        opacity: .88;
      }
    `
    constructor () {
      appendCSS(Colordots.styles)
    }
    set (key, value) {
      this[key] = value
    }
    get () {
      this.generate()
      return this.html
    }
    generate () {
      this.html = `<div class="colordots">${this.dots.map(dot => {
        let style = ''
        for (var key in dot) {
          style += key + ':' + dot[key] + ';'
        }
        return '<span class="colordot" style="'+style+'"></span>'
      }).join('')}</div>`
    }
    render (selector) {
      this.generate()
      $(selector).innerHTML = this.html
    }
  }

  function appendCSS (css) {
    const head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style')

    style.type = 'text/css'
    if (style.styleSheet){
      style.styleSheet.cssText = css
    } else {
      style.appendChild(document.createTextNode(css))
    }

    head.appendChild(style)
  }

  if (typeof window !== 'undefined') {
    window.Colordots = Colordots
  } else if (typeof module !== 'undefined') {
    module.exports = Colordots
  }
})();
