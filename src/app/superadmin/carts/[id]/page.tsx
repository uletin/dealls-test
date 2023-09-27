"use client";

import ShoppingCartsCard from "@/components/atoms/cards/ShoppingCartsCard";
import H1TextField from "@/components/atoms/textField/H1Text";
import H2TextField from "@/components/atoms/textField/H2Text";
import apiService from "@/service/api/apiService";
import UrlService from "@/service/url/UrlService";
import { IconPacman, IconShoppingBag } from "@tabler/icons-react";
import { useParams } from "next/navigation";
import { Suspense } from "react";

const GetCartById = async ({ id }: any) => {
  const api = new apiService();
  const url = new UrlService();
  const headers = {};

  const carts = await api.getById(url.endpoint.carts, headers, id);
  const getUserId = carts.userId
  const users = await api.getById(url.endpoint.users, headers, getUserId)
  const userFullname = `${users.firstName} ${users.lastName}`

  return (
    <>
      <H1TextField text="Shopping Cart" alignText="left" />
      <div className="flex flex-row gap-5 pt-6 items-start">
        <div className="flex flex-col gap-3 w-1/2">
          {carts.products.map((cart:any, index:any) => (
            <ShoppingCartsCard key={index} productName={cart.title} price={cart.price} discount={cart.discountPercentage} qty={cart.quantity} />
          ))}
        </div>

        <div className="w-1/2 rounded-lg px-6 py-3 bg-gray-300">
          <div className="flex gap-2 items-center">
            <IconPacman size={32} />
            <H2TextField text={userFullname} alignText="left" />
          </div>
          <div className="flex flex-col items-end">
            <div className="flex flex-col gap-1 w-1/2">
              <div className="flex justify-between">
                <p>Total Products</p>
                <p>{carts.totalProducts} pcs</p>
              </div>
              <div className="flex justify-between">
                <p>Total Quantity</p>
                <p>{carts.totalQuantity} pcs</p>
              </div>
              <div className="flex justify-between">
                <p>Total Before Discount</p>
                <p>{`$${carts.total}`}</p>
              </div>
              <div className="flex justify-between">
                <H2TextField text="Total" alignText="left" />
                <H2TextField text={`$${carts.discountedTotal}`} alignText="left" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const CartById = () => {
  const { id: getCartId } = useParams();

  return (
    <div className="p-6">
      <Suspense fallback={<>Loading ...</>}>
        <GetCartById id={getCartId} />
      </Suspense>
    </div>
  );
};

export default CartById;
