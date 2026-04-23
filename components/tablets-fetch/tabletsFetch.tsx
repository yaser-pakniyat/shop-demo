import { useEffect } from "react";
import TabletCard from "../tablet-card/TabletCard";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { fetchTablets } from "@/redux/slices/tabletsSlice";
import { RiseLoader } from "react-spinners";

export default function TabletsFetch() {
  const tablets = useSelector((store: RootState) => store.tablets.tablets);
  const pending = useSelector((store: RootState) => store.tablets.pending);
  const dispatch = useDispatch<AppDispatch>();
  return;
  <div></div>;
}
