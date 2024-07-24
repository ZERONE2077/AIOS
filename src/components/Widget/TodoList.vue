<template>
    <div class="todo-container">
      <div class="input-container">
        <input v-model="newTodo" type="text" placeholder="Add a new todo" />
        <button @click="addTodo">Add</button>
      </div>
      <ul class="todo-list">
        <li v-for="(todo, index) in todos" :key="index" class="todo-item">
          <span>{{ todo }}</span>
          <button @click="deleteTodo(index)">Delete</button>

        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newTodo: '',
        todos: []
      };
    },
    methods: {
      addTodo() {
        if (this.newTodo.trim()) {
          this.todos.push(this.newTodo.trim());
          this.newTodo = '';
        }
      },
      deleteTodo(index) {
        this.todos.splice(index, 1);
      }
    }
  };
  </script>
  
  <style scoped>
  .todo-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f7f7f7;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .input-container {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  }
  
  .input-container input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  .input-container button {
    padding: 10px 20px;
    border: none;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
    border-radius: 4px;
  }
  
  .input-container button:hover {
    background-color: #0056b3;
  }
  
  .todo-list {
    list-style: none;
    padding: 0;
  }
  
  .todo-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 10px;
  }
  
  .todo-item button {
    border: none;
    background-color: #ff4d4d;
    color: #fff;
    cursor: pointer;
    border-radius: 4px;
    padding: 5px 10px;
  }
  
  .todo-item button:hover {
    background-color: #cc0000;
  }
  </style>
  