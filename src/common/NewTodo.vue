<template>
  <b-field horizontal label="New todo:">
    <b-input v-model="todo" expanded></b-input>
    <span class="control">
      <button class="button is-primary" @click="() => addTodo(this.todo)">Add</button>
      <button class="button is-primary" @click="clearTodos">Clear</button>
    </span>
  </b-field>
</template>

<script>
export default {

  data: function(){return{
    todo: ''
  }},

  props: {
    addTodo: Function,
    clearTodos: Function,
  }
}
</script>

<style scoped>
</style>