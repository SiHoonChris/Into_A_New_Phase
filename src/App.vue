<template>
  <div>
    <HeaderComponent/>
    <router-view/>
  </div>
</template>

<script>
import HeaderComponent from "@/components/DashboardComp/DashboardHeader.vue"

export default {
  components: { HeaderComponent }
}
</script>

<style>
body {
    margin: 0;
    padding: 0;
    background: black;
    overflow: hidden;
}
</style>
