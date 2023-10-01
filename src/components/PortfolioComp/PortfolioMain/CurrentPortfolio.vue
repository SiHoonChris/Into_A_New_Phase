<template>
  <div id="current-portfolio">
    <div id="cur-portf-chart"></div>
    <div id="cur-portf-yield"> <!--소수점 아래 2자리-->
        <span>Current : -2.74%</span>
        <span>Evaluation : 6.34%</span>
    </div>
    <div id="cur-portf-component"> <!--소수점 아래 4자리-->
        <div class="component"><span class="color-id">■</span>AAPL  50.7423%</div>
        <div class="component"><span class="color-id">■</span>MSFT  36.2134%</div>
        <div class="component"><span class="color-id">■</span>AAPL  50.7423%</div>
        <div class="component"><span class="color-id">■</span>MSFT  36.2134%</div>
        <div class="component"><span class="color-id">■</span>AAPL  50.7423%</div>
        <div class="component"><span class="color-id">■</span>MSFT  36.2134%</div>
        <div class="component"><span class="color-id">■</span>AAPL  50.7423%</div>
        <div class="component"><span class="color-id">■</span>MSFT  36.2134%</div>
        <div class="component"><span class="color-id">■</span>AAPL  50.7423%</div>
        <div class="component"><span class="color-id">■</span>MSFT  36.2134%</div>
        <div class="component"><span class="color-id">■</span>AAPL  50.7423%</div>
        <div class="component"><span class="color-id">■</span>MSFT  36.2134%</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      PF_Data: { debt: 432, equity: 574 }
    }
  },
  mounted() {
    if(document.querySelectorAll("#cur-portf-chart > svg").length === 0) {
        const data = this.PF_Data;

        const WIDTH  = Number(window.getComputedStyle(document.querySelector('#current-portfolio')).width.replace('px', ''))*0.9,
              HEIGHT = Number(window.getComputedStyle(document.querySelector('#current-portfolio')).width.replace('px', ''))*0.9,
              MARGIN = 24,
              RADIUS = Math.min(WIDTH, HEIGHT) / 2 - MARGIN;
        // append the svg object to the div
        const svg = d3.select("#cur-portf-chart")
                        .append("svg")
                        .attr("width", WIDTH)
                        .attr("height", HEIGHT)
                        .append("g")
                        .attr("transform", "translate(" + WIDTH / 2 + "," + HEIGHT / 2 + ")");
                
        // set the color scale
        const color = d3.scaleOrdinal().range(["#66ff33", "#0033cc"])

        // Compute the position of each group on the pie:
        const pie = d3.pie().value(d => d[1]);
        const data_ready = pie(Object.entries(data));

        // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
        svg.selectAll('whatever')
            .data(data_ready)
            .enter()
            .append('path')
                .attr("class", "donut")
                .attr('d', d3.arc()
                    .innerRadius(106)  // This is the size of the donut hole
                    .outerRadius(RADIUS)
                )
            .attr('fill', d => color(d.data[0]) )
            .attr("stroke", "white")
            .style("stroke-width", "1.4px");
    }
  } 
}
</script>

<style scoped>
    #current-portfolio {
        width: 35%;
        border: 1px solid grey;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    #cur-portf-chart {
        width: 100%;
        height: 70%;
        display: flex;
        justify-content: center;
    }
    #cur-portf-yield {
        width: 90%;
        height: 6%;
        color: white;
        display: flex;
        justify-content: space-between;
    }
    #cur-portf-component {
        height: 20%;
        width: 86%;
        margin: 3% 0.6% 1% 3.6%;
        color: white;
        display: flex;
        flex-wrap: wrap;
        overflow-y: auto;
    }
    .component {
        height: 20%;
        width: 50%;
        margin-bottom: 0.8%;
        text-align: left;
        vertical-align: middle;
    }
    .color-id {
        margin-right: 3.6%;
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