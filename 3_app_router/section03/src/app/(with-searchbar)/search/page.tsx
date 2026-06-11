import BookItem from "@/components/BookItem";
import * as BookRepository from "@/lib/bookRepository";

export default async function Page({
  searchParams,
}: {
  searchParams: {
    q?: string;
  };
}) {
  const keyword = searchParams.q?.toString() ?? "";
  const books = await BookRepository.searchBooks(keyword);

  if (books === null) return <div>에러가 발생했습니다.</div>;

  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}
