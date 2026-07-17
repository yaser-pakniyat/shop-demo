import { fetchProducts } from "@/redux/slices/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { AppDispatch, RootState } from "@/redux/store";
// import Image from "next/image";
import { RiseLoader } from "react-spinners";

export default function ProductDetail() {
  const theme = useSelector((store: RootState) => store.global.theme);
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.products.products);
  const loading = useSelector((state: RootState) => state.products.pending);
  const error = useSelector((state: RootState) => state.products.error);
  const { productDetail } = useRouter().query;
  const product = products.find((p) => p.productName === productDetail);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  if (loading) return <RiseLoader />;
  if (error) {
    return (
      <p className="flex h-[calc(100vh-260px)] items-center justify-center">
        {error}
      </p>
    );
  }

  if (!product)
    return (
      <p className="flex h-[calc(100vh-260px)] items-center justify-center">
        There is no product
      </p>
    );
  return (
    <div className="pages-wrapper">
      <div className="flex flex-col items-center rounded-3xl border bg-lime-200">
        <h1 className="my-4 text-2xl font-bold">{product.productName}</h1>
      </div>
      <img
        // src={product.address}
        src={`/shop-demo${product.address}`}
        alt={product.productName}
        className="w-64"
        width={1280}
        height={720}
      />
      <p className="mt-4 ml-24">{product.productName}</p>
    </div>
  );
}
