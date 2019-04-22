<template>
  <ApolloQuery
    :query="todos"
  >
    <template slot-scope="{ result: { data: { todos } } }">
      <ul v-if="todos.length">           
        <li v-for="todo in visibleTodos(todos)" :key="todo.id">
          <Todo :todo="todo" />
        </li>
      </ul>
      <p v-else> Add some tasks and let's get some work done! </p>  
      <p v-if="allDone(todos)"> You did everything, awesome! </p> 
    </template>
  </ApolloQuery>  
</template>

<script>
import gql from "graphql-tag"
import Todo from './Todo'

export default {
  name: 'TodosList',
  components: { Todo },
  props: {
    listFilter: {
      type: String
    }
  },
  data() {
    return {
      todos: this.$options.queries.getTodos
    }
  },
  methods: {
    visibleTodos(todos) {
      switch (this.listFilter) {
        case "SHOW_ALL":
          return todos;
        case "SHOW_COMPLETED":
          return todos.filter(t => t.completed);
        case "SHOW_ACTIVE":
          return todos.filter(t => !t.completed);
        default:
          throw new Error("Unknown filter: " + this.listFilter);
      }
    },
    allDone(todos) {
      if (todos.length === 0) return false;
      return !todos.some(function(todo) {
        return !todo.completed;
      })
    }
  },
  queries: {
    getTodos: gql`
      {
        todos @client {
          id
          todo
          completed
        }
      }
    `
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
