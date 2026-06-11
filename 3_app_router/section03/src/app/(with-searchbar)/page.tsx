import BookItem from "@/components/BookItem";
import style from "./page.module.css";
import books from "@/mock/books.json";
import * as BookRepository from "@/lib/bookRepository";

export default async function Home() {
  return (
    <div className={style.container}>
      <RecommendBooks />
      <AllBooks />
    </div>
  );
}

const RecommendBooks = async () => {
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
