<template>
  <main @scroll="scroller">
    <DashboardSearchMethod/>
    <div id="charts">
      <DashboardCoverChart v-for="(info, i) in BasicInfo.slice(0, this.N)" :key="i"
        :name="info.Assets" :state="info.States" :code="info.Codes" :hold="info.Hold"/>
    </div>
  </main>
</template>

<script>
import DashboardSearchMethod from "@/components/DashboardComp/DashboardMain/DashboardSearchMethod.vue"
import DashboardCoverChart from "@/components/DashboardComp/DashboardMain/DashboardCoverChart.vue"
import basic_info from "@/assets/basic_info.json"

export default {
  components: { DashboardSearchMethod, DashboardCoverChart },
  data() {
    return {
      N: 9,
      BasicInfo: basic_info,
      searchText: '',
      searchTarget: [],
      searchHold: 'A'
    }
  },
  mounted(){
    this.searchTarget = document.querySelectorAll(".caption span:first-child");
  },
  watch: {
    searchText: function(val) {
      this.BasicInfo = basic_info.filter(e => e.Assets.includes(val) || e.Codes.includes(val));
    },
    searchHold: function(val) {
      this.BasicInfo = basic_info.filter(e => e.Hold.includes(val));
    }
  },
  methods: {
    scroller(){
      const D = document.querySelector("main");
      if(D.scrollTop > (D.scrollHeight - D.clientHeight) * 0.98) this.N += 6;
    }
  }
}
</script>

<style scoped>
main {
    margin: 0;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    overflow-y: scroll;
    overflow-x: hidden;
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

#charts {
    margin-left: 2vw;
    width: 98vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
}

</style>