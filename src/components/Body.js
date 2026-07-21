import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext"

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [searchListOfRestaurant, setSearchListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const IsPromoted = true;
  const {setUserName} = useContext(UserContext);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

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

  const onlineStatus = useOnlinestatus();

  if (onlineStatus === false) 
    return (
    <h1>You are offline</h1>  
    )
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

        {/* <div className="input-box">
          <label>Username : </label>
          <input
            type="text"
            className="input-box"
            value={searchText}
            onChange={(e) => {
              setUserName = e.target.value;
            }}
          />
        </div> */}
      </div>
      
      <div className="res-container">
        {searchListOfRestaurant.map((restaurant) => (
          <Link to={`/restaurant/${restaurant.info.id}`} key={restaurant.info.id}>
            {IsPromoted ? <RestaurantCardPromoted resData={restaurant.info} /> : <RestaurantCard resData={restaurant.info} />}
          </Link>
        ))}
        {/* <RestaurantCard/> */}
      </div>
    </div>
  );
};

export default Body;
