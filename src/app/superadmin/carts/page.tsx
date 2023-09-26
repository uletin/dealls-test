"use client";

import H2TextField from "@/components/atoms/textField/H2Text";
import apiService from "@/service/api/apiService";
import UrlService from "@/service/url/UrlService";
import { Suspense } from "react";
import CartsCard from "@/components/atoms/cards/CartsCard";

const CartLists = async () => {
  const getProducts: any = new apiService();
  const url: any = new UrlService();
  const headers = {};

  const { carts } = await getProducts.get(url.endpoint.carts, headers);

  return (
    <>
      {carts.map((cart: any, index: any) => (
        <CartsCard
          key={index}
          fullname={cart.userId}
          discountedTotal={cart.discountedTotal}
          total={cart.total}
          totalProducts={cart.totalProducts}
          totalQuantity={cart.totalQuantity}
          href={`/superadmin/carts/${cart.id}`}
        />
      ))}
    </>
  );
};

const AdminCartsPage = () => {
  return (
    <div className="p-6 ">
      <div className="pb-6">
        <H2TextField text="Carts" alignText="left" />
      </div>
      <div className="flex flex-wrap gap-2">
        <Suspense fallback={<p>Loading ...</p>}>
          <CartLists />
        </Suspense>
      </div>
    </div>
  );
};

export default AdminCartsPage;
