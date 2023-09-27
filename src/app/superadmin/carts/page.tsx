"use client";

import H2TextField from "@/components/atoms/textField/H2Text";
import apiService from "@/service/api/apiService";
import UrlService from "@/service/url/UrlService";
import { Suspense } from "react";
import CartsCard from "@/components/atoms/cards/CartsCard";

const CartLists = async () => {
  const api: any = new apiService();
  const url: any = new UrlService();
  const headers = {};
  const limit = 5
  const skip = 5

  const { carts } = await api.get(url.endpoint.carts, headers, limit, skip);

  const getUserFullname = async (id:number) => {
      const {firstName, lastName } = await api.getById(url.endpoint.users, headers, id)
      const fullname = `${firstName} ${lastName}`

      return fullname
  }

  return (
    <>
      {carts.map((cart: any, index: any) => (
        <CartsCard
          key={index}
          fullname={getUserFullname(cart.userId)}
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
