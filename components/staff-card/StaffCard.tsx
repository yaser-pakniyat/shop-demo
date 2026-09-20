import db from "@/public/db.json";
import { Icon } from "@iconify/react/dist/iconify.js";
import Staff from "../../types/staffTypes";
import styles from "./StaffCard.module.css";

export default function StaffCard() {
  return (
    <div className={styles.wrapper}>
      {db.staff.map((staff: Staff) => (
        <div className={styles.cardWrapper} key={staff.id}>
          <div className={styles.content}>
            {/* pic + name */}
            <Icon height="120" width="120" icon={staff.pic} />
            <h4 className={styles.name}>{staff.name}</h4>

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
