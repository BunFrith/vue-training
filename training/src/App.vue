<template>
  <div id="app">
    <ToDoList :todos="todos" @delete-todo="deleteTodo" />
  </div>
</template>

<script>
import ToDoList from './components/ToDoList.vue'

export default {
  name: 'App',
  data(){
    return {
      todos: [ 'Ремонт', 'Уборка' ],
    }
  },
  components: {
    ToDoList
  },
  methods: {
    deleteTodo(index){
      this.todos.splice(index, 1);
    }
  },
}
</script>

<style>

</style>
