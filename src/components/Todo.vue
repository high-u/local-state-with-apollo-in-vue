<template>
  <div>
      <CompleteTodoCheckbox :todo="todo"/>
      <label
        :style="checkedStyle"
        >
          {{ todo.todo}}
      </label>
  </div>
</template>
<script>
import CompleteTodoCheckbox from "./CompleteTodoCheckbox"

export default {
  name: "Todo",
  components: {CompleteTodoCheckbox},
  props: {
    todo: {}
  },
  computed: {
    checkedStyle () {
      let style = this.todo.completed ? 'line-through' : 'none'
      return `textDecoration:${style}`
    }
  }
}
</script>
