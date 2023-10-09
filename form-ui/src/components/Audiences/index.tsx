import { useState, useEffect } from "react";
import { Audience } from "../Audience";
import styles from "./Audiences.module.scss";
import url from "../../data/url";

export const Audiences = () => {
  const [audiences, setAudiences] = useState<Audience[]>([]);

  const fetchData = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((data) => setAudiences(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(audiences)

  return (
    <div className={styles.audiences}>
      {audiences?.map((audience: Audience) => {
        return <Audience audience={audience} key={audience._id} />;
      })}
    </div>
  );
};
