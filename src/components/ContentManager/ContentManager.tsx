import useCartStore from "../../store/cartStore";
import { ContentManagerTypes } from "../../types/types";
import HeadingSecondary from "../HeadingSecondary/HeadingSecondary";

function ContentManager({ id, name, thumbnail, price }: ContentManagerTypes) {
  const addToCart = useCartStore((store) => store.addGame);
  const cart = useCartStore((store) => store.cart);
  const inCart = cart.some((item) => item.id === id);

  const handleAddToCart = () => {
    addToCart({
      id: id,
      name: name,
      thumbnail: thumbnail,
      price: price,
    });
  };

  return (
    <>
      <HeadingSecondary text={price === 0 ? "Free to play" : `$${price}`} />

      <button onClick={inCart ? undefined : handleAddToCart}>
        {inCart ? "Game added to cart" : "Add to cart"}
      </button>
    </>
  );
}

export default ContentManager;
