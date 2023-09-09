<template>
  <div id="asset-chart">
    <div class="chart"><AssetChartMain/></div>
    <div class="files" style="color: white"><AssetChartFiles/></div>
    <div class="record" style="color: white"><AssetChartRecord/></div>
    <div class="on-watch" style="color: white"><AssetChartOnWatch/></div>
    <div class="memo" style="color: white"><AssetChartMemo/></div>    
  </div>
</template>

<script>
import AssetChartMain from "@/components/AssetChartMain.vue"
import AssetChartFiles from "@/components/AssetChartFiles.vue"
import AssetChartRecord from "@/components/AssetChartRecord.vue"
import AssetChartOnWatch from "@/components/AssetChartOnWatch.vue"
import AssetChartMemo from "@/components/AssetChartMemo.vue"

export default {
  components: { AssetChartMain, AssetChartFiles, AssetChartRecord, AssetChartOnWatch, AssetChartMemo },
  
}
</script>

<style scoped>
#asset-chart {
    display: grid;
    grid-template-rows: repeat(10, 10%);
    grid-template-columns: repeat(10, 10%);
    width: 100%;
    /* min-width: ; */
    height: 80vh;
    gap: 0;
    grid-template-areas:
      "c c c c c c r r m m" 
      "c c c c c c r r m m"
      "c c c c c c r r m m"
      "c c c c c c r r m m" 
      "c c c c c c w w m m"
      "c c c c c c w w m m" 
      "c c c c c c w w m m"
      "f f f f f f w w m m"
      "f f f f f f w w m m"
      "f f f f f f w w m m";
}
.chart {
    grid-area: c;
    border-right: 0.5px solid gray;
    border-bottom: 0.5px solid gray;
}
.files {
    grid-area: f;
    border-right: 0.5px solid gray;
}
.record {
    grid-area: r;
    border-bottom: 0.5px solid gray;
}
.on-watch {
    grid-area: w;
}
.memo {
    grid-area: m;
    border-left: 0.5px solid gray;
}
/* #asset-chart::-webkit-scrollbar-track {
	background-color: black;
}

#asset-chart::-webkit-scrollbar {
	background-color: black;
	width: 10px;
}

#asset-chart::-webkit-scrollbar-thumb {
	border-radius: 30px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #333;
} */

</style>