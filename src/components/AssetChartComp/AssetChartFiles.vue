<template>
  <div id="filing-table">
    <div class="table-head">
      <table>
        <thead>
          <tr>
            <th>Form type</th>
            <th>Form Description</th>
            <th>Filing date</th>
            <th>Reporting date</th>
          </tr>
        </thead>
      </table>
    </div>
    <div class="table-body">
      <table>
        <tbody>
          <tr>
            <td>144</td><td>Report of proposed sale of securities</td><td>2023-09-05</td><td></td>
          </tr>
          <tr>
            <td>144</td><td>Report of proposed sale of securities</td><td>2023-08-30</td><td></td>
          </tr>
          <tr>
            <td>144</td><td>Report of proposed sale of securities</td><td>2023-08-10</td><td></td>
          </tr>
          <tr>
            <td>13F-HR</td><td>Quarterly report filed by institutional managers, Holdings</td><td>2023-08-04</td><td>2023-06-30</td>
          </tr>	
          <tr>
            <td>144</td><td>Report of proposed sale of securities</td><td>2023-07-28</td><td></td>
          </tr>
          <tr>
            <td>S-8</td><td>Securities to be offered to employees in employee benefit plans</td><td>2023-07-26</td><td></td>
          </tr>
          <tr>
            <td>144</td><td>Report of proposed sale of securities</td><td>2023-09-05</td><td></td>
          </tr>
          <tr>
            <td>144</td><td>Report of proposed sale of securities</td><td>2023-08-30</td><td></td>
          </tr>
          <tr>
            <td>144</td><td>Report of proposed sale of securities</td><td>2023-08-10</td><td></td>
          </tr>
          <tr>
            <td>13F-HR</td><td>Quarterly report filed by institutional managers, Holdings</td><td>2023-08-04</td><td>2023-06-30</td>
          </tr>	
          <tr>
            <td>144</td><td>Report of proposed sale of securities</td><td>2023-07-28</td><td></td>
          </tr>
          <tr>
            <td>S-8</td><td>Securities to be offered to employees in employee benefit plans</td><td>2023-07-26</td><td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
#filing-table {
    width: 100%;
    height: 20vh;
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
#filing-table > .table-head {
    width: 100%;
    height: 34%;
}
#filing-table thead {
    border-bottom: 1px solid grey;
}
#filing-table thead tr th:nth-child(1) {
    width: 6%;
    text-align: center;
}
#filing-table thead tr th:nth-child(2) {
    width: 73%;
    text-align: center;
    border-left: 1px solid grey;
}
#filing-table thead tr th:nth-child(3) {
    width: 10%;
    text-align: center;
    border-left: 1px solid grey;
}
#filing-table thead tr th:nth-child(4) {
    width: 11%;
    text-align: center;
    border-left: 1px solid grey;
}

/* Table-Body */
#filing-table > .table-body {
    width: 100%;
    height: 66%;
    overflow-y: auto;
}
#filing-table tr:not(:last-child) td{
    border-right: 1px solid grey;
    border-bottom: 1px solid grey;
}
#filing-table tr:last-child td {
    border-right: 1px solid grey;
}
#filing-table tbody tr td:nth-child(1) {
    width: 6%;
    text-align: center;
}
#filing-table tbody tr td:nth-child(2) {
    width: 73%;
    text-align: left;
    padding-left: 1%;
}
#filing-table tbody tr td:nth-child(3) {
    width: 10%;
    text-align: center;
}
#filing-table tbody tr td:nth-child(4) {
    width: calc(11% - 0.55vw);
    text-align: center;
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