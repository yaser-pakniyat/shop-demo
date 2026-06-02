import { useEffect } from "react";
import MobileCard from "../mobile-card/MobileCard";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { fetchProducts } from "@/redux/slices/productsSlice";
import { RiseLoader } from "react-spinners";

export default function MobilesFetch() {
  const products = useSelector((store: RootState) => store.products.products);
  const pending = useSelector((store: RootState) => store.products.pending);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  if (products.length === 0) {
    return (
      <div className="flex h-screen items-center justify-center">
        <RiseLoader color="gray" />
      </div>
    );
  }
  if (!pending && products.length === 0) {
    return <div>No Mobile exists</div>;
  }
  return (
    <div className="mx-14 grid grid-cols-12 gap-y-2 sm:gap-x-2">
      {products.slice(0, 12).map((mobile) => (
        <MobileCard key={mobile.id} {...mobile} />
      ))}
    </div>
  );
}
