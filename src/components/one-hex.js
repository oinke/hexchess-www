import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../shared-styles.js';

class OneHex extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          width: var(--max-size);
          height: var(--max-size);
          pointer-events:none;    
          
        }
        svg {
          max-width: var(--max-size);
          pointer-events:none;    
        }
        polygon {
          fill: white;
          stroke: black;
          pointer-events:auto;
        }
      </style>
      <svg viewBox="[[halfSize]]" transform$="[[rotateVal]]"><polygon points$="{{hex}}" on-click="_click"/></svg>
    `;
  }
  static get properties() {
    return {
      hex: {
        type: String,
        value: '100,0 50,-87 -50,-87 -100,-0 -50,87 50,87',
      },
      size: {
          type: Number,
          value: 300,
          observer: '_halfSize'
      },
      halfSize: {
          type: String,
      },
      rotate: {
        type: Boolean,
        value: false,
        observer: '_rotate'
      },
      rotateVal: {
        type: String,
      },
      position: {
        type: String
      }

    };
  }
  _halfSize() {
    this.updateStyles({'--max-size': `${this.size}px`});
    const half = this.size / 2;
    const negHalf = half - (half * 2);
    const size = this.size;
    this.halfSize = `${negHalf} ${negHalf} ${size} ${size}`;
  }
  _rotate(){
    if(this.rotate === true) {
      this.rotateVal = 'rotate(-30)';
    } else {
      this.rotateVal = 'rotate(-0)';
    }
  }
  _click(){
    console.log(this.position)
  }
} window.customElements.define('one-hex', OneHex);
