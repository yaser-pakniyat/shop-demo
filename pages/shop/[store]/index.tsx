import MobileStore from "@/components/store/mobileStore";
import TabletStore from "@/components/store/tabletStore";
import { useRouter } from "next/router";
export default function Store() {
  const router = useRouter();
  const store = router.query.store || [];
  let storeCat;
  switch (store) {
    case "mobilestore":
      storeCat = <MobileStore />;
      break;
    case "tabletstore":
      storeCat = <TabletStore />;
      break;
    default:
      storeCat = (<h2>not found</h2>);
      break;
  }
  return <div>{storeCat}</div>;
}
