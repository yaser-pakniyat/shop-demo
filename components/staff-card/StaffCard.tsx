import db from "@/public/db.json";
import { Icon } from "@iconify/react/dist/iconify.js";
import Staff from "../../types/staffTypes";

export default function StaffCard() {
  return (
    <div className="grid grid-cols-12 gap-4">
      {db.staff.map((staff: Staff) => (
        <div
          className="col-span-12 w-full rounded-2xl border-4 border-double border-lime-500 shadow-lime-700 hover:shadow-lg md:col-span-6 lg:col-span-4"
          key={staff.id}
        >
          <div className="flex w-full flex-col items-center-safe gap-y-3 p-1">
            {/* pic + name */}
            <Icon height="120" width="120" icon={staff.pic} />
            <h4 className="self-center text-xl sm:text-4xl">{staff.name}</h4>

            {/* title icon + title */}
            <div className="flex items-center">
              <Icon
                icon="tabler:briefcase-filled"
                height="20"
                style={{
                  color: "#991b2e",
                  marginRight: "6px",
                  marginTop: "2px",
                }}
              />
              <p>{staff.job_title}</p>
            </div>

            {/*email icon + email address */}
            <div className="flex items-center">
              <Icon
                icon="clarity:email-line"
                height="20"
                style={{
                  color: "blueviolet",
                  marginRight: "6px",
                  marginTop: "2px",
                }}
              />
              <a href={`mailto:${staff.email}`} className="text-sm">
                {staff.email}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
