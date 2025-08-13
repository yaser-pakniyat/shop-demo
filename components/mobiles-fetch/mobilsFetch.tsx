import { useEffect } from "react";
import MobileCard from "../mobile-card/MobileCard";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { fetchMobiles } from "@/redux/slices/mobilesSlice";
import { RiseLoader } from "react-spinners";

export default function MobilesFetch() {
  const mobiles = useSelector((store: RootState) => store.mobiles.mobiles);
  return <div></div>;
}
