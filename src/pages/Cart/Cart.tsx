import HeadingPrimary from "../../components/HeadingPrimary/HeadingPrimary";
import HeadingSecondary from "../../components/HeadingSecondary/HeadingSecondary";
import OptimizeImg from "../../modules/OptimizeImg";
import useCartStore from "../../store/cartStore";

function Cart() {
  const cart = useCartStore((store) => store.cart);
  const deleteGame = useCartStore((store) => store.deleteGame);

  return cart.length > 0 ? (
    <>
      {cart.map((game) => (
        <div key={game.id}>
          <img src={OptimizeImg(game.thumbnail)} alt={game.name} />

          <HeadingSecondary text={game.name} />

          <p>{game.price}</p>

          <button onClick={() => deleteGame(game.id)}>Delete</button>
        </div>
      ))}
    </>
  ) : (
    <HeadingPrimary text="Empty" />
  );
}

export default Cart;
