/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigInt: { input: any; output: any; }
  Cursor: { input: any; output: any; }
  Date: { input: any; output: any; }
  Datetime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Time: { input: any; output: any; }
  UUID: { input: any; output: any; }
};

/** Boolean expression comparing fields on type "BigInt" */
export type BigIntFilter = {
  eq?: InputMaybe<Scalars['BigInt']['input']>;
  gt?: InputMaybe<Scalars['BigInt']['input']>;
  gte?: InputMaybe<Scalars['BigInt']['input']>;
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigInt']['input']>;
  lte?: InputMaybe<Scalars['BigInt']['input']>;
  neq?: InputMaybe<Scalars['BigInt']['input']>;
};

/** Boolean expression comparing fields on type "Boolean" */
export type BooleanFilter = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  neq?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression comparing fields on type "Date" */
export type DateFilter = {
  eq?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<Scalars['Date']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  neq?: InputMaybe<Scalars['Date']['input']>;
};

/** Boolean expression comparing fields on type "Datetime" */
export type DatetimeFilter = {
  eq?: InputMaybe<Scalars['Datetime']['input']>;
  gt?: InputMaybe<Scalars['Datetime']['input']>;
  gte?: InputMaybe<Scalars['Datetime']['input']>;
  in?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Datetime']['input']>;
  lte?: InputMaybe<Scalars['Datetime']['input']>;
  neq?: InputMaybe<Scalars['Datetime']['input']>;
};

export enum FilterIs {
  NotNull = 'NOT_NULL',
  Null = 'NULL'
}

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  neq?: InputMaybe<Scalars['Float']['input']>;
};

/** Boolean expression comparing fields on type "ID" */
export type IdFilter = {
  eq?: InputMaybe<Scalars['ID']['input']>;
};

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
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
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<AssetsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromcontact_CategoriesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Contact_CategoriesFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromcontact_TemplatesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Contact_TemplatesFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromcontactsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ContactsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromkeywordsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<KeywordsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromnewsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<NewsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromnews_TagsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<News_TagsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromseosCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<SeosFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromstaff_CategoriesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Staff_CategoriesFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromstaffsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<StaffsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromtagsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
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
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<AssetsFilter>;
  set: AssetsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatecontact_CategoriesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Contact_CategoriesFilter>;
  set: Contact_CategoriesUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatecontact_TemplatesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Contact_TemplatesFilter>;
  set: Contact_TemplatesUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatecontactsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ContactsFilter>;
  set: ContactsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatekeywordsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<KeywordsFilter>;
  set: KeywordsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatenewsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<NewsFilter>;
  set: NewsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatenews_TagsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<News_TagsFilter>;
  set: News_TagsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateseosCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<SeosFilter>;
  set: SeosUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatestaff_CategoriesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Staff_CategoriesFilter>;
  set: Staff_CategoriesUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatestaffsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<StaffsFilter>;
  set: StaffsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatetagsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<TagsFilter>;
  set: TagsUpdateInput;
};

export type Node = {
  /** Retrieves a record by `ID` */
  nodeId: Scalars['ID']['output'];
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
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
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
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<AssetsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AssetsOrderBy>>;
};


/** The root type for querying data */
export type QueryContact_CategoriesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Contact_CategoriesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Contact_CategoriesOrderBy>>;
};


/** The root type for querying data */
export type QueryContact_TemplatesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Contact_TemplatesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Contact_TemplatesOrderBy>>;
};


/** The root type for querying data */
export type QueryContactsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ContactsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ContactsOrderBy>>;
};


/** The root type for querying data */
export type QueryKeywordsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<KeywordsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<KeywordsOrderBy>>;
};


/** The root type for querying data */
export type QueryNewsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<NewsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<NewsOrderBy>>;
};


/** The root type for querying data */
export type QueryNews_TagsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<News_TagsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<News_TagsOrderBy>>;
};


/** The root type for querying data */
export type QueryNodeArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root type for querying data */
export type QuerySeosCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<SeosFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SeosOrderBy>>;
};


/** The root type for querying data */
export type QueryStaff_CategoriesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Staff_CategoriesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Staff_CategoriesOrderBy>>;
};


/** The root type for querying data */
export type QueryStaffsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<StaffsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<StaffsOrderBy>>;
};


/** The root type for querying data */
export type QueryTagsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<TagsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TagsOrderBy>>;
};

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression comparing fields on type "Time" */
export type TimeFilter = {
  eq?: InputMaybe<Scalars['Time']['input']>;
  gt?: InputMaybe<Scalars['Time']['input']>;
  gte?: InputMaybe<Scalars['Time']['input']>;
  in?: InputMaybe<Array<Scalars['Time']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Time']['input']>;
  lte?: InputMaybe<Scalars['Time']['input']>;
  neq?: InputMaybe<Scalars['Time']['input']>;
};

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
  eq?: InputMaybe<Scalars['UUID']['input']>;
  in?: InputMaybe<Array<Scalars['UUID']['input']>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Scalars['UUID']['input']>;
};

