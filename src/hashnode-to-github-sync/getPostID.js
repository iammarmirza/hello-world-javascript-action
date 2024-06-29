import { POST_ID_QUERY } from "../shared/constants"
import { HASHNODE_ENDPOINT } from "../shared/constants"

export const getPostId = async (publicationId, slug) => {
    
    const response = await fetch(HASHNODE_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            Authorization: `${process.env.HASHNODE_KEY}`
        },
        body: JSON.stringify({
            query: POST_ID_QUERY,
            variables: {
                id: publicationId,
                slug
            }
        })
    })

    const data = await response.json()
    return data.data.publication.post.id
}