<template>
  <div>
    <HeaderComponent/>
    <MainComponent/>
  </div>
</template>

<script>
import HeaderComponent from "@/components/DashboardHeader.vue"
import MainComponent from "@/components/DashboardMain.vue"

export default {
  components: { HeaderComponent, MainComponent },
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
