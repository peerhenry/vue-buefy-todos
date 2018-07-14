import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var counter = 0;

function makeTodo(text){
  return {
    id: counter++,
    done: false,
    text
  }
}

const store = new Vuex.Store({
  state: {
    todos: [ makeTodo("james bond") ],
    filter: 'all'
  },
  mutations: {
    setFilter(state, payload){
      console.log('waddap setfilter')
      state.filter = payload
    },
    addTodo(state, payload){
      console.log('waddap addTodo')
      state.todos.push(makeTodo(payload))
    },
    removeTodo(state, payload){
      state.todos = state.todos.filter(t => t.id != payload)
    },
    clearTodos(state){
      state.todos = []
    },
    toggleTodo(state, payload){
      let thing = state.todos.filter(t => t.id === payload)[0]
      thing.done = !thing.done
    }
  }
})

export default store