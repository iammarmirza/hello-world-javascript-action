import { makeSlug } from "../hashnode-to-github-sync/makeSlug"
import { getPostId } from "../hashnode-to-github-sync/getPostID"
import { getInputToDeletePost } from "./getInputToDeletePost"
import { QUERY } from "../shared/constants"
import { callGraphqlAPI } from "../shared/callGraphqlAPI"

export const deleteArticle = async (file, hashnode_token, publicationId) => {
    const slug = makeSlug(file)
    const postId = await getPostId(publicationId, slug)
    const input = await getInputToDeletePost(postId)

    const response = await callGraphqlAPI({
        query: QUERY.delete,
        variables: {
            input
        },
        token: hashnode_token
      })

    return response
}