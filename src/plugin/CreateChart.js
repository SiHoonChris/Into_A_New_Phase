export default {
    install(Vue) {

        Vue.config.globalProperties.$create_Candle =
            function(ohlc_data) {            
                let svg    = d3.select("#d3 svg"),
                    width  = svg.attr("width"),
                    height = svg.attr("height");
                
                let xScale = d3.scaleBand().range([0, width]).padding(0.1),
                    yScale = d3.scaleLinear().range([height, 0]);
                        
                let g = svg.append("g")
                        .attr("transform", "translate(" + 0 + "," + 0 + ")");
                    
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
                    .attr("transform", "translate(" + width + ", 0)")
                    .call(d3.axisLeft(yScale));
                
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
            
            } // function : $create_Candle

        Vue.config.globalProperties.$create_Bollinger = 
            function(ohlc_data) {
                // N = (범위) , M = (표준편차 계수)
                const N = 20, M = 2;
                // Typical Price
                const BB_BAND_TP = JSON.parse(`[${ohlc_data.map((e) => `{"date" : ${e.date}, "TP" : ${(e.high+e.low+e.close)/3}}`).join()}]`); 
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
            
            
                let svg    = d3.select("#d3 svg"),
                    width  = svg.attr("width"),
                    height = svg.attr("height");
                
                let xScale = d3.scaleBand().range([0, width]).padding(0.1),
                    yScale = d3.scaleLinear().range([height, 0]);
                        
                let g = svg.append("g")
                        .attr("transform", "translate(" + 15 + "," + 5 + ")");
                    
                xScale.domain(ohlc_data.map((d) => d.date));
                yScale.domain(d3.extent([d3.max(ohlc_data, (d) => d.high), d3.min(ohlc_data, (d) => d.low)]));
                
                /* 볼린저밴드 - 중앙선 */
                g.append("path")
                    .datum(BB_BAND.slice(N-1, BB_BAND.length))
                    .attr("class", "bollinger-part")
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
                    .attr("class", "bollinger-part")
                    .attr("fill", "none")
                    .attr("stroke", "#0000ff")
                    .attr("stroke-width", 1.0)
                    .attr("d", d3.line()
                    .x((d) => xScale(String(d.date))+xScale.bandwidth()/2)
                    .y((d) => yScale(d.LU))
                );
            
                /* 볼린저밴드 - 하단선 */
                g.append("path")
                    .datum(BB_BAND.slice(N-1, BB_BAND.length))
                    .attr("class", "bollinger-part")
                    .attr("fill", "none")
                    .attr("stroke", "#0000ff")
                    .attr("stroke-width", 1.0)
                    .attr("d", d3.line()
                    .x((d) => xScale(String(d.date))+xScale.bandwidth()/2)
                    .y((d) => yScale(d.LD))
                );
            
            } // function : $create_Bollinger

        Vue.config.globalProperties.$create_Ichimoku = 
            function(ohlc_data) {
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
            
                // * Senkou Span-A,B
                //   1) Senkou Span-A ;  (Tenkan + Kijun) / 2   *인덱스 넘버 기준 25부터 시작
                //   2) Senkou Span-B ;  (52_PH + 52_PL) / 2   *인덱스 넘버 기준 51부터 시작
                const ICHIMOKU_SENKOU_SPAN = JSON.parse(`[${
                    ohlc_data.map((e, i) => {
                        if(i>=0 && i<25) {
                            return `{"date" : ${e.date}, "Senkou_A" : 0, "Senkou_B" : 0}`;
                        }
                        else if(i>=25 && i<51) {
                            return `{"date" : ${e.date}, "Senkou_A" : ${ (ICHIMOKU_TENKAN_SEN[i].Tenkan + ICHIMOKU_KIJUN_SEN[i].Kijun) / 2 }, "Senkou_B" : 0}`;
                        }
                        else {
                            let arr_PH_52 = ohlc_data.slice(i-51, i+1).map((e) => e.high), 
                                arr_PL_52 = ohlc_data.slice(i-51, i+1).map((e) => e.low);
                            let PH_52 = Math.max(...arr_PH_52), 
                                PL_52 = Math.min(...arr_PL_52);
                            return `{"date" : ${e.date}, "Senkou_A" : ${ (ICHIMOKU_TENKAN_SEN[i].Tenkan + ICHIMOKU_KIJUN_SEN[i].Kijun) / 2 }, "Senkou_B" : ${ (PH_52 + PL_52) / 2 }}`
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
            
            
                let svg    = d3.select("#d3 svg"),
                    width  = svg.attr("width"),
                    height = svg.attr("height");
                
                let xScale = d3.scaleBand().range([0, width]).padding(0.1),
                    yScale = d3.scaleLinear().range([height, 0]);
                        
                let g = svg.append("g")
                        .attr("transform", "translate(" + 15 + "," + 5 + ")");
                    
                xScale.domain(ohlc_data.map((d) => d.date));
                yScale.domain(d3.extent([d3.max(ohlc_data, (d) => d.high), d3.min(ohlc_data, (d) => d.low)]));
                
                /* 일목균형표 전환선 */
                g.append("path")
                    .datum(ICHIMOKU_TENKAN_SEN.slice(8, ICHIMOKU_TENKAN_SEN.length))
                    .attr("class", "ichimoku-part")
                    .attr("fill", "none")
                    .attr("stroke", "#ff00ff")
                    .attr("stroke-width", 0.8)
                    .attr("d", d3.line()
                    .x((d) => xScale(String(d.date))+xScale.bandwidth()/2)
                    .y((d) => yScale(d.Tenkan))
                );
            
                /* 일목균형표 기준선 */
                g.append("path")
                    .datum(ICHIMOKU_KIJUN_SEN.slice(25, ICHIMOKU_KIJUN_SEN.length))
                    .attr("class", "ichimoku-part")
                    .attr("fill", "none")
                    .attr("stroke", "#0066ff")
                    .attr("stroke-width", 0.8)
                    .attr("d", d3.line()
                    .x((d) => xScale(String(d.date))+xScale.bandwidth()/2)
                    .y((d) => yScale(d.Kijun))
                );
            
                /* 일목균형표 선행스팬 A */
                g.append("path")
                    .datum(ICHIMOKU_SENKOU_SPAN.slice(25, ICHIMOKU_SENKOU_SPAN.length))
                    .attr("class", "ichimoku-part")
                    .attr("fill", "none")
                    .attr("stroke", "#3af030")
                    .attr("stroke-width", 1.6)
                    .attr("d", d3.line()
                    .x((d) => xScale(String(d.date))+xScale.bandwidth()/2)
                    .y((d) => yScale(d.Senkou_A))
                    );
            
                /* 일목균형표 선행스팬 B */
                g.append("path")
                    .datum(ICHIMOKU_SENKOU_SPAN.slice(51, ICHIMOKU_SENKOU_SPAN.length))
                    .attr("class", "ichimoku-part")
                    .attr("fill", "none")
                    .attr("stroke", "orange")
                    .attr("stroke-width", 1.6)
                    .attr("d", d3.line()
                    .x((d) => xScale(String(d.date))+xScale.bandwidth()/2)
                    .y((d) => yScale(d.Senkou_B))
                );
            
                /* 일목균형표 후행스팬 */
                g.append("path")
                    .datum(ICHIMOKU_CHIKOU_SPAN.slice(25, ICHIMOKU_CHIKOU_SPAN.length))
                    .attr("class", "ichimoku-part")
                    .attr("fill", "none")
                    .attr("stroke", "grey")
                    .attr("stroke-width", 0.6)
                    .attr("d", d3.line()
                    .x((d) => xScale(String(d.date))+xScale.bandwidth()/2)
                    .y((d) => yScale(d.Chikou))
                );
            
                /* 일목균형표 구름대 */
                g.append("path")
                    .datum(ICHIMOKU_SENKOU_SPAN.slice(51, ICHIMOKU_SENKOU_SPAN.length))
                    .attr("class", "ichimoku-part")
                    .attr("fill", "#3af030")
                    .style("opacity", 0.18)
                    .attr("d", d3.area()
                    .x((d) => xScale(String(d.date))+xScale.bandwidth()/2)
                    .y0((d) => yScale(d.Senkou_B))
                    .y1((d) => yScale(d.Senkou_A))
                    );
                //  g.append("path")
                //  .datum(ICHIMOKU_SENKOU_SPAN.slice(51, ICHIMOKU_SENKOU_SPAN.length))
                //  .attr("fill", "orange")
                //  .style("opacity", 0.18)
                //  .attr("d", d3.area()
                //   .x((d) => xScale(String(d.date))+xScale.bandwidth()/2)
                //   .y0((d) => yScale(d.Senkou_A))
                //   .y1((d) => yScale(d.Senkou_B))
                //  );
            
            } // function : $create_Ichimoku

            Vue.config.globalProperties.$create_Customed_Tool_1 = 
                function(ohlc_data) {
                    // N = (범위) , M = (표준편차 계수)
                    const N = 20, M = 2;
                    // Typical Price
                    const BB_BAND_TP = JSON.parse(`[${ohlc_data.map((e) => `{"date" : ${e.date}, "TP" : ${(e.high+e.low+e.close)/3}}`).join()}]`); 
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
            
                    // * Senkou Span-A,B
                    //   1) Senkou Span-A ;  (Tenkan + Kijun) / 2   *인덱스 넘버 기준 25부터 시작
                    //   2) Senkou Span-B ;  (52_PH + 52_PL) / 2   *인덱스 넘버 기준 51부터 시작
                    const ICHIMOKU_SENKOU_SPAN = JSON.parse(`[${
                        ohlc_data.map((e, i) => {
                            if(i>=0 && i<25) {
                                return `{"date" : ${e.date}, "Senkou_A" : 0, "Senkou_B" : 0}`;
                            }
                            else if(i>=25 && i<51) {
                                return `{"date" : ${e.date}, "Senkou_A" : ${ (ICHIMOKU_TENKAN_SEN[i].Tenkan + ICHIMOKU_KIJUN_SEN[i].Kijun) / 2 }, "Senkou_B" : 0}`;
                            }
                            else {
                                let arr_PH_52 = ohlc_data.slice(i-51, i+1).map((e) => e.high), 
                                    arr_PL_52 = ohlc_data.slice(i-51, i+1).map((e) => e.low);
                                let PH_52 = Math.max(...arr_PH_52), 
                                    PL_52 = Math.min(...arr_PL_52);
                                return `{"date" : ${e.date}, "Senkou_A" : ${ (ICHIMOKU_TENKAN_SEN[i].Tenkan + ICHIMOKU_KIJUN_SEN[i].Kijun) / 2 }, "Senkou_B" : ${ (PH_52 + PL_52) / 2 }}`
                            }
                        }).join()
                    }]`);
            
            
                    let svg    = d3.select("#d3 svg"),
                        width  = svg.attr("width"),
                        height = svg.attr("height");
                
                    let xScale = d3.scaleBand().range([0, width]).padding(0.1),
                        yScale = d3.scaleLinear().range([height, 0]);
                        
                    let g = svg.append("g")
                               .attr("transform", "translate(" + 15 + "," + 5 + ")");
                    
                    xScale.domain(ohlc_data.map((d) => d.date));
                    yScale.domain(d3.extent([d3.max(ohlc_data, (d) => d.high), d3.min(ohlc_data, (d) => d.low)]));
                
                    
                    /* 볼린저밴드 - 상단선 */
                    g.append("path")
                        .datum(BB_BAND.slice(N-1, BB_BAND.length))
                        .attr("class", "customed_tool_1-part")
                        .attr("fill", "none")
                        .attr("stroke", "#0000ff")
                        .attr("stroke-width", 1.0)
                        .attr("d", d3.line()
                        .x((d) => xScale(String(d.date))+xScale.bandwidth()/2)
                        .y((d) => yScale(d.LU))
                    );
            
                    /* 볼린저밴드 - 하단선 */
                    g.append("path")
                        .datum(BB_BAND.slice(N-1, BB_BAND.length))
                        .attr("class", "customed_tool_1-part")
                        .attr("fill", "none")
                        .attr("stroke", "#0000ff")
                        .attr("stroke-width", 1.0)
                        .attr("d", d3.line()
                        .x((d) => xScale(String(d.date))+xScale.bandwidth()/2)
                        .y((d) => yScale(d.LD))
                    );

                    /* 일목균형표 선행스팬 A */
                    g.append("path")
                        .datum(ICHIMOKU_SENKOU_SPAN.slice(25, ICHIMOKU_SENKOU_SPAN.length))
                        .attr("class", "customed_tool_1-part")
                        .attr("fill", "none")
                        .attr("stroke", "#3af030")
                        .attr("stroke-width", 1.6)
                        .attr("d", d3.line()
                        .x((d) => xScale(String(d.date))+xScale.bandwidth()/2)
                        .y((d) => yScale(d.Senkou_A))
                        );
            
                    /* 일목균형표 선행스팬 B */
                    g.append("path")
                        .datum(ICHIMOKU_SENKOU_SPAN.slice(51, ICHIMOKU_SENKOU_SPAN.length))
                        .attr("class", "customed_tool_1-part")
                        .attr("fill", "none")
                        .attr("stroke", "orange")
                        .attr("stroke-width", 1.6)
                        .attr("d", d3.line()
                        .x((d) => xScale(String(d.date))+xScale.bandwidth()/2)
                        .y((d) => yScale(d.Senkou_B))
                    );
                        
            } // function : $create_Customed_Tool_1

    }
}