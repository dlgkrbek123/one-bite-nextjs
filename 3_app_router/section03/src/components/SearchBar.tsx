"use client";

import { useLayoutEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import style from "@/components/searchbar.module.css";

export default function SearchBar() {
  const router = useRouter();

  const searchParams = useSearchParams();
  const q = searchParams.get("q");

  const [search, setSearch] = useState(q ?? "");

  const submitSearch = () => {
    if (search === "" || q === search) return;
    router.push(`/search?q=${search}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleClickButton = () => {
    submitSearch();
  };

  const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;

    submitSearch();
  };

  useLayoutEffect(() => {
    setSearch(q || "");
  }, [q]);

  return (
    <div className={style.searchbar_container}>
      <input
        placeholder="검색어를 입력해주세요... "
        value={search}
        onKeyDown={handleKeydown}
        onChange={handleChange}
      />
      <button onClick={handleClickButton}>검색</button>
    </div>
  );
}
