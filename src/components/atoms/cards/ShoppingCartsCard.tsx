import { IconDiscount2, IconShoppingBag } from "@tabler/icons-react";

interface IShoppingCartCard {
  productName: string;
  price: number;
  discount: number;
  qty: number;
}

const ShoppingCartsCard = ({
  productName,
  price,
  discount,
  qty,
}: IShoppingCartCard) => {
  return (
    <div className="p-3 border-2 rounded-md">
      <div className="flex gap-3 items-start">
        <IconShoppingBag size={32} />
        <div>
          <p className="text-xl font-semibold">{productName.toLowerCase()}</p>
          <p>${price}</p>
        </div>
        <div className="flex gap-1 justify-center items-center px-3 py-0.5 bg-green-300 h-auto rounded-full">
          <IconDiscount2 size={20} />
          {discount}%
        </div>
      </div>
      <div className="flex justify-end">
        <p className="text-xl font-medium">{qty} pcs</p>
      </div>
    </div>
  );
};

export default ShoppingCartsCard;
