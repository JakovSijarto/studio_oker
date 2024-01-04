import { ref, watchEffect } from 'vue';

const loading = ref(true);

export function useLoading() {
  return {
    loading,
    startLoading: () => {
      loading.value = true;
    },
    endLoading: () => {
      loading.value = false;
    },
  };
}

// Example: Adjust logic inside watchEffect
watchEffect(() => {
  // Add your logic here based on the loading state
  if (loading.value) {
    // Code to run when loading starts
    console.log('Loading started');
  } else {
    // Code to run when loading ends
    console.log('Loading ended');
  }
});