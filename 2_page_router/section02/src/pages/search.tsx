import SearchLayout from "@/components/SearchLayout";
import { ReactNode } from "react";
import BookItem from "@/components/BookItem";
import * as BookRepository from "@/lib/bookRepository";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";

export default function Search({
  books,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
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
