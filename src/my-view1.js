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
          transform: scale(0.65);
          position: relative;
          left: -125px;
          top: -214px;
        }
        .board {
          position: relative;
          width: 1131px;
          height: 1131px;
          top: 0px;
          transform-origin: center;
          transform: var(--rotate-board);
          pointer-events:none;
          left: -70px;
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
          color: #edea64;
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
        p {
          color: white;
        }
        button {
          margin-right: 12px;
          border: 1px solid #FF00DF;
        }
        .flex{
          display: flex;
          margin-top: 15px;
        }
        .particles{
          height: 700px;
          width: 700px;
          transform: translate(225px, 225px);
          position: absolute;
          z-index: 9999;
          border-radius: 50%;
        }
        .link{
          font-weight: 700;
          font-size: 24;
          position: absolute;
          padding-top: 45px;
          padding-left: 80px;
        }
      </style>
      <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>

      <div class="top-area">
      <img src="./images/logo.png">
      <a href="https://github.com/mcfnord/hc22" class="link">Learn more</a>
        <template is="dom-if" if="{{settings}}">
          <p>You are [[color]] in game [[gameId]], now waiting for white to move.</p>
        </template>
        <template is="dom-if" if="{{!settings}}">
          <a href="/view3">Complete the settings to start</a>
        </template>


        <div class="flex">
          <button on-click="_oops">Ooops...</button>
          <button on-click="_thatMahmoove" style="width: 450px;">That's mamove</button>
          <button on-click="_settings">Settings</button>
        </div>
      </div>
      <br><br><br><br><br>
      <div class="board">

        <one-hex id="WV_01" class="WV_01" position="WV_01" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[WV_01]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="WV_02" class="WV_02" position="WV_02" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[WV_02]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="WV_03" class="WV_03" position="WV_03" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[WV_03]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="WV_04" class="WV_04" position="WV_04" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[WV_04]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="WV_05" class="WV_05" position="WV_05" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[WV_05]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="WV_06" class="WV_06" position="WV_06" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[WV_06]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="WV_07" class="WV_07" position="WV_07" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[WV_07]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="WV_08" class="WV_08" position="WV_08" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[WV_08]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="WV_09" class="WV_09" position="WV_09" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[WV_09]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="WV_10" class="WV_10" position="WV_10" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[WV_10]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="WV_11" class="WV_11" position="WV_11" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[WV_11]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="WV_12" class="WV_12" position="WV_12" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[WV_12]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="WV_13" class="WV_13" position="WV_13" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[WV_13]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>

        <one-hex id="n0_p5" class="n0_p5" position="n0_p5" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n0_p5]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="n1_p5" class="n1_p5" position="n1_p5" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n1_p5]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="n2_p5" class="n2_p5" position="n2_p5" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n2_p5]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="n3_p5" class="n3_p5" position="n3_p5" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n3_p5]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="n4_p5" class="n4_p5" position="n4_p5" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n4_p5]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="n5_p5" class="n5_p5" position="n5_p5" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n5_p5]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>

        <one-hex id="p1_p4" class="p1_p4" position="p1_p4" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p1_p4]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="n0_p4" class="n0_p4" position="n0_p4" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n0_p4]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="n1_p4" class="n1_p4" position="n1_p4" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n1_p4]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="n2_p4" class="n2_p4" position="n2_p4" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n2_p4]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="n3_p4" class="n3_p4" position="n3_p4" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n3_p4]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="n4_p4" class="n4_p4" position="n4_p4" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n4_p4]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="n5_p4" class="n5_p4" position="n5_p4" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n5_p4]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>

        <one-hex id="p2_p3" class="p2_p3" position="p2_p3" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p2_p3]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="p1_p3" class="p1_p3" position="p1_p3" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p1_p3]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="n0_p3" class="n0_p3" position="n0_p3" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n0_p3]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="n1_p3" class="n1_p3" position="n1_p3" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n1_p3]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="n2_p3" class="n2_p3" position="n2_p3" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n2_p3]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="n3_p3" class="n3_p3" position="n3_p3" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n3_p3]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="n4_p3" class="n4_p3" position="n4_p3" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n4_p3]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="n5_p3" class="n5_p3" position="n5_p3" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n5_p3]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>

        <one-hex id="p3_p2" class="p3_p2" position="p3_p2" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p3_p2]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="p2_p2" class="p2_p2" position="p2_p2" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p2_p2]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="p1_p2" class="p1_p2" position="p1_p2" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p1_p2]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="n0_p2" class="n0_p2" position="n0_p2" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n0_p2]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="n1_p2" class="n1_p2" position="n1_p2" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n1_p2]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="n2_p2" class="n2_p2" position="n2_p2" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n2_p2]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="n3_p2" class="n3_p2" position="n3_p2" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n3_p2]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="n4_p2" class="n4_p2" position="n4_p2" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n4_p2]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="n5_p2" class="n5_p2" position="n5_p2" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n5_p2]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>

        <one-hex id="p4_p1" class="p4_p1" position="p4_p1" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p4_p1]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="p3_p1" class="p3_p1" position="p3_p1" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p3_p1]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="p2_p1" class="p2_p1" position="p2_p1" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p2_p1]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="p1_p1" class="p1_p1" position="p1_p1" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p1_p1]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="n0_p1" class="n0_p1" position="n0_p1" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n0_p1]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="n1_p1" class="n1_p1" position="n1_p1" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n1_p1]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="n2_p1" class="n2_p1" position="n2_p1" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n2_p1]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="n3_p1" class="n3_p1" position="n3_p1" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n3_p1]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="n4_p1" class="n4_p1" position="n4_p1" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n4_p1]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="n5_p1" class="n5_p1" position="n5_p1" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n5_p1]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>

        <one-hex id="BV_01" class="BV_01" position="BV_01" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[BV_01]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="BV_02" class="BV_02" position="BV_02" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[BV_02]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="BV_03" class="BV_03" position="BV_03" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[BV_03]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="BV_04" class="BV_04" position="BV_04" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[BV_04]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="BV_05" class="BV_05" position="BV_05" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[BV_05]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="BV_06" class="BV_06" position="BV_06" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[BV_06]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="BV_07" class="BV_07" position="BV_07" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[BV_07]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="BV_08" class="BV_08" position="BV_08" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[BV_08]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="BV_09" class="BV_09" position="BV_09" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[BV_09]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="BV_10" class="BV_10" position="BV_10" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[BV_10]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="BV_11" class="BV_11" position="BV_11" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[BV_11]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="BV_12" class="BV_12" position="BV_12" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[BV_12]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="BV_13" class="BV_13" position="BV_13" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[BV_13]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>

        <one-hex id="p5_n0" class="p5_n0" position="p5_n0" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p5_n0]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="p4_n0" class="p4_n0" position="p4_n0" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p4_n0]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="p3_n0" class="p3_n0" position="p3_n0" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p3_n0]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="p2_n0" class="p2_n0" position="p2_n0" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p2_n0]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="p1_n0" class="p1_n0" position="p1_n0" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p1_n0]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="n0_n0" class="n0_n0" position="n0_n0" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n0_n0]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="n1_n0" class="n1_n0" position="n1_n0" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n1_n0]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="n2_n0" class="n2_n0" position="n2_n0" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n2_n0]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="n3_n0" class="n3_n0" position="n3_n0" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n3_n0]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="n4_n0" class="n4_n0" position="n4_n0" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n4_n0]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="n5_n0" class="n5_n0" position="n5_n0" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n5_n0]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>

        <one-hex id="p5_n1" class="p5_n1" position="p5_n1" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p5_n1]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="p4_n1" class="p4_n1" position="p4_n1" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p4_n1]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="p3_n1" class="p3_n1" position="p3_n1" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p3_n1]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="p2_n1" class="p2_n1" position="p2_n1" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p2_n1]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="p1_n1" class="p1_n1" position="p1_n1" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p1_n1]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="n0_n1" class="n0_n1" position="n0_n1" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n0_n1]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="n1_n1" class="n1_n1" position="n1_n1" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n1_n1]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="n2_n1" class="n2_n1" position="n2_n1" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n2_n1]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="n3_n1" class="n3_n1" position="n3_n1" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n3_n1]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="n4_n1" class="n4_n1" position="n4_n1" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n4_n1]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>

        <one-hex id="p5_n2" class="p5_n2" position="p5_n2" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p5_n2]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="p4_n2" class="p4_n2" position="p4_n2" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p4_n2]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="p3_n2" class="p3_n2" position="p3_n2" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p3_n2]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="p2_n2" class="p2_n2" position="p2_n2" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p2_n2]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="p1_n2" class="p1_n2" position="p1_n2" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p1_n2]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="n0_n2" class="n0_n2" position="n0_n2" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n0_n2]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="n1_n2" class="n1_n2" position="n1_n2" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n1_n2]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="n2_n2" class="n2_n2" position="n2_n2" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n2_n2]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="n3_n2" class="n3_n2" position="n3_n2" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n3_n2]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>

        <one-hex id="p5_n3" class="p5_n3" position="p5_n3" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p5_n3]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="p4_n3" class="p4_n3" position="p4_n3" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p4_n3]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="p3_n3" class="p3_n3" position="p3_n3" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p3_n3]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="p2_n3" class="p2_n3" position="p2_n3" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p2_n3]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="p1_n3" class="p1_n3" position="p1_n3" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p1_n3]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="n0_n3" class="n0_n3" position="n0_n3" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n0_n3]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="n1_n3" class="n1_n3" position="n1_n3" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n1_n3]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="n2_n3" class="n2_n3" position="n2_n3" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n2_n3]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>

        <one-hex id="p5_n4" class="p5_n4" position="p5_n4" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p5_n4]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="p4_n4" class="p4_n4" position="p4_n4" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p4_n4]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="p3_n4" class="p3_n4" position="p3_n4" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p3_n4]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="p2_n4" class="p2_n4" position="p2_n4" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p2_n4]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="p1_n4" class="p1_n4" position="p1_n4" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p1_n4]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="n0_n4" class="n0_n4" position="n0_n4" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n0_n4]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="n1_n4" class="n1_n4" position="n1_n4" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n1_n4]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>

        <one-hex id="p5_n5" class="p5_n5" position="p5_n5" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p5_n5]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="p4_n5" class="p4_n5" position="p4_n5" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p4_n5]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="p3_n5" class="p3_n5" position="p3_n5" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p3_n5]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="p2_n5" class="p2_n5" position="p2_n5" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p2_n5]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="p1_n5" class="p1_n5" position="p1_n5" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p1_n5]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="n0_n5" class="n0_n5" position="n0_n5" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n0_n5]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>

        <one-hex id="TV_01" class="TV_01" position="TV_01" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[TV_01]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="TV_02" class="TV_02" position="TV_02" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[TV_02]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="TV_03" class="TV_03" position="TV_03" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[TV_03]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="TV_04" class="TV_04" position="TV_04" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[TV_04]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="TV_05" class="TV_05" position="TV_05" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[TV_05]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="TV_06" class="TV_06" position="TV_06" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[TV_06]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="TV_07" class="TV_07" position="TV_07" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[TV_07]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="TV_08" class="TV_08" position="TV_08" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[TV_08]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="TV_09" class="TV_09" position="TV_09" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[TV_09]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="TV_10" class="TV_10" position="TV_10" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[TV_10]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="TV_11" class="TV_11" position="TV_11" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[TV_11]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="TV_12" class="TV_12" position="TV_12" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[TV_12]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <one-hex id="TV_13" class="TV_13" position="TV_13" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[TV_13]]" draggable="true" on-drop="_drop" on-dragover="_allowDrop" on-dragstart="_drag"></one-hex>
        <div class="particles">
          <canvas id="particles"></canvas>
        </div>
      </div>
