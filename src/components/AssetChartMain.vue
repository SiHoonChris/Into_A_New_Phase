<template>
  <main>
    <section id="d3">
      <svg width="1534" height="619"></svg>
    </section>
  </main>
</template>

<script>
import ohlc_data from '@/assets/data.json'

export default {
  mounted(){
    this.$create_Candle(ohlc_data);
  },
  methods: {
    createIchimoku() {this.$create_Ichimoku(ohlc_data)},
    createBollinger() {this.$create_Bollinger(ohlc_data)}
  }
}
</script>

<style scoped>
main {
    display: flex;
    width: 100%;
    height: 100%;
}
section {
    display: flex;
    justify-content: center;
    align-items: center;
}
#d3 svg {
    border: 1px solid grey;
}
</style>