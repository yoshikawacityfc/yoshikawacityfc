import { gql } from "@/__generated__";

export const queryNewsCollection =
  gql(`query QueryNewsCollection($first: Int, $after: Cursor) {
    newsCollection(first: $first, after: $after) {
      edges {
        node {
          title
          id
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

export const queryNews = gql(`query QueryNews($filter: newsFilter) {
  newsCollection(filter: $filter) {
    edges {
      node {
        id
        title
        published_at
        content
      }
    }
    pageInfo {
      endCursor
    }
  }
}`);
