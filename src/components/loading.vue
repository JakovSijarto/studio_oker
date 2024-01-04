<!-- Loading.vue -->
<template>
    <div v-if="isLoading" class="loading-container">
      <!-- Your loading animation or message here -->
      <div class="loading-spinner"></div>
      <p>Loading...</p>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  import { useLoading } from '../useLoading';
  
  const { loading } = useLoading();
  const isLoading = ref(loading);
  
  // Watch for changes in the global loading state
  watch(() => {
    isLoading.value = loading.value;
  });
  </script>
  
  <style scoped>
  .loading-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }
  
  .loading-spinner {
    border: 8px solid #f3f3f3;
    border-top: 8px solid #3498db;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  </style>
  