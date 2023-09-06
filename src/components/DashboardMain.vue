<template>
  <main>
    <div id="setting">
      <select>
        <option value="all">All</option>
        <option value="hold">Holding</option>
        <option value="unheld">Not Holding</option>
      </select>
    </div>
    <div id="charts">
      <CoverChart :name="Assets[0]" :state="States[0]" :link="Charts[0]" />
      <CoverChart :name="Assets[1]" :state="States[2]" :link="Charts[1]" />
      <CoverChart :name="Assets[2]" :state="States[1]"/>
      <CoverChart :name="Assets[3]" :state="States[0]"/>
      <CoverChart :name="Assets[4]" :state="States[1]"/>
      <CoverChart :name="Assets[5]" :state="States[2]"/>
    </div>
  </main>
</template>

<script>
import CoverChart from "@/components/CoverChart.vue"

export default {
  components: { CoverChart },
  data() {
    return {
      Assets: ["Apple.Inc", "Samsung Electric", "Microsoft", "JEPI", "Google" , "QYLD"],
      States: ["BULL", "BEAR", "UNDECIDED"],
      Charts: ["/chartB", "/chartI"]
    }
  }
}
</script>

<style scoped>
main {
    margin: 0;
    height: 70vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 2vw;
    overflow-y: scroll;
}
#setting {
    margin: 0;
    height: 14.9%;
    width: 100%;
    display: flex;
    justify-content: right;
    align-items: center;
}
select {
    background: #1a1a1a;
    color: white;
    font-weight: bold;
    width: 6vw;
    height: 3vh;
}
#charts {
    margin: 0;
    height: 85%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
</style>