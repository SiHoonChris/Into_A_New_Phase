<template>
  <div id="setting">
    <div id="search-part">
      <input id="search" name="search" type="text" placeholder="Search" v-model="searchText"/>
      <label name="search">{{numOfResult}}</label>
    </div>
    <select v-model="searchHold">
      <option value="">All</option>
      <option value="Y">Hold</option>
      <option value="N">Not Hold</option>
    </select>
  </div>
</template>

<script>
import basic_info from "@/assets/basic_info.json"

export default {
  data() {
    return {
      originalDatas: basic_info,
      searchResults: [],
      searchText: '',
      searchHold: ''
    }
  },
  mounted(){
    this.$emit('datas', this.originalDatas);
  },
  computed: {
    numOfResult(){
      return this.searchResults.length;
    }
  },
  watch: {
    searchText: function(val) {
      this.searchResults 
        = this.originalDatas
            .filter(e => e.Assets.toLowerCase().includes(val.toLowerCase()) || e.Codes.toLowerCase().includes(val.toLowerCase()))
            .filter(e => e.Hold.includes(this.searchHold));
      this.$emit('datas', this.searchResults);
      document.querySelector('label').style.display = val !== '' ? "block" : "none" ;
    },
    searchHold: function(val) {
      this.searchResults 
        = this.originalDatas
            .filter(e => e.Hold.includes(val))
            .filter(e => e.Assets.toLowerCase().includes(this.searchText.toLowerCase()) || e.Codes.toLowerCase().includes(this.searchText.toLowerCase()));
      this.$emit('datas', this.searchResults);
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
#search-part{
  display: flex;
  align-items: flex-end;
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
label {
  color: white;
  margin-left: 0.5vw;
  display: none;
}
label::before {
  content: '('
}
label::after {
  content: ')'
}
select {
    background: #1a1a1a;
    color: white;
    font-weight: bold;
    width: 6vw;
    height: 3vh;
}

</style>