<template>
  <div id="filing-table">
    <table>
      <thead>
        <tr>
          <th>Form type</th>
          <th>Form Description</th>
          <th>Filing date</th>
          <th>Reporting date</th>
        </tr>
      </thead>
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
</template>

<style scoped>
#filing-table {
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
    width: 5.86vw; /* 10% */
    height: 6.4vh;
    text-align: center;
    border-left: 1px solid grey;
}
thead tr th:nth-child(2) {
    width: 41.0vw; /* 70% */
    height: 6.4vh;
    text-align: center;
    border-left: 1px solid grey;
}
thead tr th:nth-child(3) {
    width: 5.9vw; /* 10% */
    height: 6.4vh;
    text-align: center;
    border-left: 1px solid grey;
}
thead tr th:nth-child(4) {
    width: 6.4vw; /* 10% */
    height: 6.4vh;
    text-align: center;
    border-left: 1px solid grey;
}

/* Table-Body */
tbody {
    display: block;
    width: 100%;
    overflow: auto;
    height: 17.1vh;
}
tbody tr td:nth-child(1) {
    width: 6.0vw; /* 10% */
    text-align: center;
}
tbody tr td:nth-child(2) {
    width: 42vw; /* 70% */
    text-align: left;
    padding-left: 10px;
}
tbody tr td:nth-child(3) {
    width: 6.0vw; /* 10% */
    text-align: center;
}
tbody tr td:nth-child(4) {
    width: 6.0vw; /* 10% */
    text-align: center;
}
td {
    border-left: 1px solid grey;
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