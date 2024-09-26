import style from "@/pages/movie/[id].module.css";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import fetchOneMovie from "@/lib/fetch-one-movie";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
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
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (movie === null) {
    return "문제가 발생하였습니다. 다시 시도 해주세요";
  }
  return (
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
  );
}
