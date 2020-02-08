<template>
    <form @submit.prevent="onSubmit">
        <input type="text"
            v-model="description"
        >
        <button type="submit">Create</button>
    </form>
</template>

<script>
    export default {
        name: "addTodo",
        methods: {
            onSubmit() {
                if(this.description.trim()){
                    const newTodo = {
                        id: Date.now(),
                        title: this.description,
                        completed: false
                    };
                    this.$emit('add-todo', newTodo);
                    this.description = '';
                }
            }
        },
        data () {
            return {
                description: ''
            }
        }
    }
</script>

<style scoped>
    form {
        display: flex;
        max-width: 50%;
        margin: 0 auto;
    }
    input {
        width: 100%;
    }
</style>