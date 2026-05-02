import {useEffect, useState } from "react";
import { MENU_API_URL} from "../utils/constants";

const useRestaurantMenu = (resId) => {
const [resInfo, setResinfo] = useState(null);
useEffect(() => {
    fetchData();
},[])

const fetchData = async () => {
    const data = await fetch(MENU_API_URL);
    // const data = await fetch("https://namastedev.com/api/v1/listRestaurantMenu/123456");
    const json = await data.json();
    console.log("json", json.data);
    setResinfo(json.data);
}
    return resInfo;
}

export default useRestaurantMenu;