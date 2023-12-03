<template>
  <div id="Popup-container" @dblclick="popUpOff">
    <div id="Popup-contents">
      <BalanceSheetQuarterTable/>
    </div>
  </div>
</template>

<script>
import BalanceSheetQuarterTable from '@/components/BalanceSheetComp/BalanceSheetPopup/BalanceSheetPopupTable.vue'

export default {
  components: { BalanceSheetQuarterTable },
  methods: {
    popUpOff() { document.querySelector("#Popup-container").style.display = "none" }
  }
}
</script>

<style scoped>
#Popup-container {
    display: none;
    position: absolute;
    top: 20vh;
    left: 20vw;
    width: 62vw;
    height: 68vh;
    border: 3.4px solid white;
    border-radius: 16px;
    background: rgba(0, 0, 0, 0.7);
    z-index: 10;
}
#Popup-contents {
    width: 94%;
    height: 88%;
    margin: 3% auto;
    overflow-y: scroll;
}

/* Scroll-bar */
#Popup-contents::-webkit-scrollbar {
  	width: 0.6vw;
}
#Popup-contents::-webkit-scrollbar-thumb {
  	border-radius: 30px;
  	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  	background-color: #333;
}
</style>