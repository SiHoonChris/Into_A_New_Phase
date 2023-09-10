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
    width: 25vw; /* 70% */
    height: 4.4vh;
    text-align: center;
    border-left: 1px solid grey;
}
thead tr th:nth-child(2) {
    width: 15vw; /* 30% */ 
    height: 4.4vh;
    text-align: center;
    border-left: 1px solid grey;
}

/* Table-Body */
tbody {
    display: block;
    width: 100%;
    overflow: auto;
    height: 43.1vh;
}
tbody tr td:nth-child(1) {
    width: 28vw; /* 70% */
    padding-left: 6px;
    text-align: left;
}
tbody tr td:nth-child(2) {
    width: 12vw; /* 30% */ 
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