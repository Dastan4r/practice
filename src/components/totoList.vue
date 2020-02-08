<template>
    <div>
        <ul>
            <todo-item
              v-for="(todo, index) in todos"
              :todo="todo"
              :index="index"
              @remove-todo="removeTodo"
            />
        </ul>
    </div>
</template>

<script>
    import todoItem from "./todoItem";

    export default {
        name: "totoList",
        props: [
          'todos'
        ],
        methods: {
            removeTodo(id) {
                this.$emit('remove-todo', id);
            }
        },
        components: {
            todoItem
        }
    }
</script>

<style scoped>
    ul {
        list-style: none;
        padding: 0;
        max-width: 50%;
        margin: 0 auto;
    }
</style>