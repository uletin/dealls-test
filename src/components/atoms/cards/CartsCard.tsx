import {
  IconCurrencyDollar,
  IconDiscount,
  IconPackages,
  IconMickeyFilled,
} from "@tabler/icons-react";
import Link from "next/link";

interface ICartCards {
  fullname: any;
  total: number;
  discountedTotal: number;
  totalProducts: number;
  totalQuantity: number;
  href: string;
}

const CartsCard = ({
  fullname,
  total,
  discountedTotal,
  totalProducts,
  totalQuantity,
  href,
}: ICartCards) => {
  return (
    <div className="flex flex-col border-2 border-gray-200 p-5 rounded-md w-[32%] hover:bg-white">
      <Link href={href}>
        <div className="flex gap-3 justify-between items-center pb-5">
          <div className="flex gap-3 items-center">
            <IconMickeyFilled />
            <div>
              <p className="text-[24px] font-medium">{fullname}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <IconCurrencyDollar />
            <p>{discountedTotal}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 justify-center mt-auto">
          <div className="flex gap-1">
            <IconCurrencyDollar />
            <div>
              <p>${total}</p>
            </div>
          </div>
          <div className="flex gap-1">
            <IconPackages />
            <p>{totalProducts} pcs</p>
          </div>
          <div className="flex gap-1">
            <IconDiscount />
            <p>{totalQuantity} qty</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CartsCard;
