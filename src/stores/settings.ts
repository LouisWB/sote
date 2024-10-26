import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useGithubStore = defineStore('github', () => {
  const progress = ref<number>(0);

  return { progress };
});
