<template>
    <li>
        <span v-bind:class="{done: todo.completed}">

            <input type="checkbox"
                   v-on:change="todo.completed = !todo.completed"
            >
            <strong> {{index + 1}}</strong>
            {{todo.title | upperCase }}
        </span>
        <button class="delete-button"
                @click="$emit('remove-todo', todo.id)"
        >
            &times
        </button>
    </li>
</template>

<script>
    export default {
        props: {
            todo: {
                type: Object,
                required: true
            },
            index: Number
        },
        filters: {
            upperCase(title) {
                return title.toUpperCase()
            }
        },
        name: "todoItem"
    }
</script>

<style scoped>
    li {
        border: 1px solid #ccc;
        display: flex;
        justify-content: space-between;
        padding: 8px 32px;
        margin: 16px;
    }

    .delete-button {
        background-color: red;
        color: #fff;
        border: transparent;
        border-radius: 50%;
        font-weight: bold;
    }
    .done {
        text-decoration: line-through;
    }
</style>