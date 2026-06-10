import style from "@/app/(with-searchbar)/layout.module.css";
import SearchBar from "@/components/SearchBar";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <SearchBar />
      {children}
    </div>
  );
}
