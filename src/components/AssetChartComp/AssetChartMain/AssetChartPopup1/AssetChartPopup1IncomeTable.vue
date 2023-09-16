<template>
  <div id="incm-tbl">
    <table>
      <thead>
        <tr>
          <th>Fiscal Year</th>
          <th>Revenue</th>
          <th>Operating Income</th>
          <th>Net Income</th>
          <th>NI / R</th>
          <th>EPS</th>
          <th>ROE</th>
          <th>NI / NCL</th>
          <th>Dividend</th>
          <th>Dividend<br>(Yield)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>2016</td>
          <td>90,272</td>
          <td>23,716</td>
          <td>19,478</td>
          <td>21.58%</td>
          <td>28.32</td>
          <td>14.01%</td>
          <td>1.66</td>
          <td>0</td>
          <td>0.00%</td>
        </tr>
        <tr>
          <td>2017</td>
          <td>110,855</td>
          <td>26,146</td>
          <td>12,662</td>
          <td>11.42%</td>
          <td>18.27</td>
          <td>8.30%</td>
          <td>0.61</td>
          <td>0</td>
          <td>0.00%</td>
        </tr>
        <tr>
          <td>2018</td>
          <td>136,819</td>
          <td>27,524</td>
          <td>30,736</td>
          <td>22.46%</td>
          <td>44.22</td>
          <td>17.30%</td>
          <td>1.50</td>
          <td>0</td>
          <td>0.00%</td>
        </tr>
        <tr>
          <td>2019</td>
          <td>161,857</td>
          <td>34,231</td>
          <td>34,343</td>
          <td>21.22%</td>
          <td>49.59</td>
          <td>17.05%</td>
          <td>1.17</td>
          <td>0</td>
          <td>0.00%</td>
        </tr>
        <tr>
          <td>2020</td>
          <td>182,527</td>
          <td>41,224</td>
          <td>40,269</td>
          <td>22.06%</td>
          <td>59.15</td>
          <td>18.09%</td>
          <td>1.00</td>
          <td>0</td>
          <td>0.00%</td>
        </tr>
        <tr>
          <td>2021</td>
          <td>257,637</td>
          <td>78,714</td>
          <td>76,033</td>
          <td>29.51%</td>
          <td>2.28</td>
          <td>30.22%</td>
          <td>1.75</td>
          <td>0</td>
          <td>0.00%</td>
        </tr>
        <tr>
          <td>2022</td>
          <td>282,836</td>
          <td>74,842</td>
          <td>59,972</td>
          <td>21.20%</td>
          <td>4.59</td>
          <td>23.41%</td>
          <td>1.51</td>
          <td>0</td>
          <td>0.00%</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
#incm-tbl {
    width: 96%;
}
table {
    width: 100%;
    height: 100%;
    table-layout: fixed;
    border-collapse: collapse;
    background: rgba(0, 0, 0, 0.7);
    border-top: 1px solid white;
    border-right: 1px solid white;
    color: white;
}

/* Table-Head */
thead {
    display: block;
    width: 100%;
    border-bottom: 1px solid white;
}
thead tr th {
    text-align: center;
    border-left: 1px solid white;
}
thead tr th:nth-child(1) { width: 4.00vw; }
thead tr th:nth-child(2) { width: 8.04vw; }
thead tr th:nth-child(3) { width: 7.82vw; }
thead tr th:nth-child(4) { width: 6.52vw; }
thead tr th:nth-child(5) { width: 5.00vw; }
thead tr th:nth-child(6) { width: 5.76vw; }
thead tr th:nth-child(7) { width: 5.00vw; }
thead tr th:nth-child(8) { width: 5.76vw; }
thead tr th:nth-child(9) { width: 5.00vw; }
thead tr th:nth-child(10) { width: 4.7vw; }

/* Table-Body */
tbody {
    display: block;
    width: 100%;
    overflow: auto;
    height: 19.8vh;
}
td {
    text-align: center;
    border-left: 1px solid white;
    border-right: 1px solid white;
    border-bottom: 1px solid white;
}
tbody tr td:nth-child(1) { width: 4.10vw; }
tbody tr td:nth-child(2) { width: 8.10vw; }
tbody tr td:nth-child(3) { width: 8.20vw; }
tbody tr td:nth-child(4) { width: 6.68vw; }
tbody tr td:nth-child(5) { width: 4.50vw; }
tbody tr td:nth-child(6) { width: 5.56vw; }
tbody tr td:nth-child(7) { width: 4.70vw; }
tbody tr td:nth-child(8) { width: 5.79vw; }
tbody tr td:nth-child(9) { width: 5.80vw; } 
tbody tr td:nth-child(10) { width: 4.27vw; }


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