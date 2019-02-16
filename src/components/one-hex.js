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
          fill: #C3C3C3;
          stroke: black;
          pointer-events:auto;
          z-index: 10;
          cursor: pointer;
        }
        .container{
          display: relative;
        }
        .Elephant{
          position: absolute;
          left: 45px;
          top: 45px;
          z-index: 50;
          transform: rotate(30deg);
          display: var(--elephant-display, none);
        }
      </style>

      <div class="container">

<svg width="61px" height="61px" viewBox="0 0 61 61" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="Elephant">
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Desktop-HD" transform="translate(-359.000000, -391.000000)">
            <g id="E-B" transform="translate(359.000000, 391.000000)">
                <g id="Tan" transform="translate(0.602357, 0.930594)">
                    <g id="noun_Elephant_912737">
                        <ellipse id="Oval" fill="#000000" cx="30" cy="29.5507546" rx="25.3333333" ry="24.9539705"></ellipse>
                        <g id="Group" transform="translate(8.000000, 15.760402)" fill-rule="nonzero">
                            <path d="M10.0121212,16.1580607 C9.81346801,16.0796235 9.53535354,16.040405 9.37643098,16.1188421 C8.93939394,16.2757165 9.57508418,17.8052417 8.22424242,17.6483673 C7.23097643,17.5307115 6.95286195,14.7069728 7.19124579,13.0205732 C7.19124579,13.0205732 7.46936027,12.5891687 8.02558923,12.3146385 C7.86666667,12.2362013 7.62828283,12.1577641 7.42962963,12.0008898 C6.35690236,13.1774476 4.88686869,13.5304149 4.88686869,13.5304149 C4.64848485,13.6088521 4.41010101,13.6872893 4.17171717,13.7657265 L4.13198653,13.7657265 C3.89360269,13.8441637 3.69494949,13.8833823 3.4962963,13.9226009 L3.4962963,13.9226009 C0.635690236,14.5500984 0,13.0205732 0,13.0205732 C0.357575758,15.1775959 3.53602694,14.589317 3.53602694,14.589317 L3.57575758,14.5108798 C3.93333333,17.099307 5.04579125,20.0014829 8.34343434,20.0407015 C9.25723906,20.0407015 10.7670034,19.2563297 10.5683502,16.903214 C10.5683502,16.5502467 10.3299663,16.2364979 10.0121212,16.1580607 Z" id="Shape" fill="#FFFFFF"></path>
                            <path d="M13.9454545,13.7265079 C14.8592593,13.9226009 16.76633,11.5694852 19.0309764,10.5105832 C21.3750842,9.45168116 22.3286195,5.84357051 20.9380471,2.98061314 C20.9380471,2.98061314 19.6666667,0.19609297 17.7993266,0.156874376 C15.9319865,0.156874376 13.0713805,1.17655782 13.0713805,1.17655782 C11.2835017,0.78437188 10.369697,1.13733923 9.73400673,1.17655782 C9.0983165,1.21577641 7.03232323,3.64732924 7.03232323,3.64732924 C7.03232323,3.64732924 5.24444444,6.27497504 4.80740741,8.07903037 C4.41010101,9.8046485 3.33737374,10.0399601 3.45656566,12.942136 C5.04579125,12.4322943 6.03905724,11.4126109 6.1979798,11.3341737 C6.79393939,11.0988621 7.31043771,11.3733923 7.50909091,11.5694852 C7.62828283,11.6479224 7.98585859,11.9616712 8.58181818,12.0401084 L8.58181818,12.0401084 C8.8996633,12.079327 9.2969697,12.0008898 9.89292929,11.6087038 C9.93265993,11.5694852 9.97239057,11.5694852 10.0121212,11.5302666 C10.5286195,10.7458948 10.6080808,9.37324397 10.6080808,9.37324397 C10.8464646,10.0399601 10.6875421,10.7851134 10.5286195,11.2949551 C10.9259259,11.1772993 11.362963,11.0596435 12.2767677,10.628239 C12.2767677,10.628239 12.356229,8.98105803 13.1508418,7.09856552 C13.9057239,5.33372879 13.9851852,4.70623128 13.9851852,4.62779409 C13.9851852,4.70623128 13.8262626,6.03966348 13.1508418,8.62809068 C12.4754209,11.4126109 13.0316498,13.5304149 13.9454545,13.7265079 Z M8.22424242,6.82403536 C8.22424242,6.82403536 8.22424242,6.74559817 8.58181818,6.58872379 C8.93939394,6.43184942 9.45589226,6.39263082 9.45589226,6.39263082 C9.45589226,6.39263082 9.01885522,7.76528161 8.22424242,6.82403536 Z" id="Shape" fill="#FFFFFF"></path>
                            <path d="M38.6579125,21.8055383 C39.1744108,20.7466362 38.8565657,20.1191387 38.6579125,19.6877342 C38.4592593,19.2563297 38.5784512,17.4914929 38.5784512,17.4914929 C38.7771044,15.9619678 38.6181818,12.6283873 38.5784512,11.7263596 C38.4989899,10.236053 37.823569,9.41246256 37.7043771,9.25558819 C36.7111111,6.94169114 34.406734,4.00029659 32.5393939,3.41201768 C30.0760943,2.66686439 26.4208754,2.98061314 24.8713805,2.66686439 C23.3218855,2.35311564 22.0107744,1.64718095 22.0107744,1.64718095 C22.0107744,1.64718095 21.4148148,1.37265079 20.6996633,1.25499501 C20.6996633,1.25499501 22.2491582,2.74530158 22.2491582,5.72591473 C22.2491582,8.70652787 20.5407407,10.5890204 19.6666667,10.9419877 C18.7925926,11.2949551 18.5542088,11.6087038 17.6006734,12.2362013 C16.647138,12.8636988 15.6538721,14.197131 14.6606061,14.3540054 C14.1441077,14.4716612 13.7070707,14.393224 13.7070707,14.393224 C13.7070707,14.393224 13.786532,14.589317 14.1838384,15.2560331 C14.5811448,15.9227492 15.1373737,17.0208698 15.1373737,17.0208698 L15.216835,14.7854099 C15.3757576,15.7658748 15.4949495,16.6286839 15.4949495,16.6286839 C15.4949495,19.413204 16.0114478,19.9230458 16.210101,21.060385 C16.5279461,22.8644403 16.9649832,24.1194353 16.9252525,25.1391188 C16.8855219,25.7666163 16.2498316,26.080365 15.9319865,26.1980208 C15.6141414,26.3548952 15.3360269,26.5902067 15.216835,26.9431741 C14.7400673,28.4726993 18.63367,28.0020761 19.9050505,27.7667646 C21.3353535,27.4922344 20.0639731,25.4528675 20.0639731,25.4528675 C20.0639731,25.4528675 20.183165,22.4330358 20.0639731,21.6486639 C19.9447811,20.864292 20.2626263,18.1189904 20.2626263,18.1189904 C21.3750842,16.3541537 21.0969697,13.2558848 21.0969697,13.2558848 C21.0969697,13.2558848 21.5340067,15.0599401 21.4545455,15.9227492 C21.2956229,17.5307115 20.8983165,18.158209 20.8983165,18.158209 L22.6861953,18.9817995 C27.8909091,20.3544503 30.8309764,19.413204 30.8309764,19.413204 C31.5858586,20.7858548 33.413468,21.6878825 33.9299663,24.5900584 C34.0888889,25.5313047 32.8572391,25.7666163 32.6585859,26.9431741 C32.420202,28.1589505 35.2410774,27.727546 36.5124579,27.6098902 C37.7838384,27.4530158 37.1481481,25.6489605 37.1481481,25.6489605 C37.2673401,23.8449052 36.2740741,20.7074176 36.830303,18.7857065 C37.386532,16.8639954 37.4659933,14.5500984 37.4659933,13.6872893 C37.4659933,13.334322 37.5454545,12.9029174 37.6646465,12.4715129 C37.823569,13.4911963 37.823569,14.9030657 37.823569,15.9619678 C37.823569,17.7660231 38.0619529,19.7661714 38.0619529,19.7661714 C37.3468013,21.3741337 38.0222222,22.5506916 38.1811448,22.7860031 C38.3003367,22.7467845 38.3400673,22.4722544 38.6579125,21.8055383 Z" id="Shape" fill="#FFFFFF"></path>
                            <path d="M38.3400673,22.8644403 C38.3400673,22.8644403 38.3400673,22.8644403 38.3003367,22.8252217 C38.3003367,22.8644403 38.3400673,22.8644403 38.3400673,22.8644403 Z" id="Shape" fill="#000000"></path>
                            <path d="M16.3690236,23.8841238 C16.0909091,22.5506916 15.2962963,21.6486639 15.6141414,20.8250734 C15.6141414,20.8250734 14.9784512,18.0405532 14.9784512,17.6483673 L14.7003367,17.2169628 C14.7003367,17.2169628 12.7535354,20.0799201 12.9124579,21.3349151 C13.0316498,22.5899102 13.9057239,23.1389705 14.1838384,24.1194353 C14.4619529,25.1391188 13.5878788,25.9234906 14.0249158,26.276458 L14.7003367,26.5902067 C14.7003367,26.5902067 14.9784512,25.9627092 15.5744108,25.5705233 C16.1703704,25.1783374 16.6074074,25.217556 16.3690236,23.8841238 Z" id="Shape" fill="#FFFFFF"></path>
                            <path d="M30.4734007,20.1975759 C30.4734007,20.1975759 28.8047138,20.4328875 28.010101,20.1975759 C28.010101,20.1975759 28.2882155,21.1780408 28.010101,22.3545986 C27.7319865,23.5311564 26.8579125,25.0999002 26.8579125,25.0999002 C26.8579125,25.0999002 26.2222222,25.4920861 26.3016835,25.9627092 C26.3811448,26.472551 27.4936027,26.2372394 28.8047138,26.3156766 C30.0760943,26.3941138 29.8774411,25.1391188 29.8774411,25.1391188 C29.8774411,25.1391188 30.9501684,21.5702267 31.3077441,20.9819478 L30.4734007,20.1975759 Z" id="Shape" fill="#FFFFFF"></path>
                        </g>
                        <path d="M29.9999993,1.31336686e-05 C13.446264,1.31336686e-05 2.00000007e-07,13.2449174 2.00000007e-07,29.5507152 C2.00000007e-07,45.8566245 13.446264,59.1014697 29.9999993,59.1014697 C46.5537347,59.1014697 60,45.8566245 60,29.5507152 C60,13.2449174 46.5537347,1.31336686e-05 29.9999993,1.31336686e-05 L29.9999993,1.31336686e-05 Z M29.9999993,2.46257601 C45.202634,2.46257601 57.5,14.5757849 57.5,29.5507152 C57.5,44.5257242 45.202634,56.6389068 29.9999993,56.6389068 C14.7973647,56.6389068 2.50000013,44.5257242 2.50000013,29.5507152 C2.50000013,14.5757849 14.7973647,2.46257601 29.9999993,2.46257601 L29.9999993,2.46257601 Z" id="Shape" fill="#000000" fill-rule="nonzero"></path>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>
      <svg viewBox="[[halfSize]]" transform$="[[rotateVal]]"><polygon points$="{{hex}}" on-click="_click"/></svg>
      </div>
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
      },
      clicks: {
        type: Number,
        value: 0,
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
    console.log(this.position);
    this.clicks += 1;
    if(this.clicks === 2) {
      this.clicks = 0;
    }
    if(this.clicks === 0){
      this.updateStyles({'--elephant-display': 'none'});
    } else {
      this.updateStyles({'--elephant-display': 'block'});
    }
  }
} window.customElements.define('one-hex', OneHex);



