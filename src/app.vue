<template>
  <section class="section">
    <div class="container">

      <h1 class="title">Todos</h1>

      <b-field horizontal label="New todo:">
        <b-input v-model="todo" expanded></b-input>
        <span class="control">
          <button class="button is-primary" @click="addTodo">Add</button>
          <button class="button is-primary" @click="clearTodos">Clear</button>
        </span>
      </b-field>

      <b-field horizontal label="Filter">
        <b-select placeholder="Select a name" v-model="visibilityFilter">
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

      <ul>
        <li v-for="todo in visibleTodos" :key=todo.id>
          <div @click="() => toggleTodo(todo.id)">
            <b-field class="box todo-box" style="justify-content: space-between;" grouped>

              <div :style="todo.done ? strike : {}" class="is-pulled-left"> 
                <b-icon :icon="todo.done ? 'check-circle' : 'checkbox-blank-circle'"/>
                {{ todo.text }}
              </div>

              <p class="control is-pulled-right">
                <button class="button has-text-weight-bold is-pulled-right is-size-5" @click="() => removeTodo(todo.id)">
                  <b-icon icon="close" size="is-small"></b-icon>
                </button>
              </p>
              
            </b-field>
          </div>
        </li>
      </ul>
      
    </div>
  </section>
</template>

<script>

var current = 1

function createTodo(text){
  return {
    id: current++,
    text: text,
    done: false
  }
}

export default {
  name: '',

  data: function(){
    return {
      todo: 'Jim',
      todos: [ createTodo("one"), createTodo("two") ],
      strike: {
        textDecoration: 'line-through'
      },
      visibilityFilter: 'all'
    }
  },

  computed: {
    visibleTodos: function(){
      var vFilter = () => true
      if(this.visibilityFilter === 'done') vFilter = (todo) => todo.done
      if(this.visibilityFilter === 'unfinished') vFilter = (todo) => !todo.done
      return this.todos.filter(vFilter)
    }
  },

  methods: {
    addTodo: function(){
      this.todos.push(createTodo(this.todo))
    },
    clearTodos: function(){
      this.todos = []
    },
    removeTodo(id){
      this.todos = this.todos.filter(todo => todo.id != id)
    },
    toggleTodo(id){
      console.log("toggling todo!")
      this.todos = this.todos.map(todo => {
        if(todo.id != id) return todo
        return {
          id: todo.id,
          text: todo.text,
          done: !todo.done
        }
      })
    }
  }
}
</script>

<style scoped>
.todo-box{
  cursor: pointer;
  align-items: center;
}

.todo-box:hover{
  background-color: #eee
}
</style>