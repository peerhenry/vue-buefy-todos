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
import NewTodo from './connections/NewTodo'
import SetFilter from 'Common/SetFilter.vue'
import TodosList from 'Common/TodosList.vue'

// SetFilter
const filterMapState = (state) => ({  })
const filterMapDispatch = (dispatch) => ({ 
  setFilter: function(f){
    dispatch({ 
      type: 'setFilter',
      payload: f
    })
  }
 })
const ConnectedSetFilter = connect(filterMapState, filterMapDispatch)(SetFilter)

// TodosList
const mapStateForTodos = (state) => ({
  todos: state.todos.toArray(),
  filter: state.filter
})
const mapDispatchForTodos = (dispatch) => ({
  toggleTodo: (id) => { dispatch({ type: 'toggleTodo', payload: id }) },
  removeTodo: (id) => { dispatch({ type: 'removeTodo', payload: id }) }
})
const ConnectedTodosList = connect(mapStateForTodos, mapDispatchForTodos)(TodosList)

// Vue
export default {
  name: 'ReduxPage',
  components: {
    'NewTodo': NewTodo,
    'SetFilter': ConnectedSetFilter,
    'TodosList': ConnectedTodosList
  },

  data: function(){ return {
    store: store,
    title: 'Using Redux'
  }}
}
</script>

<style scoped>
</style>