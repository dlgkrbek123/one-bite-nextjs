import { BookData } from "@/types/BookData";

const BE_ENDPOINT = "http://localhost:12345";

export const getAllBooks = async (): Promise<BookData[]> => {
  const url = `${BE_ENDPOINT}/book`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error();

    return response.json();
  } catch (error) {
    console.error(error);

    return [];
  }
};

export const getRandomBooks = async (): Promise<BookData[]> => {
  const url = `${BE_ENDPOINT}/book/random`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error();

    return response.json();
  } catch (error) {
    console.error(error);

    return [];
  }
};

export const searchBooks = async (keyword: string): Promise<BookData[]> => {
  const url = `${BE_ENDPOINT}/book/search?q=${keyword}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error();

    return response.json();
  } catch (error) {
    console.error(error);

    return [];
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