<a href="https://www.dennys.com/food/kids/" target="_blank"><img src="./images/advert.png" style="position: relative; top: 80px;"></a>
    `;
  }
  static get properties() {
    return {
      route: {
        type: String,
        observer: '_routeChanged'
      },
      dragged: {
        type: Object,
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
    const gameId = localStorage.getItem('gameId');
    const color = localStorage.getItem('color');
    const url = `https://ladybug.international/Move/Board?gameId=${gameId}&color=${color}`;
    setInterval(() => {
      fetch(url, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
      })
          .then((response) => {
            return response.json();
          })
          .then((response) => {
            //console.log(`Server replied with ${response}`)
            if(response){
              this._renderBoard(response);
            }
          })
          .catch((error) => {
            if (error) {
              //console.log(`GET Board Endpoint error ${error}`);
            }
          })
     }, 1000);
     // Global Animation Setting
      window.requestAnimFrame =
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(callback) {
          window.setTimeout(callback, 1000/60);
      };

      // Global Canvas Setting
      var canvas = this.$.particles
      var ctx = canvas.getContext('2d');
      canvas.width = 700;
      canvas.height = 700;


      // Particles Around the Parent
      function Particle(x, y, distance) {
        this.angle = Math.random() * 2 * Math.PI;
        this.radius = Math.random() ;
        this.opacity =  (Math.random()*5 + 2)/10;
        this.distance = (1/this.opacity)*distance;
        this.speed = this.distance*0.00006;

        this.position = {
          x: x + this.distance * Math.cos(this.angle),
          y: y + this.distance * Math.sin(this.angle)
        };

        this.draw = function() {
          ctx.fillStyle = "rgba(0,0,0," + this.opacity + ")";
          ctx.beginPath();
          ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI*2, false);
          ctx.fill();
          ctx.closePath();
        }
        this.update = function() {
          this.angle += this.speed;
          this.position = {
            x: x + this.distance * Math.cos(this.angle),
            y: y + this.distance * Math.sin(this.angle)
          };
          this.draw();
        }
      }

      function Emitter(x, y) {
        this.position = { x: x, y: y};
        this.radius = 30;
        this.count = 3000;
        this.particles = [];

        for(var i=0; i< this.count; i ++ ){
          this.particles.push(new Particle(this.position.x, this.position.y, this.radius));
        }
      }


      Emitter.prototype = {
        draw: function() {
          // /ctx.fillStyle = "rgba(0,0,0,1)";
          ctx.beginPath();
          ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI*2, false);
          //ctx.fill();
          ctx.closePath();
        },
        update: function() {
         for(var i=0; i< this.count; i++) {
           this.particles[i].update();
         }
          this.draw();
        }
      }
      var emitter = new Emitter(canvas.width/2, canvas.height/2);

      function loop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        emitter.update();
        requestAnimFrame(loop);
      }
      loop();
   }
   _drag(ev) {
     this.dragged = ev.target;
     console.log("dragging");

     //this.$.id.tok = 'XX';
   }
   _allowDrop(ev) {
     ev.preventDefault();
     console.log("allowed drop");
   }
   _drop(ev) {
     ev.preventDefault();
     ev.target.state = this.dragged.state;
     console.log(this.dragged.tok);
     this.shadowRoot.querySelector(`#${this.dragged.id}`).state = {tok: 'XX', hue: '128,128,255,0.9'};
     const url = `https://ladybug.international/Move/Pieces`;
     const gameId = localStorage.getItem('gameId');
     const color = localStorage.getItem('color');
     const moveFrom = this.dragged.id;
     const moveTo = ev.target.id;
     const data = {gameId, color, moveFrom, moveTo};
     console.log(data);
     fetch(url, {
       method: 'POST',
       body: JSON.stringify(data),
       headers: {'Content-Type': 'application/json'},
     })
         .then((response) => {
           return response.json();
         })
         .then((response) => {
           //console.log(`Server replied with ${JSON.stringify(response)}`)
         })
         .catch((error)=>{
           //console.log(`POST Move Enpoint: error ${JSON.stringify(error)}`)
         })
   }

   _oops(){
    const gameId = localStorage.getItem('gameId');
    const color = localStorage.getItem('color');
    const url = `https://ladybug.international/Move/TurnReset?gameId=${gameId}&color=${color}`;
    fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
    })
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          //console.log(`Server replied with ${JSON.stringify(response)}`)
        })
        .catch((error)=>{
          //console.log(`POST Move Enpoint: error ${JSON.stringify(error)}`)
        })
   }

   _thatMahmoove(){
    const gameId = localStorage.getItem('gameId');
    const color = localStorage.getItem('color');
    const url = `https://ladybug.international/Move/TurnConcluded?gameId=${gameId}&color=${color}`;
    fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
    })
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          //console.log(`Server replied with ${JSON.stringify(response)}`)
        })
        .catch((error)=>{
          //console.log(`POST Move Enpoint: error ${JSON.stringify(error)}`)
        })
   }

   _postMove(){
    const url = `https://ladybug.international/Move/Pieces`
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
          //console.log(`Server replied with ${JSON.stringify(response)}`)
        })
        .catch((error)=>{
          //console.log(`POST Move Enpoint: error ${JSON.stringify(error)}`)
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

  _settings() {
    this.set('route.path', '/view3');
  }

  _selected(){
    this._getPossibleMoves();
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
      this._postMove();
    } else {
      this.moveready = false;
    }
  }
  _getPossibleMoves(){
    const gameId = localStorage.getItem('gameId');
    const color = localStorage.getItem('color');
    const loc = this.selected;
    const url = `https://ladybug.international/Move/Selected?gameId=${gameId}&loc=${loc}&color=${color}`
    fetch(url, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    })
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          if(response){
            this._renderBoard(response);
          }
        })
        .catch((error)=>{
          //console.log(`POST Move Enpoint: error ${JSON.stringify(error)}`)
        })
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
  }


  _renderBoard(arr){
    //console.log(arr);
    for (var i = 0; i < arr.length; i++) {
      this[arr[i].loc] = {tok: arr[i].tok, hue: arr[i].hue};
    }
  }
} window.customElements.define('my-view1', MyView1);
