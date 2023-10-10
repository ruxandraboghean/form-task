import { FC, FormEvent, useState } from "react";
import { Input } from "../Input";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Form.module.scss";
import questions from "../../data/questions";
import url from "../../data/url";

export const Form = () => {
  const [inputValues, setInputValues] = useState<string[]>(
    new Array(questions.length).fill("")
  );

  const [formValid, setFormValid] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const newAudience = {
      customers: inputValues[0],
      requirements: inputValues[1],
      excluded: inputValues[2],
      positions: inputValues[3],
    };

    if (newAudience.customers) {
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
        } else {
          console.error("Failed to create audience");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      setFormValid(true);
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
          />
        );
      })}
      <button type="submit" onClick={handleSubmit} className={styles.button}>
        SUBMIT
      </button>
      {formValid && (
        <span className={styles.error}>
          Please ensure that all fields are filled in before submitting{" "}
        </span>
      )}
    </form>
  );
};
