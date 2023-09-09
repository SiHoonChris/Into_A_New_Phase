<template>
  <div id="onwatch-table">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Google</td><td>$136.3800</td>
        </tr>
        <tr>
          <td>Apple</td><td>$178.1800</td>
        </tr>
        <tr>
          <td>Microsoft</td><td>$334.2700</td>
        </tr>
        <tr>
          <td>JP Morgan</td><td>$143.8300</td>
        </tr>
        <tr>
          <td>Samsung Electric</td><td>70,300\</td>
        </tr>
        <tr>
          <td>Coca Cola</td><td>$58.3300</td>
        </tr>
        <tr>
          <td>Northrop Gruman</td><td>$422.7200</td>
        </tr>
        <tr>
          <td>General Dynamics</td><td>$218.0000</td>
        </tr>
        <tr>
          <td>Johnson & Johnson</td><td>$160.5600</td>
        </tr>
        <tr>
          <td>Starbucks</td><td>$95.2800</td>
        </tr>
        <tr>
          <td>Meta Platforms</td><td>$297.8900</td>
        </tr>
        <tr>
          <td>Morgan Stanely</td><td>$84.9200</td>
        </tr>
        <tr>
          <td>Boeing</td><td>$211.27</td>
        </tr>
        <tr>
          <td>JEPI</td><td>$55.1800</td>
        </tr>
        <tr>
          <td>SDIV</td><td>$22.1100</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
#onwatch-table {
    width: 100%;
    height: 100%;
    overflow: auto;
}
table {
    width: 100%;
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
    width: 60%;
    text-align: left;
    padding-left: 8px;
}
tr td:nth-child(2) {
    width: 40%;
    text-align: center;
}
#onwatch-table::-webkit-scrollbar-track {
	background-color: black;
}
#onwatch-table::-webkit-scrollbar {
	background-color: black;
	width: 10px;
}
#onwatch-table::-webkit-scrollbar-thumb {
	border-radius: 30px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #333;
}

</style>