import SearchLayout from "@/components/SearchLayout";
import style from "./index.module.css";
import { ReactNode } from "react";
import BookItem from "@/components/BookItem";
import { InferGetServerSidePropsType } from "next";
import * as BookRepository from "@/lib/bookRepository";

export default function Home({
  allBooks,
  randomBooks,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {randomBooks.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {allBooks.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchLayout>{page}</SearchLayout>;
};

export const getServerSideProps = async () => {
  const [allBooks, randomBooks] = await Promise.all([
    BookRepository.getAllBooks(),
    BookRepository.getRandomBooks(),
  ]);

  return {
    props: {
      allBooks,
      randomBooks,
    },
  };
};
