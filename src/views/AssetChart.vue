<template>
  <div>
    <AssetChartHeader/>
    <AssetChartMain/>
  </div>
</template>

<script>
import AssetChartHeader from "@/components/AssetChartHeader.vue"
import AssetChartMain from "@/components/AssetChartMain.vue"

export default {
  components: { AssetChartHeader, AssetChartMain },
  
}
</script>

<style scoped>
header {
    height: 12vh;
    border-bottom: 1px solid white;
    display: flex;
    align-items: center;
}
span {
    color: white;
    font-size: 40px;
    font-weight: bold;
    margin-left: 30px;
}

</style>