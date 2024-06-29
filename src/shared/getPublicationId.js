import { HASHNODE_ENDPOINT, PUBLICATION_ID_QUERY } from "./constants"

export const getPublicationId = async (host) => {
        const response = await fetch(HASHNODE_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                Authorization: `${process.env.HASHNODE_KEY}`
            },
            body: JSON.stringify({
                query: PUBLICATION_ID_QUERY,
                variables: {
                    host
                }
            })
        })
        
        const data = await response.json()
        return data.data.publication.id
}