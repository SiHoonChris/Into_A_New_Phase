<template><!-- 계좌에서 발생한 전체 거래 내역 (가장 최근 20개) -->
  <div id="transaction-list">
    <div class="table-head">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Transaction</th>
            <th>Detail</th>
          </tr>
        </thead>
      </table>
    </div>
    <div class="table-body">
      <table>
        <tbody>
          <tr>
            <td>23.08.24</td><td>Dividend</td><td>DBS Group Holdings, 48.00 SGD</td>
          </tr>
          <tr>
            <td>23.08.21</td><td>Dividend</td><td>ICBC, 329.23 HKD</td>
          </tr>
          <tr>
            <td>23.08.07</td><td>Dividend</td><td>IEF, 19.57 USD</td>
          </tr>
          <tr>
            <td>23.08.07</td><td>Sell/Buy</td><td>JEPI, Sell, 38 * 55.4750 USD</td>
          </tr>
          <tr>
            <td>23.07.31</td><td>Sell/Buy</td><td>MSFT, Buy, 1 * 336.3000 USD </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
#transaction-list {
  width: 100%;
  height: 16vh;
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
  height: 22%;
}
#transaction-list thead {
  border-bottom: 1px solid grey;
}
#transaction-list thead tr th:nth-child(1) {
  width: 12%;
  height: 3.6vh;
  text-align: center;
}
#transaction-list thead tr th:nth-child(2) {
  width: 19%; 
  height: 3.6vh;
  text-align: center;
  border-left: 1px solid grey;
}
#transaction-list thead tr th:nth-child(3) {
  width: 69%; 
  height: 3.6vh;
  text-align: center;
  border-left: 1px solid grey;
}

/* Table-Body */
#transaction-list > .table-body {
  width: 100%;
  height: 78%;
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
  width: 12%;
  text-align: center;
}
#transaction-list tbody tr td:nth-child(2) {
  width: 19%; 
  text-align: center;
}
#transaction-list tbody tr td:nth-child(3) {
  width: calc(69% - 0.55vw); 
  padding-left: 1%;
  text-align: left;
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

