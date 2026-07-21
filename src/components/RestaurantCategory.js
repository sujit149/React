import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
//   console.log("category data===", data);


  const [headerClick, setHeaderClick] = useState(false);

  const handleClick = () => {
    setShowIndex();
  }
  return (
    <div>
      <div className="category">
        <div className="category-header" onClick={ handleClick }>
          <span className="category-title">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="category-arrow">↓</span>
        </div>
        { showItems && <ItemList items={data.itemCards} />}
      </div>
      {/* // {Accordion content goes here} */}
    </div>
  );
};

export default RestaurantCategory;
