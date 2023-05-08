import { MainLayout } from "@/components/Layout";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { NewsDetail } from "@/features/news/components";
import client from "@/lib/apolloClient";
import { queryNews, queryNewsSlugCollection } from "@/lib/gql/news";
import {
  QueryNewsQuery,
  QueryNewsSlugCollectionQuery,
} from "@/__generated__/graphql";

interface NewsScreenProps {
  news: {
    id: string;
    slug: string;
    title: string;
    publishedAtString: string;
    content: string;
  };
}

const NewsScreen: NextPage<NewsScreenProps> = ({ news }: NewsScreenProps) => {
  return (
    <MainLayout>
      <section className="pt-64 min-h-[70vh]">
        <NewsDetail news={news} />
      </section>
    </MainLayout>
  );
};

export default NewsScreen;

// noinspection JSUnusedGlobalSymbols
export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query<QueryNewsSlugCollectionQuery>({
    query: queryNewsSlugCollection,
    variables: {
      publishedAtFilter: {
        lte: new Date().toISOString(),
      },
    },
  });

  const paths =
    data.newsCollection?.edges?.map((edge) => `/news/${edge.node.slug}`) ?? [];

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<NewsScreenProps> = async (
  context
) => {
  const { data } = await client.query<QueryNewsQuery>({
    query: queryNews,
    variables: {
      filter: {
        slug: {
          eq: context.params?.slug,
        },
        deleted_at: {
          is: "NULL",
        },
        published_at: {
          lte: new Date().toISOString(),
        },
      },
    },
  });

  const news = data.newsCollection?.edges?.[0]?.node;
  if (!news) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      news: {
        id: String(news.id),
        slug: news.slug,
        title: news.title,
        publishedAtString: news.published_at,
        content: news.content,
      },
    },
    revalidate: 30,
  };
};
