"use client";

import H2TextField from "@/components/atoms/textField/H2Text";
import apiService from "@/service/api/apiService";
import UrlService from "@/service/url/UrlService";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import ProductsCard from "@/components/atoms/cards/ProductsCard";

const ResultSearchProduct = async ({ headers, param }: any) => {
  const getProducts: any = new apiService();
  const url: any = new UrlService();
  const params = param

  const { products } = await getProducts.getByParams(
    url.endpoint.searchProducts,
    headers,
    params
  );

  return (
    <>
      {products.map((product: any, index: number) => (
        <ProductsCard
          key={index}
          title={product.title}
          brand={product.brand}
          category={product.category}
          discount={product.discountPercentage}
          stock={product.stock}
          price={product.price}
          rating={product.rating}
        />
      ))}
    </>
  );
};

const ResultSearchInput = () => {

  const getParams = useSearchParams()
  const params = getParams.get("q")


  return (
    <div className="p-6">
      <div className="pb-6">
        <H2TextField text="Hasil Pencarian" alignText="left" />
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        <Suspense fallback={<p>Loading ...</p>}>
          <ResultSearchProduct param={params} />
        </Suspense>
      </div>
    </div>
  );
};

export default ResultSearchInput;
