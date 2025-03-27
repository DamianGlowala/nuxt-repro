<template>
  <div>
    <button @click="fn.execute()">
        Call Nuxt 3.16.1
    </button>

    <pre>
        {{ fn.error.value }}
    </pre>
  </div>
</template>

<script setup lang="ts">
const fn = useFetch('/api/request', {
    immediate: false
})
</script>
