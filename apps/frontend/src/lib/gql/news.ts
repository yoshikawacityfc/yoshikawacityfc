import { gql } from "@/__generated__";

export const queryNewsCollection =
  gql(`query QueryNewsCollection($first: Int, $after: Cursor, $orderBy: [newsOrderBy!], $filter: newsFilter) {
    newsCollection(first: $first, after: $after, orderBy: $orderBy, filter: $filter) {
      edges {
        node {
          title
          id
          slug
          published_at
          assets {
            src
            file_name
          }
        }
        cursor
      }
      pageInfo {
        endCursor
        hasNextPage
        startCursor
      }
    }
  }`);

export const queryPreviewNewsCollection = gql(`
query QueryPreviewNewsCollection($first: Int, $orderBy: [newsOrderBy!], $filter: newsFilter) {
  newsCollection(first: $first, orderBy: $orderBy, filter: $filter) {
    edges {
      node {
        id
        slug
        title
        published_at
        assets {
          src
          file_name
        }
      }
    }
  }
}
`);

export const queryNews = gql(`query QueryNews($filter: newsFilter) {
  newsCollection(filter: $filter) {
    edges {
      node {
        id
        slug
        title
        published_at
        content
      }
    }
  }
}`);
