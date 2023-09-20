<template>
  <nav id="slider">
    <div id="slide-track">
      <div v-for="(data, i) in Object.keys(DATAS[DATAS.length-1])" :key="i" class="slide">
        <p>{{data}}</p>
        <p>{{DATAS[DATAS.length-1][data]}} 
          <span class="minus">
            {{Math.abs(DATAS[DATAS.length-1][data]-DATAS[DATAS.length-2][data]).toFixed(2)}}
          </span> 
          <span class="minus">
            {{((DATAS[DATAS.length-1][data] - DATAS[DATAS.length-2][data]) / DATAS[DATAS.length-2][data] * 100).toFixed(2)}}
          </span>
        </p>
      </div>
    </div>
  </nav>
</template>

<script>
import Global_Index_Table from "@/assets/Global_Index_Table.json"

export default {
  data() {
    return {
      DATAS: Global_Index_Table
    }
  },
  mounted(){
    // 실제 이름으로 변경 : SPX => S&P500 , BRKR => Basis Rate(KR) , BRUS => Basis Rate(US) , _ => /
    for(const E of document.querySelectorAll(".slide > p:first-child")) {
      let fullName;
      fullName = E.textContent.includes("_") ? E.textContent.replace("_", "/") : E.textContent ;
      switch(fullName) {
        case "SPX":
            fullName = "S&P 500";
            break;
        case "BRKR":
            fullName = "Basis Rate (KR)";
            break;
        case "BRUS":
            fullName = "Basis Rate (US)";
            break;
        default:
            fullName;
      }
      E.textContent = fullName;
    }
  //     // 전일 대비, 상승-하락-보합
  //     let E_mathSymbol;
  //     if(Number(E_diff) === 0) E_mathSymbol = "zero";
  //     else if (Number(E_diff) > 0) E_mathSymbol = "plus";
  //     else E_mathSymbol = "minus";

    // class가 zero일 경우, 값 없애기
    for(const E of document.querySelectorAll(".zero")) { E.textContent = ""; }

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