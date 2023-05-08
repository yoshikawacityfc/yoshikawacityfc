import { MainLayout } from "@/components/Layout";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { NewsDetail } from "@/features/news/components";
import client from "@/lib/apolloClient";
import { queryNewsSlugCollection } from "@/lib/gql/news";
import { QueryNewsSlugCollectionQuery } from "@/__generated__/graphql";

interface NewsScreenProps {
  slug: string;
}

const NewsScreen: NextPage<NewsScreenProps> = ({ slug }: NewsScreenProps) => {
  return (
    <MainLayout>
      <section className="pt-64 min-h-[70vh]">
        <NewsDetail slug={slug} />
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
  const slug = context.params?.slug;
  return {
    props: {
      slug: typeof slug === "string" ? slug : "",
    },
    revalidate: 30,
  };
};
