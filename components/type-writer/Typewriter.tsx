import Typewriter from "typewriter-effect";
import db from "@/public/db.json";

export default function TypeWriter() {
  return (
    <div>
      <Typewriter
        options={{
          loop: true,
          // autoStart: true,
          // deleteSpeed: 80,
          cursor: "",
        }}
        onInit={(typewriter) => {
          db.icons.forEach((icon) => {
            typewriter
              .typeString(
                `<strong style='background-color: grey; color: white'>${icon.techName}</strong>`,
              )
              .pauseFor(2000)
              .deleteAll(100)
              .start();
          });
        }}
      />
    </div>
  );
}
