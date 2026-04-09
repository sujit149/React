import { useEffect } from "react";
const RestaurantMenu = () => {
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=78511&catalog_qa=undefined&submitAction=ENTER");
      if (!data.ok) {
        throw new Error(`HTTP error! status: ${data.status}`);
      }
      const json = await data.json();
      console.log(json);
    } catch (error) {
      console.error("Failed to fetch menu:", error);
    }
  }
  return (
    <div className="menu">
      <h1>Name of the restuarant</h1>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Pizza</li>
        <li>Burger</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
