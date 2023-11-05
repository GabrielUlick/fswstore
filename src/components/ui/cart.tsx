import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./badge";
import { useContext } from "react";
import { CartContext } from "@/providers/cart";

const Cart = () => {
  const { products } = useContext(CartContext);
  return (
    <div>
      <Badge
        className="w-fit gap-1 text-base uppercase border-2 border-primary px-3 py-1 py-[0.375rem]"
        variant="outline"
      >
        <ShoppingCartIcon size={16} />
        Catálogo
      </Badge>

      {products.map(product => <h1 key={product.id}>{product.name}</h1>)}
    </div>
  );
};

export default Cart;
