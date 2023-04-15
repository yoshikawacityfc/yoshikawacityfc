/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigInt: any;
  Cursor: any;
  Date: any;
  Datetime: any;
  JSON: any;
  Time: any;
  UUID: any;
};

/** Boolean expression comparing fields on type "BigInt" */
export type BigIntFilter = {
  eq?: InputMaybe<Scalars['BigInt']>;
  gt?: InputMaybe<Scalars['BigInt']>;
  gte?: InputMaybe<Scalars['BigInt']>;
  in?: InputMaybe<Array<Scalars['BigInt']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigInt']>;
  lte?: InputMaybe<Scalars['BigInt']>;
  neq?: InputMaybe<Scalars['BigInt']>;
};

/** Boolean expression comparing fields on type "Boolean" */
export type BooleanFilter = {
  eq?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<Scalars['Boolean']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  neq?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression comparing fields on type "Date" */
export type DateFilter = {
  eq?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<Scalars['Date']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  neq?: InputMaybe<Scalars['Date']>;
};

/** Boolean expression comparing fields on type "Datetime" */
export type DatetimeFilter = {
  eq?: InputMaybe<Scalars['Datetime']>;
  gt?: InputMaybe<Scalars['Datetime']>;
  gte?: InputMaybe<Scalars['Datetime']>;
  in?: InputMaybe<Array<Scalars['Datetime']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Datetime']>;
  lte?: InputMaybe<Scalars['Datetime']>;
  neq?: InputMaybe<Scalars['Datetime']>;
};

export enum FilterIs {
  NotNull = 'NOT_NULL',
  Null = 'NULL'
}

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  neq?: InputMaybe<Scalars['Float']>;
};

/** Boolean expression comparing fields on type "ID" */
export type IdFilter = {
  eq?: InputMaybe<Scalars['ID']>;
};

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  neq?: InputMaybe<Scalars['Int']>;
};

