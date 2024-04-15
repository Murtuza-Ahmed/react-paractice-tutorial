import Hero from "../components/Hero/Hero";
import NewCollection from "../components/NewCollection/NewCollection";
import NewLetter from "../components/NewLetter/NewLetter";
import Offers from "../components/Offers/Offers";
import Popular from "../components/Popular/Popular";

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollection />
      <NewLetter />
    </div>
  );
};

export default Shop;
