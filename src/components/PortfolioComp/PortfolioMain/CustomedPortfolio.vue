<template>
  <div id="customed-portfolios">
    <div class="customed"></div>
    <div class="customed"></div>
    <div class="customed"></div>
    <div class="customed"></div>
    <div class="customed"></div>
    <div class="customed"></div>
    <div class="customed"></div>
    <div class="customed"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      customed_1 : { GOOGL: 25, AAPL: 13, MSFT: 17, KO: 8  },
      customed_2 : { GOOGL: 8,  AAPL: 20, MSFT: 2,  KO: 16 },
      customed_3 : { GOOGL: 10, AAPL: 3,  MSFT: 7,  KO: 5  },
      customed_4 : { GOOGL: 18, AAPL: 2,  MSFT: 32, KO: 15 },
      customed_5 : { GOOGL: 52, AAPL: 31, MSFT: 71, KO: 24 },
      customed_6 : { GOOGL: 12, AAPL: 17, MSFT: 12, KO: 45 },
      customed_7 : { GOOGL: 23, AAPL: 9,  MSFT: 19, KO: 13 },
      customed_8 : { GOOGL: 22, AAPL: 32, MSFT: 15, KO: 19 },
      PF_Data : {},
      PF_Data_Sum: 0,
      PF_Data_color: ["green", "blue", "yellow", "red", "blue", "lemon"]
    }
  },
  mounted() {
    let savedPortfolio = document.querySelectorAll('.customed');
    for(const i in savedPortfolio) {
        this.$donutChart(eval(`this.customed_${Number(i)+1}`), Number(i)+1);
        savedPortfolio[i].addEventListener('click', function() {
            document.querySelector('#cur-portf-chart > svg').remove();
            this.$donutChartDetail(eval(`this.customed_${Number(i)+1}`));
        })
    }
  },
  methods: {}
}
</script>

<style scoped>
    #customed-portfolios {
        width: 46%;
        height: 84%;
        border: 1px solid grey;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin: 0 8vw;
        overflow-y: auto;
    }
    .customed {
        width: 33%;
        height: 49%;
        border: 1px solid grey;
        display: flex;
        justify-content: center;
    }
    .customed:hover {
        border: 1px solid white;
        cursor: pointer;
    }

    /* Scroll-bar */
    #customed-portfolios::-webkit-scrollbar-track {
        background-color: black;
    }
    #customed-portfolios::-webkit-scrollbar {
        background-color: black;
        width: 0.6vw;
    }
    #customed-portfolios::-webkit-scrollbar-thumb {
        border-radius: 30px;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color: #333;
    }
</style>