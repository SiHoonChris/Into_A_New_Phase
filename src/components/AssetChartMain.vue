<template>
  <main>
    <div id="info-n-setting">
      <span id="name">Dummy</span>
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
    </div>
    <section id="d3">
      <svg width="920" height="360"></svg>
    </section>
  </main>
</template>

<script>
import ohlc_data from '@/assets/data.json'

export default {
  mounted(){
    this.$create_Candle(ohlc_data);
    this.$create_Ichimoku(ohlc_data)
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
    flex-direction: column;
    width: 100%;
    height: 100%;
}
#info-n-setting {
    display: flex;
    height: 10vh;
    justify-content: space-between;
    border-bottom: 0.5px solid gray;
    padding: 0 1vw;
}
#info-n-setting #name {
    color: white;
    width: 35%;
    font-size: 30px;
    font-weight: bold;
}
#info-n-setting #info {
    width: 65%;
    color: white;
}
#info-n-setting #info span {
    color: white;
    /* font-weight: bold; */
}
#info p {
  margin: 0;
}
#info p span {
  margin-right: 2vw;
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