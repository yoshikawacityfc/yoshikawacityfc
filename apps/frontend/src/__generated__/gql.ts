/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query QueryNewsCollection($first: Int, $after: Cursor, $orderBy: [newsOrderBy!], $filter: newsFilter) {\n    newsCollection(first: $first, after: $after, orderBy: $orderBy, filter: $filter) {\n      edges {\n        node {\n          title\n          id\n          slug\n          published_at\n          assets {\n            src\n            file_name\n          }\n        }\n        cursor\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }": types.QueryNewsCollectionDocument,
    "\nquery QueryPreviewNewsCollection($first: Int, $orderBy: [newsOrderBy!], $filter: newsFilter) {\n  newsCollection(first: $first, orderBy: $orderBy, filter: $filter) {\n    edges {\n      node {\n        id\n        slug\n        title\n        published_at\n        assets {\n          src\n          file_name\n        }\n      }\n    }\n  }\n}\n": types.QueryPreviewNewsCollectionDocument,
    "query QueryNews($filter: newsFilter) {\n  newsCollection(filter: $filter) {\n    edges {\n      node {\n        id\n        slug\n        title\n        published_at\n        content\n      }\n    }\n  }\n}": types.QueryNewsDocument,
    "query QueryStaffCategoryCollection {\n    staff_categoriesCollection {\n      edges {\n        node {\n          id\n          name\n        }\n      }\n    }\n  }\n": types.QueryStaffCategoryCollectionDocument,
    "query QueryStaffCollection($filter: staffsFilter) {\n    staffsCollection(filter: $filter) {\n      edges {\n        node {\n          id\n          assets {\n            src\n            file_name\n          }\n          position\n          name\n          one_word\n          description\n          license\n          career\n          coaching_achievement\n          player_history\n          player_achievement\n        }\n      }\n    }\n  }": types.QueryStaffCollectionDocument,
    "query QueryAdvisorCollection($filter: staffsFilter) {\n  staffsCollection(filter: $filter) {\n    edges {\n      node {\n        position\n        name\n        id\n        description\n        assets {\n          src\n          file_name\n        }\n      }\n    }\n  }\n}": types.QueryAdvisorCollectionDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query QueryNewsCollection($first: Int, $after: Cursor, $orderBy: [newsOrderBy!], $filter: newsFilter) {\n    newsCollection(first: $first, after: $after, orderBy: $orderBy, filter: $filter) {\n      edges {\n        node {\n          title\n          id\n          slug\n          published_at\n          assets {\n            src\n            file_name\n          }\n        }\n        cursor\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }"): (typeof documents)["query QueryNewsCollection($first: Int, $after: Cursor, $orderBy: [newsOrderBy!], $filter: newsFilter) {\n    newsCollection(first: $first, after: $after, orderBy: $orderBy, filter: $filter) {\n      edges {\n        node {\n          title\n          id\n          slug\n          published_at\n          assets {\n            src\n            file_name\n          }\n        }\n        cursor\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery QueryPreviewNewsCollection($first: Int, $orderBy: [newsOrderBy!], $filter: newsFilter) {\n  newsCollection(first: $first, orderBy: $orderBy, filter: $filter) {\n    edges {\n      node {\n        id\n        slug\n        title\n        published_at\n        assets {\n          src\n          file_name\n        }\n      }\n    }\n  }\n}\n"): (typeof documents)["\nquery QueryPreviewNewsCollection($first: Int, $orderBy: [newsOrderBy!], $filter: newsFilter) {\n  newsCollection(first: $first, orderBy: $orderBy, filter: $filter) {\n    edges {\n      node {\n        id\n        slug\n        title\n        published_at\n        assets {\n          src\n          file_name\n        }\n      }\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query QueryNews($filter: newsFilter) {\n  newsCollection(filter: $filter) {\n    edges {\n      node {\n        id\n        slug\n        title\n        published_at\n        content\n      }\n    }\n  }\n}"): (typeof documents)["query QueryNews($filter: newsFilter) {\n  newsCollection(filter: $filter) {\n    edges {\n      node {\n        id\n        slug\n        title\n        published_at\n        content\n      }\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query QueryStaffCategoryCollection {\n    staff_categoriesCollection {\n      edges {\n        node {\n          id\n          name\n        }\n      }\n    }\n  }\n"): (typeof documents)["query QueryStaffCategoryCollection {\n    staff_categoriesCollection {\n      edges {\n        node {\n          id\n          name\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query QueryStaffCollection($filter: staffsFilter) {\n    staffsCollection(filter: $filter) {\n      edges {\n        node {\n          id\n          assets {\n            src\n            file_name\n          }\n          position\n          name\n          one_word\n          description\n          license\n          career\n          coaching_achievement\n          player_history\n          player_achievement\n        }\n      }\n    }\n  }"): (typeof documents)["query QueryStaffCollection($filter: staffsFilter) {\n    staffsCollection(filter: $filter) {\n      edges {\n        node {\n          id\n          assets {\n            src\n            file_name\n          }\n          position\n          name\n          one_word\n          description\n          license\n          career\n          coaching_achievement\n          player_history\n          player_achievement\n        }\n      }\n    }\n  }"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query QueryAdvisorCollection($filter: staffsFilter) {\n  staffsCollection(filter: $filter) {\n    edges {\n      node {\n        position\n        name\n        id\n        description\n        assets {\n          src\n          file_name\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query QueryAdvisorCollection($filter: staffsFilter) {\n  staffsCollection(filter: $filter) {\n    edges {\n      node {\n        position\n        name\n        id\n        description\n        assets {\n          src\n          file_name\n        }\n      }\n    }\n  }\n}"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;