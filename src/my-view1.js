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
          transform: scale(0.9)
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
    const url = `https://ladybug.international/Move/Board?gameid=${gameId}&color=${color}`;
    setInterval(() => { 
      fetch(url, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
      })
          .then((response) => {
            return response.json();
          })
          .then((response) => {
            console.log(`Server replied with ${response}`)
            if(response){
              this._renderBoard(response);
            }
          })
          .catch((error) => {
            if (error) {
              console.log(`GET Board Endpoint error ${error}`);
            }
          })
     }, 10000);
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
          console.log(`POST Move Enpoint: error ${JSON.stringify(error)}`)
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
    this._start();
  }
  _start(){
     const start = [
        {loc:'P5_P3', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'P5_P2', tok: 'WC', hue: '255,0,0,0.3'}, 
        {loc:'P5_P1', tok: 'WQ', hue: '255,0,0,0.3'}, 
        {loc:'P5_N0', tok: 'WK', hue: '255,0,0,0.3'}, 
        {loc:'P5_N1', tok: 'WC', hue: '255,0,0,0.3'}, 
        {loc:'P5_N2', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'P4_P3', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'P4_P2', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'P4_P1', tok: 'WE', hue: '255,0,0,0.3'}, 
        {loc:'P4_N0', tok: 'WE', hue: '255,0,0,0.3'}, 
        {loc:'P4_N1', tok: 'WE', hue: '255,0,0,0.3'}, 
        {loc:'P4_N2', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'P4_N3', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'P3_P4', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'P3_P3', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'P3_P2', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'P3_P1', tok: 'WP', hue: '255,0,0,0.3'}, 
        {loc:'P3_N0', tok: 'WP', hue: '255,0,0,0.3'}, 
        {loc:'P3_N1', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'P3_N2', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'P3_N3', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'P2_P4', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'P2_P3', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'P2_P2', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'P2_P1', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'P2_N0', tok: 'WP', hue: '255,0,0,0.3'}, 
        {loc:'P2_N1', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'P2_N2', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'P2_N3', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'P2_N4', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'P1_P5', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'P1_P4', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'P1_P3', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'P1_P2', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'P1_P1', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'P1_N0', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'P1_N1', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'P1_N2', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'P1_N3', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'P1_N4', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'N0_P5', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'N0_P4', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'N0_P3', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'N0_P2', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'N0_P1', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'N0_N0', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'N0_N1', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'N0_N2', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'N0_N3', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'N0_N4', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'N0_N5', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'N1_P5', tok: 'BC', hue: '255,0,0,0.3'}, 
        {loc:'N1_P4', tok: 'BE', hue: '255,0,0,0.3'}, 
        {loc:'N1_P3', tok: 'BP', hue: '255,0,0,0.3'}, 
        {loc:'N1_P2', tok: 'BP', hue: '255,0,0,0.3'}, 
        {loc:'N1_P1', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'N1_N0', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'N1_N1', tok: 'TP', hue: '255,0,0,0.3'}, 
        {loc:'N1_N2', tok: 'TP', hue: '255,0,0,0.3'}, 
        {loc:'N1_N3', tok: 'TE', hue: '255,0,0,0.3'}, 
        {loc:'N1_N4', tok: 'TC', hue: '255,0,0,0.3'}, 
        {loc:'N2_P4', tok: 'BK', hue: '255,0,0,0.3'}, 
        {loc:'N2_P3', tok: 'BE', hue: '255,0,0,0.3'}, 
        {loc:'N2_P2', tok: 'BP', hue: '255,0,0,0.3'}, 
        {loc:'N2_P1', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'N2_N0', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'N2_N1', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'N2_N2', tok: 'TP', hue: '255,0,0,0.3'}, 
        {loc:'N2_N3', tok: 'TE', hue: '255,0,0,0.3'}, 
        {loc:'N2_N4', tok: 'TK', hue: '255,0,0,0.3'}, 
        {loc:'N3_P4', tok: 'BQ', hue: '255,0,0,0.3'}, 
        {loc:'N3_P3', tok: 'BE', hue: '255,0,0,0.3'}, 
        {loc:'N3_P2', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'N3_P1', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'N3_N0', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'N3_N1', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'N3_N2', tok: 'TE', hue: '255,0,0,0.3'}, 
        {loc:'N3_N3', tok: 'TQ', hue: '255,0,0,0.3'}, 
        {loc:'N4_P3', tok: 'BC', hue: '255,0,0,0.3'}, 
        {loc:'N4_P2', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'N4_P1', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'N4_N0', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'N4_N1', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'N4_N2', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'N4_N3', tok: 'TC', hue: '255,0,0,0.3'}, 
        {loc:'N5_P3', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'N5_P2', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'N5_P1', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'N5_N0', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'N5_N1', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'N5_N2', tok: 'XX', hue: '255,0,0,0.3'},
        {loc:'WV_01', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'WV_02', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'WV_03', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'WV_04', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'WV_05', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'WV_06', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'WV_07', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'WV_08', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'WV_09', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'WV_10', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'WV_11', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'WV_12', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'WV_13', tok: 'XX', hue: '255,0,0,0.3'},
        {loc:'TV_01', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'TV_02', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'TV_03', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'TV_04', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'TV_05', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'TV_06', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'TV_07', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'TV_08', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'TV_09', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'TV_10', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'TV_11', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'TV_12', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'TV_13', tok: 'XX', hue: '255,0,0,0.3'},
        {loc:'BV_01', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'BV_02', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'BV_03', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'BV_04', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'BV_05', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'BV_06', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'BV_07', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'BV_08', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'BV_09', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'BV_10', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'BV_11', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'BV_12', tok: 'XX', hue: '255,0,0,0.3'}, 
        {loc:'BV_13', tok: 'XX', hue: '255,0,0,0.3'}
      ];
     this._renderBoard(start);
    }

  _clear(){
    const clear = [
      {loc:'P5_P3', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'P5_P2', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'P5_P1', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'P5_N0', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'P5_N1', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'P5_N2', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'P4_P3', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'P4_P2', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'P4_P1', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'P4_N0', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'P4_N1', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'P4_N2', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'P4_N3', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'P3_P4', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'P3_P3', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'P3_P2', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'P3_P1', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'P3_N0', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'P3_N1', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'P3_N2', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'P3_N3', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'P2_P4', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'P2_P3', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'P2_P2', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'P2_P1', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'P2_N0', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'P2_N1', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'P2_N2', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'P2_N3', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'P2_N4', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'P1_P5', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'P1_P4', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'P1_P3', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'P1_P2', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'P1_P1', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'P1_N0', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'P1_N1', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'P1_N2', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'P1_N3', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'P1_N4', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'N0_P5', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'N0_P4', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'N0_P3', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'N0_P2', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'N0_P1', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'N0_N0', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'N0_N1', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'N0_N2', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'N0_N3', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'N0_N4', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'N0_N5', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'N1_P5', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'N1_P4', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'N1_P3', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'N1_P2', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'N1_P1', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'N1_N0', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'N1_N1', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'N1_N2', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'N1_N3', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'N1_N4', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'N2_P4', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'N2_P3', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'N2_P2', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'N2_P1', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'N2_N0', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'N2_N1', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'N2_N2', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'N2_N3', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'N2_N4', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'N3_P4', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'N3_P3', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'N3_P2', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'N3_P1', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'N3_N0', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'N3_N1', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'N3_N2', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'N3_N3', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'N4_P3', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'N4_P2', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'N4_P1', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'N4_N0', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'N4_N1', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'N4_N2', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'N4_N3', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'N5_P3', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'N5_P2', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'N5_P1', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'N5_N0', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'N5_N1', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'N5_N2', tok: 'XX', hue: '255,0,0,0.3'},
      {loc:'WV_01', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'WV_02', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'WV_03', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'WV_04', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'WV_05', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'WV_06', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'WV_07', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'WV_08', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'WV_09', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'WV_10', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'WV_11', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'WV_12', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'WV_13', tok: 'XX', hue: '255,0,0,0.3'},
      {loc:'TV_01', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'TV_02', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'TV_03', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'TV_04', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'TV_05', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'TV_06', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'TV_07', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'TV_08', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'TV_09', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'TV_10', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'TV_11', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'TV_12', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'TV_13', tok: 'XX', hue: '255,0,0,0.3'},
      {loc:'BV_01', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'BV_02', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'BV_03', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'BV_04', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'BV_05', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'BV_06', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'BV_07', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'BV_08', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'BV_09', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'BV_10', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'BV_11', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'BV_12', tok: 'XX', hue: '255,0,0,0.3'}, 
      {loc:'BV_13', tok: 'XX', hue: '255,0,0,0.3'}
    ];
    this._renderBoard(clear);
  }

  _renderBoard(arr){
    for (var i = 0; i < arr.length; i++) {
      this[arr[i].loc] = {tok: arr[i].tok, hue: arr[i].hue};
    }
  }
} window.customElements.define('my-view1', MyView1);
