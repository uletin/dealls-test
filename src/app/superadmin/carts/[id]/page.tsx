"use client";

import H2TextField from "@/components/atoms/textField/H2Text";
import apiService from "@/service/api/apiService";
import UrlService from "@/service/url/UrlService";
import { useParams } from "next/navigation";
import { Suspense } from "react";

const GetCartById = async ({ id }: any) => {
  const api = new apiService();
  const url = new UrlService();
  const headers = {};

  const carts = await api.getById(url.endpoint.carts, headers, id);

  console.log(carts);

  return (
    <>
      <H2TextField text={`Cart ${carts.id}`} alignText="left" />
      <div>
        <p className="pb-6">Detail</p>
        <div className="flex gap-5">
          <p>User : {carts.userId}</p>
          <p>Total Belanja : ${carts.total}</p>
          <p>Total Bayar : ${carts.discountedTotal} </p>
          <p>Total Products : {carts.totalProducts}</p>
          <p>Total Quantity : {carts.totalQuantity}</p>
        </div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Qty
                </th>
                <th scope="col" className="px-6 py-3">
                  Total
                </th>
                <th scope="col" className="px-6 py-3">
                  Discount Percentage
                </th>
                <th scope="col" className="px-6 py-3">
                  Discount Price
                </th>
              </tr>
            </thead>
            <tbody>
              {carts?.products.map((product: any, index: any) => (
                <>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {product.title}
                    </th>
                    <td className="px-6 py-4">{product.price}</td>
                    <td className="px-6 py-4">{product.quantity}</td>
                    <td className="px-6 py-4">{product.total}</td>
                    <td className="px-6 py-4">{product.discountPercentage}</td>
                    <td className="px-6 py-4">{product.discountedPrice}</td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
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
