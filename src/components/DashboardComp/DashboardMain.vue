<template>
  <main @scroll="scroller">
    <DashboardSearchMethod @datas="setData"/>
    <div id="charts">
      <DashboardCoverChart v-for="(info, i) in datasOnPage.slice(0, this.N)" :key="i"
        :name="info.Assets" :state="info.States" :code="info.Codes" :hold="info.Hold"/>
    </div>
  </main>
</template>

<script>
import DashboardSearchMethod from "@/components/DashboardComp/DashboardMain/DashboardSearchMethod.vue"
import DashboardCoverChart from "@/components/DashboardComp/DashboardMain/DashboardCoverChart.vue"

export default {
  components: { DashboardSearchMethod, DashboardCoverChart },
  data() {
    return {
      datasOnPage: [],
      N: 9
    }
  },
  methods: {
    setData(value){
      this.datasOnPage = [];    // 이전에 받은 데이터를 리셋하고
      this.datasOnPage = value; // 새 데이터를 전송받아 저장한다
      this.N = 9;               // 새로운 검색 결과에 대해서도, 최초에 표시되는 종목 수는 9개 
    },
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