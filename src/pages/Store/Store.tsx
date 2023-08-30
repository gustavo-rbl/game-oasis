import { Link, useLoaderData } from "react-router-dom";
import { GameTypes } from "../../types/types";
import OptimizeImg from "../../modules/OptimizeImg";

function Store() {
  const data = useLoaderData() as GameTypes[];

  return (
    <>
      {data.map((x) => (
        <div key={x.slug}>
          <h2>{x.name}</h2>
          <img src={OptimizeImg(x.background_image)} alt={x.name} />
          <Link to={x.slug}>{x.name}</Link>
        </div>
      ))}
    </>
  );
}

export default Store;
