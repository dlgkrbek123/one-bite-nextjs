import BookItem from "@/components/BookItem";
import BookItemSkeleton from "@/components/BookItemSkeleton";
import * as BookRepository from "@/lib/bookRepository";
import { delay } from "@/utils/delay";
import { Suspense } from "react";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{
    q?: string;
  }>;
}) {
  const { q = "" } = await searchParams;

  return {
    title: `${q} : 한입북스 검색`,
    description: "한입 북스에 등록된 도서를 만나보세요",
    openGraph: {
      title: `${q} : 한입북스 검색`,
      description: "한입 북스에 등록된 도서를 만나보세요",
      images: ["/thumbnail.png"],
    },
  };
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{
    q?: string;
  }>;
}) {
  const { q = "" } = await searchParams;

  return (
    <Suspense
      key={q}
      fallback={
        <>
          <BookItemSkeleton />
          <BookItemSkeleton />
          <BookItemSkeleton />
        </>
      }
    >
      <SearchResult q={q} />
    </Suspense>
  );
}

const SearchResult = async ({ q }: { q: string }) => {
  await delay(1500);

  const books = await BookRepository.searchBooks(q);

  if (books === null) {
    return <div>에러가 발생했습니다.</div>;
  }

  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
};
