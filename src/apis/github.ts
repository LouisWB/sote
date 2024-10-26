import { Octokit, type OctokitResponse } from '@octokit/core';
import { useGithubStore } from '@/stores/github';
import pinia from '@/stores/index';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const githubStore = useGithubStore(pinia);
const { token, octokitIns } = storeToRefs(githubStore);

// 判断请求是否正常返回
function handleHttpCheck(res: OctokitResponse) {
  if (res?.status === 200) {
    return res.data;
  } else {
    throw new Error(`HTTP Error: ${res.status} \n Url: ${res.url}`);
  }
}

// 登录github
export const loginGithub = async (): void => {
  const octokitIns = initOctokitIns();
  githubStore.$patch((state) => (state.octokitIns = octokitIns));
  const userInfo = await getUserInfo(octokitIns);
  githubStore.$patch((state) => (state.userInfo = userInfo));
};

// 登出github
export const logoutGithub = async (): void => {
  githubStore.$patch((state) => (state.octokitIns = null));
  githubStore.$patch((state) => (state.userInfo = {}));
};

// 初始化octokit实例
export const initOctokitIns = (): Promise<Octokit> => {
  const octokitIns = new Octokit({
    auth: token.value,
  });
  return octokitIns;
};

// 获取用户信息
export const getUserInfo = async (octokit: Octokit): Promise<any> => {
  try {
    const res = await octokit?.request('GET /user');
    const userInfo = handleHttpCheck(res);
    return userInfo;
  } catch (error) {
    console.error({ error });
  }
};
