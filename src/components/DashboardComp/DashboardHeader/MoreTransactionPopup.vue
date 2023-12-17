<template>
  <div id="Transaction-Popup-Cont">
    <div id="popup-off">
      <button @click="popUpOff">X</button>
    </div>
    <div id="search-option">
        <button>Duration</button> <!-- Calendar Lib 추가하기 -->
        <select> <!--searchOptions 항목은 쿼리로 추출 ; select DISTINCT(*) from table--> 
            <option v-for="(opt, i) in searchOptions" :key="i" class="slide" :value="opt">{{opt}}</option>
        </select>
        <input type="search" placeholder="Search">
    </div>
    <div id="transaction-list">
      <div class="table-head">
        <table>
          <thead>
            <tr> <!--transactionHistoryData 항목은 쿼리로 추출 ; select * from table-->
              <th v-for="(col, i) in Object.keys(transactionHistoryData[0])" :key="i">{{col}}</th>
            </tr>
          </thead>
        </table>
      </div>
      <div class="table-body">
        <table>
          <tbody>
            <tr v-for="(list, i) in transactionHistoryData" :key="i">
              <td>{{list.Date}}</td><td>{{list.Name}}</td><td>{{list.Transaction}}</td><td>{{list.Detail}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div id="transaction-pagination"> <!-- pagination 코드 작성 -->
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
        <p>7</p>
        <p>8</p>
        <p>9</p>
        <p>10</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchOptions: ["All", "Deposit", "Withdraw", "Dividend", "Sell", "Buy"],
      transactionHistoryData: [
        {"Date": "23.08.24", "Name":"D05", "Transaction":"Dividend", "Detail":"DBS Group Holdings, 48.00 SGD"},
        {"Date": "23.08.21", "Name":"HK13078", "Transaction":"Dividend", "Detail":"ICBC, 329.23 HKD"},
        {"Date": "23.08.07", "Name":"IEF", "Transaction":"Dividend", "Detail":"IEF, 19.57 USD"},
        {"Date": "23.08.07", "Name":"JEPI", "Transaction":"Sell", "Detail":"JEPI, Sell, 38 * 55.4750 USD"},
        {"Date": "23.07.31", "Name":"MSFT", "Transaction":"Buy", "Detail":"MSFT, Buy, 1 * 336.3000 USD"},
        
        {"Date": "23.08.24", "Name":"D05", "Transaction":"Dividend", "Detail":"DBS Group Holdings, 48.00 SGD"},
        {"Date": "23.08.21", "Name":"HK13078", "Transaction":"Dividend", "Detail":"ICBC, 329.23 HKD"},
        {"Date": "23.08.07", "Name":"IEF", "Transaction":"Dividend", "Detail":"IEF, 19.57 USD"},
        {"Date": "23.08.07", "Name":"JEPI", "Transaction":"Sell", "Detail":"JEPI, Sell, 38 * 55.4750 USD"},
        {"Date": "23.07.31", "Name":"MSFT", "Transaction":"Buy", "Detail":"MSFT, Buy, 1 * 336.3000 USD"},
        
        {"Date": "23.08.24", "Name":"D05", "Transaction":"Dividend", "Detail":"DBS Group Holdings, 48.00 SGD"},
        {"Date": "23.08.21", "Name":"HK13078", "Transaction":"Dividend", "Detail":"ICBC, 329.23 HKD"},
        {"Date": "23.08.07", "Name":"IEF", "Transaction":"Dividend", "Detail":"IEF, 19.57 USD"},
        {"Date": "23.08.07", "Name":"JEPI", "Transaction":"Sell", "Detail":"JEPI, Sell, 38 * 55.4750 USD"},
        {"Date": "23.07.31", "Name":"MSFT", "Transaction":"Buy", "Detail":"MSFT, Buy, 1 * 336.3000 USD"},
        
        {"Date": "23.08.24", "Name":"D05", "Transaction":"Dividend", "Detail":"DBS Group Holdings, 48.00 SGD"},
        {"Date": "23.08.21", "Name":"HK13078", "Transaction":"Dividend", "Detail":"ICBC, 329.23 HKD"},
        {"Date": "23.08.07", "Name":"IEF", "Transaction":"Dividend", "Detail":"IEF, 19.57 USD"},
        {"Date": "23.08.07", "Name":"JEPI", "Transaction":"Sell", "Detail":"JEPI, Sell, 38 * 55.4750 USD"},
        {"Date": "23.07.31", "Name":"MSFT", "Transaction":"Buy", "Detail":"MSFT, Buy, 1 * 336.3000 USD"},
        
        {"Date": "23.08.24", "Name":"D05", "Transaction":"Dividend", "Detail":"DBS Group Holdings, 48.00 SGD"},
        {"Date": "23.08.21", "Name":"HK13078", "Transaction":"Dividend", "Detail":"ICBC, 329.23 HKD"},
        {"Date": "23.08.07", "Name":"IEF", "Transaction":"Dividend", "Detail":"IEF, 19.57 USD"},
        {"Date": "23.08.07", "Name":"JEPI", "Transaction":"Sell", "Detail":"JEPI, Sell, 38 * 55.4750 USD"},
        {"Date": "23.07.31", "Name":"MSFT", "Transaction":"Buy", "Detail":"MSFT, Buy, 1 * 336.3000 USD"}
      ]
    }
  },
  mounted(){},
  methods: {
    popUpOff() { document.querySelector("#Transaction-Popup-Cont").style.display = "none"; },
  }
}
</script>

