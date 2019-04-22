<template>
  <ApolloMutation
    :mutation="addTodo"
    :variables="{
      todo
    }"
    @done="cleanup"
  >
    <template slot-scope="{ mutate, error }">
      <form @submit.prevent="mutate">
        <input v-model="todo" placeholder="Add a task" />
      </form>
      <p v-if="error">There has been an error<br>{{error}}</p>
    </template>
  </ApolloMutation>
</template>

<script>
import gql from "graphql-tag"

const ADD_TODO = gql`
  mutation addTodo($todo: String!) {
    addTodo(todo: $todo) @client
  }
`

export default {
  name: 'TodoInput',
  data() {
    return {
      todo: '',
      addTodo: ADD_TODO
    }
  },
  methods: {
    cleanup() {
      this.todo = ''

    }
  } 
}
</script>

<style scoped>
input {
  font-size: 14px;
  padding: 2px 10px;
  width: 200px;
  height: 40px;
}
</style>