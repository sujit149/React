import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
const RestaurantCard = ({ resData }) => {
    const { name, cuisines, avgRating, deliveryTime, cloudinaryImageId } = resData;
    const { loggedInUser } = useContext(UserContext);
    return (
        <div className= "res-card">
            <img 
            className="res-logo"
            alt="res-logo"
            src={CDN_URL + cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{loggedInUser}</h4>
        </div>
    )
}

// Higher order component

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="promoted-label">Promoted</label>
                <RestaurantCard {...props} />
            </div>
        )
    }}

export default RestaurantCard;