<template>
  <section class="section">
    <div class="container">
      <h1 class="title">{{title}}</h1>

      <NewTodo :store="store" />
      <SetFilter :store="store" />
      <TodosList :store="store" />

    </div>
  </section>
</template>

<script>
import store from './store.js'
import { connect } from 'vue-redux-connect'
import NewTodo from './connections/NewTodo.js'
import SetFilter from './connections/SetFilter.js'
import TodosList from './connections/TodosList.js'

// Vue
export default {
  name: 'ReduxPage',
  components: {
    NewTodo,
    SetFilter,
    TodosList
  },

  data: function(){ return {
    store: store,
    title: 'Using Redux'
  }}
}
</script>

<style scoped>
</style>