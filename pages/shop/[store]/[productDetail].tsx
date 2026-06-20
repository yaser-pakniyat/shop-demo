import { fetchProducts } from "@/redux/slices/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { AppDispatch, RootState } from "@/redux/store";
import Image from "next/image";
import { RiseLoader } from "react-spinners";

export default function ProductDetail() {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div>

    </div>
  );
}
