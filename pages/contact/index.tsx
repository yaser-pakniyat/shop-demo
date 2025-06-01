import FormSection from "@/components/contact/form-section/FormSection";
import MapSection from "@/components/contact/map-section/MapSection";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export default function Contact() {
  const theme = useSelector((store: RootState) => store.global.theme);
  return (
    <main>
      <FormSection />
      <MapSection />
    </main>
  );
}