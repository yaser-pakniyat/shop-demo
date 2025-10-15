import MobileStore from "@/components/store/mobileStore";
import TabletStore from "@/components/store/tabletStore";
import { useRouter } from "next/router";
export default function Store() {
  const router = useRouter();
  const store = router.query.store || [];
  let storeCat;
  return (
    <div></div>
  )
}
