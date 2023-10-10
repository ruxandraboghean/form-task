import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { Audience } from "../Audience";
import url from "../../data/url";
import noData from "../../images/no-data.png";
import styles from "./Audiences.module.scss";

export const Audiences = () => {
  const [audiences, setAudiences] = useState<Audience[]>([]);

  const fetchData = async () => {
    return fetch(url)
      .then((res) => res.json())
      .then((data) => setAudiences(data));
  };

  useEffect(() => {
    fetchData();
  }, [audiences]);

  if (audiences.length === 0) {
    return (
      <div className={styles.noDataWrapper}>
        <img src={noData} alt="no data" />
      </div>
    );
  }

  return (
    <div className={styles.audiences}>
      {audiences?.map((audience: Audience) => {
        return <Audience audience={audience} key={audience._id} />;
      })}
      <ToastContainer />
    </div>
  );
};
