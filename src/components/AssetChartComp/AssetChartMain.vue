<template>
  <main>
    <div id="info-n-setting">
      <div id="name-container">
        <div id="name-contents">{{this.BasicInfo[this.idx].Assets}}</div>
      </div>
      <div id="info">
        <p>
          <span>Market Cap  1.72T</span>
          <span>Debt/Equity  32.35%</span>
          <span>Div. Yield  0.00%</span>
        </p>
        <p>
          <span>52-Week High  145.2382</span>
          <span>52-Week Low  89.4234</span>
        </p>
      </div>
      <div id="tools">
        <div id="more-info" @click="moreInfoPopup">More</div>
        <div id="dropdown_off" @click="activateDropdown">Tool&nbsp;&nbsp;&nbsp;</div>
      </div>
    </div>
    <section id="d3">
      <svg></svg>
      <ul>
        <li><input type="checkbox" id="check_bollinger" @click="createBollinger"/>Bollinger Band</li>
        <li><input type="checkbox" id="check_ichimoku" @click="createIchimoku"/>Ichimoku Kinko</li>
        <li><input type="checkbox" id="check_customed_tool_1" @click="createCustomed_1"/>Customed_Tool_1</li>
      </ul>
    </section>
    <AssetChartPopup1/>
  </main>
</template>

<script>
import basic_info from "@/assets/basic_info.json"
import ohlc_data from "@/assets/GOOGL_data.json"
import AssetChartPopup1 from "@/components/AssetChartComp/AssetChartMain/AssetChartPopup1.vue"

export default {
  components: { AssetChartPopup1 },
  data() {
    return {
      dropdownActivated: false,
      BasicInfo: basic_info,
      idx: 0
    }
  },
  created(){
    let code = this.$route.params.code;
    this.idx = this.BasicInfo.findIndex(function(item, i){
      return item.Codes === code;
    });
  },
  mounted(){
    this.$create_Candle(920, 360, ohlc_data);
    this.displayFullName();
  },
  methods: {
    displayFullName() {
      const out_div = document.querySelector("#name-container"),  
            in_div  = document.querySelector("#name-contents");
      const len_out = Number(window.getComputedStyle(out_div).width.replace('px', '')), 
            len_in  = Number(window.getComputedStyle(in_div).width.replace('px', ''));
      
      const moveToLeft = function() {
        if(len_out < len_in) {
          setTimeout(() => {
            in_div.style.transform = "translate(" + (len_out-len_in) + "px, 0)";
            in_div.style.transition = String(len_in/100)+"s linear";
          }, 400)
        }
      }

      document.querySelector("#name-contents").addEventListener('mouseenter', moveToLeft);
      document.querySelector("#name-contents").addEventListener('mouseleave', function(){
      if(len_out < len_in) {
          clearTimeout(moveToLeft);
          in_div.removeAttribute('style')
        }
      });
    }, /* displayFullName() */

    moreInfoPopup() {
      document.querySelector('#Popup-1-container').style.display = 'block';
    }, /* moreInfoPopup() */

    activateDropdown() {
      if(!this.dropdownActivated) {
        this.dropdownActivated = true;
        document.getElementById('dropdown_off').id = 'dropdown_on';
        document.querySelector('#d3 ul').style.display = 'block';
      } else {
        this.dropdownActivated = false;
        document.getElementById('dropdown_on').id = 'dropdown_off';
        document.querySelector('#d3 ul').style.display = 'none';
      }
    }, /* activateDropdown() */

    createBollinger() {
      this.$remove_chart(".candle"); this.$remove_chart(".tail");
      document.querySelector("#check_bollinger").checked ?
        this.$create_Bollinger(ohlc_data) : this.$remove_chart(".bollinger-part");
      this.$create_Candle(920, 360, ohlc_data);
    }, /* createBollinger() */

    createIchimoku() {
      this.$remove_chart(".candle"); this.$remove_chart(".tail");
      document.querySelector("#check_ichimoku").checked ?
        this.$create_Ichimoku(ohlc_data) : this.$remove_chart(".ichimoku-part")
      this.$create_Candle(920, 360, ohlc_data);
    }, /* createIchimoku() */
    
    createCustomed_1() {
      this.$remove_chart(".candle"); this.$remove_chart(".tail");
      document.querySelector("#check_customed_tool_1").checked ?
        this.$create_Customed_Tool_1(ohlc_data) : this.$remove_chart(".customed_tool_1-part")
      this.$create_Candle(920, 360, ohlc_data);
    }, /* createCustomed_1() */

  }
}
</script>

<style scoped>
main {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
}

/* Chart 상단 */
#info-n-setting {
    display: flex;
    height: 10vh;
    justify-content: space-between;
    align-items: flex-end;
    border-bottom: 0.5px solid gray;
    padding-left: 1vw;
    padding-right: 0.5vw;
}
#info-n-setting > div {
    padding-bottom: 0.8vh;
}
/* Chart 상단 - 종목명 */
#info-n-setting #name-container {
    color: white;
    width: 30%;
    font-size: 30px;
    font-weight: bold;
    overflow: hidden;
}
#info-n-setting #name-contents {
    color: white;
    width: max-content;
    height: 100%;
    align-items: baseline;
    font-size: 30px;
    font-weight: bold;
}
/* Chart 상단 - 종목 정보 */
#info-n-setting #info {
    width: 55%;
    color: white;
}
#info-n-setting #info span {
    color: white;
}
#info p {
    margin: 0;
}
#info p span {
    margin-right: 2vw;
}
/* Chart 상단 - 보조지표 선택 */
#info-n-setting #tools {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 10%;
    height: 100%;
    padding: 0;
    text-align: right;
    color: white;
}
#tools div:nth-child(1) {
    width: 100%;
    height: 50%;
    text-decoration: underline;
}
#tools div:nth-child(1):hover {   
    cursor: pointer;
}
#tools div:nth-child(2) {
    width: 100%;
    height: 45%;
    padding-bottom: 0.5vh;
}
#tools div:nth-child(2):hover {
    cursor: pointer;
}
#tools #dropdown_off::after {
    content: "▼";
}
#tools #dropdown_on::after {
    content: "▲";
}

/* Chart 하단(메인) */
section {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}
/* #d3 svg {
    border: 1px solid grey;
} */
#d3 ul {
    display: none;
    position: absolute;
    right: 0%;
    top: 0%;
    margin: 0;
    padding: 0;
    z-index: 1;
    background: black;
    color: white;
}
#d3 ul li {
    width: 100%;
    border: 1px solid gray;
    list-style-type: none;
    text-align: left;
}
</style>