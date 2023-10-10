import { RingLoader } from "react-spinners";
import styles from "./Spinner.module.scss";

const Spinner = ({ color, size }: { color: string; size: number }) => {
  return (
    <div className={`sweet-loading ${styles.spinner}`}>
      <RingLoader size={size} color={color} loading={true} />
    </div>
  );
};

export default Spinner;
