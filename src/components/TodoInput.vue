<template>
    <div class="add">
        <input type="text" class="add__input" placeholder="Enter your task here" v-model="newTodoItem"
            v-on:keyup.enter="addTodoItem" />
        <button class="add__button" v-on:click="addTodoItem">
            <span class="blind">Add</span>
        </button>
    </div>
</template>
 
<script>
import getDate from "../components/common/getDate.js";

export default {
    data() {
        return {
            newTodoItem: ""
        };
    },
    methods: {
        addTodoItem() {
            if (this.newTodoItem !== "") {
                var value = {
                    item: this.newTodoItem,
                    date: `${getDate().date} ${getDate().week}`,
                    time: getDate().hour + ':' + getDate().min + ':' + getDate().sec
                };
                localStorage.setItem(this.newTodoItem, JSON.stringify(value));
                this.clearInput();
            }
        },
        clearInput() {
            this.newTodoItem = "";
        }
    }
};
</script>