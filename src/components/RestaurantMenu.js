import { useParams } from "react-router-dom";
// import { MENU_API_URL} from "../utils/constants";
import useRestaurantMenu from "../utils/useRestrauntMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const { name, cuisines, costForTwo } = resInfo?.cards[2]?.card?.card?.info || {};

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
      <ul>
        <li>Biryani</li>
        <li>Pizza</li>
        <li>Burger</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
