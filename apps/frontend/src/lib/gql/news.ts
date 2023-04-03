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
