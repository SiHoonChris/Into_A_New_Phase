export default {
    install(Vue) {

        Vue.config.globalProperties.$create_Donut =
            function() {
                // Create dummy data
                const data = { debt: 432, equity: 574 }; 
                // Number(window.getComputedStyle(out_div).width.replace('px', ''))#debt-ratio-chart
                const WIDTH  = 430, // set the dimensions and margins of the graph
                    HEIGHT = 430,
                    MARGIN = 40;
                // The radius of the pieplot is half the width or half the height (smallest one)
                // I subtract a bit of margin
                const RADIUS = Math.min(WIDTH, HEIGHT) / 2 - MARGIN;
                                                                    
                // append the svg object to the div
                const svg = d3.select("#debt-ratio-chart")
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
                           .innerRadius(114)  // This is the size of the donut hole
                           .outerRadius(RADIUS)
                       )
                   .attr('fill', d => color(d.data[0]) )
                   .attr("stroke", "white")
                   .style("stroke-width", "1.4px");

                // percentage : debt / equity
                const PERCENT = Math.round(data.debt/data.equity * 10000)/100 + '%';
                svg.append('text')
                .text(PERCENT)
                .attr("class", "percentage")
                .attr('text-anchor', 'middle')
                .style('fill', 'white')
                .style('font-size', '40px');

            } // function : $create_Donut

        Vue.config.globalProperties.$create_Horizontal_Bar =
            function() {
                // Dummy Datas
                const data = [
                    {
                        "profit": "Rev",
                        "size": 282836
                    },
                    {
                        "profit": "Oper_Inc",
                        "size": 74842
                    },
                    {
                        "profit": "Net_Inc",
                        "size": 59972
                    }
                ];
            
                // set the dimensions and margins of the graph
                const margin = {top: 50, right: 20, bottom: 40, left: 80},
                      width  = 420 - margin.left - margin.right,
                      height = 420 - margin.top - margin.bottom;
            
                // append the svg object to the body of the page
                const svg = d3.select("#profit-margin-chart")
                              .append("svg")
                              .attr("width", width + margin.left + margin.right)
                              .attr("height", height + margin.top + margin.bottom)
                              .append("g")
                              .attr("transform", `translate(${margin.left}, ${margin.top})`);
            
                // Add X axis
                const x = d3.scaleLinear()
                            .domain([0, 282836])
                            .range([ 0, width]);
                // svg.append("g")
                //    .attr("transform", `translate(0, ${height})`)
                //    .call(d3.axisBottom(x))
                //    .selectAll("text")
                //    .attr("transform", "translate(-10,0)rotate(-45)")
                //    .style("text-anchor", "end");
            
                // Y axis
                const y = d3.scaleBand()
                            .range([ 0, height ])
                            .domain(data.map(d => d.profit))
                            .padding(0.3);
                svg.append("g")
                   .attr("color", "white")
                   .call(d3.axisLeft(y));
            
                //Bars
                svg.selectAll("Rect")
                   .data(data)
                   .join("rect")
                   .attr("x", x(0) )
                   .attr("y", d => y(d.profit))
                   .attr("width", d => x(d.size))
                   .attr("height", y.bandwidth())
                   .attr("stroke", "white")
                   .attr("fill", "#ff99cc");

            } // function : $create_Horizontal_Bar

    }
}