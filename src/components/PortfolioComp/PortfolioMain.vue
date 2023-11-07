<template>
  <div id="portfolio-container">
    <CurrentPortfolio/>
    <CustomedPortfolio/>
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
        justify-content: right;
        align-items: center;
    }
</style>