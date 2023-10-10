import { FC } from "react";
import styles from "./Input.module.scss";

type InputProps = {
  question: string;
  value: string;
  index: number;
  inputValues: string[];
  setInputValues: any;
  required?: boolean;
};

export const Input: FC<InputProps> = ({
  question,
  value,
  index,
  inputValues,
  setInputValues,
  required,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    const newInputValues = [...inputValues];
    newInputValues[index] = newValue;
    setInputValues(newInputValues);
  };

  return (
    <div className={styles.input_wrapper}>
      <label htmlFor="textInput">{question}</label>
      <input
        type="text"
        id="textInput"
        value={value}
        onChange={handleInputChange}
        required={required}
      />
    </div>
  );
};
