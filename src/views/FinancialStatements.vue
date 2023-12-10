<template>
  <div class="financial-statements">
    <div class="statement-comp" v-if="BS_ON==='Y'"><BalanceSheetPerYear @BsPeriod="applyBsPeriod"/></div>
    <div class="statement-comp" v-if="BS_ON==='Q'"><BalanceSheetPerQuarter @BsPeriod="applyBsPeriod"/></div>
    <div class="statement-comp" v-if="BS_ON==='M'"><BalanceSheetPerMonth/></div>
    <div class="statement-comp" v-if="IS_ON==='Y'"><IncomeStatementPerYear @IsPeriod="applyIsPeriod"/></div>
    <div class="statement-comp" v-if="IS_ON==='Q'"><IncomeStatementPerQuarter @IsPeriod="applyIsPeriod"/></div>
    <div class="statement-comp" v-if="IS_ON==='M'"><IncomeStatementPerMonth/></div>
  </div>
</template>

<script>
import BalanceSheetPerYear from "@/components/FinancialStatementsComp/BalanceSheet/BalanceSheetPerYear.vue"
import BalanceSheetPerQuarter from "@/components/FinancialStatementsComp/BalanceSheet/BalanceSheetPerQuarter.vue"
import BalanceSheetPerMonth from "@/components/FinancialStatementsComp/BalanceSheet/BalanceSheetPerMonth.vue"
import IncomeStatementPerYear from "@/components/FinancialStatementsComp/IncomeStatement/IncomeStatementPerYear.vue"
import IncomeStatementPerQuarter from "@/components/FinancialStatementsComp/IncomeStatement/IncomeStatementPerQuarter.vue"
import IncomeStatementPerMonth from "@/components/FinancialStatementsComp/IncomeStatement/IncomeStatementPerMonth.vue"

export default {
  components: { 
    BalanceSheetPerYear, 
    BalanceSheetPerQuarter, 
    BalanceSheetPerMonth,
    IncomeStatementPerYear,
    IncomeStatementPerQuarter,
    IncomeStatementPerMonth
  },
  data() {
    return {
      BS_ON: 'Y', // Y,Q,M
      IS_ON: 'Y'  // Y,Q,M
    }
  },
  methods: {
    applyBsPeriod(value) { this.BS_ON = value; },
    applyIsPeriod(value) { this.IS_ON = value; }
  }
}
</script>
 
<style scoped>
.financial-statements {
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.statement-comp {
  width: 50%;
}
</style>