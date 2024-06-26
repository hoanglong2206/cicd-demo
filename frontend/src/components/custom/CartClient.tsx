import { Undo2 } from "lucide-react";
import { Button } from "../ui/button";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { CartCheckout, CartList } from "@/components";
import { RootState } from "@/context/store/store";
import { useSelector } from "react-redux";
import { randomId } from "@/lib/utils";

const CartClient = () => {
  const navigate: NavigateFunction = useNavigate();
  const data = useSelector((state: RootState) => state.cart.cart);

  return (
    <>
      <div className="space-y-4">
        <h3 className="font-bold text-3xl">Shopping Cart</h3>
        {data.products.length === 0 ? (
          <div className="flex flex-col items-center space-y-4">
            <div className="text-2xl">Your cart is empty</div>
            <div>
              <Button
                onClick={() => navigate("/")}
                className="flex items-center gap-x-2"
              >
                <Undo2 className="w-5 h-5" />
                <span>Continue Shopping</span>
              </Button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 text-sm gap-4">
            <CartList data={data} />
            <CartCheckout data={data} randomId={randomId(8)} />
          </div>
        )}
      </div>
    </>
  );
};

export default CartClient;
