import { useRouter } from "next/router";
import SearchableLayout from "@/components/searchable-layout";
import React, { ReactNode } from "react";
import movies from "@/mocks/movies.json";
import MovieItem from "@/components/movie-item";

export default function Page() {
  const router = useRouter();

  const q = String(router.query.q);

  const movieList = movies.filter((item) => item.title.includes(q));

  return (
    <div>
      {movieList ? (
        movieList.map((item) => <MovieItem key={item.id} {...item} />)
      ) : (
        <div>검색을 잘 못하셨습니다. 다시 검색해주세요</div>
      )}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
