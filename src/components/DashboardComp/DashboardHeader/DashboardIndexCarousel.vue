<template>
  <nav id="slider">
    <div id="slide-track">
      <div v-for="(data, i) in Object.keys(DATAS[DATAS.length-1])" :key="i" class="slide">
        <p>{{data}}</p>
        <p>{{DATAS[DATAS.length-1][data].toLocaleString()}} 
          <span class="diff">
            {{
              Number(
                Math.abs(DATAS[DATAS.length-1][data]-DATAS[DATAS.length-2][data]).toFixed(2)
              ).toLocaleString()+" "
            }}
          </span> 
          <span class="diff">
            {{
              Number(
                (
                  (DATAS[DATAS.length-1][data] - DATAS[DATAS.length-2][data]) / DATAS[DATAS.length-2][data] * 100
                ).toFixed(2)
              ).toLocaleString()
            }}
          </span>
        </p>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      DATAS: []
    }
  },
  mounted(){
    this.$http.get("/getGlobalIndexTableDatas")
      .then(res => {
        console.log(res.data);
        this.DATAS = res.data;
      })
      .catch(err => {
        if (err.message.indexOf('Network Error') > -1) {
          alert('Error')
        }
      })

    // Fullname Transition
    for(const E of document.querySelectorAll(".slide > p:first-child")) {
      let fullName;
      fullName = E.textContent.includes("_") ? E.textContent.replace("_", "/") : E.textContent ;
      switch(fullName) {
        case "SPX":
            fullName = "S&P 500";
            break;
        case "BRKR":
            fullName = "Basis (KR)";
            break;
        case "BRUS":
            fullName = "Basis (US)";
            break;
        default:
            fullName;
      }
      E.textContent = fullName;
    }
    
    // Volume of Difference Comparing to Previous Day
    for(const I of document.querySelectorAll(".slide > p:nth-child(2) > span:nth-child(2)")) {
      if (Number(I.textContent) === 0) {
        I.className = "zero";
        I.previousSibling.className = "zero";
        I.textContent = "";
        I.previousSibling.textContent = "";
      } else if (Number(I.textContent) > 0) {
        I.className = "plus";
        I.previousSibling.className = "plus";
      } else {
        I.className = "minus"
        I.previousSibling.className = "minus";
      };
    }

    // Carousel
    const CLONE = document.querySelector('#slide-track').cloneNode(true);
    CLONE.id = "slide-track-cloned";
    document.querySelector("#slide-track").appendChild(CLONE);
  }
}
</script>

<style scoped>
@keyframes scroll {
    0% {transform: translateX(0);}
    100% {transform: translateX(calc(-14vw * 10));}
}

#slider {
    overflow: hidden;
}
#slide-track {
    display: flex;
    height: 8vh;
    animation: scroll 30s linear infinite;
}
#slide-track-cloned {
    display: flex;
    height: 8vh;
}
.slide {
    width: 14vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.slide p {
    margin: 0;
    text-align: center;
    color: white;
    font-weight: bold;
    font-size: 18px;
}
.slide p span {
    font-size: 12px;
}
.plus { color: green; }
.plus:nth-child(1)::before { content: "▲"; }
.plus:nth-child(2)::before { content: "+"}
.minus { color: red; }
.minus:nth-child(1)::before { content: "▼"; }
.plus:nth-child(2)::after, .minus:nth-child(2)::after { content: "%"; }

</style>