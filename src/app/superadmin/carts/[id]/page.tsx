"use client";

import apiService from "@/service/api/apiService";
import UrlService from "@/service/url/UrlService";
import { useParams } from "next/navigation";

const GetCartById = async ({ id }: any) => {
  const api = new apiService();
  const url = new UrlService();
  const headers = {};

  const { carts } = await api.getById(url.endpoint.carts, headers, id);

  console.log(carts);

  return (
    <>
      <p>Cart By Id {id}</p>
    </>
  );
};

const CartById = () => {
  const { id: getCartId } = useParams();

  return <GetCartById id={getCartId} />;
};

export default CartById;
