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

      .WV_01 {transform: translate(980px, 293px) scale(0.7)}
      .WV_02 {transform: translate(980px, 354px) scale(0.7)}
      .WV_03 {transform: translate(980px, 415px) scale(0.7)}
      .WV_04 {transform: translate(980px, 476px) scale(0.7)}
      .WV_05 {transform: translate(980px, 537px) scale(0.7)}
      .WV_06 {transform: translate(980px, 598px) scale(0.7)}
      .WV_07 {transform: translate(980px, 659px) scale(0.7)}
      .WV_08 {transform: translate(1033px, 324px) scale(0.7)}
      .WV_09 {transform: translate(1033px, 385px) scale(0.7)}
      .WV_10 {transform: translate(1033px, 446px) scale(0.7)}
      .WV_11 {transform: translate(1033px, 507px) scale(0.7)}
      .WV_12 {transform: translate(1033px, 568px) scale(0.7)}
      .WV_13 {transform: translate(1033px, 629px) scale(0.7)}

      .n0_p5 {transform: translate(870px, 283px)}
      .n1_p5 {transform: translate(870px, 370px)}
      .n2_p5 {transform: translate(870px, 457px)}
      .n3_p5 {transform: translate(870px, 544px)}
      .n4_p5 {transform: translate(870px, 631px)}
      .n5_p5 {transform: translate(870px, 718px)}

      .p1_p4 {transform: translate(796px, 239px)}
      .n0_p4 {transform: translate(796px, 326px)}
      .n1_p4 {transform: translate(796px, 413px)}
      .n2_p4 {transform: translate(796px, 500px)}
      .n3_p4 {transform: translate(796px, 587px)}
      .n4_p4 {transform: translate(796px, 674px)}
      .n5_p4 {transform: translate(796px, 761px)}

      .p2_p3 {transform: translate(722px, 196px)}
      .p1_p3 {transform: translate(722px, 283px)}
      .n0_p3 {transform: translate(722px, 370px)}
      .n1_p3 {transform: translate(722px, 457px)}
      .n2_p3 {transform: translate(722px, 544px)}
      .n3_p3 {transform: translate(722px, 631px)}
      .n4_p3 {transform: translate(722px, 718px)}
      .n5_p3 {transform: translate(722px, 805px)}

      .p3_p2 {transform: translate(648px, 152px)}
      .p2_p2 {transform: translate(648px, 239px)}
      .p1_p2 {transform: translate(648px, 326px)}
      .n0_p2 {transform: translate(648px, 413px)}
      .n1_p2 {transform: translate(648px, 500px)}
      .n2_p2 {transform: translate(648px, 587px)}
      .n3_p2 {transform: translate(648px, 674px)}
      .n4_p2 {transform: translate(648px, 761px)}
      .n5_p2 {transform: translate(648px, 848px)}

      .p4_p1 {transform: translate(574px, 109px)}
      .p3_p1 {transform: translate(574px, 196px)}
      .p2_p1 {transform: translate(574px, 283px)}
      .p1_p1 {transform: translate(574px, 370px)}
      .n0_p1 {transform: translate(574px, 457px)}
      .n1_p1 {transform: translate(574px, 544px)}
      .n2_p1 {transform: translate(574px, 631px)}
      .n3_p1 {transform: translate(574px, 718px)}
      .n4_p1 {transform: translate(574px, 805px)}
      .n5_p1 {transform: translate(574px, 892px)}
      
      .BV_01 {transform: translate(414px, -20px) scale(0.7)}
      .BV_02 {transform: translate(362px, 11px) scale(0.7)}
      .BV_03 {transform: translate(310px, 41px) scale(0.7)}
      .BV_04 {transform: translate(259px, 70px) scale(0.7)}
      .BV_05 {transform: translate(206px, 100px) scale(0.7)}
      .BV_06 {transform: translate(154px, 130px) scale(0.7)}
      .BV_07 {transform: translate(101px, 161px) scale(0.7)}
      .BV_08 {transform: translate(361px, -50px) scale(0.7)}
      .BV_09 {transform: translate(309px, -19px) scale(0.7)}
      .BV_10 {transform: translate(257px, 10px) scale(0.7)}
      .BV_11 {transform: translate(206px, 40px) scale(0.7)}
      .BV_12 {transform: translate(155px, 69px) scale(0.7)}
      .BV_13 {transform: translate(102px, 100px) scale(0.7)}

      .p5_n0 {transform: translate(500px, 65px)}
      .p4_n0 {transform: translate(500px, 152px)}
      .p3_n0 {transform: translate(500px, 239px)}
      .p2_n0 {transform: translate(500px, 326px)}
      .p1_n0 {transform: translate(500px, 413px)}
      .n0_n0 {transform: translate(500px, 500px)}
      .n1_n0 {transform: translate(500px, 587px)}
      .n2_n0 {transform: translate(500px, 674px)}
      .n3_n0 {transform: translate(500px, 761px)}
      .n4_n0 {transform: translate(500px, 848px)}
      .n5_n0 {transform: translate(500px, 935px)}

      .p5_n1 {transform: translate(426px, 109px)}
      .p4_n1 {transform: translate(426px, 196px)}
      .p3_n1 {transform: translate(426px, 283px)}
      .p2_n1 {transform: translate(426px, 370px)}
      .p1_n1 {transform: translate(426px, 457px)}
      .n0_n1 {transform: translate(426px, 544px)}
      .n1_n1 {transform: translate(426px, 631px)}
      .n2_n1 {transform: translate(426px, 718px)}
      .n3_n1 {transform: translate(426px, 805px)}
      .n4_n1 {transform: translate(426px, 892px)}
      .N1_N5 {transform: translate(426px, 979px)}

      .p5_n2 {transform: translate(353px, 152px)}
      .p4_n2 {transform: translate(353px, 239px)}
      .p3_n2 {transform: translate(353px, 326px)}
      .p2_n2 {transform: translate(353px, 413px)}
      .p1_n2 {transform: translate(353px, 500px)}
      .n0_n2 {transform: translate(353px, 587px)}
      .n1_n2 {transform: translate(353px, 674px)}
      .n2_n2 {transform: translate(353px, 761px)}
      .n3_n2 {transform: translate(353px, 848px)}

      .p5_n3 {transform: translate(279px, 196px)}
      .p4_n3 {transform: translate(279px, 283px)}
      .p3_n3 {transform: translate(279px, 370px)}
      .p2_n3 {transform: translate(279px, 457px)}
      .p1_n3 {transform: translate(279px, 544px)}
      .n0_n3 {transform: translate(279px, 631px)}
      .n1_n3 {transform: translate(279px, 718px)}
      .n2_n3 {transform: translate(279px, 805px)}

      .p5_n4 {transform: translate(205px, 239px)}
      .p4_n4 {transform: translate(205px, 326px)}
      .p3_n4 {transform: translate(205px, 413px)}
      .p2_n4 {transform: translate(205px, 500px)}
      .p1_n4 {transform: translate(205px, 587px)}
      .n0_n4 {transform: translate(205px, 674px)}
      .n1_n4 {transform: translate(205px, 761px)}

      .p5_n5 {transform: translate(131px, 283px)}
      .p4_n5 {transform: translate(131px, 370px)}
      .p3_n5 {transform: translate(131px, 457px)}
      .p2_n5 {transform: translate(131px, 544px)}
      .p1_n5 {transform: translate(131px, 631px)}
      .n0_n5 {transform: translate(131px, 718px)}

      .TV_01 {transform: translate(101px, 786px) scale(0.7)}
      .TV_02 {transform: translate(152px, 818px) scale(0.7)}
      .TV_03 {transform: translate(204px, 850px) scale(0.7)}
      .TV_04 {transform: translate(257px, 880px) scale(0.7)}
      .TV_05 {transform: translate(309px, 911px) scale(0.7)}
      .TV_06 {transform: translate(361px, 942px) scale(0.7)}
      .TV_07 {transform: translate(413px, 973px) scale(0.7)}
      .TV_08 {transform: translate(98px, 846px) scale(0.7)}
      .TV_09 {transform: translate(150px, 878px) scale(0.7)}
      .TV_10 {transform: translate(203px, 910px) scale(0.7)}
      .TV_11 {transform: translate(257px, 940px) scale(0.7)}
      .TV_12 {transform: translate(309px, 971px) scale(0.7)}
      .TV_13 {transform: translate(361px, 1002px) scale(0.7)}




    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
