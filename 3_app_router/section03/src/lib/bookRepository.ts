import { BookData } from "@/types/BookData";
import { ReviewData } from "@/types/ReviewData";

const BE_ENDPOINT = "http://localhost:12345";

export const getAllBooks = async (): Promise<BookData[] | null> => {
  const url = `${BE_ENDPOINT}/book`;

  try {
    const response = await fetch(url, { cache: "force-cache" });
    if (!response.ok) throw new Error();

    return response.json();
  } catch (error) {
    console.error(error);

    return null;
  }
};

export const getRandomBooks = async (): Promise<BookData[] | null> => {
  const url = `${BE_ENDPOINT}/book/random`;

  try {
    const response = await fetch(url, { next: { revalidate: 5 } });
    if (!response.ok) throw new Error();

    return response.json();
  } catch (error) {
    console.error(error);

    return null;
  }
};

export const searchBooks = async (
  keyword: string,
): Promise<BookData[] | null> => {
  const url = `${BE_ENDPOINT}/book/search?q=${keyword}`;

  try {
    const response = await fetch(url, { cache: "force-cache" });
    if (!response.ok) throw new Error();

    return response.json();
  } catch (error) {
    console.error(error);

    return null;
  }
};

export const getBookData = async (bookId: number): Promise<BookData | null> => {
  const url = `${BE_ENDPOINT}/book/${bookId}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error();

    return response.json();
  } catch (error) {
    console.error(error);

    return null;
  }
};

export const getBookReviews = async (
  bookId: number,
): Promise<ReviewData[] | null> => {
  const url = `${BE_ENDPOINT}/review/book/${bookId}`;

  try {
    const response = await fetch(url, {
      cache: "force-cache",
      next: { tags: [`review-${bookId}`] },
    });
    if (!response.ok) throw new Error();

    return response.json();
  } catch (error) {
    console.error(error);

    return null;
  }
};
