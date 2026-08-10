import db from "@/public/db.json";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function StaffCard() {
  return (
    <div className="grid grid-cols-12 gap-4">
      {db.staff.map((staff) => (
        <div
          className="col-span-12 w-full rounded-2xl border-4 border-double border-lime-500 shadow-lime-700 hover:shadow-lg md:col-span-6 lg:col-span-4"
          key={staff.id}
        >
          <div className="flex w-full flex-col items-center-safe gap-y-3 p-1">
            {/* pic + name */}
            <Icon height="120" width="120" icon={staff.pic} />
            <h4 className="self-center text-xl sm:text-4xl">{staff.name}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}
