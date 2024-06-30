const core = require("@actions/core");

export const getInput = () => {
    const hashnode_event = core.getInput("hashnode_event");
    const hashnode_token = core.getInput("hashnode_token");
    const host = core.getInput("hashnode_host");
    const added_files = core.getInput("added_files");
    const modified_files = core.getInput("modified_files");
    const deleted_files = core.getInput("deleted_files");
    const github_personal_access_token = core.getInput("github_personal_access_token")
    core.setSecret(hashnode_token);
    core.setSecret(github_personal_access_token)

    return { hashnode_event, hashnode_token, host, added_files, modified_files, deleted_files }
}