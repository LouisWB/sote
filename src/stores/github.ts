import { defineStore } from 'pinia';
import { ref } from 'vue';
import { Octokit } from '@octokit/core';

type UserInfo = {
  avatar_url?: string;
  login?: string;
  email?: string;
  bio?: string;
  location?: string;
  company?: string;
  blog?: string;
  public_repos?: number;
  followers?: number;
  following?: number;
  created_at?: string;
  updated_at?: string;
};

export const useGithubStore = defineStore(
  'github',
  () => {
    const token = ref(import.meta.env.VITE_GITHUB_TOKEN);
    const octokitIns = ref<Octokit | null>(null);
    const userInfo = ref<UserInfo>({});

    return { token, octokitIns, userInfo };
  },
  { persist: true }
);
