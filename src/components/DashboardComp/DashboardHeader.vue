<template>
  <header>
    <div id="nav">
      <nav id="navigation">
        <span @click="moveTo('search')">SEARCH</span>
        <span @click="moveTo('portfolios')">PORTFOLIO PLANS</span>
        <span @click="moveTo('financial-statements')">FINANCIAL STATEMENTS</span>
      </nav>
      <DashboardIndexCarousel/>
    </div>
    <div id="total-transaction">
      <DashboardTransaction/>
    </div>
  </header>
</template>

<script>
import DashboardIndexCarousel from "@/components/DashboardComp/DashboardHeader/DashboardIndexCarousel.vue"
import DashboardTransaction from "@/components/DashboardComp/DashboardHeader/DashboardTransaction.vue"

export default {
  components: { DashboardIndexCarousel, DashboardTransaction },
  methods: {
    moveTo(where) {
      this.$router.push({name: where});
    }
  }
}
</script>

<style scoped>
header {
    margin: 0;
    padding: 0 2vw;
    height: 19.9vh;
    border-bottom: 1px solid gray;
    background: #0a0a0a;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
#nav {
    border: 1px solid gray;
    width: 52vw;
    display: flex;
    flex-direction: column;
}
nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 8vh;
}
nav:first-child {
    padding: 0 2vw !important;
}
#navigation {
    padding: 0 1vw;
    border-bottom: 1px solid gray;
}
#navigation span {
    text-align: center;
    color: silver;
    font-weight: bold;
    font-size: 20px;
}
#navigation span:hover {
    color: white;
    text-decoration: underline;
    cursor: pointer;
}
#total-transaction {
    width: 42vw;
    height: 16vh;
}

</style>