import response_API, { Blog } from "../../@Types/API";
import Image from "../../components/image/Image";
import Spinner from "../../components/spinner/Spinner";
import useGetAPI from "../../hooks/useGetAPI";
import css from "./Blogs.module.css";
export default function Blogs() {
  const { data } = useGetAPI<response_API["blogs"]>("blogs");

  return (
    <section className={css.container} id="blogs">
      <h2>BLOGS</h2>
      {data ? (
        <div className={css.containerCards}>
          {data.map((blog, index) => (
            <CardBlog data={blog} main={index === 0} key={blog.id} />
          ))}
        </div>
      ) : (
        <Spinner className={css.spinner} />
      )}
    </section>
  );
}

function CardBlog({ data, main }: { data: Blog; main?: boolean }) {
  if (main)
    return (
      <div className={css.containerMainCard}>
        <Image width={350} height={350} src={data.image_cover} />
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <a href={data.url_front}>LEER MAS</a>
      </div>
    );
  return (
    <div className={css.containerCard}>
      <Image src={data.image_cover} />
      <h3>{data.title}</h3>
      <a href={data.url_front}>LEER MAS</a>
    </div>
  );
}
