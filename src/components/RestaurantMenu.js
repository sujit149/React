import { useParams } from "react-router-dom";
// import { MENU_API_URL} from "../utils/constants";
import useRestaurantMenu from "../utils/useRestrauntMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  const { name, cuisines, costForTwo } =
    resInfo?.cards[2]?.card?.card?.info || {};

  // console.log("resInfo", resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards);
  const categories =
    resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    ) || [];

  // console.log("categories====", categories);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   try {
  //     setError("");
  //     const data = await fetch(
  //       MENU_API_URL
  //     );

  //     const json = await data.json();
  //     console.log(json);
  //     const { name, cuisines, costForTwo} = json.data.cards[2].card.card.info;
  //     setMenuData({ name, cuisines, costForTwo });
  //   } catch (err) {
  //     setError(err.message || "Unable to fetch menu data");
  //   }
  // };

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines?.join(", ")}</h3>
      {/* <ul>
        <li>Biryani</li>
        <li>Pizza</li>
        <li>Burger</li>
      </ul> */}

      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title || index}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
