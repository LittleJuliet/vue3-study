<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import axios from '@/utils/axios';
import { ref } from 'vue';

const resp = ref();
axios
    .post('/api/cats/create', {
        name: 'lxl',
        age: 3,
        breed: 'Black',
    })
    .then((res) => {
        resp.value = res.data;
    });
</script>

<template>
    <div>
        <template v-if="resp">
            <ul>
                <li>{{ resp.name }}</li>
                <li>{{ resp.age }}</li>
                <li>{{ resp.breed }}</li>
            </ul>
        </template>
    </div>
</template>

<style></style>
