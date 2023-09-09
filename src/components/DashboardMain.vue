<template>
  <main>
    <div id="setting">
      <input id="search" type="text" placeholder="Search"/>
      <select>
        <option value="all">All</option>
        <option value="hold">Hold</option>
        <option value="unheld">Not Hold</option>
      </select>
    </div>
    <div id="charts">
      <CoverChart :name="Assets[0]" :state="States[0]"/>
      <CoverChart :name="Assets[1]" :state="States[2]"/>
      <CoverChart :name="Assets[2]" :state="States[1]"/>
      <CoverChart :name="Assets[3]" :state="States[0]"/>
      <CoverChart :name="Assets[4]" :state="States[1]"/>
      <CoverChart :name="Assets[5]" :state="States[2]"/>
    </div>
  </main>
</template>

<script>
import CoverChart from "@/components/DashboardCoverChart.vue"

export default {
  components: { CoverChart },
  data() {
    return {
      Assets: ["Dummy", "AAPL", "Samsung Electric", "MSFT", "JEPI", "GOOGL"],
      States: ["BULL", "BEAR", "UNDECIDED"],
    }
  },
  methods: {}
}
</script>

<style scoped>
main {
    margin: 0;
    height: 80vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 2vw;
    overflow-y: scroll;
}
main::-webkit-scrollbar-track {
	background-color: black;
}

main::-webkit-scrollbar {
	background-color: black;
	width: 10px;
}

main::-webkit-scrollbar-thumb {
	border-radius: 30px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #333;
}
#setting {
    margin: 0;
    height: 14.9%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
#search {
  height: 3vh;
  border: 1px solid white;
  background: #0a0a0a;
  color: white;
  font-weight: bold;
}
::placeholder {
    color: white;
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