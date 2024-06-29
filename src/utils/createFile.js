import { Octokit } from "@octokit/rest";
const { Base64 } = require("js-base64")
const github = require("@actions/github");
const githubToken = process.env.GITHUB_TOKEN

const octokit = new Octokit({
  auth: githubToken,
});

export const createFile = async () => {
  console.log(githubToken)
  try {
    const text = 'Test'
    const contentEncoded = Base64.encode(text)
    const { data } = await octokit.repos.createOrUpdateFileContents({
      owner: "iammarmirza",
      repo: "github-actions-test",
      path: "OUTPUT.md",
      branch: "main",
      message: "feat: Added OUTPUT.md programatically",
      content: contentEncoded,
      committer: {
        name: `Ammar Mirza`,
        email: "itsammarmirza@gmail.com",
      },
      author: {
        name: "Ammar Mirza",
        email: "itsammarmirza@gmail.com",
      },
    });

    console.log(data);
  } catch (err) {
    console.error(err);
  }
};
