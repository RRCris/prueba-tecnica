import { useEffect, useState } from "react";
import { keys_routes, routes_API } from "../constants/API";

export default function <T>(key: keys_routes, initial: boolean = true) {
  const URL = routes_API[key];
  const [data, setData] = useState<null | T>(null);
  const [state, setState] = useState<"inactive" | "loading" | "error" | "success">(
    "inactive"
  );

  const asyncFunction = (url: string) => {
    return fetch(url).then((res) => res.json());
  };

  const getData = () => {
    setState("loading");
    asyncFunction(URL)
      .then((data: T) => {
        setData(data);
        setState("success");
      })
      .catch((err) => {
        setData(null);
        setState("error");
        console.log(`error al adquirir data de la API ${key}`);
        console.log("error", err);
      });
  };

  useEffect(() => {
    if (initial) getData();
  }, []);

  return {
    data,
    state,
    loading: state === "loading",
    success: state === "success",
    error: state === "error",
    inactive: state === "inactive",
    retry: getData,
  };
}
