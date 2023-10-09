<template>
  <main>
    <DashboardSearchMethod/>
    <div id="charts">
      <DashboardCoverChart v-for="(info, i) in BasicInfo" :key="i"
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
      for(const T of this.searchTarget) {
        if(T.textContent.toLowerCase().includes(val.toLowerCase())) T.parentNode.parentNode.style.display="block";
        else T.parentNode.parentNode.style.display="none";
      }
    },
    searchHold: function(val) {
      for(const T of this.searchTarget) {
        switch(val) {
          case "Y" : 
            T.parentNode.parentNode.style.display = T.className === "Y" ? "block" : "none" ; 
            break;
          case "N" : 
            T.parentNode.parentNode.style.display = T.className === "N" ? "block" : "none" ; 
            break;
          default : 
            T.parentNode.parentNode.style.display="block";
        }
      }
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
    height: 16vh;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

#charts {
    margin: 0;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

</style>