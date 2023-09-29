<template>
  <div id="portfolio-container">
    <div id="portfolio-content">
      <div id="debt-ratio-chart"></div>
      <div id="customed-portfolios"></div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$create_Donut();
  }
}
</script>

<style scoped>
    #portfolio-container {
        width: 100%;
        height: 80vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #portfolio-content {
        display: flex;
        width: 76%;
        height: 70vh;
        /* border: 1px solid grey; */
    }
    #debt-ratio-chart {
        width: 40%;
        /* border: 1px solid green; */
    }
    #customed-portfolios{
        width: 60%;
        border: 1px solid grey;
    }
</style>