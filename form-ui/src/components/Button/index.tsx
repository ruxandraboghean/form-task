import styles from "./Button.module.scss";

export const Button = ({
  text,
  handleButtonClick,
}: {
  text: string;
  handleButtonClick: () => void;
}) => {
  return (
    <button className={styles.button} onClick={handleButtonClick}>
      {text}
    </button>
  );
};
