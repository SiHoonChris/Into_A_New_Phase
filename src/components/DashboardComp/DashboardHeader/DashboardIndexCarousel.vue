<template>
  <nav id="slider">
    <!-- JSON 데이터 구조 다시 한 번 생각, v-for로 간결하게 돌릴 수 있는 방법 없을까?-->
    <div id="slide-track">
      <!-- <div class="slide"><p>USD/KRW</p><p>1,327.00 <span class="minus">2.00</span> <span class="minus">-0.15</span></p></div>
      <div class="slide"><p>CNY/KRW</p><p>181.89 <span class="minus">0.62</span> <span class="minus">-0.34</span></p></div>
      <div class="slide"><p>HKD/KRW</p><p>168.87 <span class="minus">0.29</span> <span class="minus">-0.17</span></p></div>
      <div class="slide"><p>SGD/KRW</p><p>976.74 <span class="minus">1.51</span> <span class="minus">-0.15</span></p></div>
      <div class="slide"><p>Basis Rate(KR)</p><p>3.50 <span class="zero"></span> <span class="zero"></span></p></div>
      <div class="slide"><p>Basis Rate(US)</p><p>5.50 <span class="zero"></span> <span class="zero"></span></p></div>
      <div class="slide"><p>KOSPI</p><p>2,519.14 <span class="minus">18.54</span> <span class="minus">-0.73</span></p></div>
      <div class="slide"><p>NASDAQ</p><p>13,590.65 <span class="plus">126.67</span> <span class="plus">0.94</span></p></div>
      <div class="slide"><p>S&P500</p><p>4,405.71 <span class="plus">29.40</span> <span class="plus">0.67</span></p></div>
      <div class="slide"><p>DJI</p><p>34,346.90 <span class="plus">247.48</span> <span class="plus">0.73</span></p></div> -->
    </div>
  </nav>
</template>

<script>
import Global_Index_Table from "@/assets/Global_Index_Table.json"
export default {
  mounted(){
    const DATA = Global_Index_Table;
  
    // Values from Data
    for(let E of Object.keys(DATA[DATA.length-1])) {
      // 실제 이름으로 변경 : SPX => S&P500 , BRKR => Basis Rate(KR) , BRUS => Basis Rate(US) , _ => /
      let E_fullName;
      E_fullName = E.includes("_") ? E.replace("_", "/") : E ;
      switch(E) {
        case "SPX":
            E_fullName = "S&P500";
            break;
        case "BRKR":
            E_fullName = "Basis Rate(KR)";
            break;
        case "BRUS":
            E_fullName = "Basis Rate(US)";
            break;
        default:
            E_fullName;
      }
      // 지수의 가장 최근 값
      let E_curVal = DATA[DATA.length-1][E];
      // 전일 대비 변동값
      let E_diff = Number(DATA[DATA.length-1][E]) - Number(DATA[DATA.length-2][E]);
      // 전일 대비 변동 퍼센티지
      let E_diffPerc = (Number(DATA[DATA.length-1][E]) - Number(DATA[DATA.length-2][E])) / Number(DATA[DATA.length-2][E]) * 100;
      // 전일 대비, 상승-하락-보합
      let E_mathSymbol;
      if(Number(E_diff) === 0) E_mathSymbol = "zero";
      else if (Number(E_diff) > 0) E_mathSymbol = "plus";
      else E_mathSymbol = "minus";
      // innerHTML
      let html_inner = `<div class="slide"><p>${E_fullName}</p><p>${E_curVal} <span class="${E_mathSymbol}">${E_diff.toFixed(2)}</span> <span class="${E_mathSymbol}">${E_diffPerc.toFixed(2)}</span></p></div>`;
      // 생성
      document.querySelector("#slide-track").innerHTML += html_inner;
    }
    // class가 zero일 경우, 값 없애기
    for(const Z of document.querySelectorAll(".zero")) { Z.textContent = ""; }

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