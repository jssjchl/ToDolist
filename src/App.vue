<script>
import TodoController from '/@components/TodoController.vue';
import TodoTitle from '/@components/TodoTitle.vue';
import TodoHeader from '/@components/TodoHeader.vue';
import TodoFooter from '/@components/TodoFooter.vue';
import TodoList from '/@components/TodoList.vue';
import TodoInput from '/@components/TodoInput.vue';
	
export default {
  name: "App",
  components: {
    TodoHeader,
    TodoTitle,
    TodoInput,
    TodoController,
    TodoList,
    TodoFooter
  }
};

</script>

<template>
  <div id="app">
    <TodoHeader />
    <TodoTitle />
    <TodoController />
    <TodoList />
    <TodoInput />
    <TodoFooter />
  </div>
</template>

