<script setup lang="ts">
// import AppLayout from '@/layouts/AppLayout.vue';
import { useTitle } from '@/hooks';

// 设置 document title
useTitle();
</script>

<template>
  <!-- <AppLayout /> -->
  <router-view />
</template>

<style lang="scss"></style>
