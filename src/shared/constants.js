export const HASHNODE_ENDPOINT = "https://gql.hashnode.com";

export const QUERY = {
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

export const PUBLICATION_ID_QUERY = `query findPublication ($host: String!) {
  publication(host: $host) {
    id
  }
}`;

export const POST_ID_QUERY = `query Publication($id: ObjectId, $slug: String!) {
  publication(id: $id) {
    id
    post(slug: $slug) {
      id
    }
  }
}`;

export const POST_SLUG_QUERY = `query PostSlug ($id: ID!) {
  post(id: $id) {
    slug
  }
}`

export const POST_DATA_QUERY = `query PostData ($id: ObjectId, $slug: String!) {
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