import SearchLayout from "@/components/SearchLayout";
import { ReactNode } from "react";
import BookItem from "@/components/BookItem";
import * as BookRepository from "@/lib/bookRepository";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import Head from "next/head";

export default function Search({
  books,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>한입북스 검색결과</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:title" content="한입북스 검색결과" />
        <meta
          property="og:description"
          content="한입북스에 등록된 도서들을 만나보세요"
        />
      </Head>
      <div>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </div>
    </>
  );
}

Search.getLayout = (page: ReactNode) => {
  return <SearchLayout>{page}</SearchLayout>;
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const keyword = context.query.q?.toString() ?? "";
  const books = await BookRepository.searchBooks(keyword);

  return {
    props: {
      books,
    },
  };
};
