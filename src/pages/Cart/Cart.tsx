import { useMemo } from "react";
import { Link } from "react-router-dom";
import OptimizeImg from "../../modules/OptimizeImg";
import useCartStore from "../../store/cartStore";
import { FaX } from "react-icons/fa6";
import { CartGameType } from "../../types/types";

// style
import style from "./Cart.module.scss";
import globalStyle from "../../style/global/Global.module.scss";
import HeadingPrimary from "../../components/HeadingPrimary/HeadingPrimary";

function Cart() {
  const cart = useCartStore((store) => store.cart);
  const deleteGame = useCartStore((store) => store.deleteGame);

  const total = useMemo(() => {
    let total = 0;

    cart.forEach((el: CartGameType) => (total += el.price));

    return total;
  }, [cart]);

  return (
    <div className={`${style.cart} ${globalStyle.fadeIn}`}>
      {cart.length > 0 ? (
        <div className={style.cart_items}>
          <div className={style.cards}>
            {cart.map((game) => (
              <div key={game.id} className={style.card}>
                <img
                  src={OptimizeImg(game.thumbnail)}
                  alt={game.name}
                  className={style.card_image}
                />

                <div>
                  <p className={style.card_name}>{game.name}</p>

                  <p>{game.price === 0 ? "Free to play" : `$${game.price}`}</p>
                </div>

                <button onClick={() => deleteGame(game.id)} className={globalStyle.button}>
                  <FaX />
                </button>
              </div>
            ))}
          </div>

          <div className={style.checkout}>
            <HeadingPrimary text="Order Summary" />

            <hr />

            <div className={style.checkout_flex_space_between}>
              <p>Subtotal:</p>
              <p>${total.toFixed(2)}</p>
            </div>

            <div className={style.checkout_flex_space_between}>
              <p>Tax:</p>
              <p>TBA</p>
            </div>

            <div className={style.checkout_flex_space_between}>
              <p>Rewards:</p>
              <p>TBA</p>
            </div>

            <button className={`${globalStyle.button} ${style.checkout_button}`}>Checkout</button>
          </div>
        </div>
      ) : (
        <div className={globalStyle.text_center}>
          <p className={style.cart_empty_msg}>
            There&#39;s nothing in your shopping cart, but the possibilities are endless!
          </p>
          <Link to=".." relative="path" className={globalStyle.button}>
            Start Shopping
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
