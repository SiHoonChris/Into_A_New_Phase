export default {
    install(Vue) {
        Vue.config.globalProperties.$donutChartDetail=
        function(COMP_DATA){
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
        } // function : $donutChartDetail

        Vue.config.globalProperties.$donutChart=
        function(COMP_DATA, n){
            this.PF_Data = COMP_DATA;
          
            const WIDTH  = Number(window.getComputedStyle(document.querySelector(`.customed:nth-of-type(${n})`)).width.replace('px', ''))*0.86,
                  HEIGHT = Number(window.getComputedStyle(document.querySelector(`.customed:nth-of-type(${n})`)).width.replace('px', '')),
                  MARGIN = 10,
                  RADIUS = Math.min(WIDTH, HEIGHT) / 2 - MARGIN;
                  
            // append the svg object to the div
            const svg = d3.select(`.customed:nth-of-type(${n})`)
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
                        .innerRadius(60)  // This is the size of the donut hole
                        .outerRadius(RADIUS);
          
            // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
            svg.selectAll('whatever')
               .data(data_ready)
               .enter()
               .append('path')
                   .attr("class", "saved-donut")
                   .attr('d', arc)
                   .attr('fill', d => color(d.data[0]) )
                   .attr("stroke", "#171a1e")
                   .style("stroke-width", "1.0px");
        } // function : $donutChart
    }
}