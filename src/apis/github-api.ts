import { Octokit, App } from '@octokit/core';

export const loginGithubApp = async (app?: App): Promise<Octokit> => {
  const octokit = new Octokit({
    auth: '',
  });
  console.log(octokit);
  return octokit;
};
