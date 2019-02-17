import '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="shared-styles">
  <template>
    <style>
      .card {
        margin: 24px;
        padding: 16px;
        color: #757575;
        border-radius: 5px;
        background-color: #fff;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
      }

      .P5_P3 {transform: translate(870px, 283px)}
      .P5_P2 {transform: translate(870px, 370px)}
      .P5_P1 {transform: translate(870px, 457px)}
      .P5_N0 {transform: translate(870px, 544px)}
      .P5_N1 {transform: translate(870px, 631px)}
      .P5_N2 {transform: translate(870px, 718px)}

      .P4_P3 {transform: translate(796px, 239px)}
      .P4_P2 {transform: translate(796px, 326px)}
      .P4_P1 {transform: translate(796px, 413px)}
      .P4_N0 {transform: translate(796px, 500px)}
      .P4_N1 {transform: translate(796px, 587px)}
      .P4_N2 {transform: translate(796px, 674px)}
      .P4_N3 {transform: translate(796px, 761px)}

      .P3_P4 {transform: translate(722px, 196px)}
      .P3_P3 {transform: translate(722px, 283px)}
      .P3_P2 {transform: translate(722px, 370px)}
      .P3_P1 {transform: translate(722px, 457px)}
      .P3_N0 {transform: translate(722px, 544px)}
      .P3_N1 {transform: translate(722px, 631px)}
      .P3_N2 {transform: translate(722px, 718px)}
      .P3_N3 {transform: translate(722px, 805px)}

      .P2_P4 {transform: translate(648px, 152px)}
      .P2_P3 {transform: translate(648px, 239px)}
      .P2_P2 {transform: translate(648px, 326px)}
      .P2_P1 {transform: translate(648px, 413px)}
      .P2_N0 {transform: translate(648px, 500px)}
      .P2_N1 {transform: translate(648px, 587px)}
      .P2_N2 {transform: translate(648px, 674px)}
      .P2_N3 {transform: translate(648px, 761px)}
      .P2_N4 {transform: translate(648px, 848px)}

      .P1_P5 {transform: translate(574px, 109px)}
      .P1_P4 {transform: translate(574px, 196px)}
      .P1_P3 {transform: translate(574px, 283px)}
      .P1_P2 {transform: translate(574px, 370px)}
      .P1_P1 {transform: translate(574px, 457px)}
      .P1_N0 {transform: translate(574px, 544px)}
      .P1_N1 {transform: translate(574px, 631px)}
      .P1_N2 {transform: translate(574px, 718px)}
      .P1_N3 {transform: translate(574px, 805px)}
      .P1_N4 {transform: translate(574px, 892px)}
      .P1_N5 {transform: translate(574px, 979px)}

      .N0_P5 {transform: translate(500px, 65px)}
      .N0_P4 {transform: translate(500px, 152px)}
      .N0_P3 {transform: translate(500px, 239px)}
      .N0_P2 {transform: translate(500px, 326px)}
      .N0_P1 {transform: translate(500px, 413px)}
      .N0_N0 {transform: translate(500px, 500px)}
      .N0_N1 {transform: translate(500px, 587px)}
      .N0_N2 {transform: translate(500px, 674px)}
      .N0_N3 {transform: translate(500px, 761px)}
      .N0_N4 {transform: translate(500px, 848px)}
      .N0_N5 {transform: translate(500px, 935px)}

      .N1_P5 {transform: translate(426px, 109px)}
      .N1_P4 {transform: translate(426px, 196px)}
      .N1_P3 {transform: translate(426px, 283px)}
      .N1_P2 {transform: translate(426px, 370px)}
      .N1_P1 {transform: translate(426px, 457px)}
      .N1_N0 {transform: translate(426px, 544px)}
      .N1_N1 {transform: translate(426px, 631px)}
      .N1_N2 {transform: translate(426px, 718px)}
      .N1_N3 {transform: translate(426px, 805px)}
      .N1_N4 {transform: translate(426px, 892px)}
      .N1_N5 {transform: translate(426px, 979px)}

      .N2_P4 {transform: translate(353px, 152px)}
      .N2_P3 {transform: translate(353px, 239px)}
      .N2_P2 {transform: translate(353px, 326px)}
      .N2_P1 {transform: translate(353px, 413px)}
      .N2_N0 {transform: translate(353px, 500px)}
      .N2_N1 {transform: translate(353px, 587px)}
      .N2_N2 {transform: translate(353px, 674px)}
      .N2_N3 {transform: translate(353px, 761px)}
      .N2_N4 {transform: translate(353px, 848px)}

      .N3_P4 {transform: translate(279px, 196px)}
      .N3_P3 {transform: translate(279px, 283px)}
      .N3_P2 {transform: translate(279px, 370px)}
      .N3_P1 {transform: translate(279px, 457px)}
      .N3_N0 {transform: translate(279px, 544px)}
      .N3_N1 {transform: translate(279px, 631px)}
      .N3_N2 {transform: translate(279px, 718px)}
      .N3_N3 {transform: translate(279px, 805px)}

      .N4_P3 {transform: translate(205px, 239px)}
      .N4_P2 {transform: translate(205px, 326px)}
      .N4_P1 {transform: translate(205px, 413px)}
      .N4_N0 {transform: translate(205px, 500px)}
      .N4_N1 {transform: translate(205px, 587px)}
      .N4_N2 {transform: translate(205px, 674px)}
      .N4_N3 {transform: translate(205px, 761px)}

      .N5_P3 {transform: translate(131px, 283px)}
      .N5_P2 {transform: translate(131px, 370px)}
      .N5_P1 {transform: translate(131px, 457px)}
      .N5_N0 {transform: translate(131px, 544px)}
      .N5_N1 {transform: translate(131px, 631px)}
      .N5_N2 {transform: translate(131px, 718px)}
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
