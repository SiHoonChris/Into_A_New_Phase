<template>
  <header>
    <div id="nav">
      <nav id="navigation">
        <span @click="moveTo('main')">Main</span>
        <span @click="moveTo('portfolio')">Portfolio</span>
        <span @click="moveTo('balance_sheet')">Balance Sheet</span>
        <span @click="moveTo('income_stat')">Income Stat.</span>
        <span @click="moveTo('transaction')">Transaction</span>
      </nav>
      <DashboardIndexCarousel/>
    </div>
    <div id="total-transaction">
      <DashboardTotalTransaction/>
    </div>
  </header>
</template>

<script>
import DashboardIndexCarousel from "@/components/DashboardComp/DashboardHeader/DashboardIndexCarousel.vue"
import DashboardTotalTransaction from "@/components/DashboardComp/DashboardHeader/DashboardTotalTransaction.vue"

export default {
  components: { DashboardIndexCarousel, DashboardTotalTransaction },
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
    width: 56vw;
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
    width: 38vw;
    height: 16vh;
    border: 1px solid grey;
}

</style>