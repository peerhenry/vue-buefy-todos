import { List } from 'immutable'
import { createStore, applyMiddleware, compose } from 'redux';

var counter = 0;

const initialState = {
  todos: new List().push( createNewTodo("Im in Redux") ),
  filter: "all"
}

function createNewTodo(text){
  return {
    id: counter++,
    text: text,
    done: false
  }
}

function toggle( todo ){
  return {
    id: todo.id,
    text: todo.text,
    done: !todo.done
  }
}

const reduceTodos = ( todos, action ) => {
  switch(action.type){
    case "clearTodos":
      return new List()
    case "addTodo":
      // todo: expect id to come back from the server
      const newTodo = createNewTodo(action.payload)
      return todos.push( newTodo )
    case "removeTodo":
      return todos.filter( todo => todo.id != action.payload )
    case "toggleTodo":
      return todos.map( todo => todo.id == action.payload ? toggle(todo) : todo )
  }
  return todos;
}

const reduceFilter = ( filter, action ) => {
  switch(action.type){
    case "setFilter":
      return action.payload
  }
  return filter
}

const reducer = (state = initialState, action) => ({
  todos: reduceTodos(state.todos, action),
  filter: reduceFilter(state.visibilityFilter, action)
})


const logger = () => {
  return next => action => {
    console.log('dispatching: ', action.type)
    return next
  }
}

// todo: switch devtools based on webpack flag
// const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // specify extension's options like name, actionsBlacklist, actionsCreators...
  }) : compose;

const enhancer = composeEnhancers(applyMiddleware( logger ))

const store = createStore(
  reducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export default store