export type Assets = Node & {
  __typename?: 'assets';
  created_at: Scalars['Datetime']['output'];
  file_name: Scalars['String']['output'];
  height: Scalars['Int']['output'];
  id: Scalars['UUID']['output'];
  mime_type: Scalars['String']['output'];
  newsCollection?: Maybe<NewsConnection>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  size: Scalars['Int']['output'];
  src: Scalars['String']['output'];
  staffsCollection?: Maybe<StaffsConnection>;
  updated_at: Scalars['Datetime']['output'];
  width: Scalars['Int']['output'];
};


export type AssetsNewsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<NewsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<NewsOrderBy>>;
};


export type AssetsStaffsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<StaffsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
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
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Assets>;
};

export type AssetsEdge = {
  __typename?: 'assetsEdge';
  cursor: Scalars['String']['output'];
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
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  file_name?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  mime_type?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  src?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type AssetsInsertResponse = {
  __typename?: 'assetsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
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
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  file_name?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  mime_type?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  src?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type AssetsUpdateResponse = {
  __typename?: 'assetsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Assets>;
};

export type Contact_Categories = Node & {
  __typename?: 'contact_categories';
  contact_templates?: Maybe<Contact_Templates>;
  contactsCollection?: Maybe<ContactsConnection>;
  created_at: Scalars['Datetime']['output'];
  deleted_at?: Maybe<Scalars['Datetime']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  sort: Scalars['BigInt']['output'];
  template_id?: Maybe<Scalars['UUID']['output']>;
  updated_at: Scalars['Datetime']['output'];
};


export type Contact_CategoriesContactsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ContactsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
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
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Contact_Categories>;
};

export type Contact_CategoriesEdge = {
  __typename?: 'contact_categoriesEdge';
  cursor: Scalars['String']['output'];
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
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  deleted_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['BigInt']['input']>;
  template_id?: InputMaybe<Scalars['UUID']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Contact_CategoriesInsertResponse = {
  __typename?: 'contact_categoriesInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
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
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  deleted_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['BigInt']['input']>;
  template_id?: InputMaybe<Scalars['UUID']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Contact_CategoriesUpdateResponse = {
  __typename?: 'contact_categoriesUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Contact_Categories>;
};

export type Contact_Templates = Node & {
  __typename?: 'contact_templates';
  contact_categoriesCollection?: Maybe<Contact_CategoriesConnection>;
  content: Scalars['String']['output'];
  created_at: Scalars['Datetime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  updated_at: Scalars['Datetime']['output'];
};


export type Contact_TemplatesContact_CategoriesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Contact_CategoriesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
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
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Contact_Templates>;
};

export type Contact_TemplatesEdge = {
  __typename?: 'contact_templatesEdge';
  cursor: Scalars['String']['output'];
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
  content?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Contact_TemplatesInsertResponse = {
  __typename?: 'contact_templatesInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
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
  content?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Contact_TemplatesUpdateResponse = {
  __typename?: 'contact_templatesUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Contact_Templates>;
};

export type Contacts = Node & {
  __typename?: 'contacts';
  category_id?: Maybe<Scalars['UUID']['output']>;
  closed_at?: Maybe<Scalars['Datetime']['output']>;
  contact_categories?: Maybe<Contact_Categories>;
  content: Scalars['String']['output'];
  created_at: Scalars['Datetime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  name_kana: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  phone_number: Scalars['String']['output'];
  updated_at: Scalars['Datetime']['output'];
};

export type ContactsConnection = {
  __typename?: 'contactsConnection';
  edges: Array<ContactsEdge>;
  pageInfo: PageInfo;
};

export type ContactsDeleteResponse = {
  __typename?: 'contactsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Contacts>;
};

export type ContactsEdge = {
  __typename?: 'contactsEdge';
  cursor: Scalars['String']['output'];
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
  category_id?: InputMaybe<Scalars['UUID']['input']>;
  closed_at?: InputMaybe<Scalars['Datetime']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_kana?: InputMaybe<Scalars['String']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type ContactsInsertResponse = {
  __typename?: 'contactsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
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
  category_id?: InputMaybe<Scalars['UUID']['input']>;
  closed_at?: InputMaybe<Scalars['Datetime']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_kana?: InputMaybe<Scalars['String']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type ContactsUpdateResponse = {
  __typename?: 'contactsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Contacts>;
};

export type Keywords = Node & {
  __typename?: 'keywords';
  created_at: Scalars['Datetime']['output'];
  deleted_at?: Maybe<Scalars['Datetime']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  keyword: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  updated_at: Scalars['Datetime']['output'];
};

export type KeywordsConnection = {
  __typename?: 'keywordsConnection';
  edges: Array<KeywordsEdge>;
  pageInfo: PageInfo;
};

export type KeywordsDeleteResponse = {
  __typename?: 'keywordsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Keywords>;
};

export type KeywordsEdge = {
  __typename?: 'keywordsEdge';
  cursor: Scalars['String']['output'];
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
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  deleted_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type KeywordsInsertResponse = {
  __typename?: 'keywordsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
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
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  deleted_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type KeywordsUpdateResponse = {
  __typename?: 'keywordsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Keywords>;
};

export type News = Node & {
  __typename?: 'news';
  assets?: Maybe<Assets>;
  content: Scalars['String']['output'];
  cover_image_asset_id?: Maybe<Scalars['UUID']['output']>;
  created_at: Scalars['Datetime']['output'];
  deleted_at?: Maybe<Scalars['Datetime']['output']>;
  excerpt: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  news_tagsCollection?: Maybe<News_TagsConnection>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  published_at?: Maybe<Scalars['Datetime']['output']>;
  seo_id?: Maybe<Scalars['UUID']['output']>;
  seos?: Maybe<Seos>;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updated_at: Scalars['Datetime']['output'];
};


export type NewsNews_TagsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<News_TagsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
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
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<News>;
};

export type NewsEdge = {
  __typename?: 'newsEdge';
  cursor: Scalars['String']['output'];
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
  content?: InputMaybe<Scalars['String']['input']>;
  cover_image_asset_id?: InputMaybe<Scalars['UUID']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  deleted_at?: InputMaybe<Scalars['Datetime']['input']>;
  excerpt?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  published_at?: InputMaybe<Scalars['Datetime']['input']>;
  seo_id?: InputMaybe<Scalars['UUID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type NewsInsertResponse = {
  __typename?: 'newsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
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
  content?: InputMaybe<Scalars['String']['input']>;
  cover_image_asset_id?: InputMaybe<Scalars['UUID']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  deleted_at?: InputMaybe<Scalars['Datetime']['input']>;
  excerpt?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  published_at?: InputMaybe<Scalars['Datetime']['input']>;
  seo_id?: InputMaybe<Scalars['UUID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type NewsUpdateResponse = {
  __typename?: 'newsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<News>;
};

export type News_Tags = Node & {
  __typename?: 'news_tags';
  news?: Maybe<News>;
  news_id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  tag_id: Scalars['UUID']['output'];
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
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<News_Tags>;
};

export type News_TagsEdge = {
  __typename?: 'news_tagsEdge';
  cursor: Scalars['String']['output'];
  node: News_Tags;
};

export type News_TagsFilter = {
  news_id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  tag_id?: InputMaybe<UuidFilter>;
};

export type News_TagsInsertInput = {
  news_id?: InputMaybe<Scalars['UUID']['input']>;
  tag_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type News_TagsInsertResponse = {
  __typename?: 'news_tagsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<News_Tags>;
};

export type News_TagsOrderBy = {
  news_id?: InputMaybe<OrderByDirection>;
  tag_id?: InputMaybe<OrderByDirection>;
};

export type News_TagsUpdateInput = {
  news_id?: InputMaybe<Scalars['UUID']['input']>;
  tag_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type News_TagsUpdateResponse = {
  __typename?: 'news_tagsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<News_Tags>;
};

export type Seos = Node & {
  __typename?: 'seos';
  created_at: Scalars['Datetime']['output'];
  deleted_at?: Maybe<Scalars['Datetime']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  newsCollection?: Maybe<NewsConnection>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  og_image_url?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updated_at: Scalars['Datetime']['output'];
};


export type SeosNewsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<NewsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<NewsOrderBy>>;
};

export type SeosConnection = {
  __typename?: 'seosConnection';
  edges: Array<SeosEdge>;
  pageInfo: PageInfo;
};

export type SeosDeleteResponse = {
  __typename?: 'seosDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Seos>;
};

export type SeosEdge = {
  __typename?: 'seosEdge';
  cursor: Scalars['String']['output'];
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
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  deleted_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  og_image_url?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type SeosInsertResponse = {
  __typename?: 'seosInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
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
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  deleted_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  og_image_url?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type SeosUpdateResponse = {
  __typename?: 'seosUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Seos>;
};

export type Staff_Categories = Node & {
  __typename?: 'staff_categories';
  created_at: Scalars['Datetime']['output'];
  deleted_at?: Maybe<Scalars['Datetime']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  sort: Scalars['Int']['output'];
  staffsCollection?: Maybe<StaffsConnection>;
  updated_at: Scalars['Datetime']['output'];
};


export type Staff_CategoriesStaffsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<StaffsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
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
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Staff_Categories>;
};

export type Staff_CategoriesEdge = {
  __typename?: 'staff_categoriesEdge';
  cursor: Scalars['String']['output'];
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
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  deleted_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Staff_CategoriesInsertResponse = {
  __typename?: 'staff_categoriesInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
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
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  deleted_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Staff_CategoriesUpdateResponse = {
  __typename?: 'staff_categoriesUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Staff_Categories>;
};

export type Staffs = Node & {
  __typename?: 'staffs';
  assets?: Maybe<Assets>;
  career: Array<Maybe<Scalars['String']['output']>>;
  category_id?: Maybe<Scalars['UUID']['output']>;
  coaching_achievement: Array<Maybe<Scalars['String']['output']>>;
  created_at: Scalars['Datetime']['output'];
  deleted_at?: Maybe<Scalars['Datetime']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  license: Array<Maybe<Scalars['String']['output']>>;
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  one_word: Scalars['String']['output'];
  player_achievement: Array<Maybe<Scalars['String']['output']>>;
  player_history: Array<Maybe<Scalars['String']['output']>>;
  position: Scalars['String']['output'];
  profile_image_asset_id?: Maybe<Scalars['UUID']['output']>;
  staff_categories?: Maybe<Staff_Categories>;
  updated_at: Scalars['Datetime']['output'];
};

export type StaffsConnection = {
  __typename?: 'staffsConnection';
  edges: Array<StaffsEdge>;
  pageInfo: PageInfo;
};

export type StaffsDeleteResponse = {
  __typename?: 'staffsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Staffs>;
};

export type StaffsEdge = {
  __typename?: 'staffsEdge';
  cursor: Scalars['String']['output'];
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
  career?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  category_id?: InputMaybe<Scalars['UUID']['input']>;
  coaching_achievement?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  deleted_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  license?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  one_word?: InputMaybe<Scalars['String']['input']>;
  player_achievement?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  player_history?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  position?: InputMaybe<Scalars['String']['input']>;
  profile_image_asset_id?: InputMaybe<Scalars['UUID']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type StaffsInsertResponse = {
  __typename?: 'staffsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
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
  career?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  category_id?: InputMaybe<Scalars['UUID']['input']>;
  coaching_achievement?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  deleted_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  license?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  one_word?: InputMaybe<Scalars['String']['input']>;
  player_achievement?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  player_history?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  position?: InputMaybe<Scalars['String']['input']>;
  profile_image_asset_id?: InputMaybe<Scalars['UUID']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type StaffsUpdateResponse = {
  __typename?: 'staffsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Staffs>;
};

export type Tags = Node & {
  __typename?: 'tags';
  created_at: Scalars['Datetime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  news_tagsCollection?: Maybe<News_TagsConnection>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  tag: Scalars['String']['output'];
  updated_at: Scalars['Datetime']['output'];
};


export type TagsNews_TagsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<News_TagsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
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
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Tags>;
};

export type TagsEdge = {
  __typename?: 'tagsEdge';
  cursor: Scalars['String']['output'];
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
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type TagsInsertResponse = {
  __typename?: 'tagsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
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
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type TagsUpdateResponse = {
  __typename?: 'tagsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Tags>;
};

export type QueryContactCategoriesCollectionQueryVariables = Exact<{
  orderBy?: InputMaybe<Array<Contact_CategoriesOrderBy> | Contact_CategoriesOrderBy>;
}>;


export type QueryContactCategoriesCollectionQuery = { __typename?: 'Query', contact_categoriesCollection?: { __typename?: 'contact_categoriesConnection', edges: Array<{ __typename?: 'contact_categoriesEdge', node: { __typename?: 'contact_categories', name: string, id: any, contact_templates?: { __typename?: 'contact_templates', content: string } | null } }> } | null };


export const QueryContactCategoriesCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"QueryContactCategoriesCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"contact_categoriesOrderBy"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contact_categoriesCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contact_templates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<QueryContactCategoriesCollectionQuery, QueryContactCategoriesCollectionQueryVariables>;