import { FormEvent, useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { ToastContainer, toast } from "react-toastify";
import Spinner from "../Spinner";
import questions from "../../data/questions";
import url from "../../data/url";
import styles from "./Form.module.scss";
import "react-toastify/dist/ReactToastify.css";

export const Form = () => {
  const [inputValues, setInputValues] = useState<string[]>(
    new Array(questions.length).fill("")
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [formValid, setFormValid] = useState<boolean>(false);
  const [lengthError, setLengthError] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const newAudience = {
      customers: inputValues[0],
      requirements: inputValues[1],
      excluded: inputValues[2],
      positions: inputValues[3],
    };

    const submitForm = async () => {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newAudience),
        });

        if (response.ok) {
          toast("Audience successfully created!");
          setInputValues(new Array(questions.length).fill(""));
          setLoading(false);
          setFormValid(false);
          setLengthError(false);
        } else {
          console.error("Failed to create audience");
          setLoading(false);
          setFormValid(false);
          setLengthError(false);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    if (
      newAudience?.customers?.length >= 5 &&
      newAudience?.requirements?.length >= 5 &&
      newAudience?.excluded?.length >= 5 &&
      newAudience?.positions?.length >= 5
    ) {
      submitForm();
    } else {
      setFormValid(true);
      setLoading(false);
      setLengthError(true);
    }
  };

  return (
    <form className={styles.form}>
      <ToastContainer />
      <span className={styles.title}> WHAT IS YOUR AUDIENCE ?</span>
      {questions.map((q, index) => {
        return (
          <Input
            question={q.question}
            key={index}
            index={index}
            value={inputValues[index]}
            inputValues={inputValues}
            setInputValues={setInputValues}
            required={q.required}
            maxLength={q.maxLength}
          />
        );
      })}
      {!loading && <Button text="SUBMIT" handleButtonClick={handleSubmit} />}
      {loading && <Spinner color="#000" size={35} />}

      {formValid && (
        <span className={styles.error}>
          Please ensure that all fields are filled in before submitting
        </span>
      )}

      {lengthError && (
        <span className={styles.error}>
          Your answers must be a minimum of 5 letters.
        </span>
      )}
    </form>
  );
};
