<template>
  <header>
    <div id="nav">
      <nav id="navigation">
        <span>Portfolio</span>
        <span>Balance Sheet</span>
        <span>Income Stat.</span>
        <span>Transaction</span>
      </nav>
      <IndexCarousel/>
    </div>
    <div id="table">
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
  </header>
</template>

<script>
import IndexCarousel from "@/components/IndexCarousel.vue"

export default {
  components: { IndexCarousel },
}
</script>

<style scoped>
header {
    margin: 0;
    padding: 0 2vw;
    height: 29.9vh;
    border-bottom: 1px solid gray;
    background: #0a0a0a;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
#nav {
    border: 1px solid gray;
    width: 56vw;
    display: flex;
    flex-direction: column;
}
nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 10vh;
}
#navigation {
    padding: 0 1vw;
    border-bottom: 1px solid gray;
}
#navigation span {
    width: 10vw;
    text-align: center;
    color: silver;
    font-weight: bold;
    font-size: 20px;
}
#navigation span:hover {
    color: white;
    text-decoration: underline;
    cursor: pointer;
}
#table {
    width: 38vw;
    height: 20vh;
    overflow: hidden;
    border: 1px solid grey;
}
table {
    width: 38vw;
    height: 20vh;
    border-collapse: collapse;
    color: white;
}
th, td {
    border: 1px solid grey;
}
td:nth-child(1), td:nth-child(2) {
    text-align: center;
}
</style>