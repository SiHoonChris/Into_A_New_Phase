<template>
  <main>
    <div id="info-n-setting">
      <div id="name">{{this.BasicInfo[this.idx].Assets}}</div>
      <div id="info">
        <p>
          <span>Market Cap  1.72T</span>
          <span>Debt/Equity  32.35%</span>
          <span>Div. Yield  0.00%</span>
        </p>
        <p>
          <span>Highest(Overall)  145.2382</span>
          <span>Lowest(Overall)  89.4234</span>
        </p>
      </div>
      <div id="chart-tool">
        <span id="dropdown_off" @click="activateDropdown">Tool</span>
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
  </main>
</template>

<script>
import basic_info from "@/assets/basic_info.json"
import ohlc_data from '@/assets/GOOGL_data.json'

export default {
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
  },
  methods: {
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
    },
    createBollinger() {
      document.querySelector("#check_bollinger").checked ?
      this.$create_Bollinger(ohlc_data) : this.$remove_chart(".bollinger-part")
    },
    createIchimoku() {
      document.querySelector("#check_ichimoku").checked ?
      this.$create_Ichimoku(ohlc_data) : this.$remove_chart(".ichimoku-part")
    },
    createCustomed_1() {
      document.querySelector("#check_customed_tool_1").checked ?
      this.$create_Customed_Tool_1(ohlc_data) : this.$remove_chart(".customed_tool_1-part")
    },
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
    border-bottom: 0.5px solid gray;
    padding-left: 1vw;
}
/* Chart 상단 - 종목명 */
#info-n-setting #name {
    color: white;
    width: 30%;
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
#info-n-setting #chart-tool {
    width: 15%;
    height: 50%;
    padding: 0;
    text-align: right;
    margin-top: 24px;
    color: white;
}
#chart-tool span {
    margin-right: 10px;
}
#chart-tool span:hover {
    cursor: pointer;
}
#chart-tool #dropdown_off::after {
    content: "▼";
    margin-right: 8px;
    float: right;
}
#chart-tool #dropdown_on::after {
    content: "▲";
    margin-right: 8px;
    float: right;
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