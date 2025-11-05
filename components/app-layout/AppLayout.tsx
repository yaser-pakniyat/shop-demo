import Header from "../Header/Header";
import Footer from "../footer/Footer";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const theme = useSelector((store: RootState) => store.global.theme);
  return (
    <div
      className={`globalWrapper ${theme === "dark" ? "darkWrapper" : "lightWrapper"}`}
    >
      <Header />
      <Footer />
    </div>
  );
}
