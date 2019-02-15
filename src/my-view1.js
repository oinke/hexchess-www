import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './components/one-hex.js';
import './shared-styles.js';

class MyView1 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
          padding: 10px;
        }
        .board{
          position: relative;
          width: 1000px;
          height: 1000px;
          transform: rotate(-30deg);
          
        }
        one-hex{
          width: 150px;
          position: absolute;
          transform-origin: center;
        }
        .P5-P3 {transform: translate(870px, 283px)}
        .P5-P2 {transform: translate(870px, 370px)}
        .P5-P1 {transform: translate(870px, 457px)}
        .P5-N0 {transform: translate(870px, 544px)}
        .P5-N1 {transform: translate(870px, 631px)}
        .P5-N2 {transform: translate(870px, 718px)}

        .P4-P3 {transform: translate(796px, 239px)}
        .P4-P2 {transform: translate(796px, 326px)}
        .P4-P1 {transform: translate(796px, 413px)}
        .P4-N0 {transform: translate(796px, 500px)}
        .P4-N1 {transform: translate(796px, 587px)}
        .P4-N2 {transform: translate(796px, 674px)}
        .P4-N3 {transform: translate(796px, 761px)}

        .P3-P4 {transform: translate(722px, 196px)}
        .P3-P3 {transform: translate(722px, 283px)}
        .P3-P2 {transform: translate(722px, 370px)}
        .P3-P1 {transform: translate(722px, 457px)}
        .P3-N0 {transform: translate(722px, 544px)}
        .P3-N1 {transform: translate(722px, 631px)}
        .P3-N2 {transform: translate(722px, 718px)}
        .P3-N3 {transform: translate(722px, 805px)}

        .P2-P4 {transform: translate(648px, 152px)}
        .P2-P3 {transform: translate(648px, 239px)}
        .P2-P2 {transform: translate(648px, 326px)}
        .P2-P1 {transform: translate(648px, 413px)}
        .P2-N0 {transform: translate(648px, 500px)}
        .P2-N1 {transform: translate(648px, 587px)}
        .P2-N2 {transform: translate(648px, 674px)}
        .P2-N3 {transform: translate(648px, 761px)}
        .P2-N4 {transform: translate(648px, 848px)}

        .P1-P5 {transform: translate(574px, 109px)}
        .P1-P4 {transform: translate(574px, 196px)}
        .P1-P3 {transform: translate(574px, 283px)}
        .P1-P2 {transform: translate(574px, 370px)}
        .P1-P1 {transform: translate(574px, 457px)}
        .P1-N0 {transform: translate(574px, 544px)}
        .P1-N1 {transform: translate(574px, 631px)}
        .P1-N2 {transform: translate(574px, 718px)}
        .P1-N3 {transform: translate(574px, 805px)}
        .P1-N4 {transform: translate(574px, 892px)}
        .P1-N5 {transform: translate(574px, 979px)}

        .N0-P5 {transform: translate(500px, 65px)}
        .N0-P4 {transform: translate(500px, 152px)}
        .N0-P3 {transform: translate(500px, 239px)}
        .N0-P2 {transform: translate(500px, 326px)}
        .N0-P1 {transform: translate(500px, 413px)}
        .N0-N0 {transform: translate(500px, 500px)}
        .N0-N1 {transform: translate(500px, 587px)}
        .N0-N2 {transform: translate(500px, 674px)}
        .N0-N3 {transform: translate(500px, 761px)}
        .N0-N4 {transform: translate(500px, 848px)}
        .N0-N5 {transform: translate(500px, 935px)}

        .N1-P5 {transform: translate(426px, 109px)}
        .N1-P4 {transform: translate(426px, 196px)}
        .N1-P3 {transform: translate(426px, 283px)}
        .N1-P2 {transform: translate(426px, 370px)}
        .N1-P1 {transform: translate(426px, 457px)}
        .N1-N0 {transform: translate(426px, 544px)}
        .N1-N1 {transform: translate(426px, 631px)}
        .N1-N2 {transform: translate(426px, 718px)}
        .N1-N3 {transform: translate(426px, 805px)}
        .N1-N4 {transform: translate(426px, 892px)}
        .N1-N5 {transform: translate(426px, 979px)}

        .N2-P4 {transform: translate(353px, 152px)}
        .N2-P3 {transform: translate(353px, 239px)}
        .N2-P2 {transform: translate(353px, 326px)}
        .N2-P1 {transform: translate(353px, 413px)}
        .N2-N0 {transform: translate(353px, 500px)}
        .N2-N1 {transform: translate(353px, 587px)}
        .N2-N2 {transform: translate(353px, 674px)}
        .N2-N3 {transform: translate(353px, 761px)}
        .N2-N4 {transform: translate(353px, 848px)}

        .N3-P4 {transform: translate(279px, 196px)}
        .N3-P3 {transform: translate(279px, 283px)}
        .N3-P2 {transform: translate(279px, 370px)}
        .N3-P1 {transform: translate(279px, 457px)}
        .N3-N0 {transform: translate(279px, 544px)}
        .N3-N1 {transform: translate(279px, 631px)}
        .N3-N2 {transform: translate(279px, 718px)}
        .N3-N3 {transform: translate(279px, 805px)}

        .N4-P3 {transform: translate(205px, 239px)}
        .N4-P2 {transform: translate(205px, 326px)}
        .N4-P1 {transform: translate(205px, 413px)}
        .N4-N0 {transform: translate(205px, 500px)}
        .N4-N1 {transform: translate(205px, 587px)}
        .N4-N2 {transform: translate(205px, 674px)}
        .N4-N3 {transform: translate(205px, 761px)}

        .N5-P3 {transform: translate(131px, 283px)}
        .N5-P2 {transform: translate(131px, 370px)}
        .N5-P1 {transform: translate(131px, 457px)}
        .N5-N0 {transform: translate(131px, 544px)}
        .N5-N1 {transform: translate(131px, 631px)}
        .N5-N2 {transform: translate(131px, 718px)}

      </style>

      <div class="board">

        <one-hex class="P5-P3" state="[[P5-P3]]" position="P5-P3"></one-hex>
        <one-hex class="P5-P2" state="[[P5-P2]]" position="P5-P2"></one-hex>
        <one-hex class="P5-P1" state="[[P5-P1]]" position="P5-P1"></one-hex>
        <one-hex class="P5-N0" state="[[P5-N0]]" position="P5-N0"></one-hex>
        <one-hex class="P5-N1" state="[[P5-N1]]" position="P5-N1"></one-hex>
        <one-hex class="P5-N2" state="[[P5-N2]]" position="P5-N2"></one-hex>

        <one-hex class="P4-P3" state="[[P4-P3]]" position="P4-P3"></one-hex>
        <one-hex class="P4-P2" state="[[P4-P2]]" position="P4-P2"></one-hex>
        <one-hex class="P4-P1" state="[[P4-P1]]" position="P4-P1"></one-hex>
        <one-hex class="P4-N0" state="[[P4-N0]]" position="P4-N0"></one-hex>
        <one-hex class="P4-N1" state="[[P4-N1]]" position="P4-N1"></one-hex>
        <one-hex class="P4-N2" state="[[P4-N2]]" position="P4-N2"></one-hex>
        <one-hex class="P4-N3" state="[[P4-N3]]" position="P4-N3"></one-hex>

        <one-hex class="P3-P4" state="[[P3-P4]]" position="P3-P4"></one-hex>
        <one-hex class="P3-P3" state="[[P3-P3]]" position="P3-P3"></one-hex>
        <one-hex class="P3-P2" state="[[P3-P2]]" position="P3-P2"></one-hex>
        <one-hex class="P3-P1" state="[[P3-P1]]" position="P3-P1"></one-hex>
        <one-hex class="P3-N0" state="[[P3-N0]]" position="P3-N0"></one-hex>
        <one-hex class="P3-N1" state="[[P3-N1]]" position="P3-N1"></one-hex>
        <one-hex class="P3-N2" state="[[P3-N2]]" position="P3-N2"></one-hex>
        <one-hex class="P3-N3" state="[[P3-N3]]" position="P3-N3"></one-hex>

        <one-hex class="P2-P4" state="[[P2-P4]]" position="P2-P4"></one-hex>
        <one-hex class="P2-P3" state="[[P2-P3]]" position="P2-P3"></one-hex>
        <one-hex class="P2-P2" state="[[P2-P2]]" position="P2-P2"></one-hex>
        <one-hex class="P2-P1" state="[[P2-P1]]" position="P2-P1"></one-hex>
        <one-hex class="P2-N0" state="[[P2-N0]]" position="P2-N0"></one-hex>
        <one-hex class="P2-N1" state="[[P2-N1]]" position="P2-N1"></one-hex>
        <one-hex class="P2-N2" state="[[P2-N2]]" position="P2-N2"></one-hex>
        <one-hex class="P2-N3" state="[[P2-N3]]" position="P2-N3"></one-hex>
        <one-hex class="P2-N4" state="[[P2-N4]]" position="P2-N4"></one-hex>

        <one-hex class="P1-P5" state="[[P1-P5]]" position="P1-P5"></one-hex>
        <one-hex class="P1-P4" state="[[P1-P4]]" position="P1-P4"></one-hex>
        <one-hex class="P1-P3" state="[[P1-P3]]" position="P1-P3"></one-hex>
        <one-hex class="P1-P2" state="[[P1-P2]]" position="P1-P2"></one-hex>
        <one-hex class="P1-P1" state="[[P1-P1]]" position="P1-P1"></one-hex>
        <one-hex class="P1-N0" state="[[P1-N0]]" position="P1-N0"></one-hex>
        <one-hex class="P1-N1" state="[[P1-N1]]" position="P1-N1"></one-hex>
        <one-hex class="P1-N2" state="[[P1-N2]]" position="P1-N2"></one-hex>
        <one-hex class="P1-N3" state="[[P1-N3]]" position="P1-N3"></one-hex>
        <one-hex class="P1-N4" state="[[P1-N4]]" position="P1-N4"></one-hex>

        <one-hex class="N0-P5" state="[[N0-P5]]" position="N0-P5"></one-hex>
        <one-hex class="N0-P4" state="[[N0-P4]]" position="N0-P4"></one-hex>
        <one-hex class="N0-P3" state="[[N0-P3]]" position="N0-P3"></one-hex>
        <one-hex class="N0-P2" state="[[N0-P2]]" position="N0-P2"></one-hex>
        <one-hex class="N0-P1" state="[[N0-P1]]" position="N0-P1"></one-hex>
        <one-hex class="N0-N0" state="[[N0-N0]]" position="N0-N0"></one-hex>
        <one-hex class="N0-N1" state="[[N0-N1]]" position="N0-N1"></one-hex>
        <one-hex class="N0-N2" state="[[N0-N2]]" position="N0-N2"></one-hex>
        <one-hex class="N0-N3" state="[[N0-N3]]" position="N0-N3"></one-hex>
        <one-hex class="N0-N4" state="[[N0-N4]]" position="N0-N4"></one-hex>
        <one-hex class="N0-N5" state="[[N0-N5]]" position="N0-N5"></one-hex>

        <one-hex class="N1-P5" state="[[N1-P5]]" position="N1-P5"></one-hex>
        <one-hex class="N1-P4" state="[[N1-P4]]" position="N1-P4"></one-hex>
        <one-hex class="N1-P3" state="[[N1-P3]]" position="N1-P3"></one-hex>
        <one-hex class="N1-P2" state="[[N1-P2]]" position="N1-P2"></one-hex>
        <one-hex class="N1-P1" state="[[N1-P1]]" position="N1-P1"></one-hex>
        <one-hex class="N1-N0" state="[[N1-N0]]" position="N1-N0"></one-hex>
        <one-hex class="N1-N1" state="[[N1-N1]]" position="N1-N1"></one-hex>
        <one-hex class="N1-N2" state="[[N1-N2]]" position="N1-N2"></one-hex>
        <one-hex class="N1-N3" state="[[N1-N3]]" position="N1-N3"></one-hex>
        <one-hex class="N1-N4" state="[[N1-N4]]" position="N1-N4"></one-hex>

        <one-hex class="N2-P4" state="[[N2-P4]]" position="N2-P4"></one-hex>
        <one-hex class="N2-P3" state="[[N2-P3]]" position="N2-P3"></one-hex>
        <one-hex class="N2-P2" state="[[N2-P2]]" position="N2-P2"></one-hex>
        <one-hex class="N2-P1" state="[[N2-P1]]" position="N2-P1"></one-hex>
        <one-hex class="N2-N0" state="[[N2-N0]]" position="N2-N0"></one-hex>
        <one-hex class="N2-N1" state="[[N2-N1]]" position="N2-N1"></one-hex>
        <one-hex class="N2-N2" state="[[N2-N2]]" position="N2-N2"></one-hex>
        <one-hex class="N2-N3" state="[[N2-N3]]" position="N2-N3"></one-hex>
        <one-hex class="N2-N4" state="[[N2-N4]]" position="N2-N4"></one-hex>

        <one-hex class="N3-P4" state="[[N3-P4]]" position="N3-P4"></one-hex>
        <one-hex class="N3-P3" state="[[N3-P3]]" position="N3-P3"></one-hex>
        <one-hex class="N3-P2" state="[[N3-P2]]" position="N3-P2"></one-hex>
        <one-hex class="N3-P1" state="[[N3-P1]]" position="N3-P1"></one-hex>
        <one-hex class="N3-N0" state="[[N3-N0]]" position="N3-N0"></one-hex>
        <one-hex class="N3-N1" state="[[N3-N1]]" position="N3-N1"></one-hex>
        <one-hex class="N3-N2" state="[[N3-N2]]" position="N3-N2"></one-hex>
        <one-hex class="N3-N3" state="[[N3-N3]]" position="N3-N3"></one-hex>

        <one-hex class="N4-P3" state="[[N4-P3]]" position="N4-P3"></one-hex>
        <one-hex class="N4-P2" state="[[N4-P2]]" position="N4-P2"></one-hex>
        <one-hex class="N4-P1" state="[[N4-P1]]" position="N4-P1"></one-hex>
        <one-hex class="N4-N0" state="[[N4-N0]]" position="N4-N0"></one-hex>
        <one-hex class="N4-N1" state="[[N4-N1]]" position="N4-N1"></one-hex>
        <one-hex class="N4-N2" state="[[N4-N2]]" position="N4-N2"></one-hex>
        <one-hex class="N4-N3" state="[[N4-N3]]" position="N4-N3"></one-hex>

        <one-hex class="N5-P3" state="[[N5-P3]]" position="N5-P3"></one-hex>
        <one-hex class="N5-P2" state="[[N5-P2]]" position="N5-P2"></one-hex>
        <one-hex class="N5-P1" state="[[N5-P1]]" position="N5-P1"></one-hex>
        <one-hex class="N5-N0" state="[[N5-N0]]" position="N5-N0"></one-hex>
        <one-hex class="N5-N1" state="[[N5-N1]]" position="N5-N1"></one-hex>
        <one-hex class="N5-N2" state="[[N5-N2]]" position="N5-N2"></one-hex>

     
       
      </div>
    `;
  }
}

window.customElements.define('my-view1', MyView1);
