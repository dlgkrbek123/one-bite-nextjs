import style from "@/app/(with-searchbar)/page.module.css";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className={style.searchbar_container}>
        sss
        {/* <input
          placeholder="검색어를 입력해주세요... "
          value={search}
          onKeyDown={handleKeydown}
          onChange={handleChange}
        /> */}
        {/* <button onClick={handleClickButton}>검색</button> */}
      </div>
      {children}
    </div>
  );
}
