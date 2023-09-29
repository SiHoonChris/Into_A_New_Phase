<template>
    <table>
      <thead>
          <tr>
            <th class="criterion">{{DATAS[0].Year}}</th>
            <th v-for="(data, i) in DATAS" :key="i">{{data.Quarter}}</th>
          </tr>
      </thead>
      <tbody>
        <tr class="sector"><td>Assets</td><td colspan="4"></td></tr>
        <tr class="sub-sector"><td>Current assets</td><td colspan="4"></td></tr>
        <tr class="in-sub-sector"><td>Cash and cash equivalents</td>
            <td v-for="(data, i) in DATAS" :key="i">
                {{(data.Assets.CurrentAssets.CashAndCashEquivalents).toLocaleString()}}
            </td>
        </tr>
        <tr class="in-sub-sector"><td>Short-term investments</td>
            <td v-for="(data, i) in DATAS" :key="i">
                {{(data.Assets.CurrentAssets.ShortTermInvestments).toLocaleString()}}
            </td>
        </tr>
        <tr class="in-sub-sector"><td>Total current assets</td>
            <td v-for="(data, i) in DATAS" :key="i">
                {{(data.Assets.CurrentAssets.CashAndCashEquivalents
                    +data.Assets.CurrentAssets.ShortTermInvestments).toLocaleString()}}
            </td>
        </tr>
        <tr class="sub-sector"><td>Non-current assets</td>
            <td v-for="(data, i) in DATAS" :key="i">
                {{(data.Assets.NonCurrentAssets).toLocaleString()}}
            </td>
        </tr>
        <tr class="sum"><td>Total assets</td>
            <td v-for="(data, i) in DATAS" :key="i">
                {{(data.Assets.CurrentAssets.CashAndCashEquivalents
                    +data.Assets.CurrentAssets.ShortTermInvestments
                    +data.Assets.NonCurrentAssets).toLocaleString()}}
            </td>
        </tr>
        <tr class="space"><td colspan="4"></td></tr>
        
        <tr class="sector"><td>Liabilities</td><td colspan="4"></td></tr>
        <tr class="sub-sector"><td>Current liabilities</td>
            <td v-for="(data, i) in DATAS" :key="i">
                {{(data.Liabilities.CurrentLiabilities).toLocaleString()}}
            </td>
        </tr>
        <tr class="sub-sector"><td>Non-current liabilities</td>
            <td v-for="(data, i) in DATAS" :key="i">
                {{(data.Liabilities.NonCurrentLiabilities).toLocaleString()}}
            </td>
        </tr>
        <tr class="sum"><td>Total Liabilities</td>
            <td v-for="(data, i) in DATAS" :key="i">
                {{(data.Liabilities.CurrentLiabilities
                    +data.Liabilities.NonCurrentLiabilities).toLocaleString()}}
            </td>
        </tr>
        
        <tr class="sector"><td>Equity</td><td colspan="4"></td></tr>
        <tr class="sub-sector"><td>Capital</td>
            <td v-for="(data, i) in DATAS" :key="i">
                {{(data.Equity.Capital).toLocaleString()}}
            </td>
        </tr>
        <tr class="sub-sector"><td>Retained earnings</td>
            <td v-for="(data, i) in DATAS" :key="i">
                {{(data.Equity.RetainedEarnings).toLocaleString()}}
            </td>
        </tr>
        <tr class="sub-sector"><td>Accumulated other comprehensive earn/loss</td>
            <td v-for="(data, i) in DATAS" :key="i">
                {{(data.Equity.AccumulatedOtherComprehensive).toLocaleString()}}
            </td>
        </tr>
        <tr class="sum"><td>Total equity</td>
            <td v-for="(data, i) in DATAS" :key="i">
                {{(data.Equity.Capital
                    +data.Equity.RetainedEarnings
                    +data.Equity.AccumulatedOtherComprehensive).toLocaleString()}}
            </td>
        </tr>
        <tr class="space"><td colspan="4"></td></tr>

        <tr class="sum"><td>Total liabilities and equity</td>
            <td v-for="(data, i) in DATAS" :key="i">
                {{(data.Liabilities.CurrentLiabilities
                    +data.Liabilities.NonCurrentLiabilities
                    +data.Equity.Capital
                    +data.Equity.RetainedEarnings
                    +data.Equity.AccumulatedOtherComprehensive).toLocaleString()}}
            </td>
        </tr>
      </tbody>
    </table>
</template>

<script>
export default {
    props: ['Q_DATAS'],
    data() {
        return {
            DATAS: this.Q_DATAS
        }
    }
}
</script>

<style scoped>
    table {
        width: 100%;
        border: 1px solid white;
        color: white;
        border-collapse: collapse;
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
        width: 42%;
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
        background: #ff8000;
    }
    .space td {
        height: 0.8vh;
    }

</style>