import { callGraphqlAPI } from "../api/callGraphqlAPI";
import { QUERY } from "./constants";
import { getInputToPublishPost } from "./getInputToPublishPost";
import { parseFile } from "./parseFile";
import { makeSlug } from "../hashnode-to-github-sync/makeSlug";

export const publishArticle = async (file, hashnode_token, publicationId) => {
  const slug = makeSlug(file)
  const parsedArticle = await parseFile(file)
  const input = await getInputToPublishPost(parsedArticle, publicationId, slug)
  const response = await callGraphqlAPI({
    query: QUERY.publish,
    variables: {
        input
    },
    token: hashnode_token
  })
  return response
};
