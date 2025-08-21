import { useEffect } from "react";
import MobileCard from "../mobile-card/MobileCard";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { fetchMobiles } from "@/redux/slices/mobilesSlice";
import { RiseLoader } from "react-spinners";

export default function MobilesFetch() {
  const mobiles = useSelector((store: RootState) => store.mobiles.mobiles);
  const pending = useSelector((store: RootState) => store.mobiles.pending);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchMobiles());
  }, [dispatch]);
  if (mobiles.length === 0) {
    return (
      <div className="flex h-screen items-center justify-center">
        <RiseLoader color="gray" />
      </div>
    );
  }
  if (!pending && mobiles.length === 0) {
    return <div>No Mobile exists</div>;
  }
  return (
    <div className="mx-14 grid grid-cols-12 gap-y-2 sm:gap-x-2">
      {mobiles.map((mobile) => (
        <MobileCard key={mobile.id} {...mobile} />
      ))}
    </div>
  );
}
