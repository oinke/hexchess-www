import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/app-route/app-location.js';
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
        .board {
          position: relative;
          width: 1131px;
          height: 1131px;
          top: -100px;
          transform-origin: center;
          transform: var(--rotate-board);
          pointer-events:none;  
        }
        one-hex {
          width: 150px;
          position: absolute;
          transform-origin: center;
        }
        button {
          z-index: 9999;
          display: block;
          width: 200px;
          height: 44px;
          font-size: 16px;
          border-radius: 4px;
          padding: 12px;
          color: #C3C3C3;
        }
        a {
          color: cornflowerblue;
        }
        .top-area{
          height: 120px;
          display: block;
        }
        .top-area button{
          cursor: pointer;
          color: #4B4B4B;
          font-weight: 700;
          border: 1px solid #C3C3C3;
          z-index: 9999;

        }

      </style>
      <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>

      <div class="top-area">
        <template is="dom-if" if="{{settings}}">
          <p>You are [[color]] in game [[gameId]], now waiting for white to move.</p>
        </template>
        <template is="dom-if" if="{{!settings}}">
          <a href="/view3">Complete the settings to start</a>
        </template>
        <template is="dom-if" if="{{moveready}}">
          <button on-click="_postMove">Make Move</button>
        </template>
      </div>

      <div class="board">
        <one-hex class="P5_P3" position="P5_P3" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[P5_P3]]"></one-hex>
        <one-hex class="P5_P2" position="P5_P2" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[P5_P2]]"></one-hex>
        <one-hex class="P5_P1" position="P5_P1" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[P5_P1]]"></one-hex>
        <one-hex class="P5_N0" position="P5_N0" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[P5_N0]]"></one-hex>
        <one-hex class="P5_N1" position="P5_N1" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[P5_N1]]"></one-hex>
        <one-hex class="P5_N2" position="P5_N2" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[P5_N2]]"></one-hex>

        <one-hex class="P4_P3" position="P4_P3" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[P4_P3]]"></one-hex>
        <one-hex class="P4_P2" position="P4_P2" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[P4_P2]]"></one-hex>
        <one-hex class="P4_P1" position="P4_P1" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[P4_P1]]"></one-hex>
        <one-hex class="P4_N0" position="P4_N0" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[P4_N0]]"></one-hex>
        <one-hex class="P4_N1" position="P4_N1" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[P4_N1]]"></one-hex>
        <one-hex class="P4_N2" position="P4_N2" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[P4_N2]]"></one-hex>
        <one-hex class="P4_N3" position="P4_N3" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[P4_N3]]"></one-hex>

        <one-hex class="P3_P4" position="P3_P4" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[P3_P4]]"></one-hex>
        <one-hex class="P3_P3" position="P3_P3" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[P3_P3]]"></one-hex>
        <one-hex class="P3_P2" position="P3_P2" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[P3_P2]]"></one-hex>
        <one-hex class="P3_P1" position="P3_P1" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[P3_P1]]"></one-hex>
        <one-hex class="P3_N0" position="P3_N0" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[P3_N0]]"></one-hex>
        <one-hex class="P3_N1" position="P3_N1" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[P3_N1]]"></one-hex>
        <one-hex class="P3_N2" position="P3_N2" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[P3_N2]]"></one-hex>
        <one-hex class="P3_N3" position="P3_N3" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[P3_N3]]"></one-hex>

        <one-hex class="P2_P4" position="P2_P4" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[P2_P4]]"></one-hex>
        <one-hex class="P2_P3" position="P2_P3" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[P2_P3]]"></one-hex>
        <one-hex class="P2_P2" position="P2_P2" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[P2_P2]]"></one-hex>
        <one-hex class="P2_P1" position="P2_P1" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[P2_P1]]"></one-hex>
        <one-hex class="P2_N0" position="P2_N0" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[P2_N0]]"></one-hex>
        <one-hex class="P2_N1" position="P2_N1" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[P2_N1]]"></one-hex>
        <one-hex class="P2_N2" position="P2_N2" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[P2_N2]]"></one-hex>
        <one-hex class="P2_N3" position="P2_N3" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[P2_N3]]"></one-hex>
        <one-hex class="P2_N4" position="P2_N4" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[P2_N4]]"></one-hex>

        <one-hex class="P1_P5" position="P1_P5" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[P1_P5]]"></one-hex>
        <one-hex class="P1_P4" position="P1_P4" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[P1_P4]]"></one-hex>
        <one-hex class="P1_P3" position="P1_P3" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[P1_P3]]"></one-hex>
        <one-hex class="P1_P2" position="P1_P2" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[P1_P2]]"></one-hex>
        <one-hex class="P1_P1" position="P1_P1" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[P1_P1]]"></one-hex>
        <one-hex class="P1_N0" position="P1_N0" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[P1_N0]]"></one-hex>
        <one-hex class="P1_N1" position="P1_N1" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[P1_N1]]"></one-hex>
        <one-hex class="P1_N2" position="P1_N2" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[P1_N2]]"></one-hex>
        <one-hex class="P1_N3" position="P1_N3" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[P1_N3]]"></one-hex>
        <one-hex class="P1_N4" position="P1_N4" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[P1_N4]]"></one-hex>

        <one-hex class="N0_P5" position="N0_P5" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[N0_P5]]"></one-hex>
        <one-hex class="N0_P4" position="N0_P4" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[N0_P4]]"></one-hex>
        <one-hex class="N0_P3" position="N0_P3" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[N0_P3]]"></one-hex>
        <one-hex class="N0_P2" position="N0_P2" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[N0_P2]]"></one-hex>
        <one-hex class="N0_P1" position="N0_P1" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[N0_P1]]"></one-hex>
        <one-hex class="N0_N0" position="N0_N0" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[N0_N0]]"></one-hex>
        <one-hex class="N0_N1" position="N0_N1" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[N0_N1]]"></one-hex>
        <one-hex class="N0_N2" position="N0_N2" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[N0_N2]]"></one-hex>
        <one-hex class="N0_N3" position="N0_N3" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[N0_N3]]"></one-hex>
        <one-hex class="N0_N4" position="N0_N4" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[N0_N4]]"></one-hex>
        <one-hex class="N0_N5" position="N0_N5" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[N0_N5]]"></one-hex>

        <one-hex class="N1_P5" position="N1_P5" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[N1_P5]]"></one-hex>
        <one-hex class="N1_P4" position="N1_P4" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[N1_P4]]"></one-hex>
        <one-hex class="N1_P3" position="N1_P3" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[N1_P3]]"></one-hex>
        <one-hex class="N1_P2" position="N1_P2" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[N1_P2]]"></one-hex>
        <one-hex class="N1_P1" position="N1_P1" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[N1_P1]]"></one-hex>
        <one-hex class="N1_N0" position="N1_N0" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[N1_N0]]"></one-hex>
        <one-hex class="N1_N1" position="N1_N1" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[N1_N1]]"></one-hex>
        <one-hex class="N1_N2" position="N1_N2" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[N1_N2]]"></one-hex>
        <one-hex class="N1_N3" position="N1_N3" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[N1_N3]]"></one-hex>
        <one-hex class="N1_N4" position="N1_N4" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[N1_N4]]"></one-hex>

        <one-hex class="N2_P4" position="N2_P4" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[N2_P4]]"></one-hex>
        <one-hex class="N2_P3" position="N2_P3" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[N2_P3]]"></one-hex>
        <one-hex class="N2_P2" position="N2_P2" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[N2_P2]]"></one-hex>
        <one-hex class="N2_P1" position="N2_P1" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[N2_P1]]"></one-hex>
        <one-hex class="N2_N0" position="N2_N0" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[N2_N0]]"></one-hex>
        <one-hex class="N2_N1" position="N2_N1" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[N2_N1]]"></one-hex>
        <one-hex class="N2_N2" position="N2_N2" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[N2_N2]]"></one-hex>
        <one-hex class="N2_N3" position="N2_N3" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[N2_N3]]"></one-hex>
        <one-hex class="N2_N4" position="N2_N4" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[N2_N4]]"></one-hex>

        <one-hex class="N3_P4" position="N3_P4" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[N3_P4]]"></one-hex>
        <one-hex class="N3_P3" position="N3_P3" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[N3_P3]]"></one-hex>
        <one-hex class="N3_P2" position="N3_P2" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[N3_P2]]"></one-hex>
        <one-hex class="N3_P1" position="N3_P1" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[N3_P1]]"></one-hex>
        <one-hex class="N3_N0" position="N3_N0" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[N3_N0]]"></one-hex>
        <one-hex class="N3_N1" position="N3_N1" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[N3_N1]]"></one-hex>
        <one-hex class="N3_N2" position="N3_N2" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[N3_N2]]"></one-hex>
        <one-hex class="N3_N3" position="N3_N3" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[N3_N3]]"></one-hex>

        <one-hex class="N4_P3" position="N4_P3" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[N4_P3]]"></one-hex>
        <one-hex class="N4_P2" position="N4_P2" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[N4_P2]]"></one-hex>
        <one-hex class="N4_P1" position="N4_P1" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[N4_P1]]"></one-hex>
        <one-hex class="N4_N0" position="N4_N0" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[N4_N0]]"></one-hex>
        <one-hex class="N4_N1" position="N4_N1" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[N4_N1]]"></one-hex>
        <one-hex class="N4_N2" position="N4_N2" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[N4_N2]]"></one-hex>
        <one-hex class="N4_N3" position="N4_N3" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[N4_N3]]"></one-hex>

        <one-hex class="N5_P3" position="N5_P3" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[N5_P3]]"></one-hex>
        <one-hex class="N5_P2" position="N5_P2" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[N5_P2]]"></one-hex>
        <one-hex class="N5_P1" position="N5_P1" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[N5_P1]]"></one-hex>
        <one-hex class="N5_N0" position="N5_N0" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[N5_N0]]"></one-hex>
        <one-hex class="N5_N1" position="N5_N1" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[N5_N1]]"></one-hex>
        <one-hex class="N5_N2" position="N5_N2" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[N5_N2]]"></one-hex>
      </div>
      
    `;
  }
  static get properties() {
    return {
      route: {
        type: String,
        observer: '_routeChanged'
      },
      rotation: {
        type: String,
      },
      selected: {
        type: String,
        observer: '_selected'
      },
      light: {
        type: String,
      },
      move: {
        type: String,
      },
      tempArray: {
        type: Array,
        value: [],
      },
      moveready: {
        type: Boolean,
        valaue: false,
      }
    }
  }

  ready() {
    super.ready();
    const url = localStorage.getItem('getBoard');
    const gameId = localStorage.getItem('gameId');
    const data = {gameId};
    setInterval(() => { 
      fetch(url, {
        method: 'GET',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'},
      })
          .then((response) => {
            return response.json();
          })
          .then((response) => {
            console.log(`Server replied with ${JSON.stringify(response)}`)
            if(response && response.board){
              this._renderBoard(response.board);
            }
          })
          .catch((error)=>{
            console.log(`GET Board Endpoint error ${JSON.stringify(error)}`)
          })
     }, 1000);
   }

   _postMove(){
    console.log('sending')
    const url = localStorage.getItem('postMove');
    const gameId = localStorage.getItem('gameId');
    const color = localStorage.getItem('color');
    const moveFrom = this.postFrom;
    const moveTo = this.move;
    const data = {gameId, color, moveFrom, moveTo};
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {'Content-Type': 'application/json'},
    })
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          console.log(`Server replied with ${JSON.stringify(response)}`)
        })
        .catch((error)=>{
          console.log(`POST Move Enpoint: error ${JSON.stringify(error)}`)
        })
   }

  _routeChanged(){
    if(this.route.path === '/view1'){
      this.gameId = localStorage.getItem('gameId');
      this.color = localStorage.getItem('color');
      if(this.gameId && this.color){
        this.settings =  true;
        this._rotate(this.color);
      } else {
        this.settings = false;
      }
    }
  }

  _selected(){
    if(this.selected.charAt(6).toLowerCase() === this.color.charAt(0)){
      this.light = this.selected.split("-")[0];
      this.postFrom = this.selected;
      this.move = '';
    }
    if(this.selected.charAt(6).toLowerCase() !== this.color.charAt(0) && this.light){
      this.move = this.selected.split("-")[0];
    }
    if(this.move && this.light){
      this.moveready = true;
    } else {
      this.moveready = false;
    }
  }
  _validateMove(){

  }
  _rotate(color){
    if(color === 'tan'){
      this.rotation = 'rotate(30deg)';
      this.updateStyles({'--rotate-board': 'rotate(-30deg)'});
    } else if (color === 'white') {
      this.rotation = 'rotate(-90deg)';
      this.updateStyles({'--rotate-board': 'rotate(90deg)'});
    } else {
      this.rotation = 'rotate(150deg)';
      this.updateStyles({'--rotate-board': 'rotate(-150deg)'});
    }
    this._start();
  }
  _start(){
     const start = [{loc:'P5_P3', tok: 'XX'}, {loc:'P5_P2', tok: 'WC'}, {loc:'P5_P1', tok: 'WQ'}, {loc:'P5_N0', tok: 'WK'}, {loc:'P5_N1', tok: 'WC'}, {loc:'P5_N2', tok: 'XX'}, {loc:'P4_P3', tok: 'XX'}, {loc:'P4_P2', tok: 'XX'}, {loc:'P4_P1', tok: 'WE'}, {loc:'P4_N0', tok: 'WE'}, {loc:'P4_N1', tok: 'WE'}, {loc:'P4_N2', tok: 'XX'}, {loc:'P4_N3', tok: 'XX'}, {loc:'P3_P4', tok: 'XX'}, {loc:'P3_P3', tok: 'XX'}, {loc:'P3_P2', tok: 'XX'}, {loc:'P3_P1', tok: 'WP'}, {loc:'P3_N0', tok: 'WP'}, {loc:'P3_N1', tok: 'XX'}, {loc:'P3_N2', tok: 'XX'}, {loc:'P3_N3', tok: 'XX'}, {loc:'P2_P4', tok: 'XX'}, {loc:'P2_P3', tok: 'XX'}, {loc:'P2_P2', tok: 'XX'}, {loc:'P2_P1', tok: 'XX'}, {loc:'P2_N0', tok: 'WP'}, {loc:'P2_N1', tok: 'XX'}, {loc:'P2_N2', tok: 'XX'}, {loc:'P2_N3', tok: 'XX'}, {loc:'P2_N4', tok: 'XX'}, {loc:'P1_P5', tok: 'XX'}, {loc:'P1_P4', tok: 'XX'}, {loc:'P1_P3', tok: 'XX'}, {loc:'P1_P2', tok: 'XX'}, {loc:'P1_P1', tok: 'XX'}, {loc:'P1_N0', tok: 'XX'}, {loc:'P1_N1', tok: 'XX'}, {loc:'P1_N2', tok: 'XX'}, {loc:'P1_N3', tok: 'XX'}, {loc:'P1_N4', tok: 'XX'}, {loc:'N0_P5', tok: 'XX'}, {loc:'N0_P4', tok: 'XX'}, {loc:'N0_P3', tok: 'XX'}, {loc:'N0_P2', tok: 'XX'}, {loc:'N0_P1', tok: 'XX'}, {loc:'N0_N0', tok: 'XX'}, {loc:'N0_N1', tok: 'XX'}, {loc:'N0_N2', tok: 'XX'}, {loc:'N0_N3', tok: 'XX'}, {loc:'N0_N4', tok: 'XX'}, {loc:'N0_N5', tok: 'XX'}, {loc:'N1_P5', tok: 'BC'}, {loc:'N1_P4', tok: 'BE'}, {loc:'N1_P3', tok: 'BP'}, {loc:'N1_P2', tok: 'BP'}, {loc:'N1_P1', tok: 'XX'}, {loc:'N1_N0', tok: 'XX'}, {loc:'N1_N1', tok: 'TP'}, {loc:'N1_N2', tok: 'TP'}, {loc:'N1_N3', tok: 'TE'}, {loc:'N1_N4', tok: 'TC'}, {loc:'N2_P4', tok: 'BK'}, {loc:'N2_P3', tok: 'BE'}, {loc:'N2_P2', tok: 'BP'}, {loc:'N2_P1', tok: 'XX'}, {loc:'N2_N0', tok: 'XX'}, {loc:'N2_N1', tok: 'XX'}, {loc:'N2_N2', tok: 'TP'}, {loc:'N2_N3', tok: 'TE'}, {loc:'N2_N4', tok: 'TK'}, {loc:'N3_P4', tok: 'BQ'}, {loc:'N3_P3', tok: 'BE'}, {loc:'N3_P2', tok: 'XX'}, {loc:'N3_P1', tok: 'XX'}, {loc:'N3_N0', tok: 'XX'}, {loc:'N3_N1', tok: 'XX'}, {loc:'N3_N2', tok: 'TE'}, {loc:'N3_N3', tok: 'TQ'}, {loc:'N4_P3', tok: 'BC'}, {loc:'N4_P2', tok: 'XX'}, {loc:'N4_P1', tok: 'XX'}, {loc:'N4_N0', tok: 'XX'}, {loc:'N4_N1', tok: 'XX'}, {loc:'N4_N2', tok: 'XX'}, {loc:'N4_N3', tok: 'TC'}, {loc:'N5_P3', tok: 'XX'}, {loc:'N5_P2', tok: 'XX'}, {loc:'N5_P1', tok: 'XX'}, {loc:'N5_N0', tok: 'XX'}, {loc:'N5_N1', tok: 'XX'}, {loc:'N5_N2', tok: 'XX'}];
     this._renderBoard(start);
    }

  _clear(){
    const clear = [{loc:'P5_P3', tok: 'XX'}, {loc:'P5_P2', tok: 'XX'}, {loc:'P5_P1', tok: 'XX'}, {loc:'P5_N0', tok: 'XX'}, {loc:'P5_N1', tok: 'XX'}, {loc:'P5_N2', tok: 'XX'}, {loc:'P4_P3', tok: 'XX'}, {loc:'P4_P2', tok: 'XX'}, {loc:'P4_P1', tok: 'XX'}, {loc:'P4_N0', tok: 'XX'}, {loc:'P4_N1', tok: 'XX'}, {loc:'P4_N2', tok: 'XX'}, {loc:'P4_N3', tok: 'XX'}, {loc:'P3_P4', tok: 'XX'}, {loc:'P3_P3', tok: 'XX'}, {loc:'P3_P2', tok: 'XX'}, {loc:'P3_P1', tok: 'XX'}, {loc:'P3_N0', tok: 'XX'}, {loc:'P3_N1', tok: 'XX'}, {loc:'P3_N2', tok: 'XX'}, {loc:'P3_N3', tok: 'XX'}, {loc:'P2_P4', tok: 'XX'}, {loc:'P2_P3', tok: 'XX'}, {loc:'P2_P2', tok: 'XX'}, {loc:'P2_P1', tok: 'XX'}, {loc:'P2_N0', tok: 'XX'}, {loc:'P2_N1', tok: 'XX'}, {loc:'P2_N2', tok: 'XX'}, {loc:'P2_N3', tok: 'XX'}, {loc:'P2_N4', tok: 'XX'}, {loc:'P1_P5', tok: 'XX'}, {loc:'P1_P4', tok: 'XX'}, {loc:'P1_P3', tok: 'XX'}, {loc:'P1_P2', tok: 'XX'}, {loc:'P1_P1', tok: 'XX'}, {loc:'P1_N0', tok: 'XX'}, {loc:'P1_N1', tok: 'XX'}, {loc:'P1_N2', tok: 'XX'}, {loc:'P1_N3', tok: 'XX'}, {loc:'P1_N4', tok: 'XX'}, {loc:'N0_P5', tok: 'XX'}, {loc:'N0_P4', tok: 'XX'}, {loc:'N0_P3', tok: 'XX'}, {loc:'N0_P2', tok: 'XX'}, {loc:'N0_P1', tok: 'XX'}, {loc:'N0_N0', tok: 'XX'}, {loc:'N0_N1', tok: 'XX'}, {loc:'N0_N2', tok: 'XX'}, {loc:'N0_N3', tok: 'XX'}, {loc:'N0_N4', tok: 'XX'}, {loc:'N0_N5', tok: 'XX'}, {loc:'N1_P5', tok: 'XX'}, {loc:'N1_P4', tok: 'XX'}, {loc:'N1_P3', tok: 'XX'}, {loc:'N1_P2', tok: 'XX'}, {loc:'N1_P1', tok: 'XX'}, {loc:'N1_N0', tok: 'XX'}, {loc:'N1_N1', tok: 'XX'}, {loc:'N1_N2', tok: 'XX'}, {loc:'N1_N3', tok: 'XX'}, {loc:'N1_N4', tok: 'XX'}, {loc:'N2_P4', tok: 'XX'}, {loc:'N2_P3', tok: 'XX'}, {loc:'N2_P2', tok: 'XX'}, {loc:'N2_P1', tok: 'XX'}, {loc:'N2_N0', tok: 'XX'}, {loc:'N2_N1', tok: 'XX'}, {loc:'N2_N2', tok: 'XX'}, {loc:'N2_N3', tok: 'XX'}, {loc:'N2_N4', tok: 'XX'}, {loc:'N3_P4', tok: 'XX'}, {loc:'N3_P3', tok: 'XX'}, {loc:'N3_P2', tok: 'XX'}, {loc:'N3_P1', tok: 'XX'}, {loc:'N3_N0', tok: 'XX'}, {loc:'N3_N1', tok: 'XX'}, {loc:'N3_N2', tok: 'XX'}, {loc:'N3_N3', tok: 'XX'}, {loc:'N4_P3', tok: 'XX'}, {loc:'N4_P2', tok: 'XX'}, {loc:'N4_P1', tok: 'XX'}, {loc:'N4_N0', tok: 'XX'}, {loc:'N4_N1', tok: 'XX'}, {loc:'N4_N2', tok: 'XX'}, {loc:'N4_N3', tok: 'XX'}, {loc:'N5_P3', tok: 'XX'}, {loc:'N5_P2', tok: 'XX'}, {loc:'N5_P1', tok: 'XX'}, {loc:'N5_N0', tok: 'XX'}, {loc:'N5_N1', tok: 'XX'}, {loc:'N5_N2', tok: 'XX'}];
    this._renderBoard(clear);
  }

  _renderBoard(arr){
    for (var i = 0; i < arr.length; i++) {
      this[arr[i].loc] = arr[i].tok;
    }
  }
} window.customElements.define('my-view1', MyView1);
