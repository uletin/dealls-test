import {
  IconCurrencyDollar,
  IconDevices,
  IconDiscount,
  IconPackages,
  IconStarFilled,
} from "@tabler/icons-react";

interface IProductsCards {
  title: string;
  brand: string;
  category: string;
  rating: number;
  price: number;
  stock: number;
  discount: number;
}

const ProductsCard = ({
  title,
  brand,
  category,
  rating,
  price,
  stock,
  discount,
}: IProductsCards) => {
  return (
    <div className="flex flex-col border-2 border-gray-200 p-5 rounded-md w-full lg:w-[32%] hover:bg-white ">
      <div className="flex gap-3 justify-between items-center pb-5">
        <div className="flex gap-3 items-start">
          <IconDevices />
          <div>
            <p className="text-[24px] font-medium">{title.substring(0, 11)}</p>
            <p>
              {brand} | {category}
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <IconStarFilled />
          <p>{rating}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-3 justify-center mt-auto">
        <div className="flex gap-1">
          <IconCurrencyDollar />
          <div>
            <p>${price}</p>
          </div>
        </div>
        <div className="flex gap-1">
          <IconPackages />
          <p>{stock} pcs</p>
        </div>
        <div className="flex gap-1">
          <IconDiscount />
          <p>{discount}%</p>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
