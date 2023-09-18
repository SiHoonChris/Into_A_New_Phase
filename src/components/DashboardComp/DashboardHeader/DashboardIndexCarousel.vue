<template>
  <nav id="displayer">
    <!-- class명 부여한 것도 inline-css로 적용됨-그래서 이동 과정 중에 css효과 깨짐, 색상/폰트 부여는 JS로 처리해야할 듯 -->
    <!-- JSON 데이터 구조 다시 한 번 생각, v-for로 간결하게 돌릴 수 있는 방법 없을까?-->
    <div id="contents">
      <div><p>USD/KRW</p><p>1,327.00 <span class="minus">2.00</span> <span class="minus">-0.15</span></p></div>
      <div><p>CNY/KRW</p><p>181.89 <span class="minus">0.62</span> <span class="minus">-0.34</span></p></div>
      <div><p>HKD/KRW</p><p>168.87 <span class="minus">0.29</span> <span class="minus">-0.17</span></p></div>
      <div><p>SGD/KRW</p><p>976.74 <span class="minus">1.51</span> <span class="minus">-0.15</span></p></div>
      <div><p>Basis Rate(KR)</p><p>3.50 <span class="zero"></span> <span class="zero"></span></p></div>
      <div><p>Basis Rate(US)</p><p>5.50 <span class="zero"></span> <span class="zero"></span></p></div>
      <!-- class가 zero이면 안의 textContent를 없애는 걸로 JS 작성 -->
      <div><p>KOSPI</p><p>2,519.14 <span class="minus">18.54</span> <span class="minus">-0.73</span></p></div>
      <div><p>NASDAQ</p><p>13,590.65 <span class="plus">126.67</span> <span class="plus">0.94</span></p></div>
      <div><p>S&P500</p><p>4,405.71 <span class="plus">29.40</span> <span class="plus">0.67</span></p></div>
      <div><p>DJI</p><p>34,346.90 <span class="plus">247.48</span> <span class="plus">0.73</span></p></div>
    </div>
  </nav>
</template>

<script>
import Global_Index_Table from "@/assets/Global_Index_Table.json"
export default {
  mounted(){
    const data = Global_Index_Table;


    setInterval(()=>{
      try {
        const contents = document.querySelectorAll('#contents div')
        const clone = document.querySelector('#contents div:first-child').cloneNode(true)
        setTimeout(()=>{
          for(const i in contents){
            if(i>0){
              contents[i].style.transform="translateX(-14vw)"
              contents[i].style.transition="2.0s linear"
            }
          }
        });
        setTimeout(()=>{
          try {
            document.querySelector("#contents").appendChild(clone)
            contents[0].remove()
            for(const i in contents){
              if(i>0) contents[i].removeAttribute('style')
            }
          } catch(err) {
            console.log(err)
          }
        }, 2000)
      }
      catch(e) {
        console.log("IGNORE THIS ERROR : " + e);
      }
    }, 4000);
  }
}
</script>

<style scoped>
#displayer {
    overflow-x: hidden;
}
#contents {
    height: 8vh;
    display: flex;
    justify-content: left;
    transform: translateX(-14vw);
}
#contents div {
    width: 14vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
#contents div p {
    margin: 0;
    text-align: center;
    color: white;
    font-weight: bold;
    font-size: 18px;
}
#contents div p span {
    font-size: 12px;
}
.plus { color: green; }
.plus:nth-child(1)::before { content: "▲"; }
.plus:nth-child(2)::before { content: "+"}
.minus { color: red; }
.minus:nth-child(1)::before { content: "▼"; }
.plus:nth-child(2)::after, .minus:nth-child(2)::after { content: "%"; }

</style>