<template>
  <main>
    <section id="d3">
      <svg width="1900" height="700"></svg>
    </section>
  </main>
</template>

<script>
import ohlc_total_Data from '@/assets/data.json'

export default {
  mounted(){
    // ***  Bollinger Band 생성 데이터 & 코드  ***
    // N = (범위) , M = (표준편차 계수)
    const N = 20, M = 2;
    // Typical Price
    const BB_BAND_TP = JSON.parse(`[${ohlc_total_Data.map((e) => `{"date" : ${e.date}, "TP" : ${(e.high+e.low+e.close)/3}}`).join()}]`); 
    // Population Standart Deviation
    const BB_BAND_PSTDEV =
        BB_BAND_TP.map((e, i) => {
            if(i >= N-1) {
                let sum = 0, avg = 0;
                for(let idx = 0 ; idx < N ; idx++) {
                    sum += BB_BAND_TP[i-idx].TP;
                } // 합계
                avg = sum / N; // "합계"의 평균
                
                let stdSum = 0, stdAvg = 0;
                for(let idx = 0 ; idx < N ; idx++) {
                    stdSum += Math.pow(BB_BAND_TP[i-idx].TP - avg, 2);
                } // (x-m)^2 의 합계
                stdAvg = stdSum / N; // "(x-m)^2 의 합계"의 평균
                    
                return Math.sqrt(stdAvg);
            }
            else {
                return 0;
            }
        });
        
    // Moving Average, BOLU(Upper Bollinger Band), BOLU(Lower Bollinger Band)
    const BB_BAND = JSON.parse(`[${
        BB_BAND_TP.map((e, i) => {
            if(i >= N-1) {
                let sum = 0;
                for(let idx = 0 ; idx < N ; idx++) {
                    sum += BB_BAND_TP[i-idx].TP;
                }
                return `{"date" : ${e.date}, "MA" : ${sum / N}, "LU" : ${(sum / N) + (M * BB_BAND_PSTDEV[i])}, "LD" : ${(sum / N) - (M * BB_BAND_PSTDEV[i])}}`;
            }
            else {
                return `{"date" : ${e.date}, "MA" : 0, "LU" : 0, "LD" : 0}`;
            }
        }).join()
    }]`);
    // ***  Bollinger Band 생성 데이터 & 코드  ***

    d3Chart();
    function d3Chart() {
        let svg    = d3.select("#d3 svg"),
            width  = svg.attr("width"),
            height = svg.attr("height");
        
        let xScale = d3.scaleBand().range([0, width]).padding(0.1),
            yScale = d3.scaleLinear().range([height, 0]);
                
        let g = svg.append("g")
                .attr("transform", "translate(" + 15 + "," + 5 + ")");
            
        xScale.domain(ohlc_total_Data.map((d) => d.date));
        yScale.domain(d3.extent([d3.max(ohlc_total_Data, (d) => d.high), d3.min(ohlc_total_Data, (d) => d.low)]));
        
        /* x축 생성 */
        g.append("g")
            .attr("transform", "translate(0," + height + ")")
            .attr("color", "white")
            .call(d3.axisBottom(xScale));
        
        /* y축 생성 */
        g.append("g")
            .attr("color", "white")
            .call(d3.axisLeft(yScale));

        /* 상승/하락 구간 표시 */
        g.selectAll(".area")
            .data(ohlc_total_Data)
            .enter()
            .append("rect")
            .attr("class", "area")
            .attr("x", xScale.bandwidth() * 59.4)   // 지점 2  [지점 xScale 활용해서 딱 못짚나???]
            .attr("width", xScale.bandwidth() * 20) // 지점1-지점2  [지점 xScale 활용해서 딱 못짚나???]
            .attr("y", 0)
            .attr("height", height)
            .attr("fill", "yellow")
            .style("opacity", 0.004);
        
        /* 볼린저밴드 - 중앙선 */
        g.append("path")
            .datum(BB_BAND.slice(N-1, BB_BAND.length))
            .attr("fill", "none")
            .attr("stroke", "#ff0066")
            .attr("stroke-width", 1.0)
            .attr("d", d3.line()
            .x((d) => xScale(String(d.date))+xScale.bandwidth()/2)
            .y((d) => yScale(d.MA))
        );
        
        /* 볼린저밴드 - 상단선 */
        g.append("path")
            .datum(BB_BAND.slice(N-1, BB_BAND.length))
            .attr("fill", "none")
            .attr("stroke", "#000099")
            .attr("stroke-width", 1.0)
            .attr("d", d3.line()
            .x((d) => xScale(String(d.date))+xScale.bandwidth()/2)
            .y((d) => yScale(d.LU))
        );

        /* 볼린저밴드 - 하단선 */
        g.append("path")
            .datum(BB_BAND.slice(N-1, BB_BAND.length))
            .attr("fill", "none")
            .attr("stroke", "#000099")
            .attr("stroke-width", 1.0)
            .attr("d", d3.line()
            .x((d) => xScale(String(d.date))+xScale.bandwidth()/2)
            .y((d) => yScale(d.LD))
        );

        /* 캔들 몸통 */
        g.selectAll(".candle")
            .data(ohlc_total_Data)
            .enter()
            .append("rect")
            .attr("class", "candle")
            .attr("x", (d) => xScale(d.date))
            .attr("width", xScale.bandwidth())
            .attr("y", (d) => yScale(d3.max([d.open, d.close])))
            .attr("height", (d) => Math.abs(yScale(d.close)-yScale(d.open)))
            .attr("fill", (d) => d.open >= d.close ? "red" : "green");
        
        /* 캔들 꼬리 */
        g.selectAll(".tail")
            .data(ohlc_total_Data)
            .enter()
            .append("line")
            .attr("class", "tail")
            .attr("x1", (d) => xScale(d.date)+xScale.bandwidth()/2)
            .attr("y1", (d) => yScale(d.low))
            .attr("x2", (d) => xScale(d.date)+xScale.bandwidth()/2)
            .attr("y2", (d) => yScale(d.high))
            .style("stroke", (d) => d.open >= d.close ? "red" : "green");

    } // function d3Chart()
  }
}
</script>

<style scoped>
main {
    display: flex;
    width: 100%;
    height: 100%;
}
section {
    display: flex;
    justify-content: center;
    align-items: center;
}
#d3 svg {
    border: 1px solid grey;
}
</style>