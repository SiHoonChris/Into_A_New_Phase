<template>
  <div id="record-table">
    <div class="table-head">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Transaction Desc.</th>
          </tr>
        </thead>
      </table>
    </div>
    <div class="table-body">
      <table>
        <tbody>
          <tr>
            <td>2023-07-11</td><td>[Buy] DUM $122.1500, 2</td>
          </tr>
          <tr>
            <td>2023-06-30</td><td>[Buy] DUM $124.6399, 10</td>
          </tr>
          <tr>
            <td>2023-06-26</td><td>[Buy] DUM $120.3800, 3</td>
          </tr>
          <tr>
            <td>2023-06-22</td><td>[Buy] DUM $117.4799, 3</td>
          </tr>
          <tr>
            <td>2023-06-15</td><td>[Buy] DUM $118.7599, 3</td>
          </tr>
          <tr>
            <td>2023-06-08</td><td>[Sell] DUM $121.5493, 6</td>
          </tr>
          <tr>
            <td>2023-06-02</td><td>[Buy] DUM $123.7599, 3</td>
          </tr>
          <tr>
            <td>2023-05-25</td><td>[Buy] DUM $125.500, 5</td>
          </tr>
          <tr>
            <td>2023-04-18</td><td>[Buy] DUM $106.5499, 3</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
#record-table {
  width: 100%;
  height: 32vh;
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
#record-table > .table-head {
  width: 100%;
  height: 22%;
}
#record-table thead {
  border-bottom: 1px solid grey;
}
#record-table thead tr th:nth-child(1) {
    width: 30%;
    height: 3.6vh;
    text-align: center;
}
#record-table thead tr th:nth-child(2) {
    width: 70%; 
    height: 3.6vh;
    text-align: center;
    border-left: 1px solid grey;
}

/* Table-Body */
#record-table > .table-body {
    width: calc(100% - 0.06vw);
    height: 78%;
    overflow-y: auto;
}
#record-table tr:not(:last-child) td{
    border-right: 1px solid grey;
    border-bottom: 1px solid grey;
}
#record-table tr:last-child td {
    border-right: 1px solid grey;
}
#record-table tbody tr td:nth-child(1) {
    width: 30%;
    text-align: left;
    padding-left: 1%;
}
#record-table tbody tr td:nth-child(2) {
    width: 70%; 
    text-align: center;
}

/* Scroll-bar */
.table-body::-webkit-scrollbar-track {
  background-color: black;
}
.table-body::-webkit-scrollbar {
  background-color: black;
  width: 0.6vw;
}
.table-body::-webkit-scrollbar-thumb {
  border-radius: 30px;
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  background-color: #333;
}

</style>