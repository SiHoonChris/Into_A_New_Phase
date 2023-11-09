<template>
  <div id="onwatch-table">
    <div class="table-head">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
      </table>
    </div>
    <div class="table-body">
      <table>
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
  </div>
</template>

<style scoped>
#onwatch-table {
  width: 100%;
  height: 48vh;
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
#onwatch-table > .table-head {
  width: 100%;
  height: 22%;
}
#onwatch-table thead {
  border-bottom: 1px solid grey;
}
#onwatch-table thead tr th:nth-child(1) {
    width: 60%;
    height: 3.6vh;
    text-align: center;
}
#onwatch-table thead tr th:nth-child(2) {
    width: 40%; 
    height: 3.6vh;
    text-align: center;
    border-left: 1px solid grey;
}

/* Table-Body */
#onwatch-table > .table-body {
    width: calc(100% - 0.06vw);
    height: 78%;
    overflow-y: auto;
}
#onwatch-table tr:not(:last-child) td{
    border-right: 1px solid grey;
    border-bottom: 1px solid grey;
}
#onwatch-table tr:last-child td {
    border-right: 1px solid grey;
}
#onwatch-table tbody tr td:nth-child(1) {
    width: 60%;
    text-align: left;
    padding-left: 1%;
}
#onwatch-table tbody tr td:nth-child(2) {
    width: 40%; 
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