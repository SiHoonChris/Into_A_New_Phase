<template>
  <section>
    <div class="caption">
      <span :class="hold">{{name}}</span>
      <span>{{state}}</span>
    </div>
    <div class="candles" @click="moveToChartDetail()">
      <svg id="chart" width="460.800" height="292.487"></svg>
    </div>
  </section>
</template>

<script>
import ohlc_data from '@/assets/GOOGL_data.json'

export default {
  props: ['name', 'state', 'code', 'hold'],
  methods:{
    moveToChartDetail: function(){
      this.$router.push({name: 'chart', params: {code: this.code}});
    }
  },
  mounted(){
    let ohlcData = ohlc_data.slice(ohlc_data.length-40, ohlc_data.length);
        
    // var barsWidth  = window.getComputedStyle(document.querySelector(".candles")).width.replace('px', ''),
    //     barsHeight = window.getComputedStyle(document.querySelector(".candles")).height.replace('px', ''),
    
    let svg    = d3.select("#chart"),
        width  = svg.attr("width"),
        height = svg.attr("height");
        
    let xScale = d3.scaleBand().range([0, width]).padding(0.1),
        yScale = d3.scaleLinear().range([height, 0]);
                
    let g = svg.append("g")
            .attr("transform", "translate(" + 0 + "," + 0 + ")");
            
    xScale.domain(ohlcData.map((d) => d.date));
    yScale.domain(d3.extent([d3.max(ohlcData, (d) => d.high), d3.min(ohlcData, (d) => d.low)]));
        
    g.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(xScale));
        
    g.append("g")
        .call(d3.axisLeft(yScale));
                            
    g.selectAll(".candle")
        .data(ohlcData)
        .enter()
        .append("rect")
        .attr("class", "candle")
        .attr("x", (d) => xScale(d.date))
        .attr("width", xScale.bandwidth())
        .attr("y", (d) => yScale(d3.max([d.open, d.close])))
        .attr("height", (d) => Math.abs(yScale(d.close)-yScale(d.open)))
        .attr("fill", (d) => d.open >= d.close ? "red" : "green");
        
    g.selectAll(".wick")
        .data(ohlcData)
        .enter()
        .append("line")
        .attr("class", "wick")
        .attr("x1", (d) => xScale(d.date)+xScale.bandwidth()/2)
        .attr("y1", (d) => yScale(d.low))
        .attr("x2", (d) => xScale(d.date)+xScale.bandwidth()/2)
        .attr("y2", (d) => yScale(d.high))
        .style("stroke", (d) => d.open >= d.close ? "red" : "green");
  }
}
</script>

<style scoped>
section {
    width: 30vw;
    height: 44vh;
    margin: 0 0 5vh 0;
}
.caption {
    width: 100%;
    height: 6%;
    margin-bottom: 1%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
}
.candles {
    width: 100%;
    height: 94%;
    border: 1px solid gray;
}
.candles:hover {
    border: 1px solid whitesmoke;
    box-shadow: 0.1px 0.1px 1.6px 1.2px whitesmoke;
    cursor: pointer;
}
</style>