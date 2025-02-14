import response_API from "../../@Types/API";
import Spinner from "../../components/spinner/Spinner";
import useGetAPI from "../../hooks/useGetAPI";
import css from "./Blogs.module.css";
export default function Blogs() {
  const { data } = useGetAPI<response_API["blogs"]>("blogs");

  return (
    <section className={css.container} id="blogs">
      <h2>BLOGS</h2>
      {data ? <Spinner className={css.spinner} /> : <h2>ha</h2>}
    </section>
  );
}