/** The root type for creating and mutating data */
export type Mutation = {
  __typename?: 'Mutation';
  /** Deletes zero or more records from the `assets` collection */
  deleteFromassetsCollection: AssetsDeleteResponse;
  /** Deletes zero or more records from the `contact_categories` collection */
  deleteFromcontact_categoriesCollection: Contact_CategoriesDeleteResponse;
  /** Deletes zero or more records from the `contact_templates` collection */
  deleteFromcontact_templatesCollection: Contact_TemplatesDeleteResponse;
  /** Deletes zero or more records from the `contacts` collection */
  deleteFromcontactsCollection: ContactsDeleteResponse;
  /** Deletes zero or more records from the `keywords` collection */
  deleteFromkeywordsCollection: KeywordsDeleteResponse;
  /** Deletes zero or more records from the `news` collection */
  deleteFromnewsCollection: NewsDeleteResponse;
  /** Deletes zero or more records from the `news_duplicate` collection */
  deleteFromnews_duplicateCollection: News_DuplicateDeleteResponse;
  /** Deletes zero or more records from the `news_tags` collection */
  deleteFromnews_tagsCollection: News_TagsDeleteResponse;
  /** Deletes zero or more records from the `seos` collection */
  deleteFromseosCollection: SeosDeleteResponse;
  /** Deletes zero or more records from the `staff_categories` collection */
  deleteFromstaff_categoriesCollection: Staff_CategoriesDeleteResponse;
  /** Deletes zero or more records from the `staffs` collection */
  deleteFromstaffsCollection: StaffsDeleteResponse;
  /** Deletes zero or more records from the `tags` collection */
  deleteFromtagsCollection: TagsDeleteResponse;
  /** Adds one or more `assets` records to the collection */
  insertIntoassetsCollection?: Maybe<AssetsInsertResponse>;
  /** Adds one or more `contact_categories` records to the collection */
  insertIntocontact_categoriesCollection?: Maybe<Contact_CategoriesInsertResponse>;
  /** Adds one or more `contact_templates` records to the collection */
  insertIntocontact_templatesCollection?: Maybe<Contact_TemplatesInsertResponse>;
  /** Adds one or more `contacts` records to the collection */
  insertIntocontactsCollection?: Maybe<ContactsInsertResponse>;
  /** Adds one or more `keywords` records to the collection */
  insertIntokeywordsCollection?: Maybe<KeywordsInsertResponse>;
  /** Adds one or more `news` records to the collection */
  insertIntonewsCollection?: Maybe<NewsInsertResponse>;
  /** Adds one or more `news_duplicate` records to the collection */
  insertIntonews_duplicateCollection?: Maybe<News_DuplicateInsertResponse>;
  /** Adds one or more `news_tags` records to the collection */
  insertIntonews_tagsCollection?: Maybe<News_TagsInsertResponse>;
  /** Adds one or more `seos` records to the collection */
  insertIntoseosCollection?: Maybe<SeosInsertResponse>;
  /** Adds one or more `staff_categories` records to the collection */
  insertIntostaff_categoriesCollection?: Maybe<Staff_CategoriesInsertResponse>;
  /** Adds one or more `staffs` records to the collection */
  insertIntostaffsCollection?: Maybe<StaffsInsertResponse>;
  /** Adds one or more `tags` records to the collection */
  insertIntotagsCollection?: Maybe<TagsInsertResponse>;
  /** Updates zero or more records in the `assets` collection */
  updateassetsCollection: AssetsUpdateResponse;
  /** Updates zero or more records in the `contact_categories` collection */
  updatecontact_categoriesCollection: Contact_CategoriesUpdateResponse;
  /** Updates zero or more records in the `contact_templates` collection */
  updatecontact_templatesCollection: Contact_TemplatesUpdateResponse;
  /** Updates zero or more records in the `contacts` collection */
  updatecontactsCollection: ContactsUpdateResponse;
  /** Updates zero or more records in the `keywords` collection */
  updatekeywordsCollection: KeywordsUpdateResponse;
  /** Updates zero or more records in the `news` collection */
  updatenewsCollection: NewsUpdateResponse;
  /** Updates zero or more records in the `news_duplicate` collection */
  updatenews_duplicateCollection: News_DuplicateUpdateResponse;
  /** Updates zero or more records in the `news_tags` collection */
  updatenews_tagsCollection: News_TagsUpdateResponse;
  /** Updates zero or more records in the `seos` collection */
  updateseosCollection: SeosUpdateResponse;
  /** Updates zero or more records in the `staff_categories` collection */
  updatestaff_categoriesCollection: Staff_CategoriesUpdateResponse;
  /** Updates zero or more records in the `staffs` collection */
  updatestaffsCollection: StaffsUpdateResponse;
  /** Updates zero or more records in the `tags` collection */
  updatetagsCollection: TagsUpdateResponse;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromassetsCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<AssetsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromcontact_CategoriesCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<Contact_CategoriesFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromcontact_TemplatesCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<Contact_TemplatesFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromcontactsCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<ContactsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromkeywordsCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<KeywordsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromnewsCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<NewsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromnews_DuplicateCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<News_DuplicateFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromnews_TagsCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<News_TagsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromseosCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<SeosFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromstaff_CategoriesCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<Staff_CategoriesFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromstaffsCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<StaffsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromtagsCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<TagsFilter>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoassetsCollectionArgs = {
  objects: Array<AssetsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntocontact_CategoriesCollectionArgs = {
  objects: Array<Contact_CategoriesInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntocontact_TemplatesCollectionArgs = {
  objects: Array<Contact_TemplatesInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntocontactsCollectionArgs = {
  objects: Array<ContactsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntokeywordsCollectionArgs = {
  objects: Array<KeywordsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntonewsCollectionArgs = {
  objects: Array<NewsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntonews_DuplicateCollectionArgs = {
  objects: Array<News_DuplicateInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntonews_TagsCollectionArgs = {
  objects: Array<News_TagsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoseosCollectionArgs = {
  objects: Array<SeosInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntostaff_CategoriesCollectionArgs = {
  objects: Array<Staff_CategoriesInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntostaffsCollectionArgs = {
  objects: Array<StaffsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntotagsCollectionArgs = {
  objects: Array<TagsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationUpdateassetsCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<AssetsFilter>;
  set: AssetsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatecontact_CategoriesCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<Contact_CategoriesFilter>;
  set: Contact_CategoriesUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatecontact_TemplatesCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<Contact_TemplatesFilter>;
  set: Contact_TemplatesUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatecontactsCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<ContactsFilter>;
  set: ContactsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatekeywordsCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<KeywordsFilter>;
  set: KeywordsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatenewsCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<NewsFilter>;
  set: NewsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatenews_DuplicateCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<News_DuplicateFilter>;
  set: News_DuplicateUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatenews_TagsCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<News_TagsFilter>;
  set: News_TagsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateseosCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<SeosFilter>;
  set: SeosUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatestaff_CategoriesCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<Staff_CategoriesFilter>;
  set: Staff_CategoriesUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatestaffsCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<StaffsFilter>;
  set: StaffsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatetagsCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<TagsFilter>;
  set: TagsUpdateInput;
};

export type Node = {
  /** Retrieves a record by `ID` */
  nodeId: Scalars['ID'];
};

/** Defines a per-field sorting order */
export enum OrderByDirection {
  /** Ascending order, nulls first */
  AscNullsFirst = 'AscNullsFirst',
  /** Ascending order, nulls last */
  AscNullsLast = 'AscNullsLast',
  /** Descending order, nulls first */
  DescNullsFirst = 'DescNullsFirst',
  /** Descending order, nulls last */
  DescNullsLast = 'DescNullsLast'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

/** The root type for querying data */
export type Query = {
  __typename?: 'Query';
  /** A pagable collection of type `assets` */
  assetsCollection?: Maybe<AssetsConnection>;
  /** A pagable collection of type `contact_categories` */
  contact_categoriesCollection?: Maybe<Contact_CategoriesConnection>;
  /** A pagable collection of type `contact_templates` */
  contact_templatesCollection?: Maybe<Contact_TemplatesConnection>;
  /** A pagable collection of type `contacts` */
  contactsCollection?: Maybe<ContactsConnection>;
  /** A pagable collection of type `keywords` */
  keywordsCollection?: Maybe<KeywordsConnection>;
  /** A pagable collection of type `news` */
  newsCollection?: Maybe<NewsConnection>;
  /** A pagable collection of type `news_duplicate` */
  news_duplicateCollection?: Maybe<News_DuplicateConnection>;
  /** A pagable collection of type `news_tags` */
  news_tagsCollection?: Maybe<News_TagsConnection>;
  /** Retrieve a record by its `ID` */
  node?: Maybe<Node>;
  /** A pagable collection of type `seos` */
  seosCollection?: Maybe<SeosConnection>;
  /** A pagable collection of type `staff_categories` */
  staff_categoriesCollection?: Maybe<Staff_CategoriesConnection>;
  /** A pagable collection of type `staffs` */
  staffsCollection?: Maybe<StaffsConnection>;
  /** A pagable collection of type `tags` */
  tagsCollection?: Maybe<TagsConnection>;
};


/** The root type for querying data */
export type QueryAssetsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<AssetsFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AssetsOrderBy>>;
};


/** The root type for querying data */
export type QueryContact_CategoriesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<Contact_CategoriesFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Contact_CategoriesOrderBy>>;
};


/** The root type for querying data */
export type QueryContact_TemplatesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<Contact_TemplatesFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Contact_TemplatesOrderBy>>;
};


/** The root type for querying data */
export type QueryContactsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<ContactsFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ContactsOrderBy>>;
};


/** The root type for querying data */
export type QueryKeywordsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<KeywordsFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<KeywordsOrderBy>>;
};


/** The root type for querying data */
export type QueryNewsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<NewsFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<NewsOrderBy>>;
};


/** The root type for querying data */
export type QueryNews_DuplicateCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<News_DuplicateFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<News_DuplicateOrderBy>>;
};


/** The root type for querying data */
export type QueryNews_TagsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<News_TagsFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<News_TagsOrderBy>>;
};


/** The root type for querying data */
export type QueryNodeArgs = {
  nodeId: Scalars['ID'];
};


/** The root type for querying data */
export type QuerySeosCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<SeosFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<SeosOrderBy>>;
};


/** The root type for querying data */
export type QueryStaff_CategoriesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<Staff_CategoriesFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Staff_CategoriesOrderBy>>;
};


/** The root type for querying data */
export type QueryStaffsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<StaffsFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<StaffsOrderBy>>;
};


/** The root type for querying data */
export type QueryTagsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<TagsFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TagsOrderBy>>;
};

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
  eq?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
};

