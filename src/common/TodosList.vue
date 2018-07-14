<template>
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
</template>

<script>
export default {
  data: function(){return {
    strike: {
      textDecoration: 'line-through'
    }
  }},
  props: {
    todos: Array,
    filter: String,
    toggleTodo: Function,
    removeTodo: Function
  },
  computed: {
    visibleTodos: function(){
      if(this.filter === 'unfinished') return this.todos.filter(todo => !todo.done)
      if(this.filter === 'done') return this.todos.filter(todo => todo.done)
      return this.todos
    }
  }
}
</script>

<style scoped>
</style>