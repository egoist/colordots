'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

(function () {
  var $ = document.querySelector.bind(document);

  var Colordots = (function () {
    _createClass(Colordots, null, [{
      key: 'styles',
      value: '\n      .colordot {\n        height: 40px;\n        width: 40px;\n        display: inline-block;\n        border-radius: 50%;\n        opacity: .88;\n      }\n    ',
      enumerable: true
    }]);

    function Colordots() {
      _classCallCheck(this, Colordots);

      appendCSS(Colordots.styles);
    }

    _createClass(Colordots, [{
      key: 'set',
      value: function set(key, value) {
        this[key] = value;
      }
    }, {
      key: 'get',
      value: function get() {
        this.generate();
        return this.html;
      }
    }, {
      key: 'generate',
      value: function generate() {
        this.html = '<div class="colordots">' + this.dots.map(function (dot) {
          var style = '';
          for (var key in dot) {
            style += key + ':' + dot[key] + ';';
          }
          return '<span class="colordot" style="' + style + '"></span>';
        }).join('') + '</div>';
      }
    }, {
      key: 'render',
      value: function render(selector) {
        this.generate();
        $(selector).innerHTML = this.html;
      }
    }]);

    return Colordots;
  })();

  function appendCSS(css) {
    var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style');

    style.type = 'text/css';
    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }

    head.appendChild(style);
  }

  if (typeof window !== 'undefined') {
    window.Colordots = Colordots;
  } else if (typeof module !== 'undefined') {
    module.exports = Colordots;
  }
})();