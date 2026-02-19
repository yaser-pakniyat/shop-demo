import db from "@/public/db.json";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

interface Input {
  id: number;
  type: string;
  name: string;
  placeholder: string;
  required: boolean;
}

export default function FormSection() {
  const theme = useSelector((store: RootState) => store.global.theme);
  return (
    <div
      className={`col-span-2 transition duration-1000 ease-linear md:col-span-1 ${theme === "dark" ? "darkWrapper" : "lightWrapper"}`}
    >
      <div className="h-24 ps-3">
        <h2 className="mt-8 font-bold">Contact Us:</h2>
        <p className="my-3">
          Please complete the form below to get in touch with us.
        </p>
      </div>
      <form
        action=""
        className={`grid h-[590px] w-full gap-x-2 rounded-3xl p-4 transition duration-1000 ease-linear sm:grid-cols-1 ${theme === "dark" ? "bg-sky-800" : "bg-sky-300"}`}
      >
        {db.inputs.map((input: Input) => (
          <input
            key={input.id}
            className="mt-5 w-full rounded border-2 border-sky-400 bg-sky-100 p-2 text-black placeholder-sky-400 outline-none focus:placeholder:text-sky-200"
            type={input.type}
            name={input.name}
            placeholder={input.placeholder}
            required={input.required}
          />
        ))}
        <textarea
          name="message"
          placeholder="Your Message"
          className="mt-5 w-full resize-none rounded border-2 border-sky-400 bg-sky-100 p-2 text-black placeholder-sky-400 outline-none focus:placeholder:text-sky-200"
          rows={5}
          cols={30}
          required
        ></textarea>

        <p
          className={`text-xs transition duration-1000 ease-linear ${theme === "dark" ? "text-sky-200" : "text-sky-700"}`}
        >
          *All fields are required
        </p>
        <button
          type="submit"
          className="mt-5 cursor-pointer rounded border border-green-600 bg-green-600 p-2 font-bold hover:border-white hover:text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
