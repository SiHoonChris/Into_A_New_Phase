<template>
  <div id="portfolio-container">
    <div id="portfolio-content">
      <CurrentPortfolio/>
      <CustomedPortfolio/>
    </div>
  </div>
</template>

<script>
import CurrentPortfolio from "@/components/PortfolioComp/PortfolioMain/CurrentPortfolio.vue"
import CustomedPortfolio from "@/components/PortfolioComp/PortfolioMain/CustomedPortfolio.vue"

export default {
  components: { CurrentPortfolio, CustomedPortfolio },
}
</script>

<style scoped>
    #portfolio-container {
        width: 100%;
        height: 80vh;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-left: 4vw;
    }
    #portfolio-content {
        display: flex;
        justify-content: space-between;
        width: 76%;
        height: 70vh;
    }
</style>