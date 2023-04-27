import { context, getOctokit } from "@actions/github";
import { getInput } from "@actions/core";
import generateEightBallResponse from "./generateResponse";

const run = async () => {
  const prefix: string = getInput("prefix");
  const github_token: string = getInput("GITHUB_TOKEN");
  if (
    !context.payload.comment ||
    !context.payload.comment["body"]?.startsWith(prefix)
  ) {
    return;
  }
  const issue_number =
    context.payload.pull_request?.number || context.payload.issue?.number;
  if (!issue_number) {
    return;
  }

  const octokit = getOctokit(github_token);
  const body =
    '> ' + context.payload.comment["body"] + '\n\r' +
    "@" +
    context.payload.comment["user"].login +
    " " +
    generateEightBallResponse();
    
  await octokit.rest.issues.createComment({
    ...context.repo,
    issue_number,
    body,
  });
};

run();
