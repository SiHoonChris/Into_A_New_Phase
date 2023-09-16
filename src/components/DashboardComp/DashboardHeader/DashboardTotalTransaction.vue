<template><!-- 계좌에서 발생한 전체 거래 내역 (가장 최근 20개) -->
  <div id="transaction-list">
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Transaction</th>
          <th>Detail</th>
        </tr>
      </thead>
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
</template>

<style scoped>
#transaction-list {
    width: 100%;
}
table {
    width: 100%;
    height: 100%;
    table-layout: fixed;
    border-collapse: collapse;
    color: white;
}

/* Table-Head */
thead {
    display: block;
    width: 100%;
    border-bottom: 1px solid grey;
}
thead tr th:nth-child(1) {
    width: 4.45vw; /* 10% */
    height: 3.6vh;
    text-align: center;
}
thead tr th:nth-child(2) {
    width: 7.6vw; /* 20% */ 
    height: 3.6vh;
    text-align: center;
    border-left: 1px solid grey;
}
thead tr th:nth-child(3) {
    width: 26.05vw; /* 70% */ 
    height: 3.6vh;
    text-align: center;
    border-left: 1px solid grey;
}

/* Table-Body */
tbody {
    display: block;
    width: 100%;
    overflow: auto;
    height: 12.1vh;
}
tbody tr td:nth-child(1) {
    width: 4.4vw; /* 10% */
    text-align: center;
}
tbody tr td:nth-child(2) {
    width: 7.64vw; /* 20% */
    border-left: 1px solid grey; 
    text-align: center;
}
tbody tr td:nth-child(3) {
    width: 25.0vw; /* 70% */ 
    padding-left: 6px;
    text-align: left;
    border-left: 1px solid grey;
}
td {
    border-right: 1px solid grey;
    border-bottom: 1px solid grey;
}

/* Scroll-bar */
tbody::-webkit-scrollbar-track {
  	background-color: black;
    border-bottom: 1px solid gray;
}
tbody::-webkit-scrollbar {
  	background-color: black;
  	width: 0.6vw;
}
tbody::-webkit-scrollbar-thumb {
  	border-radius: 30px;
  	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  	background-color: #333;
}

</style>

