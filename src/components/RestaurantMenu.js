import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API_URL} from "../utils/constants"
const RestaurantMenu = () => {
  const [menuData, setMenuData] = useState(null);
  const [error, setError] = useState("");

  const {resId } = useParams();

  console.log("Restaurant ID:", resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      setError("");
      const data = await fetch(
        MENU_API_URL
      );

      const json = await data.json();
      console.log(json);
      const { name, cuisines, costForTwo} = json.data.cards[2].card.card.info;
      setMenuData({ name, cuisines, costForTwo });
    } catch (err) {
      setError(err.message || "Unable to fetch menu data");
    }
  };

  return (
    <div className="menu">
      <h1>{menuData?.name}</h1>
      <h3>{menuData?.cuisines?.join(", ")}</h3>
      <ul>
        <li>Biryani</li>
        <li>Pizza</li>
        <li>Burger</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
