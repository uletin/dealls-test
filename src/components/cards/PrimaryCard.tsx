import {
  IconCurrencyDollar,
  IconDevices,
  IconDiscount,
  IconPackages,
  IconStarFilled,
} from "@tabler/icons-react";

interface IPrimaryCards {
  title: string;
  brand: string;
  category: string;
  rating: number;
  price: number;
  stock: number;
  discount: number;
}

const PrimaryCards = ({
  title,
  brand,
  category,
  rating,
  price,
  stock,
  discount,
}: IPrimaryCards) => {
  return (
    <div className="border-2 border-gray-200 p-5 w-[20rem] rounded-md">
      <div className="flex gap-3 justify-between items-center pb-5">
        <div className="flex gap-3 items-start">
          <IconDevices />
          <div>
            <p className="text-[24px] font-medium">{title.substring(0, 8)}</p>
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
      <div className="flex flex-wrap gap-3 items-center">
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

export default PrimaryCards;
