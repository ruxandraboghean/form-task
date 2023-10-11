import { FormEvent } from "react";
import styles from "./Button.module.scss";

export const Button = ({
  text,
  handleButtonClick,
}: {
  text: string;
  handleButtonClick: (e: FormEvent) => Promise<void>;
}) => {
  return (
    <button className={styles.button} onClick={handleButtonClick}>
      {text}
    </button>
  );
};
