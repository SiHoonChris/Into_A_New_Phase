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
    <div id="d3">
      <svg width="100%" height="98%"></svg>
      <ul>
        <li><input type="checkbox" id="check_bollinger" @click="addAnalysisTool('bollinger')"/>Bollinger Band</li>
        <li><input type="checkbox" id="check_ichimoku" @click="addAnalysisTool('ichimoku')"/>Ichimoku Kinko</li>
        <li><input type="checkbox" id="check_customed_tool_1" @click="addAnalysisTool('customed_tool_1')"/>Customed_Tool_1</li>
      </ul>
    </div>
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
    this.$create_Candle(ohlc_data); 
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
          in_div.removeAttribute('style');
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

    addAnalysisTool(name) {
      this.$remove_chart(".candle, .tail, .x-axis, .y-axis");
      document.querySelector(`#check_${name}`).checked ?
        this.$create_AnalysisTool(name, ohlc_data) : this.$remove_chart(`.${name}-part`);
      this.$create_Candle(ohlc_data);
    } /* addAnalysisTool() */

  }
}
</script>

<style scoped>
main {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    height: 100%;
}

/* Chart 상단 */
#info-n-setting {
    display: flex;
    height: 12%;
    width: 100%;
    justify-content: space-between;
    align-items: flex-end;
    border-bottom: 0.5px solid gray;
    background: rgba(0, 0, 0, .78);
}
#info-n-setting > div {
    padding-top: 0.8vh;
    padding-bottom: 0.8vh;
}
/* Chart 상단 - 종목명 */
#info-n-setting #name-container {
    color: white;
    width: 30%;
    margin-left: 1vw;
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
    margin-right: 0.5vw;
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
#d3 {
    position: relative;
    width: 100%;
    height: 88%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, .78);
    overflow: hidden;
}
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