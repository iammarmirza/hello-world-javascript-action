import { getPublicationId } from "./shared/getPublicationId";
import { getInput } from "./shared/getInput";
import { hashnodeSync } from "./hashnode-to-github-sync/hashnodeSync";
import { githubSync } from "./github-to-hashnode-sync/githubSync";
const core = require("@actions/core");

export async function run() {
  try {
    const {
      hashnode_event,
      hashnode_token,
      host,
      added_files,
      modified_files,
      deleted_files,
    } = getInput();

    const publicationId = await getPublicationId(host);
    const parsedEvent = JSON.parse(hashnode_event);

    if (parsedEvent) hashnodeSync(parsedEvent);
    else githubSync(added_files, modified_files, deleted_files)
  } catch (error) {
    core.setFailed(error.message);
  }
}
run();
