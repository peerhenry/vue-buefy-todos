<template>
  <b-field horizontal label="Filter">
    <b-select placeholder="Select a name" v-model="filter">
      <option value="all">
        All
      </option>
      <option value="unfinished">
        Unfinished
      </option>
      <option value="done">
        Done
      </option>
    </b-select>
  </b-field>
</template>

<script>
export default {
  data: function(){ return {
    filter: 'all'
  }},
  watch: {
    filter: function(val){
      this.setFilter(val)
    }
  },
  props: {
    setFilter: Function
  }
}
</script>

<style scoped>
</style>