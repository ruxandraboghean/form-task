import { useState, useEffect } from "react";
import { Audience } from "../Audience";
import noData from "../../images/no-data.png";
import styles from "./Audiences.module.scss";
import fetchData from "../../data/fetchData";
import Spinner from "../Spinner";

export const Audiences = () => {
  const [audiences, setAudiences] = useState<Audience[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getData = async (withLoading?: string) => {
    withLoading && setLoading(true);
    const data = await fetchData();
    setAudiences(data);
    setLoading(false);
  };

  useEffect(() => {
    getData("loading");
  }, []);

  if (loading) return <Spinner color="#fff" size={150} />;

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
        return (
          <Audience audience={audience} key={audience._id} getData={getData} />
        );
      })}
    </div>
  );
};
