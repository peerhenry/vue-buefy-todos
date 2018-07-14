<template>
  <section class="section">
    <div class="container">
      <h1 class="title">{{title}}</h1>

      <NewTodo :addTodo="addTodo" :clearTodos="clearTodos"/>
      <SetFilter :filter="filter" :setFilter="setFilter"/>
      <TodosList :todos="todos" :filter="filter" :removeTodo="removeTodo" :toggleTodo="toggleTodo"/>

    </div>
  </section>
</template>

<script>
import store from './store.js'
import NewTodo from 'Common/NewTodo.vue'
import SetFilter from 'Common/SetFilter.vue'
import TodosList from 'Common/TodosList.vue'

export default {
  name: 'VuexPage',
  components: {
    NewTodo,    // addTodo, clearTodos
    SetFilter,  // setFilter
    TodosList   // todos, filter, removeTodo, toggleTodo
  },
  data: function(){ return {
    title: 'Using Vuex'
  }},
  computed: {
    todos: () => store.state.todos,     // in order for our component to update, we need the to get the data from the store through computed
    filter: () => store.state.filter
  },
  methods: {
    sayHi: function(){console.log('HI')},

    addTodo: function(text){ store.commit('addTodo', text) },   // this sucks
    clearTodos: function(){ store.commit('clearTodos') },       // why can't I have a less verbose way to give store mutations as props to components
    setFilter: function(f){ store.commit('setFilter', f) },
    removeTodo: function(id){ store.commit('removeTodo', id) },
    toggleTodo: function(id){ store.commit('toggleTodo', id) }
  }
}
</script>

<style scoped>
</style>