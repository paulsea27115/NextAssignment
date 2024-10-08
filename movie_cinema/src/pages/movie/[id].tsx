import style from "@/pages/movie/[id].module.css";
import { GetServerSidePropsContext, InferGetStaticPropsType } from "next";
import fetchOneMovie from "@/lib/fetch-one-movie";
import { useRouter } from "next/router";
import Head from "next/head";

export const getStaticPaths = () => {
  return {
    paths: [{ params: { id: "533535" } }],
    fallback: true,
  };
};

export const getStaticProps = async (context: GetServerSidePropsContext) => {
  const id = context.params!.id;

  const movie = await fetchOneMovie(Number(id));

  return {
    props: {
      movie,
    },
  };
};

export default function Page({
  movie,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  if (router.isFallback) return "로딩중 입니다.";
  if (movie === null) return "문제가 발생하였습니다. 다시 시도 해주세요";
  return (
    <>
      <Head>
        <title>{movie.title}</title>
        <meta property="og:title" content={movie.title} />
        <meta property="og:image" content={movie.posterImgUrl} />
        <meta property="og:description" content={movie.description} />
      </Head>
      <div className={style.container}>
        <div
          className={style.img_container}
          style={{ backgroundImage: `url('${movie.posterImgUrl}')` }}
        >
          <img src={movie.posterImgUrl} alt="" />
        </div>
        <div className={style.content_container}>
          <div className={style.title}>{movie.title}</div>
          <div>
            {movie.releaseDate} / {movie.genres} / {movie.runtime}
          </div>
          <div>{movie.company}</div>
          <div className={style.subTitle}>{movie.subTitle}</div>
          <div>{movie.description}</div>
        </div>
      </div>
    </>
  );
}
