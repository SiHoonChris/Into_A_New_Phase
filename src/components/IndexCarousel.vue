<template>
  <nav id="displayer">
    <div id="contents">
      <div><p>DJI</p><p>34,346.90 <span class="plus">▲247.48 +0.73%</span></p></div>
      <div><p>USD/KRW</p><p>1,327.00 <span class="minus">▼2.00 -0.15%</span></p></div>
      <div><p>CNY/KRW</p><p>181.89 <span class="minus">▼0.62 -0.34%</span></p></div>
      <div><p>HKD/KRW</p><p>168.87 <span class="minus">▼0.29 -0.17%</span></p></div>
      <div><p>SGD/KRW</p><p>976.74 <span class="minus">▼1.51 -0.15%</span></p></div>
      <div><p>B.Rate(KR)</p><p>3.50%</p></div>
      <div><p>B.Rate(US)</p><p>5.50%</p></div>
      <div><p>KOSPI</p><p>2,519.14 <span class="minus">▼18.54 -0.73%</span></p></div>
      <div><p>NASDAQ</p><p>13,590.65 <span class="plus">▲126.67 +0.94%</span></p></div>
      <div><p>S&P500</p><p>4,405.71 <span class="plus">▲29.40 +0.67%</span></p></div>
    </div>
  </nav>
</template>

<script>
export default {
  mounted(){
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
.minus {
    color: red;
}
.plus {
    color: green;
}
</style>