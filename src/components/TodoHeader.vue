<template>
    <header class="header">
        <h1 class="logo">TodoList</h1>
        <p class="date">{{ timestamp }}</p>
    </header>
</template>
 
<script>
import getDate from "../components/common/getDate.js";

export default {
    data() {
        return {
            timestamp: ""
        };
    },
    created() {
        this.timestamp = `${getDate().month}/${getDate().date} ${getDate().week} ${getDate().hour}:${getDate().min}:${getDate().sec}`;
    }

};
</script>