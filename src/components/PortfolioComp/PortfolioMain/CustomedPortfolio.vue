<template>
  <div id="customed-portfolios">
    <div class="customed"></div>
    <div class="customed"></div>
    <div class="customed"></div>
    <div class="customed"></div>
    <div class="customed"></div>
    <div class="customed"></div>
    <div class="customed"></div>
    <div class="customed"></div>
  </div>
</template>

<style scoped>
    #customed-portfolios {
        display: flex;
        flex-wrap: wrap;
        width: 60%;
        border: 1px solid grey;
        overflow-y: scroll;
    }
    .customed {
        width: 33%;
        height: 50%;
        border: 1px solid grey;
    }

    /* Scroll-bar */
    #customed-portfolios::-webkit-scrollbar-track {
        background-color: black;
    }
    #customed-portfolios::-webkit-scrollbar {
        background-color: black;
        width: 0.6vw;
    }
    #customed-portfolios::-webkit-scrollbar-thumb {
        border-radius: 30px;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color: #333;
    }
</style>