<style scoped>
#Transaction-Popup-Cont {
    display: none;
    position: absolute;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    left: 20vw;
    top: 15vh;
    width: 60vw;
    height: 70vh;
    border: 3.4px solid white;
    border-radius: 16px;
    background: rgba(0, 0, 0, 0.6);
    z-index: 10;
}

#popup-off {
  width: 96%;
  height: 12%;
  display: flex;
  justify-content: right;
  align-items: center;
}
#popup-off > button {
  height: 3vh;
  background: none;
  border: none;
  font-size: 18px;
  font-weight: bold;
  color: white;
}
#popup-off > button:hover {
  cursor: pointer;
}

#search-option {
  width: 90%;
  height: 8%;
  display: flex;
  justify-content: left;
  align-items: center;
}
#search-option > button, select, input {
  margin-right: 1vw;
  height: 3vh;
}
#search-option > button {
  font-weight: bold;
  color: white;
  background: #1a1a1a;
  border: 1px solid white;
}
#search-option > button:hover {
  cursor: pointer;
}
#search-option > select {
  font-weight: bold;
  color: white;
  background: #1a1a1a;
  border: 1px solid white;
}
#search-option > input {
  border: 1px solid white;
  background: #0a0a0a;
  color: white;
  font-weight: bold;
}
::placeholder {
  color: white;
}

#transaction-list {
  width: 90%;
  height: 68%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid grey;
}
table {
  width: 100%;
  height: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  color: white;
}
tr {
  height: 3vh;
}
/* Table-Head */
#transaction-list > .table-head {
  width: 100%;
  height: 20%;
}
#transaction-list thead {
  border-bottom: 1px solid grey;
}
#transaction-list thead tr th:nth-child(1) {
  width: 10%;
  text-align: center;
}
#transaction-list thead tr th:nth-child(2) {
  width: 14%; 
  text-align: center;
  border-left: 1px solid grey;
}
#transaction-list thead tr th:nth-child(3) {
  width: 16%; 
  text-align: center;
  border-left: 1px solid grey;
}
#transaction-list thead tr th:nth-child(4) {
  width: 60%; 
  text-align: center;
  border-left: 1px solid grey;
}
/* Table-Body */
#transaction-list > .table-body {
  width: 100%;
  height: 80%;
  overflow-y: auto;
}
#transaction-list tr:not(:last-child) td{
  border-right: 1px solid grey;
  border-bottom: 1px solid grey;
}
#transaction-list tr:last-child td {
  border-right: 1px solid grey;
}
#transaction-list tbody tr td:nth-child(1) {
  width: 10%;
  text-align: center;
}
#transaction-list tbody tr td:nth-child(2) {
  width: 14%; 
  text-align: center;
}
#transaction-list tbody tr td:nth-child(3) {
  width: 16%; 
  padding-left: 1%;
  text-align: left;
}
#transaction-list tbody tr td:nth-child(4) {
  width: 60%; 
  padding-left: 1%;
  text-align: left;
}

#transaction-pagination {
  display: flex;
  justify-content: center;
  width: 90%;
  height: 12%;
  color: white;
  margin-top: 1vh;
}
#transaction-pagination > p {
  margin: 0 1vw 0 0;
}

/* Scroll-bar */
.table-body::-webkit-scrollbar-track {
  background-color: black;
}
.table-body::-webkit-scrollbar {
  background-color: black;
  width: 0.55vw;
}
.table-body::-webkit-scrollbar-thumb {
  border-radius: 30px;
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  background-color: #333;
}

</style>