import url from "../../data/url";
import { Button } from "../Button";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Audience.module.scss";

export const Audience = ({
  audience,
  getData,
}: {
  audience: Audience;
  getData: () => void;
}) => {
  const handleDelete = async () => {
    if (audience) {
      try {
        const response = await fetch(`${url}/${audience._id}`, {
          method: "DELETE",
        });

        if (response.ok) {
          toast("Audience successfully deleted!");
        } else {
          console.error("Failed to create audience");
        }

        getData();
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <div className={styles.audience_wrapper}>
      <div className={styles.audience}>
        <div className={styles.audience_details}>
          <span className={styles.detail_header}>Customers:</span>
          <div className={styles.text}>
            <p> {audience.customers}</p>
          </div>
        </div>
        <div className={styles.audience_details}>
          <span className={styles.detail_header}>Requirements:</span>
          <div className={styles.text}>
            <p> {audience.requirements}</p>
          </div>
        </div>
        <div className={styles.audience_details}>
          <span className={styles.detail_header}>Excluded:</span>
          <div className={styles.text}>
            <p> {audience.excluded}</p>
          </div>
        </div>
        <div className={styles.audience_details}>
          <span className={styles.detail_header}>Positions:</span>
          <div className={styles.text}>
            <p> {audience.positions}</p>
          </div>
        </div>
      </div>
      <div className={styles.button}>
        <Button text="Delete" handleButtonClick={handleDelete} />
      </div>
    </div>
  );
};
