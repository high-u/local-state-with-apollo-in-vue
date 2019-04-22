<template>
  <div>
    <TodoInput/>
    <TodosList :listFilter="filter"/>
    <FilterBar @click="setFilter" />
    <DeleteBar />
  </div>
</template>

<script>
import TodoInput from './TodoInput'
import TodosList from './TodosList'
import FilterBar from './FilterBar'
import DeleteBar from './DeleteBar'

export default {
  name: 'TodosPage',
  components: {TodoInput, TodosList, FilterBar, DeleteBar},
  data() {
    return {
      filter: 'SHOW_ALL'
    }
  },
  methods: {
    setFilter (filter) {
      this.filter = filter
    }
  }
}
</script>
