import { PropsWithChildren, useLayoutEffect, useState } from "react";
import style from "@/components/search-layout.module.css";
import { useRouter } from "next/router";

const SearchLayout = ({ children }: PropsWithChildren) => {
  const router = useRouter();

  const q = router.query.q as string;

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
    <div>
      <div className={style.searchbar_container}>
        <input
          placeholder="검색어를 입력해주세요... "
          value={search}
          onKeyDown={handleKeydown}
          onChange={handleChange}
        />
        <button onClick={handleClickButton}>검색</button>
      </div>
      {children}
    </div>
  );
};

export default SearchLayout;
