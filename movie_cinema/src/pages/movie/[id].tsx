import { useRouter } from "next/router";
import movies from "@/mocks/movies.json";
import style from "@/pages/movie/[id].module.css";

export default function Page() {
  const router = useRouter();

  const { id } = router.query;

  const movie = movies.filter((item) => String(item.id) === id)[0];

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
