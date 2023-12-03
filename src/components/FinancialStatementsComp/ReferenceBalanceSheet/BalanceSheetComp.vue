<!-- <template>
    <table>
      <thead>
          <tr>
            <th class="criterion">December 31,</th>
            <th v-for="(data, i) in DATAS" :key="i" @click="quartersPopup(data.Y)">{{data.Y}}</th>
          </tr>
      </thead>
      <tbody>
        <tr class="sector"><td>Assets</td><td colspan="3"></td></tr>
        <tr class="sub-sector"><td>Current assets</td><td colspan="3"></td></tr>
        <tr class="in-sub-sector"><td>Cash and cash equivalents</td>
            <td v-for="(data, i) in DATAS" :key="i">{{data.CshEqv.toLocaleString()}}</td>
        </tr>
        <tr class="in-sub-sector"><td>Short-term investments</td>
            <td v-for="(data, i) in DATAS" :key="i">{{data.StInvst.toLocaleString()}}</td>
        </tr>
        <tr class="in-sub-sector"><td>Total current assets</td>
            <td v-for="(data, i) in DATAS" :key="i">{{data.CAst.toLocaleString()}}</td>
        </tr>
        <tr class="sub-sector"><td>Non-current assets</td>
            <td v-for="(data, i) in DATAS" :key="i">{{data.NCAst.toLocaleString()}}</td>
        </tr>
        <tr class="sum"><td>Total assets</td>
            <td v-for="(data, i) in DATAS" :key="i">{{data.TAst.toLocaleString()}}</td>
        </tr>
        <tr class="space"><td colspan="4"></td></tr>
        
        <tr class="sector"><td>Liabilities</td><td colspan="3"></td></tr>
        <tr class="sub-sector"><td>Current liabilities</td>
            <td v-for="(data, i) in DATAS" :key="i">{{data.CLbt.toLocaleString()}}</td>
        </tr>
        <tr class="sub-sector"><td>Non-current liabilities</td>
            <td v-for="(data, i) in DATAS" :key="i">{{data.NCLbt.toLocaleString()}}</td>
        </tr>
        <tr class="sum"><td>Total Liabilities</td>
            <td v-for="(data, i) in DATAS" :key="i">{{data.TLbt.toLocaleString()}}</td>
        </tr>
        
        <tr class="sector"><td>Equity</td><td colspan="3"></td></tr>
        <tr class="sub-sector"><td>Capital</td>
            <td v-for="(data, i) in DATAS" :key="i">{{data.Cptl.toLocaleString()}}</td>
        </tr>
        <tr class="sub-sector"><td>Retained earnings</td>
            <td v-for="(data, i) in DATAS" :key="i">{{data.RE.toLocaleString()}}</td>
        </tr>
        <tr class="sub-sector"><td>Accumulated other comprehensive earn/loss</td>
            <td v-for="(data, i) in DATAS" :key="i">{{data.AccmComp.toLocaleString()}}</td>
        </tr>
        <tr class="sum"><td>Total equity</td>
            <td v-for="(data, i) in DATAS" :key="i">{{data.TEqt.toLocaleString()}}</td>
        </tr>
        <tr class="space"><td colspan="4"></td></tr>

        <tr class="sum"><td>Total liabilities and equity</td>
            <td v-for="(data, i) in DATAS" :key="i">{{data.SumLbtEqt.toLocaleString()}}</td>
        </tr>
      </tbody>
    </table>
</template>

<script>
export default {
    data() {
        return {
            DATAS: [{}],
        }
    },
    created(){
      this.$http.get("/getBalanceSheetPerYear")
        .then(res => this.DATAS = res.data)
        .catch(err => console.log(err.message));
    },
    methods:{
        quartersPopup(year) {
            console.log(year);
            document.querySelector('#Popup-container').style.display = 'block';
        }
    }
}
</script>

<style scoped>
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
    th:not(:first-child){
        cursor: pointer;
    }
    th:not(:first-child):hover{
        text-decoration: underline;
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
    }
    .sum td {
        background: #336600;
    }
    .space td {
        height: 0.8vh;
    }

</style>
-->