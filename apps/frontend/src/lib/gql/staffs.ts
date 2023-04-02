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
        position
        one_word
        name
        id
        profile_image_asset_id
        player_history
        player_achievement
        license
        description
        coaching_achievement
        career
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
        profile_image_asset_id
      }
    }
  }
}`);
