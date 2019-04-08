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
      </style>
      <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>

      <div class="top-area">
      <img src="./images/logo.png">
        <template is="dom-if" if="{{settings}}">
          <p>You are [[color]] in game [[gameId]], now waiting for white to move.</p>
        </template>
        <template is="dom-if" if="{{!settings}}">
          <a href="/view3">Complete the settings to start</a>
        </template>


        <div class="flex">
          <button on-click="_oops">Ooops...</button>
          <button on-click="_thatMahmoove">That's mah move</button>
          <button on-click="_settings">Settings</button>
        </div>
      </div>

      <div class="board">

        <one-hex class="WV_01" position="WV_01" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[WV_01]]"></one-hex>
        <one-hex class="WV_02" position="WV_02" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[WV_02]]"></one-hex>
        <one-hex class="WV_03" position="WV_03" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[WV_03]]"></one-hex>
        <one-hex class="WV_04" position="WV_04" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[WV_04]]"></one-hex>
        <one-hex class="WV_05" position="WV_05" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[WV_05]]"></one-hex>
        <one-hex class="WV_06" position="WV_06" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[WV_06]]"></one-hex>
        <one-hex class="WV_07" position="WV_07" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[WV_07]]"></one-hex>
        <one-hex class="WV_08" position="WV_08" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[WV_08]]"></one-hex>
        <one-hex class="WV_09" position="WV_09" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[WV_09]]"></one-hex>
        <one-hex class="WV_10" position="WV_10" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[WV_10]]"></one-hex>
        <one-hex class="WV_11" position="WV_11" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[WV_11]]"></one-hex>
        <one-hex class="WV_12" position="WV_12" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[WV_12]]"></one-hex>
        <one-hex class="WV_13" position="WV_13" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[WV_13]]"></one-hex>

        <one-hex class="n0_p5" position="n0_p5" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n0_p5]]"></one-hex>
        <one-hex class="n1_p5" position="n1_p5" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n1_p5]]"></one-hex>
        <one-hex class="n2_p5" position="n2_p5" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n2_p5]]"></one-hex>
        <one-hex class="n3_p5" position="n3_p5" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n3_p5]]"></one-hex>
        <one-hex class="n4_p5" position="n4_p5" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n4_p5]]"></one-hex>
        <one-hex class="n5_p5" position="n5_p5" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n5_p5]]"></one-hex>

        <one-hex class="p1_p4" position="p1_p4" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p1_p4]]"></one-hex>
        <one-hex class="n0_p4" position="n0_p4" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n0_p4]]"></one-hex>
        <one-hex class="n1_p4" position="n1_p4" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n1_p4]]"></one-hex>
        <one-hex class="n2_p4" position="n2_p4" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n2_p4]]"></one-hex>
        <one-hex class="n3_p4" position="n3_p4" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n3_p4]]"></one-hex>
        <one-hex class="n4_p4" position="n4_p4" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n4_p4]]"></one-hex>
        <one-hex class="n5_p4" position="n5_p4" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n5_p4]]"></one-hex>

        <one-hex class="p2_p3" position="p2_p3" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p2_p3]]"></one-hex>
        <one-hex class="p1_p3" position="p1_p3" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p1_p3]]"></one-hex>
        <one-hex class="n0_p3" position="n0_p3" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n0_p3]]"></one-hex>
        <one-hex class="n1_p3" position="n1_p3" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n1_p3]]"></one-hex>
        <one-hex class="n2_p3" position="n2_p3" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n2_p3]]"></one-hex>
        <one-hex class="n3_p3" position="n3_p3" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n3_p3]]"></one-hex>
        <one-hex class="n4_p3" position="n4_p3" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n4_p3]]"></one-hex>
        <one-hex class="n5_p3" position="n5_p3" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n5_p3]]"></one-hex>

        <one-hex class="p3_p2" position="p3_p2" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p3_p2]]"></one-hex>
        <one-hex class="p2_p2" position="p2_p2" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p2_p2]]"></one-hex>
        <one-hex class="p1_p2" position="p1_p2" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p1_p2]]"></one-hex>
        <one-hex class="n0_p2" position="n0_p2" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n0_p2]]"></one-hex>
        <one-hex class="n1_p2" position="n1_p2" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n1_p2]]"></one-hex>
        <one-hex class="n2_p2" position="n2_p2" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n2_p2]]"></one-hex>
        <one-hex class="n3_p2" position="n3_p2" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n3_p2]]"></one-hex>
        <one-hex class="n4_p2" position="n4_p2" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n4_p2]]"></one-hex>
        <one-hex class="n5_p2" position="n5_p2" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n5_p2]]"></one-hex>

        <one-hex class="p4_p1" position="p4_p1" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p4_p1]]"></one-hex>
        <one-hex class="p3_p1" position="p3_p1" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p3_p1]]"></one-hex>
        <one-hex class="p2_p1" position="p2_p1" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p2_p1]]"></one-hex>
        <one-hex class="p1_p1" position="p1_p1" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p1_p1]]"></one-hex>
        <one-hex class="n0_p1" position="n0_p1" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n0_p1]]"></one-hex>
        <one-hex class="n1_p1" position="n1_p1" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n1_p1]]"></one-hex>
        <one-hex class="n2_p1" position="n2_p1" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n2_p1]]"></one-hex>
        <one-hex class="n3_p1" position="n3_p1" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n3_p1]]"></one-hex>
        <one-hex class="n4_p1" position="n4_p1" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n4_p1]]"></one-hex>
        <one-hex class="n5_p1" position="n5_p1" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n5_p1]]"></one-hex>

        <one-hex class="BV_01" position="BV_01" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[BV_01]]"></one-hex>
        <one-hex class="BV_02" position="BV_02" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[BV_02]]"></one-hex>
        <one-hex class="BV_03" position="BV_03" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[BV_03]]"></one-hex>
        <one-hex class="BV_04" position="BV_04" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[BV_04]]"></one-hex>
        <one-hex class="BV_05" position="BV_05" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[BV_05]]"></one-hex>
        <one-hex class="BV_06" position="BV_06" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[BV_06]]"></one-hex>
        <one-hex class="BV_07" position="BV_07" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[BV_07]]"></one-hex>
        <one-hex class="BV_08" position="BV_08" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[BV_08]]"></one-hex>
        <one-hex class="BV_09" position="BV_09" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[BV_09]]"></one-hex>
        <one-hex class="BV_10" position="BV_10" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[BV_10]]"></one-hex>
        <one-hex class="BV_11" position="BV_11" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[BV_11]]"></one-hex>
        <one-hex class="BV_12" position="BV_12" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[BV_12]]"></one-hex>
        <one-hex class="BV_13" position="BV_13" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[BV_13]]"></one-hex>

        <one-hex class="p5_n0" position="p5_n0" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p5_n0]]"></one-hex>
        <one-hex class="p4_n0" position="p4_n0" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p4_n0]]"></one-hex>
        <one-hex class="p3_n0" position="p3_n0" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p3_n0]]"></one-hex>
        <one-hex class="p2_n0" position="p2_n0" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p2_n0]]"></one-hex>
        <one-hex class="p1_n0" position="p1_n0" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p1_n0]]"></one-hex>
        <one-hex class="n0_n0" position="n0_n0" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n0_n0]]"></one-hex>
        <one-hex class="n1_n0" position="n1_n0" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n1_n0]]"></one-hex>
        <one-hex class="n2_n0" position="n2_n0" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n2_n0]]"></one-hex>
        <one-hex class="n3_n0" position="n3_n0" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n3_n0]]"></one-hex>
        <one-hex class="n4_n0" position="n4_n0" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n4_n0]]"></one-hex>
        <one-hex class="n5_n0" position="n5_n0" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n5_n0]]"></one-hex>

        <one-hex class="p5_n1" position="p5_n1" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p5_n1]]"></one-hex>
        <one-hex class="p4_n1" position="p4_n1" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p4_n1]]"></one-hex>
        <one-hex class="p3_n1" position="p3_n1" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p3_n1]]"></one-hex>
        <one-hex class="p2_n1" position="p2_n1" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p2_n1]]"></one-hex>
        <one-hex class="p1_n1" position="p1_n1" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p1_n1]]"></one-hex>
        <one-hex class="n0_n1" position="n0_n1" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n0_n1]]"></one-hex>
        <one-hex class="n1_n1" position="n1_n1" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n1_n1]]"></one-hex>
        <one-hex class="n2_n1" position="n2_n1" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n2_n1]]"></one-hex>
        <one-hex class="n3_n1" position="n3_n1" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n3_n1]]"></one-hex>
        <one-hex class="n4_n1" position="n4_n1" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n4_n1]]"></one-hex>

        <one-hex class="p5_n2" position="p5_n2" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p5_n2]]"></one-hex>
        <one-hex class="p4_n2" position="p4_n2" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p4_n2]]"></one-hex>
        <one-hex class="p3_n2" position="p3_n2" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p3_n2]]"></one-hex>
        <one-hex class="p2_n2" position="p2_n2" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p2_n2]]"></one-hex>
        <one-hex class="p1_n2" position="p1_n2" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p1_n2]]"></one-hex>
        <one-hex class="n0_n2" position="n0_n2" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n0_n2]]"></one-hex>
        <one-hex class="n1_n2" position="n1_n2" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n1_n2]]"></one-hex>
        <one-hex class="n2_n2" position="n2_n2" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n2_n2]]"></one-hex>
        <one-hex class="n3_n2" position="n3_n2" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n3_n2]]"></one-hex>

        <one-hex class="p5_n3" position="p5_n3" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p5_n3]]"></one-hex>
        <one-hex class="p4_n3" position="p4_n3" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p4_n3]]"></one-hex>
        <one-hex class="p3_n3" position="p3_n3" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p3_n3]]"></one-hex>
        <one-hex class="p2_n3" position="p2_n3" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p2_n3]]"></one-hex>
        <one-hex class="p1_n3" position="p1_n3" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p1_n3]]"></one-hex>
        <one-hex class="n0_n3" position="n0_n3" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n0_n3]]"></one-hex>
        <one-hex class="n1_n3" position="n1_n3" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n1_n3]]"></one-hex>
        <one-hex class="n2_n3" position="n2_n3" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n2_n3]]"></one-hex>

        <one-hex class="p5_n4" position="p5_n4" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p5_n4]]"></one-hex>
        <one-hex class="p4_n4" position="p4_n4" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p4_n4]]"></one-hex>
        <one-hex class="p3_n4" position="p3_n4" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p3_n4]]"></one-hex>
        <one-hex class="p2_n4" position="p2_n4" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p2_n4]]"></one-hex>
        <one-hex class="p1_n4" position="p1_n4" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p1_n4]]"></one-hex>
        <one-hex class="n0_n4" position="n0_n4" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n0_n4]]"></one-hex>
        <one-hex class="n1_n4" position="n1_n4" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n1_n4]]"></one-hex>

        <one-hex class="p5_n5" position="p5_n5" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p5_n5]]"></one-hex>
        <one-hex class="p4_n5" position="p4_n5" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p4_n5]]"></one-hex>
        <one-hex class="p3_n5" position="p3_n5" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p3_n5]]"></one-hex>
        <one-hex class="p2_n5" position="p2_n5" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p2_n5]]"></one-hex>
        <one-hex class="p1_n5" position="p1_n5" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[p1_n5]]"></one-hex>
        <one-hex class="n0_n5" position="n0_n5" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[n0_n5]]"></one-hex>

        <one-hex class="TV_01" position="TV_01" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[TV_01]]"></one-hex>
        <one-hex class="TV_02" position="TV_02" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[TV_02]]"></one-hex>
        <one-hex class="TV_03" position="TV_03" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[TV_03]]"></one-hex>
        <one-hex class="TV_04" position="TV_04" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[TV_04]]"></one-hex>
        <one-hex class="TV_05" position="TV_05" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[TV_05]]"></one-hex>
        <one-hex class="TV_06" position="TV_06" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[TV_06]]"></one-hex>
        <one-hex class="TV_07" position="TV_07" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[TV_07]]"></one-hex>
        <one-hex class="TV_08" position="TV_08" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[TV_08]]"></one-hex>
        <one-hex class="TV_09" position="TV_09" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[TV_09]]"></one-hex>
        <one-hex class="TV_10" position="TV_10" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[TV_10]]"></one-hex>
        <one-hex class="TV_11" position="TV_11" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[TV_11]]"></one-hex>
        <one-hex class="TV_12" position="TV_12" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[TV_12]]"></one-hex>
        <one-hex class="TV_13" position="TV_13" rotation="[[rotation]]" selected="{{selected}}"  light="[[light]]" move="[[move]]" state="[[TV_13]]"></one-hex>
        <div class="particles">
          <canvas id="particles"></canvas>
        </div>
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
        this.speed = this.distance*0.00003;

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
