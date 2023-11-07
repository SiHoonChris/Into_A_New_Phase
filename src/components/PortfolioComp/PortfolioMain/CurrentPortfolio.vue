<template>
  <div id="current-portfolio">
    <div id="cur-portf-chart"></div>
    <div id="cur-portf-detail">
      <div id="yield">
        <span>Current : -2.74%</span>
        <span>Evaluation : 6.34%</span>
      </div>
      <div id="composition">
        <ul>
          <li v-for="(name, i) in Object.keys(PF_Data)" :key="i" class="component">
            <p>
              <input type="checkbox" :id="name" class="stock" :value="name" >
              <label :for="name"></label>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      PF_Data: { GOOGL: 8900, AAPL: 2353, MSFT: 5323, KO: 1890 },
      PF_Data_Sum: 0,
      PF_Data_color: ["green", "blue", "yellow", "red", "blue", "lemon"] // 순서대로 색상 입혀진 후, d3에서 자동으로 큰 순서대로 재배열함
    }
  },
  created(){
    this.PF_Data_Sum = Object.values(this.PF_Data).reduce((a, b)=> a + b, 0 );
    this.PF_Data_color = this.PF_Data_color.slice(0, Object.keys(this.PF_Data).length);
  },
  mounted() {
    document.querySelectorAll("#cur-portf-chart > svg").length === 0 && 
    this.donutChartDetail(this.PF_Data);
  }, 
  methods: {
    donutChartDetail: function(COMP_DATA){

        this.PF_Data = COMP_DATA;

        const WIDTH  = Number(window.getComputedStyle(document.querySelector('#current-portfolio')).width.replace('px', ''))*0.9,
              HEIGHT = Number(window.getComputedStyle(document.querySelector('#current-portfolio')).width.replace('px', '')),
              MARGIN = 16,
              RADIUS = Math.min(WIDTH, HEIGHT) / 2 - MARGIN;
        // append the svg object to the div
        const svg = d3.select("#cur-portf-chart")
                        .append("svg")
                        .attr("width", WIDTH)
                        .attr("height", HEIGHT)
                        .append("g")
                        .attr("transform", "translate(" + WIDTH / 2 + "," + HEIGHT / 2 + ")");
                
        // set the color scale
        this.PF_Data_color.slice(0, Object.keys(this.PF_Data).length);
        const color = d3.scaleOrdinal().range(this.PF_Data_color)
        
        // Compute the position of each group on the pie:
        const pie = d3.pie().value(d => d[1]);
        const data_ready = pie(Object.entries(this.PF_Data));

        var arc = d3.arc()
            .innerRadius(90)  // This is the size of the donut hole
            .outerRadius(RADIUS);

        // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
        svg.selectAll('whatever')
            .data(data_ready)
            .enter()
            .append('path')
                .attr("class", "donut")
                .attr('d', arc)
                .attr('fill', d => color(d.data[0]) )
                .attr("stroke", "#171a1e")
                .style("stroke-width", "2.0px")
            .transition()
                .duration(1000)
                .attrTween('d', function(d) {
                    var interpolate = d3.interpolate({startAngle: 0, endAngle: 0}, d);
                    return function(t) {
                        return arc(interpolate(t));
                    };
                });

    this.PF_Data_Sum = Object.values(this.PF_Data).reduce((a, b)=> a + b, 0 );
    for(const n of Object.keys(this.PF_Data)) {
        let singleAsset = document.querySelector(`#composition > ul li p input#${n}`);
            singleAsset.nextSibling.textContent = `${singleAsset.value} ${(this.PF_Data[n] / this.PF_Data_Sum * 100).toFixed(4)}%`;
    }

    let colorIndicator = document.querySelectorAll("#composition input[type='checkbox']"), i = 0;
    for(const d of colorIndicator) {
        d.style.backgroundColor = this.PF_Data_color[i];
        i++;
    }
    }
  }
}
</script>

<style scoped>
    #current-portfolio {
        width: 23%;
        height: 84%;
        border: 1px solid grey;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    #current-portfolio:hover {
        border: 1px solid white;
    }
    #cur-portf-chart {
        width: 100%;
        height: 70%;
        display: flex;
        justify-content: center;
    }
    #cur-portf-detail {
        width: 100%;
        height: 30%;
    }
    #yield {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 22px;
        width: calc(100% - 22px * 2);
        height: 30%;
        color: white;
        border-bottom: 1px solid #2e303b;
    }
    #composition {
        margin: 0 22px;
        padding-top: 16px;
        width: calc(100% - 22px * 2);
        height: 70%;
        color: white;
        display: flex;
        flex-wrap: wrap;
        overflow-y: auto;
    }
    #composition ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 0;
        padding: 0;
        list-style: none;
    }
    #composition li {
        width: 50%;
    }
    #composition p {
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
    #composition input[type="checkbox"] {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        height: 11px;
        width: 11px;
        background-color: white;
        margin-right: 9px;
        margin-left: 2px;
    }
    #composition label {
        color: white;
    }

    /* Scroll-bar */
    #cur-portf-component::-webkit-scrollbar-track {
        background-color: black;
    }
    #cur-portf-component::-webkit-scrollbar {
        background-color: black;
        width: 0.6vw;
    }
    #cur-portf-component::-webkit-scrollbar-thumb {
        border-radius: 30px;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color: #333;
    }
</style>