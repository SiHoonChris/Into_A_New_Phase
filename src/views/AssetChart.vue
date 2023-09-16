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
import AssetChartMain from "@/components/AssetChartComp/AssetChartMain.vue"
import AssetChartFiles from "@/components/AssetChartComp/AssetChartFiles.vue"
import AssetChartRecord from "@/components/AssetChartComp/AssetChartRecord.vue"
import AssetChartOnWatch from "@/components/AssetChartComp/AssetChartOnWatch.vue"
import AssetChartMemo from "@/components/AssetChartComp/AssetChartMemo.vue"

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

</style>