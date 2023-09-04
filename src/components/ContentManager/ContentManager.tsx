import useCartStore from "../../store/cartStore";
import { CartGameType, ContentManagerTypes } from "../../types/types";

// component
import HeadingPrimary from "../HeadingPrimary/HeadingPrimary";

// style
import globalStyle from "../../style/global/Global.module.scss";
import style from "./ContentManager.module.scss";

function ContentManager({ id, name, thumbnail, price }: ContentManagerTypes) {
  const addToCart = useCartStore((store) => store.addGame);
  const cart = useCartStore((store) => store.cart);
  const inCart = cart.some((item: CartGameType) => item.id === id);

  const handleAddToCart = () => {
    addToCart({
      id: id,
      name: name,
      thumbnail: thumbnail,
      price: price,
    });
  };

  return (
    <div className={style.content_manager}>
      <HeadingPrimary text={price === 0 ? "Free to play" : `$${price}`} />

      <button onClick={inCart ? undefined : handleAddToCart} className={globalStyle.button}>
        {inCart ? "In cart" : `+ Add to cart`}
      </button>
    </div>
  );
}

export default ContentManager;
