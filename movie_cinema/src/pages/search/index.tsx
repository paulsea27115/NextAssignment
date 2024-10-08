import SearchableLayout from "@/components/searchable-layout";
import React, { ReactNode, useEffect, useState } from "react";
import MovieItem from "@/components/movie-item";
import fetchMovies from "@/lib/fetch-movies";
import { useRouter } from "next/router";
import { MovieData } from "@/types";
import Head from "next/head";

export default function Page() {
  const [movies, setMovies] = useState<MovieData[]>([]);

  const router = useRouter();

  const q = router.query.q;

  const fetchSearchMovies = async () => {
    const movies = await fetchMovies(q as string);

    setMovies(movies);
  };

  useEffect(() => {
    if (q) {
      fetchSearchMovies();
    }
  }, [q]);

  return (
    <div>
      <Head>
        <title>한입씨네마 - 검색결과</title>
        <meta property="og:title" content="한입씨네마 - 검색결과" />
        <meta property="og:image" content="/thumbnail.png" />
        <meta
          property="og:description"
          content="한입씨네마에 등록된 영화들을 만나보세요."
        />
      </Head>
      {movies ? (
        movies.map((movie, idx) => <MovieItem key={movie.id} {...movie} />)
      ) : (
        <div>검색을 잘 못하셨습니다. 다시 검색해주세요</div>
      )}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
