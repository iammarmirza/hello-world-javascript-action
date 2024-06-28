import { POST_DATA_QUERY } from "../utils/constants"
import { callGraphqlAPI } from "./callGraphqlAPI"

export const getPostData = async (publicationId, postSlug) => {
    const response = await callGraphqlAPI({
        query: POST_DATA_QUERY,
        variables: {
            id: publicationId,
            slug: postSlug
        },
        token: `${process.env.HASHNODE_TOKEN}`
    })

    return await response.json()
}