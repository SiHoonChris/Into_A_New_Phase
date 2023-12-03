<template>
  <div id="bs_tbl">
    <div id="title">
        <p>Balance Sheets</p>
        <p>(Won, \)</p>
    </div>
    <BalanceSheetTable/>
    <BalanceSheetPopup/>
  </div>
</template>

<script>
import BalanceSheetTable from '@/components/BalanceSheetComp/BalanceSheetMain/BalanceSheetMainTable.vue'
import BalanceSheetPopup from '@/components/BalanceSheetComp/BalanceSheetPopup.vue'

export default {
    components: { BalanceSheetTable, BalanceSheetPopup }
}
</script>

<style scoped>
    #bs_tbl {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 80vh;
        padding-top: 2%;
        overflow-y: scroll;
    }
    #title {
        width: 80vw;
        color: white;
        border-bottom: 1px solid white;
        margin-bottom: 5vh;
    }
    #title p:nth-child(1) {
        font-weight: bold;
        font-size: 30px;
        text-align: center;
    }
    #title p:nth-child(2) {
        margin-bottom: 1vh;
    }

    /* Scroll-bar */
    #bs_tbl::-webkit-scrollbar-track {
        background-color: black;
        border-bottom: 1px solid gray;
    }
    #bs_tbl::-webkit-scrollbar {
        background-color: black;
        width: 0.6vw;
    }
    #bs_tbl::-webkit-scrollbar-thumb {
        border-radius: 30px;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color: #333;
    }
</style>