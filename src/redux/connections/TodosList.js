import { connect } from 'vue-redux-connect'
import TodosList from 'Common/TodosList.vue'

const mapStateForTodos = (state) => ({
  todos: state.todos.toArray(),
  filter: state.filter
})
const mapDispatchForTodos = (dispatch) => ({
  toggleTodo: (id) => { dispatch({ type: 'toggleTodo', payload: id }) },
  removeTodo: (id) => { dispatch({ type: 'removeTodo', payload: id }) }
})
export default connect(mapStateForTodos, mapDispatchForTodos)(TodosList)