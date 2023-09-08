<template>
  <header>
    <span id="name">Dummy</span>
    <div id="tools">
        <input type="checkbox" id="BB"/>Bollinger Band
        <input type="checkbox" id="IC"/>Ichimoku Kinko Hyo
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    alert() {
      if(document.getElementById("BB").checked) alert("checked");
    }
  },
}
</script>

<style scoped>
header {
    height: 12vh;
    border-bottom: 1px solid white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 30px;
}
#name {
    color: white;
    font-size: 40px;
    font-weight: bold;
}
#tools {
    color: white;
}
</style>