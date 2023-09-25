import H2TextField from "@/components/atoms/textField/H2Text";
import PrimaryCards from "@/components/cards/PrimaryCard";
import apiService from "@/service/api/apiService";
import UrlService from "@/service/url/UrlService";
import { Suspense } from "react";

const ProductLists = async () => {
  const getProducts: any = new apiService();
  const url: any = new UrlService();
  const headers = {};

  const { products } = await getProducts.get(url.endpoint.products, headers);

  return (
    <>
      {products?.map((product, index) => (
        <PrimaryCards
          key={index}
          title={product.title}
          description={product.description}
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
    <div className="p-6">
      <div className="pb-6">
        <H2TextField text="Products" alignText="left" />
      </div>
      <div className="flex flex-wrap justify-start gap-3">
        <Suspense fallback={<p>Loading ...</p>}>
          <ProductLists />
        </Suspense>
      </div>
    </div>
  );
};

export default AdminProductsPage;
