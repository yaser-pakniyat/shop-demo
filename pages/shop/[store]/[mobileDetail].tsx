import { fetchMobiles } from "@/redux/slices/mobilesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { AppDispatch, RootState } from "@/redux/store";
import Image from "next/image";
import { RiseLoader } from "react-spinners";

export default function MobileDetail() {
  const dispatch = useDispatch<AppDispatch>();
  const mobiles = useSelector((state: RootState) => state.mobiles.mobiles);
  const loading = useSelector((state: RootState) => state.mobiles.pending);
  const { mobileDetail } = useRouter().query;
  const mobile = mobiles.find((m) => m.mobileName === mobileDetail);
  useEffect(() => {
    dispatch(fetchMobiles());
  }, [dispatch]);
  if (loading) return <RiseLoader />;
  if (!mobile)
    return (
      <p className="flex h-[calc(100vh-260px)] items-center justify-center">
        no mobile exist
      </p>
    );

  return (
    <div className="wrapper">
      <div className="flex flex-col items-center rounded-3xl border bg-lime-200">

      </div>
    </div>
  );
}