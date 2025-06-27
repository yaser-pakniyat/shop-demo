import Marquee from "react-fast-marquee";
import db from "@/public/db.json";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Banner() {
  return (
    <div>
      <Marquee speed={160} pauseOnClick={true}>
        {db.icons.map((icon) => (
          <Icon
            key={icon.id}
            icon={icon.iconName}
            width={160}
            height={160}
            className="mx-8"
          ></Icon>
        ))}
      </Marquee>
    </div>
  );
}
