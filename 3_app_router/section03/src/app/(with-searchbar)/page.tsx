import BookItem from "@/components/BookItem";
import style from "./page.module.css";
import * as BookRepository from "@/lib/bookRepository";
import { delay } from "@/utils/delay";
import { Suspense } from "react";
import BookItemSkeleton from "@/components/BookItemSkeleton";

export const dynamic = "force-dynamic"; // 라우트 세그먼트

export default async function Home() {
  return (
    <div className={style.container}>
      <Suspense
        fallback={
          <>
            <BookItemSkeleton />
            <BookItemSkeleton />
            <BookItemSkeleton />
          </>
        }
      >
        <RecommendBooks />
      </Suspense>
      <Suspense
        fallback={
          <>
            <BookItemSkeleton />
            <BookItemSkeleton />
            <BookItemSkeleton />
          </>
        }
      >
        <AllBooks />
      </Suspense>
    </div>
  );
}

const RecommendBooks = async () => {
  await delay(3000);
  const randomBooks = await BookRepository.getRandomBooks();

  if (randomBooks === null) return <div>에러가 발생했습니다.</div>;

  return (
    <section>
      <h3>지금 추천하는 도서</h3>
      {randomBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </section>
  );
};

const AllBooks = async () => {
  await delay(1500);
  const allBooks = await BookRepository.getAllBooks();

  if (allBooks === null) return <div>에러가 발생했습니다.</div>;

  return (
    <section>
      <h3>등록된 모든 도서</h3>
      {allBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </section>
  );
};
