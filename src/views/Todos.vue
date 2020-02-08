<template>
    <div>
        <router-link to="/">Back</router-link>
        <add-todo
                @add-todo="addTodo"
        />

        <label>
            <select v-model="filter">
                <option value="all">All</option>
                <option value="completed">completed</option>
                <option value="not-completed">Not completed</option>
            </select>
        </label>

        <hr/>
        <Loader
            v-if="loading"
        />
        <totoList
                :todos="filteredTodo"
                @remove-todo="removeTodo"
                v-else-if="filteredTodo.length"
        />
        <p v-else>No todos!</p>
    </div>
</template>

<script>
    import totoList from '../components/totoList';
    import addTodo from '../components/addTodo';
    import Loader from '../components/Loader';

    export default {
        name: 'app',
        data () {
            return {
                todos: [],
                loading: true,
                filter: 'all'
            }
        },
        mounted() {
            fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
                .then(response => response.json())
                .then(json => {
                        this.todos = json;
                        this.loading = false
                });
        },
        computed: {
            filteredTodo() {
                if(this.filter === 'all') {
                    return this.todos
                }
                if(this.filter === 'completed') {
                    return this.todos.filter(e => e.completed);
                }
                if(this.filter === 'not-completed') {
                    return this.todos.filter(e => !e.completed);
                }

            }

        },
        methods: {
            removeTodo(id){
                this.todos = this.todos.filter(e => e.id !== id)
            },
            addTodo(newTodo) {
                this.todos.push(newTodo);
            },
        },
        components: {
            totoList,
            addTodo,
            Loader,
        }
    }

</script>
<style scoped>

</style>