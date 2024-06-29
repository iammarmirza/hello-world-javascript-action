import { HASHNODE_ENDPOINT } from "./constants"

export const callGraphqlAPI = async ({query, variables, token}) => {
    const response = await fetch(HASHNODE_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            Authorization: token
        },
        body: JSON.stringify({
            query,
            variables,
        })
    })

    const data = await response.json()
    return data
}