<template>
  <div id="record-table">
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Transaction Desc.</th>
        </tr>
      </thead>
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
      </tbody>
    </table>
  </div>
</template>

<style scoped>
#record-table {
    width: 100%;
    height: 100%;
    overflow: auto;
    /* border: 1px solid grey; */
}
table {
    width: 100%;
    border-collapse: collapse;
    color: white;
    border: 1px solid gray;
}
thead tr th {
  position: sticky;
  background: black;
  top: 0;
}
th, td {
    border: 1px solid gray;
}
tr td:nth-child(1) {
    width: 30%;
    text-align: center;
}
tr td:nth-child(2) {
    width: 70%;
    padding-left: 4px;
    text-align: left;
}
#record-table::-webkit-scrollbar-track {
	background-color: black;
}
#record-table::-webkit-scrollbar {
	background-color: black;
	width: 10px;
}
#record-table::-webkit-scrollbar-thumb {
	border-radius: 30px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #333;
}
</style>