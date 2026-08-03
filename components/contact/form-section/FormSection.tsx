import db from "@/public/db.json";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import styles from "./FormSection.module.css";
import Input from "@/types/input";

export default function FormSection() {
  const theme = useSelector((store: RootState) => store.global.theme);
  return (
    <div
      className={`${styles.wrapper} ${theme === "dark" ? "darkWrapper" : "lightWrapper"}`}
    >
      <div className="h-24 ps-3">
        <h2 className="mt-8 font-bold">Contact Us:</h2>
        <p className="my-3">
          Please complete the form below to get in touch with us.
        </p>
      </div>
      <form
        action=""
        className={`${styles.form} ${theme === "dark" ? "bg-sky-800" : "bg-sky-300"}`}
      >
        {db.inputs.map((input: Input) => (
          <input
            key={input.id}
            className={styles.input}
            type={input.type}
            name={input.name}
            placeholder={input.placeholder}
            required={input.required}
          />
        ))}
        <textarea
          name="message"
          placeholder="Your Message"
          className={styles.textarea}
          rows={5}
          cols={30}
          required
        ></textarea>

        <p
          className={`${styles.requiredNote} ${theme === "dark" ? "text-sky-200" : "text-sky-700"}`}
        >
          *All fields are required
        </p>
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
}
