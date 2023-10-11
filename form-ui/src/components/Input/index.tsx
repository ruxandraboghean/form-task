import { FC } from "react";
import styles from "./Input.module.scss";

type InputProps = {
  question: string;
  value: string;
  index: number;
  inputValues: string[];
  setInputValues: any;
  required?: boolean;
  maxLength: number;
};

export const Input: FC<InputProps> = ({
  question,
  value,
  index,
  inputValues,
  setInputValues,
  required,
  maxLength,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    const newInputValues = [...inputValues];
    newInputValues[index] = newValue;
    setInputValues(newInputValues);
  };

  return (
    <div className={styles.input_wrapper}>
      <label htmlFor="textInput" className={styles.label}>
        {question}
        {required && <span className={styles.required}> *</span>}
      </label>
      <input
        type="text"
        id="textInput"
        value={value}
        onChange={handleInputChange}
        required={required}
        maxLength={maxLength}
        minLength={5}
      />
    </div>
  );
};
