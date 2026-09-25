import { RootState } from "@/redux/store";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useSelector } from "react-redux";
import db from "@/public/db.json";
import styles from "./Footer.module.css";

export default function Footer() {
  const theme = useSelector((store: RootState) => store.global.theme);
  return (
    <footer className={styles.footer}>
      {/* address & phone section + social section start */}
      <div className={styles.footerContent}>
        {/* address and phone section start */}
        <div className={styles.contactSection}>
          <address className={styles.contactInfo}>
            <div>
              <p className={styles.contactTitle}>Address:</p>
              <p>No.123</p>
              <p>example Street</p>
              <p>city, country</p>
            </div>
            <div>
              <p className={styles.contactTitle}>Inquiries:</p>
              <p>
                Email:
                <a aria-label="Email" href="mailto:">
                  example@example.com
                </a>
              </p>

              <p>
                Phone:
                <a aria-label="Tel" href="tel:">
                  +98 (21) 12345678
                </a>
              </p>
            </div>
          </address>
        </div>
        {/* address and phone section end */}

        {/* social media section start*/}
        <div className={styles.socialMedia}>
          {db.social.map((social) => (
            <div key={social.id} className="hover:scale-110">
              <a aria-label={social.name} href={social.address}>
                <Icon icon={social.icon} width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
        {/* social media section end*/}
      </div>
      {/* address & phone section + social section end */}

      {/* CopyRight section start */}
      <div
        className={`${styles.copyright} ${
          theme === "dark"
            ? "bg-gray-950 text-gray-300"
            : "bg-gray-400 text-gray-950"
        } `}
      >
        <p className="text-center text-xs">
          ©2025 companyName. All right reserved.
        </p>
      </div>
      {/* CopyRight section end */}
    </footer>
  );
}
