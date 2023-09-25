import {
  IconCurrencyDollar,
  IconDevices,
  IconDiscount,
  IconPackages,
  IconStarFilled,
} from "@tabler/icons-react";

interface IPrimaryCards {
  title: string;
  description: string;
  rating: number;
  price: number;
  stock: number;
  discount: number;
}

const PrimaryCards = ({
  title,
  description,
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
            <p>{description.substring(0, 15)}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <IconStarFilled />
          <div>{rating}</div>
        </div>
      </div>
      <div className="flex flex-wrap gap-6">
        <div className="flex gap-1">
          <IconCurrencyDollar />
          <div>
            <p>`${price}`</p>
          </div>
        </div>
        <div className="flex gap-1">
          <IconPackages />
          <div>`{stock} pcs`</div>
        </div>
        <div className="flex gap-1">
          <IconDiscount />
          <div>`{discount}%`</div>
        </div>
      </div>
    </div>
  );
};

export default PrimaryCards;
