<template>
  <div id="Popup-1-container" @dblclick="popUpOff">
    <div id="Popup-1-contents">
      <div id="financial-stat-chart">
        <DebtRatioChart/>
        <ProfitMarginChart/>
      </div>
      <div id="financial-stat-table">
        <div id="income-table"><IncomeTable/></div>
        <div id="balance-sheet-table"><BalanceSheetTable/></div>
      </div>
    </div>
  </div>
</template>

<script>
import DebtRatioChart from "@/components/AssetChartComp/AssetChartMain/AssetChartPopup1/AssetChartPopup1DebtRatioChart.vue"
import ProfitMarginChart from "@/components/AssetChartComp/AssetChartMain/AssetChartPopup1/AssetChartPopup1ProfitMarginChart.vue"
import IncomeTable from "@/components/AssetChartComp/AssetChartMain/AssetChartPopup1/AssetChartPopup1IncomeTable.vue"
import BalanceSheetTable from "@/components/AssetChartComp/AssetChartMain/AssetChartPopup1/AssetChartPopup1BalanceSheetTable.vue"

export default {
  components: { DebtRatioChart, ProfitMarginChart, IncomeTable, BalanceSheetTable },
  mounted(){
    

  },
  methods: {
    popUpOff() { document.querySelector("#Popup-1-container").style.display = "none" }
  }
}
</script>

<style scoped>
#Popup-1-container {
    display: none;
    position: absolute;
    top: 20vh;
    left: 20vw;
    width: 60vw;
    height: 60vh;
    border: 3.4px solid white;
    border-radius: 16px;
    background: rgba(0, 0, 0, 0.6);
    z-index: 10;
}
#Popup-1-contents {
    width: 96%;
    height: 97%;
    margin: 1vh auto;
    overflow-y: scroll;
}
#financial-stat-chart {
    display: flex;
    width: 100%;
    height: 100%;
}
#debt-ratio-chart {
    width: 50%;
    height: 100%;
}
#profit-margin-chart {
    width: 50%;
    height: 100%;
}
#financial-stat-table {
    width: 100%;
    height: 150%;
}
#financial-stat-table > div {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background: yellow; */
}


/* Scroll-bar */
#Popup-1-contents::-webkit-scrollbar {
  	width: 0.6vw;
}
#Popup-1-contents::-webkit-scrollbar-thumb {
  	border-radius: 30px;
  	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  	background-color: #333;
}
</style>