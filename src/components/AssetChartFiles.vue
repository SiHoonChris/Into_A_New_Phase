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
    height: 100%;
    overflow: auto;
}
table {
    width: 100%;
    height: 100%;
    border-collapse: collapse;
    color: white;
}
thead tr th {
  position: sticky;
  background: black;
  top: 0;
}
th, td {
  border: 1px solid grey;
}
tr td:nth-child(1) {
    width: 10%;
    text-align: center;
}
tr td:nth-child(2) {
    width: 70%;
    text-align: left;
    padding-left: 10px;
}
tr td:nth-child(3) {
    width: 10%;
    text-align: center;
}
tr td:nth-child(4) {
    width: 10%;
    text-align: center;
}
#filing-table::-webkit-scrollbar-track {
	background-color: black;
}

#filing-table::-webkit-scrollbar {
	background-color: black;
	width: 10px;
}

#filing-table::-webkit-scrollbar-thumb {
	border-radius: 30px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #333;
}

</style>