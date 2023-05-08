<script setup lang="ts">
const route = useRoute()

const includeList = [
    'Home',
    'Store',
    'Nearby',
]
</script>

<template>
    <RouterView v-slot="{ Component: C }">
        <KeepAlive :include="includeList">
            <Component :is="C" />
        </KeepAlive>
    </RouterView>
</template>
