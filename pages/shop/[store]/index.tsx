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
      storeCat = (
        <div className="flex h-[calc(100vh-260px)] items-center justify-center">
          <h2 className="text-2xl font-extrabold text-red-500">not found</h2>
        </div>
      );
      break;
  }
  return <div>{storeCat}</div>;
}