/** Boolean expression comparing fields on type "Time" */
export type TimeFilter = {
  eq?: InputMaybe<Scalars['Time']>;
  gt?: InputMaybe<Scalars['Time']>;
  gte?: InputMaybe<Scalars['Time']>;
  in?: InputMaybe<Array<Scalars['Time']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Time']>;
  lte?: InputMaybe<Scalars['Time']>;
  neq?: InputMaybe<Scalars['Time']>;
};

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
  eq?: InputMaybe<Scalars['UUID']>;
  in?: InputMaybe<Array<Scalars['UUID']>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Scalars['UUID']>;
};

export type Assets = Node & {
  __typename?: 'assets';
  created_at: Scalars['Datetime'];
  file_name: Scalars['String'];
  height: Scalars['Int'];
  id: Scalars['UUID'];
  mime_type: Scalars['String'];
  newsCollection?: Maybe<NewsConnection>;
  news_duplicateCollection?: Maybe<News_DuplicateConnection>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  size: Scalars['Int'];
  src: Scalars['String'];
  staffsCollection?: Maybe<StaffsConnection>;
  updated_at: Scalars['Datetime'];
  width: Scalars['Int'];
};


export type AssetsNewsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<NewsFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<NewsOrderBy>>;
};


export type AssetsNews_DuplicateCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<News_DuplicateFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<News_DuplicateOrderBy>>;
};


export type AssetsStaffsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<StaffsFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<StaffsOrderBy>>;
};

export type AssetsConnection = {
  __typename?: 'assetsConnection';
  edges: Array<AssetsEdge>;
  pageInfo: PageInfo;
};

export type AssetsDeleteResponse = {
  __typename?: 'assetsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Assets>;
};

export type AssetsEdge = {
  __typename?: 'assetsEdge';
  cursor: Scalars['String'];
  node: Assets;
};

export type AssetsFilter = {
  created_at?: InputMaybe<DatetimeFilter>;
  file_name?: InputMaybe<StringFilter>;
  height?: InputMaybe<IntFilter>;
  id?: InputMaybe<UuidFilter>;
  mime_type?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  size?: InputMaybe<IntFilter>;
  src?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
  width?: InputMaybe<IntFilter>;
};

export type AssetsInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']>;
  file_name?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['UUID']>;
  mime_type?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  src?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['Datetime']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type AssetsInsertResponse = {
  __typename?: 'assetsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Assets>;
};

export type AssetsOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  file_name?: InputMaybe<OrderByDirection>;
  height?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  mime_type?: InputMaybe<OrderByDirection>;
  size?: InputMaybe<OrderByDirection>;
  src?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
  width?: InputMaybe<OrderByDirection>;
};

export type AssetsUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']>;
  file_name?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['UUID']>;
  mime_type?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  src?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['Datetime']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type AssetsUpdateResponse = {
  __typename?: 'assetsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Assets>;
};

export type Contact_Categories = Node & {
  __typename?: 'contact_categories';
  contact_templates?: Maybe<Contact_Templates>;
  contactsCollection?: Maybe<ContactsConnection>;
  created_at: Scalars['Datetime'];
  deleted_at?: Maybe<Scalars['Datetime']>;
  description: Scalars['String'];
  id: Scalars['UUID'];
  name: Scalars['String'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  sort: Scalars['BigInt'];
  template_id?: Maybe<Scalars['UUID']>;
  updated_at: Scalars['Datetime'];
};


export type Contact_CategoriesContactsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<ContactsFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ContactsOrderBy>>;
};

