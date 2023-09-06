<template>
  <main>
    <section id="d3">
      <svg width="1530" height="700"></svg>
    </section>
  </main>
</template>

<script>
import ohlc_data from '@/assets/data.json'

export default {
  mounted(){
    // ***  Ichimoku-Kinko-Hyo 생성 데이터 & 코드  ***

    // 1. Tenkan-sen ;  (9_PH + 9_PL) / 2   *당일 포함(즉, 인덱스 넘버 기준 8부터 시작)
    const ICHIMOKU_TENKAN_SEN = JSON.parse(`[${
        ohlc_data.map((e, i) => {
            if(i >= 8) {
                let arr_PH_9 = ohlc_data.slice(i-8, i+1).map((e) => e.high), 
                    arr_PL_9 = ohlc_data.slice(i-8, i+1).map((e) => e.low);
                let PH_9 = Math.max(...arr_PH_9), 
                    PL_9 = Math.min(...arr_PL_9);
                return `{"date" : ${e.date}, "Tenkan" : ${(PH_9 + PL_9) / 2}}`;
            }
            else {
                return `{"date" : ${e.date}, "Tenkan" : 0}`;
            }
        }).join()
    }]`);

    // 2. Kijun-sen ;  (26_PH + 26_PL) / 2   *당일 포함(즉, 인덱스 넘버 기준 25부터 시작)
    const ICHIMOKU_KIJUN_SEN = JSON.parse(`[${
        ohlc_data.map((e, i) => {
            if(i >= 25) {
                let arr_PH_26 = ohlc_data.slice(i-25, i+1).map((e) => e.high), 
                    arr_PL_26 = ohlc_data.slice(i-25, i+1).map((e) => e.low);
                let PH_26 = Math.max(...arr_PH_26), 
                    PL_26 = Math.min(...arr_PL_26);
                return `{"date" : ${e.date}, "Kijun" : ${(PH_26 + PL_26) / 2}}`;
            }
            else {
                return `{"date" : ${e.date}, "Kijun" : 0}`;
            }
        }).join()
    }]`);

    // 3. Senkou Span-A ;  (Tenkan + Kijun) / 2   *인덱스 넘버 기준 25부터 시작
    const ICHIMOKU_SENKOU_SPAN_A = JSON.parse(`[${
        ohlc_data.map((e, i) => {
            if(i >= 25) {
                return `{"date" : ${e.date}, "Senkou_A" : ${ (ICHIMOKU_TENKAN_SEN[i].Tenkan + ICHIMOKU_KIJUN_SEN[i].Kijun) / 2 }}`;
            }
            else {
                return `{"date" : ${e.date}, "Senkou_A" : 0}`;
            }
        }).join()
    }]`);

    // 4. Senkou Span-B ;  (52_PH + 52_PL) / 2   *인덱스 넘버 기준 51부터 시작
    const ICHIMOKU_SENKOU_SPAN_B = JSON.parse(`[${
        ohlc_data.map((e, i) => {
            if(i >= 51) {
                let arr_PH_52 = ohlc_data.slice(i-51, i+1).map((e) => e.high), 
                    arr_PL_52 = ohlc_data.slice(i-51, i+1).map((e) => e.low);
                let PH_52 = Math.max(...arr_PH_52), 
                    PL_52 = Math.min(...arr_PL_52);
                return `{"date" : ${e.date}, "Senkou_B" : ${(PH_52 + PL_52) / 2}}`;
            }
            else {
                return `{"date" : ${e.date}, "Senkou_B" : 0}`;
            }
        }).join()
    }]`);

    // 5. Chikou Span ;  "close" plotted 26-period in the past
    const ICHIMOKU_CHIKOU_SPAN = JSON.parse(`[${
        ohlc_data.map((e, i) => {
            if(i >= 25) {
                return `{"date" : ${e.date}, "Chikou" : ${ohlc_data[i-25].close}}`;
            }
            else {
                return `{"date" : ${e.date}, "Chikou" : 0}`;
            }
        }).join()
    }]`);

    // ***  Ichimoku-Kinko-Hyo 생성 데이터 & 코드  ***

    d3Chart();
    function d3Chart() {
        let svg    = d3.select("#d3 svg"),
            width  = svg.attr("width"),
            height = svg.attr("height");
        
        let xScale = d3.scaleBand().range([0, width]).padding(0.1),
            yScale = d3.scaleLinear().range([height, 0]);
                
        let g = svg.append("g")
                .attr("transform", "translate(" + 15 + "," + 5 + ")");
            
        xScale.domain(ohlc_data.map((d) => d.date));
        yScale.domain(d3.extent([d3.max(ohlc_data, (d) => d.high), d3.min(ohlc_data, (d) => d.low)]));
        
        /* x축 생성 */
        g.append("g")
            .attr("transform", "translate(0," + height + ")")
            .attr("color", "white")
            .call(d3.axisBottom(xScale));
        
        /* y축 생성 */
        g.append("g")
            .attr("color", "white")
            .call(d3.axisLeft(yScale));
        
        /* 일목균형표 전환선 */
        g.append("path")
            .datum(ICHIMOKU_TENKAN_SEN.slice(9, ICHIMOKU_TENKAN_SEN.length))
            .attr("fill", "none")
            .attr("stroke", "purple")
            .attr("stroke-width", 0.8)
            .attr("d", d3.line()
            .x((d) => xScale(String(d.date))+xScale.bandwidth()/2)
            .y((d) => yScale(d.Tenkan))
        );

        /* 일목균형표 기준선 */
        g.append("path")
            .datum(ICHIMOKU_KIJUN_SEN.slice(26, ICHIMOKU_KIJUN_SEN.length))
            .attr("fill", "none")
            .attr("stroke", "blue")
            .attr("stroke-width", 0.8)
            .attr("d", d3.line()
            .x((d) => xScale(String(d.date))+xScale.bandwidth()/2)
            .y((d) => yScale(d.Kijun))
        );

        /* 일목균형표 선행스팬 A */
        g.append("path")
            .datum(ICHIMOKU_SENKOU_SPAN_A.slice(26, ICHIMOKU_SENKOU_SPAN_A.length))
            .attr("fill", "none")
            .attr("stroke", "#3af030")
            .attr("stroke-width", 1.8)
            .attr("d", d3.line()
            .x((d) => xScale(String(d.date))+xScale.bandwidth()/2)
            .y((d) => yScale(d.Senkou_A))
            );

        /* 일목균형표 선행스팬 B */
        g.append("path")
            .datum(ICHIMOKU_SENKOU_SPAN_B.slice(52, ICHIMOKU_SENKOU_SPAN_B.length))
            .attr("fill", "none")
            .attr("stroke", "orange")
            .attr("stroke-width", 1.8)
            .attr("d", d3.line()
            .x((d) => xScale(String(d.date))+xScale.bandwidth()/2)
            .y((d) => yScale(d.Senkou_B))
        );

        /* 일목균형표 후행스팬 */
        g.append("path")
            .datum(ICHIMOKU_CHIKOU_SPAN.slice(26, ICHIMOKU_CHIKOU_SPAN.length))
            .attr("fill", "none")
            .attr("stroke", "grey")
            .attr("stroke-width", 0.6)
            .attr("d", d3.line()
            .x((d) => xScale(String(d.date))+xScale.bandwidth()/2)
            .y((d) => yScale(d.Chikou))
        );

        /* 일목균형표 구름대 */
        /* 방법을 찾아보자 */

        /* 캔들 몸통 */
        g.selectAll(".candle")
            .data(ohlc_data)
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
            .data(ohlc_data)
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