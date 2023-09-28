<template>
  <div id="bs_tbl">
    <div id="title">
        <p>Balance Sheets</p>
        <p>(Won, \)</p>
    </div>
    <table>
      <thead>
          <tr>
            <th class="criterion">December 31,</th><th>2023</th><th>2022</th><th>2021</th>
          </tr>
      </thead>
      <tbody>
        <tr class="sector"><td>Assets</td><td colspan="3"></td></tr>
        <tr class="sub-sector"><td>Current assets</td><td colspan="3"></td></tr>
        <tr class="in-sub-sector"><td>Cash and cash equivalents</td>
            <td>{{(2985054+4643.45*1200+338.45*180+237.32*900+182738).toLocaleString()}}</td>
            <td>{{(28118856).toLocaleString()}}</td>
            <td>{{(3516536).toLocaleString()}}</td>
        </tr>
        <tr class="in-sub-sector"><td>Short-term investments</td>
            <td>{{(0).toLocaleString()}}</td>
            <td>{{(0).toLocaleString()}}</td>
            <td>{{(0).toLocaleString()}}</td>
        </tr>
        <tr class="in-sub-sector"><td>Total current assets</td>
            <td>{{(2985054+4643.45*1200+338.45*180+237.32*900+182738).toLocaleString()}}</td>
            <td>{{(28118856).toLocaleString()}}</td>
            <td>{{(3516536).toLocaleString()}}</td>
        </tr>
        <tr class="sub-sector"><td>Non-current assets</td>
            <td>{{(61834122-(2985054+4643.45*1200+338.45*180+237.32*900+182738)).toLocaleString()}}</td>
            <td>{{(55730283-28118856).toLocaleString()}}</td>
            <td>{{(61803204-3516536).toLocaleString()}}</td>
        </tr>
        <tr class="sum"><td>Total assets</td>
            <td>{{(61834122).toLocaleString()}}</td>
            <td>{{(55730283).toLocaleString()}}</td>
            <td>{{(61803204).toLocaleString()}}</td>
        </tr>
        <tr class="space"><td colspan="4"></td></tr>
        
        <tr class="sector"><td>Liabilities</td><td colspan="3"></td></tr>
        <tr class="sub-sector"><td>Current liabilities</td>
            <td>{{(0).toLocaleString()}}</td>
            <td>{{(0).toLocaleString()}}</td>
            <td>{{(0).toLocaleString()}}</td>
        </tr>
        <tr class="sub-sector"><td>Non-current liabilities</td>
            <td>{{(0).toLocaleString()}}</td>
            <td>{{(0).toLocaleString()}}</td>
            <td>{{(0).toLocaleString()}}</td>
        </tr>
        <tr class="sum"><td>Total Liabilities</td>
            <td>{{(0).toLocaleString()}}</td>
            <td>{{(0).toLocaleString()}}</td>
            <td>{{(0).toLocaleString()}}</td>
        </tr>
        
        <tr class="sector"><td>Equity</td><td colspan="3"></td></tr>
        <tr class="sub-sector"><td>Capital</td>
            <td>{{(60946346).toLocaleString()}}</td>
            <td>{{(58484346).toLocaleString()}}</td>
            <td>{{(47333134).toLocaleString()}}</td>
        </tr>
        <tr class="sub-sector"><td>Retained earnings</td>
            <td>{{(-27037439+6909160+678936+2523990).toLocaleString()}}</td>
            <td>{{(-27037439+6909160+678936).toLocaleString()}}</td>
            <td>{{(6909160+678936).toLocaleString()}}</td>
        </tr>
        <tr class="sub-sector"><td>Accumulated other comprehensive earn/loss</td>
            <td>{{(61834122-60946346+16925353).toLocaleString()}}</td>
            <td>{{(55730283-58484346+19449343).toLocaleString()}}</td>
            <td>{{(61803204-47333134-7588096).toLocaleString()}}</td>
        </tr>
        <tr class="sum"><td>Total equity</td>
            <td>{{(61834122).toLocaleString()}}</td>
            <td>{{(55730283).toLocaleString()}}</td>
            <td>{{(61803204).toLocaleString()}}</td>
        </tr>
        <tr class="space"><td colspan="4"></td></tr>

        <tr class="sum"><td>Total liabilities and equity</td>
            <td>{{(61834122).toLocaleString()}}</td>
            <td>{{(55730283).toLocaleString()}}</td>
            <td>{{(61803204).toLocaleString()}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
    #bs_tbl {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 80vh;
        padding-top: 2%;
        overflow-y: scroll;
    }
    #title {
        width: 80vw;
        color: white;
        border-bottom: 1px solid white;
        margin-bottom: 5vh;
    }
    #title p:nth-child(1) {
        font-weight: bold;
        font-size: 30px;
        text-align: center;
    }
    #title p:nth-child(2) {
        margin-bottom: 1vh;
    }
    table {
        width: 80vw;
        border: 1px solid white;
        color: white;
        border-collapse: collapse;
        margin-bottom: 5%;
    }
    th {
        height: 4vh;
        font-size: 14px;
        vertical-align: top;
    }
    th, td {
        border: 1px solid white;
    }
    td:not(:first-child) {
        text-align: right;
        padding-right: 0.5%;
    }
    th:first-child, td:first-child {
        width: 40%;
    }
    .criterion {
        text-align: left;
    }
    .sector td:first-child{
        font-weight: bold;
        padding-left: 2%;
    }
    .sub-sector td:first-child {
        padding-left: 3%;
    }
    .in-sub-sector td:first-child {
        padding-left: 4.5%;
    }
    .sum td:first-child {
        padding-left: 4.5%;
        font-weight: bold;
    }
    .sum td {
        background: #336600;
    }
    .space td {
        height: 0.8vh;
    }

    /* Scroll-bar */
    #bs_tbl::-webkit-scrollbar-track {
        background-color: black;
        border-bottom: 1px solid gray;
    }
    #bs_tbl::-webkit-scrollbar {
        background-color: black;
        width: 0.6vw;
    }
    #bs_tbl::-webkit-scrollbar-thumb {
        border-radius: 30px;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color: #333;
    }
</style>