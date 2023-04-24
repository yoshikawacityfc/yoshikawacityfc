import { gql } from "@/__generated__";

export const queryContactTemplateCollection =
  gql(`query QueryContactTemplateCollection {
    contact_templatesCollection {
      edges {
        node {
          id
          name
          content
        }
      }
    }
  }`);
