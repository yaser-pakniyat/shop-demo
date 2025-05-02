import db from "@/db.json";

interface Input {
  id: number;
  type: string;
  name: string;
  placeholder: string;
  required: boolean;
}

export default function FormSection() {
  return (
    <div className="col-span-2 md:col-span-1">
      <div className="h-24 ps-3">
        <h2 className="mt-8 font-bold">Contact Us:</h2>
        <p className="my-3">
          Please complete the form below to get in touch with us.
        </p>
      </div>
      <form
        action=""
        className="grid h-[590px] w-full gap-x-2 rounded-3xl bg-sky-300 p-4 sm:grid-cols-1"
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