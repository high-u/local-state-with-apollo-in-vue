<template>
  <ApolloQuery
    :query="todos"
  >
    <template slot-scope="{ result: { data: { todos } } }">
      <p v-if="tasksCompleted(todos)">
        Delete: <a style="text-decoration: underline"  
                  href="#" 
                  @click="deleteTodos()"
                >
                  Completed
              </a>
      </p> 
    </template> 
  </ApolloQuery>
</template>

<script>
import { gql } from "apollo-boost"
import TodosList from './TodosList'

const getTodos = TodosList.queries.getTodos

export default {
  name: 'DeleteBar',
  data () {
    return {
      todos: getTodos
    }
  },
  methods: {
    deleteTodos () {
      let confirmed = confirm('Are you certain you want to delete your completed tasks?')
      if (confirmed) {
        this.$apollo.mutate({
          mutation: gql`
            mutation deleteTodos {
              deleteTodos @client
            }
          `
        })
      }
    },
    tasksCompleted (todos) {
      let completed = todos.filter(t => t.completed)
      return completed.length
    }
  }
}
</script>