import { connect } from 'vue-redux-connect'
import NewTodo from 'Common/NewTodo.vue'

const mapState = (state) => ({ 
  
})

const mapDispatch = (dispatch) => ({ 
  addTodo: (text) => { if(text) dispatch({ type: 'addTodo', payload: text }) },
  clearTodos: () => { dispatch({ type: 'clearTodos' }) }
})

export default connect(mapState, mapDispatch)(NewTodo)