"use client";

import H2TextField from "@/components/atoms/textField/H2Text";
import apiService from "@/service/api/apiService";
import UrlService from "@/service/url/UrlService";
import { Suspense } from "react";
import ProductsCard from "@/components/atoms/cards/ProductsCard";

const ProductLists = async () => {
  const getProducts: any = new apiService();
  const url: any = new UrlService();
  const headers = {};
  const limit = 10
  const skip = 10

  const { products } = await getProducts.get(url.endpoint.products, headers, limit, skip);

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

const AdminProductsPage = () => {
  return (
    <div className="pt-6">
      <div className="pb-6">
        <H2TextField text="Products" alignText="left" />
      </div>
      <div className="flex flex-wrap gap-2">
        <Suspense fallback={<p>Loading ...</p>}>
          <ProductLists />
        </Suspense>
      </div>
    </div>
  );
};

export default AdminProductsPage;
