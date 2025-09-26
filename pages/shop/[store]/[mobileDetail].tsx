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
  return (
    <div>

    </div>
  )
}