export type Contact_CategoriesConnection = {
  __typename?: 'contact_categoriesConnection';
  edges: Array<Contact_CategoriesEdge>;
  pageInfo: PageInfo;
};

export type Contact_CategoriesDeleteResponse = {
  __typename?: 'contact_categoriesDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Contact_Categories>;
};

export type Contact_CategoriesEdge = {
  __typename?: 'contact_categoriesEdge';
  cursor: Scalars['String'];
  node: Contact_Categories;
};

export type Contact_CategoriesFilter = {
  created_at?: InputMaybe<DatetimeFilter>;
  deleted_at?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  sort?: InputMaybe<BigIntFilter>;
  template_id?: InputMaybe<UuidFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type Contact_CategoriesInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']>;
  deleted_at?: InputMaybe<Scalars['Datetime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  name?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['BigInt']>;
  template_id?: InputMaybe<Scalars['UUID']>;
  updated_at?: InputMaybe<Scalars['Datetime']>;
};

export type Contact_CategoriesInsertResponse = {
  __typename?: 'contact_categoriesInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Contact_Categories>;
};

export type Contact_CategoriesOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  deleted_at?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  sort?: InputMaybe<OrderByDirection>;
  template_id?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type Contact_CategoriesUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']>;
  deleted_at?: InputMaybe<Scalars['Datetime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  name?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['BigInt']>;
  template_id?: InputMaybe<Scalars['UUID']>;
  updated_at?: InputMaybe<Scalars['Datetime']>;
};

export type Contact_CategoriesUpdateResponse = {
  __typename?: 'contact_categoriesUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Contact_Categories>;
};

export type Contact_Templates = Node & {
  __typename?: 'contact_templates';
  contact_categoriesCollection?: Maybe<Contact_CategoriesConnection>;
  content: Scalars['String'];
  created_at: Scalars['Datetime'];
  description: Scalars['String'];
  id: Scalars['UUID'];
  name: Scalars['String'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  updated_at: Scalars['Datetime'];
};


export type Contact_TemplatesContact_CategoriesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<Contact_CategoriesFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Contact_CategoriesOrderBy>>;
};

export type Contact_TemplatesConnection = {
  __typename?: 'contact_templatesConnection';
  edges: Array<Contact_TemplatesEdge>;
  pageInfo: PageInfo;
};

export type Contact_TemplatesDeleteResponse = {
  __typename?: 'contact_templatesDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Contact_Templates>;
};

export type Contact_TemplatesEdge = {
  __typename?: 'contact_templatesEdge';
  cursor: Scalars['String'];
  node: Contact_Templates;
};

export type Contact_TemplatesFilter = {
  content?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type Contact_TemplatesInsertInput = {
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['Datetime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['Datetime']>;
};

export type Contact_TemplatesInsertResponse = {
  __typename?: 'contact_templatesInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Contact_Templates>;
};

export type Contact_TemplatesOrderBy = {
  content?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type Contact_TemplatesUpdateInput = {
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['Datetime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['Datetime']>;
};

export type Contact_TemplatesUpdateResponse = {
  __typename?: 'contact_templatesUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Contact_Templates>;
};

export type Contacts = Node & {
  __typename?: 'contacts';
  category_id?: Maybe<Scalars['UUID']>;
  closed_at?: Maybe<Scalars['Datetime']>;
  contact_categories?: Maybe<Contact_Categories>;
  content: Scalars['String'];
  created_at: Scalars['Datetime'];
  email: Scalars['String'];
  id: Scalars['UUID'];
  name: Scalars['String'];
  name_kana: Scalars['String'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  phone_number: Scalars['String'];
  updated_at: Scalars['Datetime'];
};

export type ContactsConnection = {
  __typename?: 'contactsConnection';
  edges: Array<ContactsEdge>;
  pageInfo: PageInfo;
};

export type ContactsDeleteResponse = {
  __typename?: 'contactsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Contacts>;
};

export type ContactsEdge = {
  __typename?: 'contactsEdge';
  cursor: Scalars['String'];
  node: Contacts;
};

export type ContactsFilter = {
  category_id?: InputMaybe<UuidFilter>;
  closed_at?: InputMaybe<DatetimeFilter>;
  content?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  name_kana?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  phone_number?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type ContactsInsertInput = {
  category_id?: InputMaybe<Scalars['UUID']>;
  closed_at?: InputMaybe<Scalars['Datetime']>;
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['Datetime']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  name?: InputMaybe<Scalars['String']>;
  name_kana?: InputMaybe<Scalars['String']>;
  phone_number?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['Datetime']>;
};

export type ContactsInsertResponse = {
  __typename?: 'contactsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Contacts>;
};

export type ContactsOrderBy = {
  category_id?: InputMaybe<OrderByDirection>;
  closed_at?: InputMaybe<OrderByDirection>;
  content?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  email?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  name_kana?: InputMaybe<OrderByDirection>;
  phone_number?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type ContactsUpdateInput = {
  category_id?: InputMaybe<Scalars['UUID']>;
  closed_at?: InputMaybe<Scalars['Datetime']>;
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['Datetime']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  name?: InputMaybe<Scalars['String']>;
  name_kana?: InputMaybe<Scalars['String']>;
  phone_number?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['Datetime']>;
};

export type ContactsUpdateResponse = {
  __typename?: 'contactsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Contacts>;
};

export type Keywords = Node & {
  __typename?: 'keywords';
  created_at: Scalars['Datetime'];
  deleted_at?: Maybe<Scalars['Datetime']>;
  description: Scalars['String'];
  id: Scalars['UUID'];
  keyword: Scalars['String'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  updated_at: Scalars['Datetime'];
};

export type KeywordsConnection = {
  __typename?: 'keywordsConnection';
  edges: Array<KeywordsEdge>;
  pageInfo: PageInfo;
};

export type KeywordsDeleteResponse = {
  __typename?: 'keywordsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Keywords>;
};

export type KeywordsEdge = {
  __typename?: 'keywordsEdge';
  cursor: Scalars['String'];
  node: Keywords;
};

export type KeywordsFilter = {
  created_at?: InputMaybe<DatetimeFilter>;
  deleted_at?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  keyword?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type KeywordsInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']>;
  deleted_at?: InputMaybe<Scalars['Datetime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  keyword?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['Datetime']>;
};

export type KeywordsInsertResponse = {
  __typename?: 'keywordsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Keywords>;
};

export type KeywordsOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  deleted_at?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  keyword?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type KeywordsUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']>;
  deleted_at?: InputMaybe<Scalars['Datetime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  keyword?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['Datetime']>;
};

export type KeywordsUpdateResponse = {
  __typename?: 'keywordsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Keywords>;
};

export type News = Node & {
  __typename?: 'news';
  assets?: Maybe<Assets>;
  content: Scalars['String'];
  cover_image_asset_id?: Maybe<Scalars['UUID']>;
  created_at: Scalars['Datetime'];
  deleted_at?: Maybe<Scalars['Datetime']>;
  excerpt: Scalars['String'];
  id: Scalars['UUID'];
  news_tagsCollection?: Maybe<News_TagsConnection>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  published_at?: Maybe<Scalars['Datetime']>;
  seo_id?: Maybe<Scalars['UUID']>;
  seos?: Maybe<Seos>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updated_at: Scalars['Datetime'];
};


export type NewsNews_TagsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<News_TagsFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<News_TagsOrderBy>>;
};

export type NewsConnection = {
  __typename?: 'newsConnection';
  edges: Array<NewsEdge>;
  pageInfo: PageInfo;
};

export type NewsDeleteResponse = {
  __typename?: 'newsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<News>;
};

export type NewsEdge = {
  __typename?: 'newsEdge';
  cursor: Scalars['String'];
  node: News;
};

export type NewsFilter = {
  content?: InputMaybe<StringFilter>;
  cover_image_asset_id?: InputMaybe<UuidFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  deleted_at?: InputMaybe<DatetimeFilter>;
  excerpt?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  published_at?: InputMaybe<DatetimeFilter>;
  seo_id?: InputMaybe<UuidFilter>;
  slug?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type NewsInsertInput = {
  content?: InputMaybe<Scalars['String']>;
  cover_image_asset_id?: InputMaybe<Scalars['UUID']>;
  created_at?: InputMaybe<Scalars['Datetime']>;
  deleted_at?: InputMaybe<Scalars['Datetime']>;
  excerpt?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  published_at?: InputMaybe<Scalars['Datetime']>;
  seo_id?: InputMaybe<Scalars['UUID']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['Datetime']>;
};

export type NewsInsertResponse = {
  __typename?: 'newsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<News>;
};

export type NewsOrderBy = {
  content?: InputMaybe<OrderByDirection>;
  cover_image_asset_id?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  deleted_at?: InputMaybe<OrderByDirection>;
  excerpt?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  published_at?: InputMaybe<OrderByDirection>;
  seo_id?: InputMaybe<OrderByDirection>;
  slug?: InputMaybe<OrderByDirection>;
  title?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type NewsUpdateInput = {
  content?: InputMaybe<Scalars['String']>;
  cover_image_asset_id?: InputMaybe<Scalars['UUID']>;
  created_at?: InputMaybe<Scalars['Datetime']>;
  deleted_at?: InputMaybe<Scalars['Datetime']>;
  excerpt?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  published_at?: InputMaybe<Scalars['Datetime']>;
  seo_id?: InputMaybe<Scalars['UUID']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['Datetime']>;
};

export type NewsUpdateResponse = {
  __typename?: 'newsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<News>;
};

export type News_Duplicate = Node & {
  __typename?: 'news_duplicate';
  assets?: Maybe<Assets>;
  content: Scalars['String'];
  cover_image_asset_id?: Maybe<Scalars['UUID']>;
  created_at: Scalars['Datetime'];
  deleted_at?: Maybe<Scalars['Datetime']>;
  excerpt: Scalars['String'];
  id: Scalars['UUID'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  published_at?: Maybe<Scalars['Datetime']>;
  seo_id?: Maybe<Scalars['UUID']>;
  seos?: Maybe<Seos>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updated_at: Scalars['Datetime'];
};

export type News_DuplicateConnection = {
  __typename?: 'news_duplicateConnection';
  edges: Array<News_DuplicateEdge>;
  pageInfo: PageInfo;
};

export type News_DuplicateDeleteResponse = {
  __typename?: 'news_duplicateDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<News_Duplicate>;
};

export type News_DuplicateEdge = {
  __typename?: 'news_duplicateEdge';
  cursor: Scalars['String'];
  node: News_Duplicate;
};

export type News_DuplicateFilter = {
  content?: InputMaybe<StringFilter>;
  cover_image_asset_id?: InputMaybe<UuidFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  deleted_at?: InputMaybe<DatetimeFilter>;
  excerpt?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  published_at?: InputMaybe<DatetimeFilter>;
  seo_id?: InputMaybe<UuidFilter>;
  slug?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type News_DuplicateInsertInput = {
  content?: InputMaybe<Scalars['String']>;
  cover_image_asset_id?: InputMaybe<Scalars['UUID']>;
  created_at?: InputMaybe<Scalars['Datetime']>;
  deleted_at?: InputMaybe<Scalars['Datetime']>;
  excerpt?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  published_at?: InputMaybe<Scalars['Datetime']>;
  seo_id?: InputMaybe<Scalars['UUID']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['Datetime']>;
};

export type News_DuplicateInsertResponse = {
  __typename?: 'news_duplicateInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<News_Duplicate>;
};

export type News_DuplicateOrderBy = {
  content?: InputMaybe<OrderByDirection>;
  cover_image_asset_id?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  deleted_at?: InputMaybe<OrderByDirection>;
  excerpt?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  published_at?: InputMaybe<OrderByDirection>;
  seo_id?: InputMaybe<OrderByDirection>;
  slug?: InputMaybe<OrderByDirection>;
  title?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type News_DuplicateUpdateInput = {
  content?: InputMaybe<Scalars['String']>;
  cover_image_asset_id?: InputMaybe<Scalars['UUID']>;
  created_at?: InputMaybe<Scalars['Datetime']>;
  deleted_at?: InputMaybe<Scalars['Datetime']>;
  excerpt?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  published_at?: InputMaybe<Scalars['Datetime']>;
  seo_id?: InputMaybe<Scalars['UUID']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['Datetime']>;
};

export type News_DuplicateUpdateResponse = {
  __typename?: 'news_duplicateUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<News_Duplicate>;
};

export type News_Tags = Node & {
  __typename?: 'news_tags';
  news?: Maybe<News>;
  news_id: Scalars['UUID'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  tag_id: Scalars['UUID'];
  tags?: Maybe<Tags>;
};

export type News_TagsConnection = {
  __typename?: 'news_tagsConnection';
  edges: Array<News_TagsEdge>;
  pageInfo: PageInfo;
};

export type News_TagsDeleteResponse = {
  __typename?: 'news_tagsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<News_Tags>;
};

export type News_TagsEdge = {
  __typename?: 'news_tagsEdge';
  cursor: Scalars['String'];
  node: News_Tags;
};

export type News_TagsFilter = {
  news_id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  tag_id?: InputMaybe<UuidFilter>;
};

export type News_TagsInsertInput = {
  news_id?: InputMaybe<Scalars['UUID']>;
  tag_id?: InputMaybe<Scalars['UUID']>;
};

export type News_TagsInsertResponse = {
  __typename?: 'news_tagsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<News_Tags>;
};

export type News_TagsOrderBy = {
  news_id?: InputMaybe<OrderByDirection>;
  tag_id?: InputMaybe<OrderByDirection>;
};

export type News_TagsUpdateInput = {
  news_id?: InputMaybe<Scalars['UUID']>;
  tag_id?: InputMaybe<Scalars['UUID']>;
};

export type News_TagsUpdateResponse = {
  __typename?: 'news_tagsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<News_Tags>;
};

export type Seos = Node & {
  __typename?: 'seos';
  created_at: Scalars['Datetime'];
  deleted_at?: Maybe<Scalars['Datetime']>;
  description: Scalars['String'];
  id: Scalars['UUID'];
  newsCollection?: Maybe<NewsConnection>;
  news_duplicateCollection?: Maybe<News_DuplicateConnection>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  og_image_url?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updated_at: Scalars['Datetime'];
};


export type SeosNewsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<NewsFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<NewsOrderBy>>;
};


export type SeosNews_DuplicateCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<News_DuplicateFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<News_DuplicateOrderBy>>;
};

export type SeosConnection = {
  __typename?: 'seosConnection';
  edges: Array<SeosEdge>;
  pageInfo: PageInfo;
};

export type SeosDeleteResponse = {
  __typename?: 'seosDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Seos>;
};

export type SeosEdge = {
  __typename?: 'seosEdge';
  cursor: Scalars['String'];
  node: Seos;
};

export type SeosFilter = {
  created_at?: InputMaybe<DatetimeFilter>;
  deleted_at?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  og_image_url?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type SeosInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']>;
  deleted_at?: InputMaybe<Scalars['Datetime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  og_image_url?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['Datetime']>;
};

export type SeosInsertResponse = {
  __typename?: 'seosInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Seos>;
};

export type SeosOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  deleted_at?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  og_image_url?: InputMaybe<OrderByDirection>;
  title?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type SeosUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']>;
  deleted_at?: InputMaybe<Scalars['Datetime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  og_image_url?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['Datetime']>;
};

export type SeosUpdateResponse = {
  __typename?: 'seosUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Seos>;
};

export type Staff_Categories = Node & {
  __typename?: 'staff_categories';
  created_at: Scalars['Datetime'];
  deleted_at?: Maybe<Scalars['Datetime']>;
  description: Scalars['String'];
  id: Scalars['UUID'];
  name: Scalars['String'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  sort: Scalars['Int'];
  staffsCollection?: Maybe<StaffsConnection>;
  updated_at: Scalars['Datetime'];
};


export type Staff_CategoriesStaffsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<StaffsFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<StaffsOrderBy>>;
};

export type Staff_CategoriesConnection = {
  __typename?: 'staff_categoriesConnection';
  edges: Array<Staff_CategoriesEdge>;
  pageInfo: PageInfo;
};

export type Staff_CategoriesDeleteResponse = {
  __typename?: 'staff_categoriesDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Staff_Categories>;
};

export type Staff_CategoriesEdge = {
  __typename?: 'staff_categoriesEdge';
  cursor: Scalars['String'];
  node: Staff_Categories;
};

export type Staff_CategoriesFilter = {
  created_at?: InputMaybe<DatetimeFilter>;
  deleted_at?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  sort?: InputMaybe<IntFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type Staff_CategoriesInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']>;
  deleted_at?: InputMaybe<Scalars['Datetime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  name?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['Datetime']>;
};

export type Staff_CategoriesInsertResponse = {
  __typename?: 'staff_categoriesInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Staff_Categories>;
};

export type Staff_CategoriesOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  deleted_at?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  sort?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type Staff_CategoriesUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']>;
  deleted_at?: InputMaybe<Scalars['Datetime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  name?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['Datetime']>;
};

export type Staff_CategoriesUpdateResponse = {
  __typename?: 'staff_categoriesUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Staff_Categories>;
};

export type Staffs = Node & {
  __typename?: 'staffs';
  assets?: Maybe<Assets>;
  career: Array<Maybe<Scalars['String']>>;
  category_id?: Maybe<Scalars['UUID']>;
  coaching_achievement: Array<Maybe<Scalars['String']>>;
  created_at: Scalars['Datetime'];
  deleted_at?: Maybe<Scalars['Datetime']>;
  description: Scalars['String'];
  id: Scalars['UUID'];
  license: Array<Maybe<Scalars['String']>>;
  name: Scalars['String'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  one_word: Scalars['String'];
  player_achievement: Array<Maybe<Scalars['String']>>;
  player_history: Array<Maybe<Scalars['String']>>;
  position: Scalars['String'];
  profile_image_asset_id?: Maybe<Scalars['UUID']>;
  staff_categories?: Maybe<Staff_Categories>;
  updated_at: Scalars['Datetime'];
};

export type StaffsConnection = {
  __typename?: 'staffsConnection';
  edges: Array<StaffsEdge>;
  pageInfo: PageInfo;
};

export type StaffsDeleteResponse = {
  __typename?: 'staffsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Staffs>;
};

export type StaffsEdge = {
  __typename?: 'staffsEdge';
  cursor: Scalars['String'];
  node: Staffs;
};

export type StaffsFilter = {
  category_id?: InputMaybe<UuidFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  deleted_at?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  one_word?: InputMaybe<StringFilter>;
  position?: InputMaybe<StringFilter>;
  profile_image_asset_id?: InputMaybe<UuidFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type StaffsInsertInput = {
  career?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  category_id?: InputMaybe<Scalars['UUID']>;
  coaching_achievement?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  created_at?: InputMaybe<Scalars['Datetime']>;
  deleted_at?: InputMaybe<Scalars['Datetime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  license?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  one_word?: InputMaybe<Scalars['String']>;
  player_achievement?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  player_history?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  position?: InputMaybe<Scalars['String']>;
  profile_image_asset_id?: InputMaybe<Scalars['UUID']>;
  updated_at?: InputMaybe<Scalars['Datetime']>;
};

export type StaffsInsertResponse = {
  __typename?: 'staffsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Staffs>;
};

export type StaffsOrderBy = {
  category_id?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  deleted_at?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  one_word?: InputMaybe<OrderByDirection>;
  position?: InputMaybe<OrderByDirection>;
  profile_image_asset_id?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type StaffsUpdateInput = {
  career?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  category_id?: InputMaybe<Scalars['UUID']>;
  coaching_achievement?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  created_at?: InputMaybe<Scalars['Datetime']>;
  deleted_at?: InputMaybe<Scalars['Datetime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  license?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  one_word?: InputMaybe<Scalars['String']>;
  player_achievement?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  player_history?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  position?: InputMaybe<Scalars['String']>;
  profile_image_asset_id?: InputMaybe<Scalars['UUID']>;
  updated_at?: InputMaybe<Scalars['Datetime']>;
};

export type StaffsUpdateResponse = {
  __typename?: 'staffsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Staffs>;
};

export type Tags = Node & {
  __typename?: 'tags';
  created_at: Scalars['Datetime'];
  description: Scalars['String'];
  id: Scalars['UUID'];
  news_tagsCollection?: Maybe<News_TagsConnection>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  tag: Scalars['String'];
  updated_at: Scalars['Datetime'];
};


export type TagsNews_TagsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<News_TagsFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<News_TagsOrderBy>>;
};

export type TagsConnection = {
  __typename?: 'tagsConnection';
  edges: Array<TagsEdge>;
  pageInfo: PageInfo;
};

export type TagsDeleteResponse = {
  __typename?: 'tagsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Tags>;
};

export type TagsEdge = {
  __typename?: 'tagsEdge';
  cursor: Scalars['String'];
  node: Tags;
};

export type TagsFilter = {
  created_at?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  tag?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type TagsInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  tag?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['Datetime']>;
};

export type TagsInsertResponse = {
  __typename?: 'tagsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Tags>;
};

export type TagsOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  tag?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type TagsUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  tag?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['Datetime']>;
};

export type TagsUpdateResponse = {
  __typename?: 'tagsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Tags>;
};

export type QueryNewsCollectionQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['Cursor']>;
  orderBy?: InputMaybe<Array<NewsOrderBy> | NewsOrderBy>;
  filter?: InputMaybe<NewsFilter>;
}>;


export type QueryNewsCollectionQuery = { __typename?: 'Query', newsCollection?: { __typename?: 'newsConnection', edges: Array<{ __typename?: 'newsEdge', cursor: string, node: { __typename?: 'news', title: string, id: any, slug: string, published_at?: any | null, assets?: { __typename?: 'assets', src: string, file_name: string } | null } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean, startCursor?: string | null } } | null };

export type QueryPreviewNewsCollectionQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<NewsOrderBy> | NewsOrderBy>;
  filter?: InputMaybe<NewsFilter>;
}>;


export type QueryPreviewNewsCollectionQuery = { __typename?: 'Query', newsCollection?: { __typename?: 'newsConnection', edges: Array<{ __typename?: 'newsEdge', node: { __typename?: 'news', id: any, slug: string, title: string, published_at?: any | null, assets?: { __typename?: 'assets', src: string, file_name: string } | null } }> } | null };

export type QueryNewsQueryVariables = Exact<{
  filter?: InputMaybe<NewsFilter>;
}>;


export type QueryNewsQuery = { __typename?: 'Query', newsCollection?: { __typename?: 'newsConnection', edges: Array<{ __typename?: 'newsEdge', node: { __typename?: 'news', id: any, slug: string, title: string, published_at?: any | null, content: string } }> } | null };

export type QueryStaffCategoryCollectionQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryStaffCategoryCollectionQuery = { __typename?: 'Query', staff_categoriesCollection?: { __typename?: 'staff_categoriesConnection', edges: Array<{ __typename?: 'staff_categoriesEdge', node: { __typename?: 'staff_categories', id: any, name: string } }> } | null };

export type QueryStaffCollectionQueryVariables = Exact<{
  filter?: InputMaybe<StaffsFilter>;
}>;


export type QueryStaffCollectionQuery = { __typename?: 'Query', staffsCollection?: { __typename?: 'staffsConnection', edges: Array<{ __typename?: 'staffsEdge', node: { __typename?: 'staffs', id: any, position: string, name: string, one_word: string, description: string, license: Array<string | null>, career: Array<string | null>, coaching_achievement: Array<string | null>, player_history: Array<string | null>, player_achievement: Array<string | null>, assets?: { __typename?: 'assets', src: string, file_name: string } | null } }> } | null };

export type QueryAdvisorCollectionQueryVariables = Exact<{
  filter?: InputMaybe<StaffsFilter>;
}>;


export type QueryAdvisorCollectionQuery = { __typename?: 'Query', staffsCollection?: { __typename?: 'staffsConnection', edges: Array<{ __typename?: 'staffsEdge', node: { __typename?: 'staffs', position: string, name: string, id: any, description: string, assets?: { __typename?: 'assets', src: string, file_name: string } | null } }> } | null };


export const QueryNewsCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"QueryNewsCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Cursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"newsOrderBy"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"newsFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"newsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"published_at"}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"file_name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}}]}}]}}]}}]} as unknown as DocumentNode<QueryNewsCollectionQuery, QueryNewsCollectionQueryVariables>;
export const QueryPreviewNewsCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"QueryPreviewNewsCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"newsOrderBy"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"newsFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"newsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"published_at"}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"file_name"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<QueryPreviewNewsCollectionQuery, QueryPreviewNewsCollectionQueryVariables>;
export const QueryNewsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"QueryNews"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"newsFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"newsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"published_at"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]}}]}}]} as unknown as DocumentNode<QueryNewsQuery, QueryNewsQueryVariables>;
export const QueryStaffCategoryCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"QueryStaffCategoryCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"staff_categoriesCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<QueryStaffCategoryCollectionQuery, QueryStaffCategoryCollectionQueryVariables>;
export const QueryStaffCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"QueryStaffCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"staffsFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"staffsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"file_name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"one_word"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"license"}},{"kind":"Field","name":{"kind":"Name","value":"career"}},{"kind":"Field","name":{"kind":"Name","value":"coaching_achievement"}},{"kind":"Field","name":{"kind":"Name","value":"player_history"}},{"kind":"Field","name":{"kind":"Name","value":"player_achievement"}}]}}]}}]}}]}}]} as unknown as DocumentNode<QueryStaffCollectionQuery, QueryStaffCollectionQueryVariables>;
export const QueryAdvisorCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"QueryAdvisorCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"staffsFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"staffsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"file_name"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<QueryAdvisorCollectionQuery, QueryAdvisorCollectionQueryVariables>;