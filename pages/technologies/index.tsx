import Banner from "@/components/banner/banner";
import TypeWriter from "@/components/type-writer/Typewriter";

export default function Technologies() {
  return (
    <div className="pages-wrapper">
      <div className="mb-16 flex justify-center sm:text-3xl sm:font-bold">
        <h1 className="mr-2 flex items-center">
          This website has been developed with
        </h1>
        <TypeWriter />
      </div>
      <Banner />
    </div>
  );
}
