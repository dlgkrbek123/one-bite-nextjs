import SearchLayout from "@/components/SearchLayout";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import books from "@/mock/books.json";
import BookItem from "@/components/BookItem";

export default function Search() {
  const router = useRouter();

  const { q } = router.query;

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
