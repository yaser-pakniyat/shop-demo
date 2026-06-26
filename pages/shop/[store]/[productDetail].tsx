import { fetchProducts } from "@/redux/slices/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { AppDispatch, RootState } from "@/redux/store";
import Image from "next/image";
import { RiseLoader } from "react-spinners";

export default function ProductDetail() {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.products.products);
  const loading = useSelector((state: RootState) => state.products.pending);
  const rejected = useSelector((state: RootState) => state.products.error);
  const { productDetail } = useRouter().query;
  const product = products.find((p) => p.productName === productDetail);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <div>
    </div>
  );
}
