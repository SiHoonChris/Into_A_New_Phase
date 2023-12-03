<template>
  <div class="financial-statements">
    <BalanceSheetComp/>
    <IncomeStatementComp/>
  </div>
</template>

<script>
import BalanceSheetComp from "@/components/FinancialStatementsComp/BalanceSheet/BalanceSheetComp.vue"
import IncomeStatementComp from "@/components/FinancialStatementsComp/IncomeStatement/IncomeStatementComp.vue"

export default {
  components: {IncomeStatementComp, BalanceSheetComp}
}
</script>

<style scoped>
.financial-statements {
    width: 100%;
    display: flex;
    justify-content: space-between;
}
</style>