import { getPostId } from "../shared/getPostID";
import { getInputToModifyPost } from "./getInputToModifyPost";
import { makeSlug } from "../shared/makeSlug";
import { parseFile } from "../shared/parseFile";
import { callGraphqlAPI } from "../shared/callGraphqlAPI";
import { QUERY } from "../shared/constants";

export const modifyArticle = async ({
  file,
  hashnode_token,
  publicationId,
}: {
  file: string;
  hashnode_token: string;
  publicationId: string | number;
}) => {
  const slug = makeSlug(file);
  const parsedArticle = await parseFile(file);
  const postId = await getPostId({ publicationId, slug });
  const input = await getInputToModifyPost({parsedArticle, slug, postId});

  const response = await callGraphqlAPI({
    query: QUERY.modify,
    variables: {
      input,
    },
    token: hashnode_token,
  });

  return response;
};
