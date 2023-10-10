import url from "../../data/url";
import { Button } from "../Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Audience.module.scss";

export const Audience = ({ audience }: { audience: Audience }) => {
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
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <div className={styles.audience_wrapper}>
      <div className={styles.audience}>
        <span>CUSTOMERS: {audience.customers}</span>
        <span>Requirements: {audience.requirements}</span>
        <span>Excluded: {audience.excluded}</span>
        <span>Positions: {audience.positions}</span>
      </div>
      <Button text="Delete" handleButtonClick={handleDelete} />
    </div>
  );
};
