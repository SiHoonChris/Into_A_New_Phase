<template>
  <div id="setting">
    <input id="search" type="text" placeholder="Search" v-model="searchText"/>
    <select v-model="searchHold">
      <option value="A">All</option>
      <option value="Y">Hold</option>
      <option value="N">Not Hold</option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchText: '',
      searchTarget: [],
      searchHold: 'A'
    }
  },
  mounted(){
    this.searchTarget = document.querySelectorAll(".caption span:first-child");
  },
  watch: {
    searchText: function(val) {
      for(const T of this.searchTarget) {
        T.parentNode.parentNode.style.display = 
          T.textContent.toLowerCase().includes(val.toLowerCase()) || T.id.toLowerCase().includes(val.toLowerCase())
           ? "block" : "none" ;
      }
    },
    searchHold: function(val) {
      for(const T of this.searchTarget) {
        switch(val) {
          case "Y" : 
            T.parentNode.parentNode.style.display = T.className === "Y" ? "block" : "none" ; 
            break;
          case "N" : 
            T.parentNode.parentNode.style.display = T.className === "N" ? "block" : "none" ; 
            break;
          default : 
            T.parentNode.parentNode.style.display = "block";
        }
      }
    }
  }
}
</script>

<style scoped>
#setting {
    margin: 0 2vw;
    padding: 6.3vh 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
#search {
  height: 3vh;
  border: 1px solid white;
  background: #0a0a0a;
  color: white;
  font-weight: bold;
}
::placeholder {
    color: white;
}
select {
    background: #1a1a1a;
    color: white;
    font-weight: bold;
    width: 6vw;
    height: 3vh;
}

</style>