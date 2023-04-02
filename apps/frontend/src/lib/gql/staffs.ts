import { gql } from "@/__generated__";

export const queryStaffCategoryCollection =
  gql(`query QueryStaffCategoryCollection {
    staff_categoriesCollection {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`);

export const queryStaffCollection =
  gql(`query QueryStaffCollection($filter: staffsFilter) {
    staffsCollection(filter: $filter) {
      edges {
        node {
          id
          assets {
            src
            file_name
          }
          position
          name
          one_word
          description
          license
          career
          coaching_achievement
          player_history
          player_achievement
        }
      }
    }
  }`);

export const queryAdvisorCollection =
  gql(`query QueryAdvisorCollection($filter: staffsFilter) {
  staffsCollection(filter: $filter) {
    edges {
      node {
        position
        name
        id
        description
        assets {
          src
          file_name
        }
      }
    }
  }
}`);
