<template>
  <ApolloMutation
    class="checkbox"
    :mutation="$options.mutation"
    :variables= "{ id: todo.id }"
  >
    <input
      slot-scope="{mutate}"
      type="checkbox"
      :id="todo.id"
      v-model="todo.completed"
      @input="mutate()"
    />
  </ApolloMutation>
</template>
<script>
import gql from "graphql-tag"

export default {
  name: 'CompleteTodoCheckbox',
  props: {
    todo: {}
  },
  mutation: gql`
    mutation toggleTodo($id: id!) {
      toggleTodo(id: $id) @client
    }
  `
}
</script>

<style scoped>
.checkbox {
  display: inline-block;
}
</style>

