import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [searchListOfRestaurant, setSearchListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await res.json();
    console.log(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants,
    );
    setListOfRestaurants(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants,
    );
    setSearchListOfRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
  };
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              (setSearchText(e.target.value), console.log(searchText));
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const searchList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()),
              );
              setSearchListOfRestaurant(searchList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (rest) => rest.avgRating > 4,
            );
            console.log(filteredList);
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {searchListOfRestaurant.map((restaurant) => (
          <Link to={`/restaurant/${restaurant.info.id}`} key={restaurant.info.id}>
            <RestaurantCard resData={restaurant.info} />
          </Link>
        ))}
        {/* <RestaurantCard/> */}
      </div>
    </div>
  );
};

export default Body;
