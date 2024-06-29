const HASHNODE_ENDPOINT = "https://gql.hashnode.com";

const QUERY = {
  publish: `mutation PublishPost($input: PublishPostInput!) {
    publishPost(input: $input) {
      post {
        cuid
        id
      }
    }
  }`,
  modify: `mutation ModifyPost ($input: UpdatePostInput!) {
  updatePost (input: $input) {
    post {
      id
      title
      slug
    }
  }
}`,
  delete: `mutation RemovePost($input: RemovePostInput!) {
  removePost(input: $input) {
    post {
      id
      slug
    }
  }
}`,
};

const PUBLICATION_ID_QUERY = `query findPublication ($host: String!) {
  publication(host: $host) {
    id
  }
}`;

const POST_ID_QUERY = `query Publication($id: ObjectId, $slug: String!) {
  publication(id: $id) {
    id
    post(slug: $slug) {
      id
    }
  }
}`;

const POST_SLUG_QUERY = `query PostSlug ($id: ID!) {
  post(id: $id) {
    slug
  }
}`

const POST_DATA_QUERY = `query PostData ($id: ObjectId, $slug: String!) {
  publication(id: $id) {
    post(slug: $slug) {
      id
      slug
      title
      subtitle
      publishedAt
      content {
        markdown
      }
      sourcedFromGithub
    }
  }
}`

export {HASHNODE_ENDPOINT, QUERY, PUBLICATION_ID_QUERY, POST_ID_QUERY, POST_SLUG_QUERY, POST_DATA_QUERY}