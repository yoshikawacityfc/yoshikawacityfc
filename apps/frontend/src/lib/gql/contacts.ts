import { gql } from "@/__generated__";

export const queryContactCategoriesCollection =
  gql(`query QueryContactCategoriesCollection($orderBy: [contact_categoriesOrderBy!]) {
    contact_categoriesCollection(orderBy: $orderBy) {
      edges {
        node {
          contact_templates {
            content
          }
          name
          id
        }
      }
    }
  }`);
