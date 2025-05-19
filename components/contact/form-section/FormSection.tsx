import db from "@/db.json";
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
      className={`col-span-2 transition duration-1000 ease-out md:col-span-1 ${theme === "dark" ? "darkWrapper" : "lightWrapper"}`}
    >
      <div className="h-24 ps-3">
        <h2 className="mt-8 font-bold">Contact Us:</h2>
        <p className="my-3">
          Please complete the form below to get in touch with us.
        </p>
      </div>
      <form
        action=""
        className={`grid h-[590px] w-full gap-x-2 rounded-3xl bg-sky-300 p-4 transition duration-1000 ease-out sm:grid-cols-1 ${theme === "dark" ? "bg-sky-800" : "bg-sky-100"}`}
      >
        {db.inputs.map((input: Input) => (
          <input
            className="peer mt-5 w-full rounded border-2 border-sky-400 bg-sky-100 p-2 placeholder-sky-400 outline-none"
            type={input.type}
            name={input.name}
            placeholder={input.placeholder}
            required={input.required}
          />
        ))}
        <textarea
          name="message"
          placeholder="Your Message"
          className="peer mt-5 w-full resize-none rounded border-2 border-sky-400 bg-sky-100 p-2 placeholder-sky-400 outline-none"
          rows={5}
          cols={30}
          required
        ></textarea>

        <p className="text-xs text-sky-700">*All fields are required</p>
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

// // input
// "peer w-full rounded border-2 border-sky-400 bg-sky-100 p-2 placeholder-transparent outline-none focus:ring-2 focus:ring-sky-500"
//   // span
//   "absolute left-2 top-2 text-sky-400 transition-all duration-200 transform peer-placeholder-shown:top-2 peer-placeholder-shown:text-sky-400 peer-focus:top-0 peer-focus:text-white peer-focus:text-sm",
