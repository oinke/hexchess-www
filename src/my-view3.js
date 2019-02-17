import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/app-route/app-location.js';
import './shared-styles.js';

class MyView3 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
          padding: 10px;
        }
        input , select{
          width: 500px;
          padding: 12px;
          margin-bottom: 12px;
          border-radius: 4px;
          border: 1px solid grey;
        }
        select{
          display: block;
          height: 40px;
          width: 500px;
        }
        button {
          width: 150px;
          height: 40px;
          font-size: 16px;
          border-radius: 4px;
        }
        label {
          font-size: 14px;
        }
      </style>
      <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
      <div class="card">
        <label for="postMove">POST Move Enpoint:</label><br>
        <input type="text" name="postMove" id="postMove" placeholder="http://" value="{{postMove::input}}">
        <br>
        <label for="getBoard">GET Board Endpoint:</label><br>
        <input name="getBoard" id="getBoard" placeholder="http://" value="{{getBoard::input}}">
        <br>
        <label for="gameId">Game ID:</label><br>
        <input name="gameId" id="gameId" value="{{gameId::input}}">
        <br>
        <label for="color">Color:</label><br>
        <select id="color" value="{{color::input}}">
          <option value="black">Black</option>
          <option value="white">White</option>
          <option value="tan">Tan</option>
        </select>
        <br>
        <button on-click="_save">Save</button>
        <br><br><br>
        <p>GET Board response: <br><br>{board [{loc:'P5_P3', tok: 'XX'}, {loc:'P5_P2', tok: 'WC'}, {loc:'P5_P1', tok: 'WQ'}, {loc:'P5_N0', tok: 'WK'}, {loc:'P5_N1', tok: 'WC'}, {loc:'P5_N2', tok: 'XX'}, {loc:'P4_P3', tok: 'XX'}, {loc:'P4_P2', tok: 'XX'}, {loc:'P4_P1', tok: 'WE'}, {loc:'P4_N0', tok: 'WE'}, {loc:'P4_N1', tok: 'WE'}, {loc:'P4_N2', tok: 'XX'}, {loc:'P4_N3', tok: 'XX'}, {loc:'P3_P4', tok: 'XX'}, {loc:'P3_P3', tok: 'XX'}, {loc:'P3_P2', tok: 'XX'}, {loc:'P3_P1', tok: 'WP'}, {loc:'P3_N0', tok: 'WP'}, {loc:'P3_N1', tok: 'XX'}, {loc:'P3_N2', tok: 'XX'}, {loc:'P3_N3', tok: 'XX'}, {loc:'P2_P4', tok: 'XX'}, {loc:'P2_P3', tok: 'XX'}, {loc:'P2_P2', tok: 'XX'}, {loc:'P2_P1', tok: 'XX'}, {loc:'P2_N0', tok: 'WP'}, {loc:'P2_N1', tok: 'XX'}, {loc:'P2_N2', tok: 'XX'}, {loc:'P2_N3', tok: 'XX'}, {loc:'P2_N4', tok: 'XX'}, {loc:'P1_P5', tok: 'XX'}, {loc:'P1_P4', tok: 'XX'}, {loc:'P1_P3', tok: 'XX'}, {loc:'P1_P2', tok: 'XX'}, {loc:'P1_P1', tok: 'XX'}, {loc:'P1_N0', tok: 'XX'}, {loc:'P1_N1', tok: 'XX'}, {loc:'P1_N2', tok: 'XX'}, {loc:'P1_N3', tok: 'XX'}, {loc:'P1_N4', tok: 'XX'}, {loc:'N0_P5', tok: 'XX'}, {loc:'N0_P4', tok: 'XX'}, {loc:'N0_P3', tok: 'XX'}, {loc:'N0_P2', tok: 'XX'}, {loc:'N0_P1', tok: 'XX'}, {loc:'N0_N0', tok: 'XX'}, {loc:'N0_N1', tok: 'XX'}, {loc:'N0_N2', tok: 'XX'}, {loc:'N0_N3', tok: 'XX'}, {loc:'N0_N4', tok: 'XX'}, {loc:'N0_N5', tok: 'XX'}, {loc:'N1_P5', tok: 'BC'}, {loc:'N1_P4', tok: 'BE'}, {loc:'N1_P3', tok: 'BP'}, {loc:'N1_P2', tok: 'BP'}, {loc:'N1_P1', tok: 'XX'}, {loc:'N1_N0', tok: 'XX'}, {loc:'N1_N1', tok: 'TP'}, {loc:'N1_N2', tok: 'TP'}, {loc:'N1_N3', tok: 'TE'}, {loc:'N1_N4', tok: 'TC'}, {loc:'N2_P4', tok: 'BK'}, {loc:'N2_P3', tok: 'BE'}, {loc:'N2_P2', tok: 'BP'}, {loc:'N2_P1', tok: 'XX'}, {loc:'N2_N0', tok: 'XX'}, {loc:'N2_N1', tok: 'XX'}, {loc:'N2_N2', tok: 'TP'}, {loc:'N2_N3', tok: 'TE'}, {loc:'N2_N4', tok: 'TK'}, {loc:'N3_P4', tok: 'BQ'}, {loc:'N3_P3', tok: 'BE'}, {loc:'N3_P2', tok: 'XX'}, {loc:'N3_P1', tok: 'XX'}, {loc:'N3_N0', tok: 'XX'}, {loc:'N3_N1', tok: 'XX'}, {loc:'N3_N2', tok: 'TE'}, {loc:'N3_N3', tok: 'TQ'}, {loc:'N4_P3', tok: 'BC'}, {loc:'N4_P2', tok: 'XX'}, {loc:'N4_P1', tok: 'XX'}, {loc:'N4_N0', tok: 'XX'}, {loc:'N4_N1', tok: 'XX'}, {loc:'N4_N2', tok: 'XX'}, {loc:'N4_N3', tok: 'TC'}, {loc:'N5_P3', tok: 'XX'}, {loc:'N5_P2', tok: 'XX'}, {loc:'N5_P1', tok: 'XX'}, {loc:'N5_N0', tok: 'XX'}, {loc:'N5_N1', tok: 'XX'}, {loc:'N5_N2', tok: 'XX'}]}</p>
        <p>Clicking the board will log the location to the console in dev tools</p>
        <br><br><p>All tok codes:</p>
        <ul>
          <li>WP = White Pawn</li>
          <li>WE = White Elephant</li>
          <li>WC = White Castle</li>
          <li>WQ = White Queen</li>
          <li>WK = White King</li>
          <li>BP = Black Pawn</li>
          <li>BE = Black Elephant</li>
          <li>BC = Black Castle</li>
          <li>BQ = Black Queen</li>
          <li>BK = Black King</li>
          <li>TP = Tan Pawn</li>
          <li>TE = Tan Elephant</li>
          <li>TC = Tan Castle</li>
          <li>TQ = Tan Queen</li>
          <li>TK = Tan King</li>
          <li>XX = Blank Hex</li>
        </ul>
        <p>Make Move Button sends:<br>
           {color: "white", gameId: "123", moveFrom: "P2_N0-WP", moveTo: "P1_N0"}</p>
           <p>to the POST Move Enpoint:</p>
      </div>
    `;
  }

  _save(){
    localStorage.setItem('postMove', this.postMove);
    localStorage.setItem('getBoard', this.getBoard);
    localStorage.setItem('gameId', this.gameId);
    localStorage.setItem('color', this.color);
    this.set('route.path', '/view1');
  }

  ready() {
    super.ready();
    this.postMove = localStorage.getItem('postMove');
    this.getBoard = localStorage.getItem('getBoard');
    this.gameId = localStorage.getItem('gameId');
    this.color = localStorage.getItem('color');
   }

} window.customElements.define('my-view3', MyView3);
