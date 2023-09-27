"use client";

import H2TextField from "@/components/atoms/textField/H2Text";
import apiService from "@/service/api/apiService";
import UrlService from "@/service/url/UrlService";
import { Suspense, useState } from "react";
import CartsCard from "@/components/atoms/cards/CartsCard";
import Pagination from "@/components/molecules/pagination/Pagination";

const CartLists = async ({ skip }: any) => {
  const api: any = new apiService();
  const url: any = new UrlService();
  const headers = {};
  const limit = 5;

  const { carts } = await api.get(url.endpoint.carts, headers, limit, skip);

  const getUserFullname = async (id: number) => {
    const { firstName, lastName } = await api.getById(
      url.endpoint.users,
      headers,
      id
    );
    const fullname = `${firstName} ${lastName}`;
    return fullname;
  };

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

const CartPagination = ({ handlePrev, handleNext }: any) => {
  return (
    <div className="flex justify-center pt-6">
      <Pagination prev={handlePrev} next={handleNext} />
    </div>
  );
};

const AdminCartsPage = () => {
  const [skip, setSkip] = useState(5);

  const handlePrev = () => {
    setSkip((prev) => prev - 5);
  };

  const handleNext = () => {
    setSkip((prev) => prev + 5);
  };

  console.log(`universal ${skip}`);

  return (
    <div className="p-6 ">
      <div className="pb-6">
        <H2TextField text="Carts" alignText="left" />
      </div>
      <div>
        <Suspense fallback={<p>Loading ...</p>}>
          <div className="flex flex-wrap gap-2 min-h-fit">
            <CartLists
              skip={skip}
              handlePrev={handlePrev}
              handleNext={handleNext}
            />
          </div>
        </Suspense>
        <CartPagination
          handleNext={skip <= 0 ? null : handleNext}
          handlePrev={skip <= 20 ? handlePrev : undefined}
        />
      </div>
    </div>
  );
};

export default AdminCartsPage;
